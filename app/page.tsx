"use client";
import main_en from "./locale/en/common.json";//import english language
import main_jp from "./locale/jp/common.json";//import japanese language
import main_th from "./locale/th/common.json";//import thai language

let set_lang = "th";//set language
let lang = setLang(set_lang);

//the function that can switch the language object.
function setLang(lang){
  switch(lang){
    case "en": return main_en;
    break;
    case "jp": return main_jp;
    break;
    case "th": return main_th;
    break;
    default:return main_en;
    break;
  }
}

export default function Page() {
  return (
    <div>
      <h1>{lang.welcome}Next.js!</h1>
      <h2>{lang.iam}Teisume</h2>
    </div>
  )
}