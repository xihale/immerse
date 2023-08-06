import { useTranslation } from "react-i18next";

export default function RestPop({ min, sec, set, clear }: { min: number; sec: number, set: React.Dispatch<React.SetStateAction<boolean>>, clear: () => void }) {
  const { t } = useTranslation();

  function Info() {
    return (
      <>
        <span className="title">{t("Title")}</span>
        <div>
          {t("studyTime", { min, sec })}
        </div>
      </>
    );
  }

  function Return() {
    return (
      <div className="btn return" onClick={() => set(false)}>
        &times;
      </div>
    );
  }

  function Opts(){
    return (<>
      <div className="sbtn">{t("music")}</div>
      <div className="sbtn">{t("about")}</div>
      <div className="sbtn" onClick={clear}>{t("clear")}</div>
    </>)
  }

  return (
    <>
      <Return/>
      <Info/>
      <br/><hr /><br/>
      <Opts/>
    </>
  );
}

