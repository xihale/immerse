import "./i18n/i18n";
import "./App.scss";

import { useState, useEffect, useRef } from "react";

import Top, { getTime } from "./components/Top";
import Background from "./components/Background";

import Pop from "./components/Pop";
import RestPop from "./components/Pop/details/Rest";

export default function App() {
  const [status, setStatus] = useState(true);
  const last = useRef(new Date().getTime() / 1e3),
    now = useRef(new Date()),
    [totalTime, setTotalTime] = useState(0);

  const clear = () => {
    // last.current=new Date().getTime()/1e3;
    localStorage.removeItem("studyTime");
  };

  useEffect(() => {
    now.current = new Date();
    if (!status) {
      last.current = new Date().getTime() / 1e3;
      return;
    }
    const st = localStorage.getItem("studyTime");
    let diff =
      now.current.getTime() / 1e3 -
      last.current +
      (st == null ? 0 : parseInt(st));
    diff = Math.round(diff);

    setTotalTime(diff);
  }, [status]);

  useEffect(() => {
    // console.log("totalTime:  " + totalTime);
    localStorage.setItem("studyTime", totalTime.toString());
  }, [totalTime]);

  function Rest() {
    const { minutes: min, seconds: sec } = getTime(totalTime);

    return (
      <Pop isShow={status}>
        <RestPop min={min} sec={sec} set={setStatus} clear={clear}></RestPop>
      </Pop>
    );
  }

  // const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="Main">
      <Top setStatus={setStatus} />
      <Rest />
      <Background />
    </div>
  );
}
