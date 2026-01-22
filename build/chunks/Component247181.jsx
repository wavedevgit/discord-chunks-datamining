/** Chunk was on 19632 **/
/** chunk id: 247181, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk256905 = require("./256905.jsx"),
  Chunk372684 = require("./372684.js"),
  Chunk563076 = require("./563076.jsx"),
  Chunk516094 = require("./516094.jsx"),
  Chunk584794 = require("./584794.js"),
  Chunk429364 = require("./429364.jsx"),
  Chunk327742 = require("./327742.js");

function h(e) {
  let {
    transitionState: t,
    clip: l
  } = e, {
    applicationAudioEnabled: h,
    voiceAudioEnabled: p,
    soundboardAudioEnabled: v,
    cropStart: f,
    cropEnd: b,
    videoPlayerRef: g,
    videoURL: j,
    audioTracks: x
  } = (0, d.T)(), y = l.type === s.nQ.SCREENSHOT;
  a.useEffect(() => {
    if (!y) return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e);

    function e(e) {
      var t, l;
      if ((null == (t = document.activeElement) ? true : t.tagName) === "INPUT") return;
      let n = g.current;
      if (null == n) return;
      let a = null == (l = g.current) ? true : l.videoElement;
      if (null == a) return;
      let r = (0, c.A)(a.duration, e.shiftKey),
        i = false;
      switch (e.key) {
        case " ":
          i = true, a.paused ? n.play() : n.pause();
          break;
        case "ArrowLeft":
          i = true, n.seek(Math.max(f, a.currentTime - r));
          break;
        case "ArrowRight":
          i = true, n.seek(Math.min(b, a.currentTime + r))
      }
      i && (e.stopPropagation(), e.preventDefault())
    }
  }, [g, y, l.type, f, b]);
  let C = a.useMemo(() => x.filter(e => e.trackName.includes(":voice")), [x]),
    k = a.useCallback(() => {
      var e;
      (0, i.R)({
        items: [{
          type: "IMAGE",
          url: l.thumbnail,
          proxyUrl: l.thumbnail,
          alt: null != (e = l.name) ? e : ""
        }],
        startingIndex: 0,
        location: "ClipsEditModal"
      }, "stack")
    }, [l.thumbnail, l.name]);
  if (y) {
    var N;
    return (0, n.jsx)("div", {
      className: m.OJ,
      children: t !== r.ip4.ENTERED ? (0, n.jsx)("div", {
        className: m.dc,
        children: (0, n.jsx)(r.y$y, {})
      }) : (0, n.jsx)("div", {
        className: m.zT,
        children: (0, n.jsx)(r.DUT, {
          className: m.xS,
          onClick: k,
          children: (0, n.jsx)("img", {
            className: m.V_,
            src: l.thumbnail,
            alt: null != (N = l.name) ? N : ""
          })
        })
      })
    })
  }
  let E = null == j || 0 === x.length || t !== r.ip4.ENTERED;
  return (0, n.jsx)("div", {
    className: m.OJ,
    children: E ? (0, n.jsx)("div", {
      className: m.dc,
      children: (0, n.jsx)(r.y$y, {})
    }) : (0, n.jsxs)("div", {
      className: m.zT,
      children: [(0, n.jsx)(o.A, {
        applicationAudioEnabled: h,
        voiceAudioEnabled: p,
        soundboardAudioEnabled: v,
        ref: g,
        clip: l
      }), (0, n.jsx)(u.A, {
        sourceURL: j,
        clip: l,
        voiceAudioTracks: C
      })]
    })
  })
}