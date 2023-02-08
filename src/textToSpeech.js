export default class TextToSpeech {

  static getSpeech(text, lang) {

    let langMap = new Map([
      ["en", "en-us"],
      ["es", "es-es"],
      ["ar", "ar-eg"],
      ["zh-TW", "zh-cn"]
    ]);

    let promise = new Promise(function(resolve, reject) {
      let url = `src=${text}&hl=en-us`;

      if(langMap.has(lang)) {
        url = `src=${text}&hl=${langMap.at(lang)}`;
      }
      
      const request = new XMLHttpRequest();
      request.withCredentials = true;
  
      request.addEventListener("readystatechange", function () {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([response, text]);
        } else {
          reject([this, response, text]);
        }
      });
  
      request.open("POST",`https://voicerss-text-to-speech.p.rapidapi.com/?key=${process.env.API_KEY2}`);
      request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
      request.setRequestHeader("X-RapidAPI-Key", `${process.env.API_KEY}`);
      request.setRequestHeader("X-RapidAPI-Host","voicerss-text-to-speech.p.rapidapi.com");
  
      request.send(url);
    });
    return promise;
  }
}

/*



Language code	Language name
ar-eg	Arabic (Egypt)
ar-sa	Arabic (Saudi Arabia)
bg-bg	Bulgarian
ca-es	Catalan
zh-cn	Chinese (China)
zh-hk	Chinese (Hong Kong)
zh-tw	Chinese (Taiwan)
hr-hr	Croatian
cs-cz	Czech
da-dk	Danish
nl-be	Dutch (Belgium)
nl-nl	Dutch (Netherlands)
en-au	English (Australia)
en-ca	English (Canada)
en-gb	English (Great Britain)
en-in	English (India)
en-ie	English (Ireland)
en-us	English (United States)
fi-fi	Finnish
fr-ca	French (Canada)
fr-fr	French (France)
fr-ch	French (Switzerland)
de-at	German (Austria)
de-de	German (Germany)
de-ch	German (Switzerland)
el-gr	Greek
he-il	Hebrew
hi-in	Hindi
hu-hu	Hungarian
id-id	Indonesian
it-it	Italian
ja-jp	Japanese
ko-kr	Korean
ms-my	Malay
nb-no	Norwegian
pl-pl	Polish
pt-br	Portuguese (Brazil)
pt-pt	Portuguese (Portugal)
ro-ro	Romanian
ru-ru	Russian
sk-sk	Slovak
sl-si	Slovenian
es-mx	Spanish (Mexico)
es-es	Spanish (Spain)
sv-se	Swedish
ta-in	Tamil
th-th	Thai
tr-tr	Turkish
vi-vn	Vietnamese




{
  "data": {
      "languages": [
          {
              "language": "af",
              "name": "Afrikaans"
          },
          {
              "language": "ak",
              "name": "Akan"
          },
          {
              "language": "sq",
              "name": "Albanian"
          },
          {
              "language": "am",
              "name": "Amharic"
          },
          {
              "language": "ar",
              "name": "Arabic"
          },
          {
              "language": "hy",
              "name": "Armenian"
          },
          {
              "language": "as",
              "name": "Assamese"
          },
          {
              "language": "ay",
              "name": "Aymara"
          },
          {
              "language": "az",
              "name": "Azerbaijani"
          },
          {
              "language": "bm",
              "name": "Bambara"
          },
          {
              "language": "eu",
              "name": "Basque"
          },
          {
              "language": "be",
              "name": "Belarusian"
          },
          {
              "language": "bn",
              "name": "Bengali"
          },
          {
              "language": "bho",
              "name": "Bhojpuri"
          },
          {
              "language": "bs",
              "name": "Bosnian"
          },
          {
              "language": "bg",
              "name": "Bulgarian"
          },
          {
              "language": "ca",
              "name": "Catalan"
          },
          {
              "language": "ceb",
              "name": "Cebuano"
          },
          {
              "language": "ny",
              "name": "Chichewa"
          },
          {
              "language": "zh",
              "name": "Chinese (Simplified)"
          },
          {
              "language": "zh-TW",
              "name": "Chinese (Traditional)"
          },
          {
              "language": "co",
              "name": "Corsican"
          },
          {
              "language": "hr",
              "name": "Croatian"
          },
          {
              "language": "cs",
              "name": "Czech"
          },
          {
              "language": "da",
              "name": "Danish"
          },
          {
              "language": "dv",
              "name": "Divehi"
          },
          {
              "language": "doi",
              "name": "Dogri"
          },
          {
              "language": "nl",
              "name": "Dutch"
          },
          {
              "language": "en",
              "name": "English"
          },
          {
              "language": "eo",
              "name": "Esperanto"
          },
          {
              "language": "et",
              "name": "Estonian"
          },
          {
              "language": "ee",
              "name": "Ewe"
          },
          {
              "language": "tl",
              "name": "Filipino"
          },
          {
              "language": "fi",
              "name": "Finnish"
          },
          {
              "language": "fr",
              "name": "French"
          },
          {
              "language": "fy",
              "name": "Frisian"
          },
          {
              "language": "gl",
              "name": "Galician"
          },
          {
              "language": "lg",
              "name": "Ganda"
          },
          {
              "language": "ka",
              "name": "Georgian"
          },
          {
              "language": "de",
              "name": "German"
          },
          {
              "language": "gom",
              "name": "Goan Konkani"
          },
          {
              "language": "el",
              "name": "Greek"
          },
          {
              "language": "gn",
              "name": "Guarani"
          },
          {
              "language": "gu",
              "name": "Gujarati"
          },
          {
              "language": "ht",
              "name": "Haitian Creole"
          },
          {
              "language": "ha",
              "name": "Hausa"
          },
          {
              "language": "haw",
              "name": "Hawaiian"
          },
          {
              "language": "iw",
              "name": "Hebrew"
          },
          {
              "language": "hi",
              "name": "Hindi"
          },
          {
              "language": "hmn",
              "name": "Hmong"
          },
          {
              "language": "hu",
              "name": "Hungarian"
          },
          {
              "language": "is",
              "name": "Icelandic"
          },
          {
              "language": "ig",
              "name": "Igbo"
          },
          {
              "language": "ilo",
              "name": "Iloko"
          },
          {
              "language": "id",
              "name": "Indonesian"
          },
          {
              "language": "ga",
              "name": "Irish"
          },
          {
              "language": "it",
              "name": "Italian"
          },
          {
              "language": "ja",
              "name": "Japanese"
          },
          {
              "language": "jw",
              "name": "Javanese"
          },
          {
              "language": "kn",
              "name": "Kannada"
          },
          {
              "language": "kk",
              "name": "Kazakh"
          },
          {
              "language": "km",
              "name": "Khmer"
          },
          {
              "language": "rw",
              "name": "Kinyarwanda"
          },
          {
              "language": "ko",
              "name": "Korean"
          },
          {
              "language": "kri",
              "name": "Krio"
          },
          {
              "language": "ku",
              "name": "Kurdish (Kurmanji)"
          },
          {
              "language": "ckb",
              "name": "Kurdish (Sorani)"
          },
          {
              "language": "ky",
              "name": "Kyrgyz"
          },
          {
              "language": "lo",
              "name": "Lao"
          },
          {
              "language": "la",
              "name": "Latin"
          },
          {
              "language": "lv",
              "name": "Latvian"
          },
          {
              "language": "ln",
              "name": "Lingala"
          },
          {
              "language": "lt",
              "name": "Lithuanian"
          },
          {
              "language": "lb",
              "name": "Luxembourgish"
          },
          {
              "language": "mk",
              "name": "Macedonian"
          },
          {
              "language": "mai",
              "name": "Maithili"
          },
          {
              "language": "mg",
              "name": "Malagasy"
          },
          {
              "language": "ms",
              "name": "Malay"
          },
          {
              "language": "ml",
              "name": "Malayalam"
          },
          {
              "language": "mt",
              "name": "Maltese"
          },
          {
              "language": "mni-Mtei",
              "name": "Manipuri (Meitei Mayek)"
          },
          {
              "language": "mi",
              "name": "Maori"
          },
          {
              "language": "mr",
              "name": "Marathi"
          },
          {
              "language": "lus",
              "name": "Mizo"
          },
          {
              "language": "mn",
              "name": "Mongolian"
          },
          {
              "language": "my",
              "name": "Myanmar (Burmese)"
          },
          {
              "language": "ne",
              "name": "Nepali"
          },
          {
              "language": "nso",
              "name": "Northern Sotho"
          },
          {
              "language": "no",
              "name": "Norwegian"
          },
          {
              "language": "or",
              "name": "Odia (Oriya)"
          },
          {
              "language": "om",
              "name": "Oromo"
          },
          {
              "language": "ps",
              "name": "Pashto"
          },
          {
              "language": "fa",
              "name": "Persian"
          },
          {
              "language": "pl",
              "name": "Polish"
          },
          {
              "language": "pt",
              "name": "Portuguese"
          },
          {
              "language": "pa",
              "name": "Punjabi"
          },
          {
              "language": "qu",
              "name": "Quechua"
          },
          {
              "language": "ro",
              "name": "Romanian"
          },
          {
              "language": "ru",
              "name": "Russian"
          },
          {
              "language": "sm",
              "name": "Samoan"
          },
          {
              "language": "sa",
              "name": "Sanskrit"
          },
          {
              "language": "gd",
              "name": "Scots Gaelic"
          },
          {
              "language": "sr",
              "name": "Serbian"
          },
          {
              "language": "st",
              "name": "Sesotho"
          },
          {
              "language": "sn",
              "name": "Shona"
          },
          {
              "language": "sd",
              "name": "Sindhi"
          },
          {
              "language": "si",
              "name": "Sinhala"
          },
          {
              "language": "sk",
              "name": "Slovak"
          },
          {
              "language": "sl",
              "name": "Slovenian"
          },
          {
              "language": "so",
              "name": "Somali"
          },
          {
              "language": "es",
              "name": "Spanish"
          },
          {
              "language": "su",
              "name": "Sundanese"
          },
          {
              "language": "sw",
              "name": "Swahili"
          },
          {
              "language": "sv",
              "name": "Swedish"
          },
          {
              "language": "tg",
              "name": "Tajik"
          },
          {
              "language": "ta",
              "name": "Tamil"
          },
          {
              "language": "tt",
              "name": "Tatar"
          },
          {
              "language": "te",
              "name": "Telugu"
          },
          {
              "language": "th",
              "name": "Thai"
          },
          {
              "language": "ti",
              "name": "Tigrinya"
          },
          {
              "language": "ts",
              "name": "Tsonga"
          },
          {
              "language": "tr",
              "name": "Turkish"
          },
          {
              "language": "tk",
              "name": "Turkmen"
          },
          {
              "language": "uk",
              "name": "Ukrainian"
          },
          {
              "language": "ur",
              "name": "Urdu"
          },
          {
              "language": "ug",
              "name": "Uyghur"
          },
          {
              "language": "uz",
              "name": "Uzbek"
          },
          {
              "language": "vi",
              "name": "Vietnamese"
          },
          {
              "language": "cy",
              "name": "Welsh"
          },
          {
              "language": "xh",
              "name": "Xhosa"
          },
          {
              "language": "yi",
              "name": "Yiddish"
          },
          {
              "language": "yo",
              "name": "Yoruba"
          },
          {
              "language": "zu",
              "name": "Zulu"
          },
          {
              "language": "he",
              "name": "Hebrew"
          },
          {
              "language": "jv",
              "name": "Javanese"
          },
          {
              "language": "zh-CN",
              "name": "Chinese (Simplified)"
          }
      ]
  }
}

*/