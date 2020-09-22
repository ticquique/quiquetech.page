const assets = "/assets"

module.exports = {
    title: "Quique developer website",
    author: "Quique",
    email: "enponsba@gmail.com",
    description: "Portfolio de Quique Pons, desarrollador de software con conocimientos de Tecnologías Web (Angular, Vue, WebRTC) e Inteligencia Artificial (Tensorflow, sklearn, Keras), así como Docker para contenerización y despliegue.",
    photo: `profile.jpeg`,
    assets,
    site: `https://quiquetech.page`,
    now: new Date(),
    color: {
        "pallete_white": "#F1F2F1",
        "pallete_yellow": "#B09652",
        "pallete_gray": "#93A49F",
        "pallete_brown": "#86685C",
        "pallete_dark": "#38373B"
    },
    "opengraph": {
        "languageCode": "es-ES",
        "image": `${assets}/images/logo_name_icon.png` ,
        "postimage": `${assets}/images/logo_name_icon.png`,
        "latitude": "39.4675647",
        "longitude": "-0.3792373",
        "locality": "Valencia",
        "countryName": "Spain"
    },
    "twitter": "kiblue_"
}
