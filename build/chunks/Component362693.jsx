/** Chunk was on 98920 **/
/** chunk id: 362693, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk312097 = require("./312097.jsx"),
  Chunk894694 = require("./894694.js"),
  Chunk673462 = require("./673462.jsx"),
  Chunk826078 = require("./826078.jsx"),
  Chunk917042 = require("./917042.js"),
  Chunk115559 = require("./115559.jsx"),
  Chunk285006 = require("./285006.js");

function h(e) {
  let {
    transitionState: t,
    clip: n
  } = e, {
    applicationAudioEnabled: h,
    voiceAudioEnabled: p,
    soundboardAudioEnabled: f,
    cropStart: v,
    cropEnd: g,
    videoPlayerRef: b,
    videoURL: j,
    audioTracks: x
  } = (0, d.D)(), y = n.type === s.NJ.SCREENSHOT;
  a.useEffect(() => {
    if (!y) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);

    function e(e) {
      var t, n;
      if ((null == (t = document.activeElement) ? true : t.tagName) === "INPUT") return;
      let l = b.current;
      if (null == l) return;
      let a = null == (n = b.current) ? true : n.videoElement;
      if (null == a) return;
      let i = (0, c.Z)(a.duration, e.shiftKey),
        r = false;
      switch (e.key) {
        case " ":
          r = true, a.paused ? l.play() : l.pause();
          break;
        case "ArrowLeft":
          r = true, l.seek(Math.max(v, a.currentTime - i));
          break;
        case "ArrowRight":
          r = true, l.seek(Math.min(g, a.currentTime + i))
      }
      r && (e.stopPropagation(), e.preventDefault())
    }
  }, [b, y, n.type, v, g]);
  let C = a.useMemo(() => x.filter(e => e.trackName.includes(":voice")), [x]),
    k = a.useCallback(() => {
      var e;
      (0, r.K)({
        items: [{
          type: "IMAGE",
          url: n.thumbnail,
          proxyUrl: n.thumbnail,
          alt: null != (e = n.name) ? e : ""
        }],
        startingIndex: 0,
        location: "ClipsEditModal"
      }, "stack")
    }, [n.thumbnail, n.name]);
  if (y) {
    var N;
    return (0, l.jsx)("div", {
      className: m.editorPane,
      children: t !== i.Dvm.ENTERED ? (0, l.jsx)("div", {
        className: m.spinnerContainer,
        children: (0, l.jsx)(i.$jN, {})
      }) : (0, l.jsx)("div", {
        className: m.editorContent,
        children: (0, l.jsx)(i.P3F, {
          className: m.videoSizer,
          onClick: k,
          children: (0, l.jsx)("img", {
            className: m.displayScreenshot,
            src: n.thumbnail,
            alt: null != (N = n.name) ? N : ""
          })
        })
      })
    })
  }
  let E = null == j || 0 === x.length || t !== i.Dvm.ENTERED;
  return (0, l.jsx)("div", {
    className: m.editorPane,
    children: E ? (0, l.jsx)("div", {
      className: m.spinnerContainer,
      children: (0, l.jsx)(i.$jN, {})
    }) : (0, l.jsxs)("div", {
      className: m.editorContent,
      children: [(0, l.jsx)(o.Z, {
        applicationAudioEnabled: h,
        voiceAudioEnabled: p,
        soundboardAudioEnabled: f,
        ref: b,
        clip: n
      }), (0, l.jsx)(u.Z, {
        sourceURL: j,
        clip: n,
        voiceAudioTracks: C
      })]
    })
  })
}