/** Chunk was on 61526 **/
/** chunk id: 362693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk673462 = require("./673462.jsx"),
  Chunk826078 = require("./826078.jsx"),
  Chunk917042 = require("./917042.js"),
  Chunk20437 = require("./20437.js"),
  Chunk121937 = require("./121937.js");

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
  } = (0, u.S)(), x = a.useCallback(() => {
    var e;
    null == (e = f.current) || e.seek(v.start), n()
  }, [n, v.start, f]);
  return a.useEffect(() => {
    function e(e) {
      var t, n;
      if ((null == (t = document.activeElement) ? true : t.tagName) === "INPUT") return;
      let r = f.current;
      if (null == r) return;
      let a = null == (n = f.current) ? true : n.videoElement;
      if (null == a) return;
      let l = (0, s.Z)(a.duration, e.shiftKey),
        i = false;
      switch (e.key) {
        case " ":
          i = true, a.paused ? r.play() : r.pause();
          break;
        case "ArrowLeft":
          i = true, r.seek(Math.max(a.currentTime - l, v.start));
          break;
        case "ArrowRight":
          i = true, r.seek(Math.min(a.currentTime + l, v.end))
      }
      i && (e.stopPropagation(), e.preventDefault())
    }
    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
  }, [v.start, v.end, f]), (0, r.jsxs)("div", {
    className: c.editorPane,
    children: [(0, r.jsx)("div", {
      className: c.videoSizer,
      children: (0, r.jsx)(i.Z, {
        applicationAudioEnabled: h,
        voiceAudioEnabled: g,
        ref: f,
        audioSrc: m,
        src: d,
        isLoading: t,
        onDoneLoading: x,
        startTime: v.start,
        endTime: v.end
      })
    }), !t && p && [l.Dvm.ENTERED, l.Dvm.HIDDEN].includes(p) ? (0, r.jsx)(o.Z, {
      sourceURL: d
    }) : null]
  })
}