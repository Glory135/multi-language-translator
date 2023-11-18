import axios from "axios";

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