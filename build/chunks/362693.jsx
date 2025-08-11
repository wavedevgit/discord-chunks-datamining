/** Chunk was on 61526 **/
/** chunk id: 362693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk673462 = require("./673462.js"),
  Chunk826078 = require("./826078.js"),
  Chunk917042 = require("./917042.js"),
  Chunk20437 = require("./20437.js"),
  Chunk138339 = require("./138339.js");

function d(e) {
  let {
    isLoading: t,
    onDoneLoading: n,
    videoURL: d,
    audioURL: m,
    transitionState: p
  } = e, {
    videoPlayerRef: f,
    cropData: v,
    applicationAudioEnabled: h,
    voiceAudioEnabled: g
  } = (0, u.S)(), x = r.useCallback(() => {
    var e;
    null == (e = f.current) || e.seek(v.start), n()
  }, [n, v.start, f]);
  return r.useEffect(() => {
    function e(e) {
      var t, n;
      if ((null == (t = document.activeElement) ? true : t.tagName) === "INPUT") return;
      let a = f.current;
      if (null == a) return;
      let r = null == (n = f.current) ? true : n.videoElement;
      if (null == r) return;
      let l = (0, s.Z)(r.duration, e.shiftKey),
        i = false;
      switch (e.key) {
        case " ":
          i = true, r.paused ? a.play() : a.pause();
          break;
        case "ArrowLeft":
          i = true, a.seek(Math.max(r.currentTime - l, v.start));
          break;
        case "ArrowRight":
          i = true, a.seek(Math.min(r.currentTime + l, v.end))
      }
      i && (e.stopPropagation(), e.preventDefault())
    }
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
  }, [v.start, v.end, f]), <div className={c.editorPane}>{<div className={c.videoSizer}><i.Z applicationAudioEnabled={h} voiceAudioEnabled={g} ref={f} audioSrc={m} src={d} isLoading={t} onDoneLoading={x} startTime={v.start} endTime={v.end} /></div>}{!t && p && [l.Dvm.ENTERED, l.Dvm.HIDDEN].includes(p) ? <o.Z sourceURL={d} /> : null}</div>
}