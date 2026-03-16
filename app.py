from datetime import datetime

from flask import Flask, render_template

app = Flask(__name__)


@app.context_processor
def inject_now():
    return {"now": datetime.now()}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/galleria")
def galleria():
    photos = [
        {
            "id": i,
            "src": f"https://placehold.co/800x600/d4a574/fff?text=Margot76+%23{str(i).zfill(2)}",
            "alt": f"Margot76 - Foto {str(i).zfill(2)}",
        }
        for i in range(1, 13)
    ]
    return render_template("galleria.html", photos=photos)


@app.route("/eventi")
def eventi():
    return render_template("eventi.html")


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
