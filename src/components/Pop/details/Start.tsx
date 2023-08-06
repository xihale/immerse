import { useTranslation } from "react-i18next"

export default function StartPop({set}: {set: React.Dispatch<React.SetStateAction<boolean>>}) {
  
  const {t}= useTranslation();

  function Title(){
    return <span style={{fontFamily: "monospace", fontSize: "2.2rem"}}>{t("Title")}</span>
  }

  function Start(){
    return <div style={{fontFamily: "monospace"}} onClick={() => set(false)}>{t("Start")}</div>
  }
  
  function About(){
    return <div style={{fontFamily: "monospace"}}>{t("about")}</div>
  }
  
  return <>
    <Title/>
    <Start/>
    <About/>
  </>
}
