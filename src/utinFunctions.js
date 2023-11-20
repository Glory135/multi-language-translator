import axios from "axios";

const BASE_URL = 'http://127.0.0.1:5000'

export const getLanguages = async () => {
    const res = await axios.get(
        'https://api.cognitive.microsofttranslator.com/Languages?api-version=3.0&scope=translation'
    );
    const dataArr = Object.keys(res.data.translation).map((key) => ({
        label: res.data.translation[key].name,
        code: key,
    }));
    return dataArr;
};

export const text_translate = async (body) => {
    try {
        const res = await axios.post(`${BASE_URL}/text-translate`, body, { mode: 'cors' })
        const sres = res.data[res.data.length - 1]?.translation[0]?.translations[0]?.text
        console.log(sres);
        return sres
    } catch (err) {
        console.log(err);
    }

}

export const recognize_speech = async (body) => {
    const res = await axios.post(`${BASE_URL}/recognize-speech`, body, { mode: 'cors' })
    console.log(res);
}

