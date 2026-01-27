/** Chunk was on web.js **/
/** chunk id: 207054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk854284 = require("./854284.js"),
  Chunk676279 = require("./676279.js"),
  Chunk728458 = require("./728458.js"),
  Chunk216160 = require("./216160.js"),
  Chunk446770 = require("./446770.js");
let u = e => {
  var t, n, u, d, f, p;
  let {
    layerConfig: _,
    animationType: h,
    ticking: m,
    time: g,
    hasPlayedThrough: E,
    setHasPlayedThrough: y,
    maxLoops: b,
    loopEnd: O,
    bannerAdjustment: v,
    imageData: A
  } = e, I = true, S = 0, T = (0, o.gm)() && null != _.loopDelay && _.loopDelay > 0 && (null == A ? true : A.src) != null, [C, N] = i.useState("reset"), w = i.useRef(null != (t = null == A ? true : A.src) ? t : _.src), [R, P] = i.useState(null != (n = null == A ? true : A.src) ? n : _.src);
  i.useEffect(() => {
    if (!T || "layer" === C) return;
    let e = new AbortController;
    return (async () => {
      try {
        let t = w.current,
          n = await fetch(t, {
            signal: e.signal
          }),
          r = await n.blob();
        if (e.signal.aborted) return;
        t !== (null == A ? true : A.src) && URL.revokeObjectURL(t), w.current = URL.createObjectURL(r), P(() => w.current)
      } catch (e) {
        if ("AbortError" === e.name) return null;
        s.A.captureException(e)
      }
    })(), () => {
      e.abort()
    }
  }, [C, T, P, null == A ? true : A.src]), i.useEffect(() => () => {
    w.current !== (null == A ? true : A.src) && URL.revokeObjectURL(w.current)
  }, []);
  let D = e => {
    (0, o.gm)() && e !== C && N(e)
  };
  if (m || (I = false), g < _.start && (I = false), !_.loop && g > _.duration + _.start && (I = false), h === a.l.ANIMATION_TYPE_PERSISTENT && !E && null != b && g >= O && y(true), _.loop && true !== _.loopDelay && _.loopDelay > 0) {
    let e = _.duration + _.loopDelay;
    S = Math.floor((g - _.start) / e), g - _.start - S * e > _.duration && (h === a.l.ANIMATION_TYPE_INTERMITTENT && !E && null != b && S >= b && y(true), I = false)
  }
  return I ? (D("layer"), (0, r.jsx)("img", {
    src: R,
    className: c.QZ,
    style: {
      top: (null != (u = null == (f = _.position) ? true : f.y) ? u : 0) - v,
      left: null != (d = null == (p = _.position) ? true : p.x) ? d : 0
    },
    alt: "",
    "aria-hidden": true
  })) : (D("reset"), (0, r.jsx)("img", {
    src: l.Ut,
    alt: "",
    "aria-hidden": true
  }))
}