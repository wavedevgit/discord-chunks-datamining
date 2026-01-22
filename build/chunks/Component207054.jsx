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
    setHasPlayedThrough: b,
    maxLoops: y,
    loopEnd: O,
    bannerAdjustment: A,
    imageData: v
  } = e, S = true, I = 0, T = (0, s.gm)() && null != _.loopDelay && _.loopDelay > 0 && (null == v ? true : v.src) != null, [C, N] = i.useState("reset"), R = i.useRef(null != (t = null == v ? true : v.src) ? t : _.src), [w, P] = i.useState(null != (n = null == v ? true : v.src) ? n : _.src);
  i.useEffect(() => {
    if (!T || "layer" === C) return;
    let e = new AbortController;
    return (async () => {
      try {
        let t = R.current,
          n = await fetch(t, {
            signal: e.signal
          }),
          r = await n.blob();
        if (e.signal.aborted) return;
        t !== (null == v ? true : v.src) && URL.revokeObjectURL(t), R.current = URL.createObjectURL(r), P(() => R.current)
      } catch (e) {
        if ("AbortError" === e.name) return null;
        o.A.captureException(e)
      }
    })(), () => {
      e.abort()
    }
  }, [C, T, P, null == v ? true : v.src]), i.useEffect(() => () => {
    R.current !== (null == v ? true : v.src) && URL.revokeObjectURL(R.current)
  }, []);
  let D = e => {
    (0, s.gm)() && e !== C && N(e)
  };
  if (m || (S = false), g < _.start && (S = false), !_.loop && g > _.duration + _.start && (S = false), h === a.l.ANIMATION_TYPE_PERSISTENT && !E && null != y && g >= O && b(true), _.loop && true !== _.loopDelay && _.loopDelay > 0) {
    let e = _.duration + _.loopDelay;
    I = Math.floor((g - _.start) / e), g - _.start - I * e > _.duration && (h === a.l.ANIMATION_TYPE_INTERMITTENT && !E && null != y && I >= y && b(true), S = false)
  }
  return S ? (D("layer"), (0, r.jsx)("img", {
    src: w,
    className: c.QZ,
    style: {
      top: (null != (u = null == (f = _.position) ? true : f.y) ? u : 0) - A,
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