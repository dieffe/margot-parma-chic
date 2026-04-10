import os
from datetime import datetime, timezone
from xml.sax.saxutils import escape

from flask import Flask, Response, render_template, request, url_for

app = Flask(__name__)


@app.context_processor
def inject_globals():
    return {
        "now": datetime.now(),
        "nav_items": [
            ("Home", "home"),
            ("Galleria", "galleria"),
            ("Eventi", "eventi"),
            ("Esperienze", "esperienze"),
            ("Informazioni Utili", "informazioni_utili"),
            ("Partner", "partner"),
            ("Contatti", "contatti"),
        ],
    }


@app.template_global()
def absolute_static(filename: str) -> str:
    """Absolute URL for static assets (Open Graph images, etc.)."""
    root = request.url_root.rstrip("/")
    return root + url_for("static", filename=filename)


@app.template_global()
def absolute_url(endpoint: str, **values) -> str:
    """Absolute URL for named routes (canonical, JSON-LD)."""
    return url_for(endpoint, _external=True, **values)


def _sitemap_urls():
    """(endpoint, changefreq, priority) for public HTML routes."""
    return [
        ("home", "weekly", "1.0"),
        ("galleria", "monthly", "0.9"),
        ("eventi", "weekly", "0.8"),
        ("esperienze", "monthly", "0.8"),
        ("informazioni_utili", "monthly", "0.8"),
        ("partner", "monthly", "0.7"),
        ("contatti", "monthly", "0.9"),
    ]


@app.route("/robots.txt")
def robots_txt():
    sitemap_url = request.url_root.rstrip("/") + url_for("sitemap_xml")
    body = f"User-agent: *\nAllow: /\n\nSitemap: {sitemap_url}\n"
    return Response(body, mimetype="text/plain; charset=utf-8")


def _sitemap_lastmod_w3c() -> str:
    """W3C Datetime for <lastmod> (Google Search Central). Override with SITEMAP_LAST_MOD=YYYY-MM-DD."""
    override = os.environ.get("SITEMAP_LAST_MOD", "").strip()
    if override:
        return f"{override}T00:00:00+00:00"
    d = datetime.now(timezone.utc).date().isoformat()
    return f"{d}T00:00:00+00:00"


@app.route("/sitemap.xml")
def sitemap_xml():
    """XML sitemap for Google Search Console (https://www.sitemaps.org/protocol.html)."""
    root = request.url_root.rstrip("/")
    lastmod = _sitemap_lastmod_w3c()
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for endpoint, changefreq, priority in _sitemap_urls():
        loc = root + url_for(endpoint)
        lines.append("  <url>")
        lines.append(f"    <loc>{escape(loc)}</loc>")
        lines.append(f"    <lastmod>{lastmod}</lastmod>")
        lines.append(f"    <changefreq>{changefreq}</changefreq>")
        lines.append(f"    <priority>{priority}</priority>")
        lines.append("  </url>")
    lines.append("</urlset>")
    xml = "\n".join(lines) + "\n"
    resp = Response(xml, mimetype="application/xml; charset=utf-8")
    resp.headers["Cache-Control"] = "public, max-age=3600"
    return resp


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/galleria")
def galleria():
    photos = [
        {
            "id": i,
            "src": f"/static/images/{str(i).zfill(2)}.jpeg",
            "alt": f"Margot76 - Foto {str(i).zfill(2)}",
        }
        for i in range(1, 13)
    ]
    return render_template("galleria.html", photos=photos)


@app.route("/eventi")
def eventi():
    return render_template("eventi.html")


@app.route("/esperienze")
def esperienze():
    return render_template("esperienze.html")


@app.route("/informazioni-utili")
def informazioni_utili():
    return render_template("informazioni_utili.html")


@app.route("/partner")
def partner():
    return render_template("partner.html")


@app.route("/contatti")
def contatti():
    return render_template("contatti.html")


if __name__ == "__main__":
    app.run(debug=True, port=5001)
