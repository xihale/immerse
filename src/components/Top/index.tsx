import { useTranslation } from "react-i18next";

import "./index.scss";

// eslint-disable-next-line react-refresh/only-export-components
export function getTime(time: number) {
  const min = Math.floor(time / 60);
  return { minutes: min, seconds: time - min * 60 };
}

export default function Top({
  setStatus
}: {
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { t } = useTranslation();
  function Hint() {
    // const { minutes: min, seconds: sec } = getTime(currentTime);
    // return <span className="hint" > {min}:{sec} </span>;
    return <></>;
  }

  const handleFullscreen = (elem: HTMLElement) => {
    document.fullscreenElement
      ? document.exitFullscreen()
      : elem.requestFullscreen();
  };

  return (
    <div className="Top">
      <span className="btn rest" onClick={() => setStatus(true)}>
        &lt;{t("rest")}
      </span>

      <Hint />

      <span
        className="btn fullscreen"
        onClick={() => handleFullscreen(document.body)}
      >
        :{t("fullscreen")}
      </span>
    </div>
  );
}
