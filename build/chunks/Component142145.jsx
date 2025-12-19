/** Chunk was on web.js **/
/** chunk id: 142145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk480210 = require("./480210.js"),
  Chunk526167 = require("./526167.js"),
  Chunk960048 = require("./960048.js"),
  Chunk119837 = require("./119837.js"),
  Chunk664545 = require("./664545.js");
let u = e => {
  var t, n, u, d, f, p;
  let {
    layerConfig: _,
    animationType: m,
    ticking: h,
    time: g,
    hasPlayedThrough: E,
    setHasPlayedThrough: b,
    maxLoops: y,
    loopEnd: O,
    bannerAdjustment: v,
    imageData: S
  } = e, I = true, T = 0, C = (0, o.vU)() && null != _.loopDelay && _.loopDelay > 0 && (null == S ? true : S.src) != null, [A, N] = i.useState("reset"), P = i.useRef(null != (u = null == S ? true : S.src) ? u : _.src), [R, w] = i.useState(null != (d = null == S ? true : S.src) ? d : _.src);
  i.useEffect(() => {
    if (!C || "layer" === A) return;
    let e = new AbortController;
    return (async () => {
      try {
        let t = P.current,
          n = await fetch(t, {
            signal: e.signal
          }),
          r = await n.blob();
        if (e.signal.aborted) return;
        t !== (null == S ? true : S.src) && URL.revokeObjectURL(t), P.current = URL.createObjectURL(r), w(() => P.current)
      } catch (e) {
        if ("AbortError" === e.name) return null;
        s.Z.captureException(e)
      }
    })(), () => {
      e.abort()
    }
  }, [A, C, w, null == S ? true : S.src]), i.useEffect(() => () => {
    P.current !== (null == S ? true : S.src) && URL.revokeObjectURL(P.current)
  }, []);
  let D = e => {
    (0, o.vU)() && e !== A && N(e)
  };
  if (h || (I = false), g < _.start && (I = false), !_.loop && g > _.duration + _.start && (I = false), m === a.y.ANIMATION_TYPE_PERSISTENT && !E && null != y && g >= O && b(true), _.loop && true !== _.loopDelay && _.loopDelay > 0) {
    let e = _.duration + _.loopDelay;
    T = Math.floor((g - _.start) / e), g - _.start - T * e > _.duration && (m === a.y.ANIMATION_TYPE_INTERMITTENT && !E && null != y && T >= y && b(true), I = false)
  }
  return I ? (D("layer"), (0, r.jsx)("img", {
    src: R,
    className: c.effect,
    style: {
      top: (null != (f = null == (t = _.position) ? true : t.y) ? f : 0) - v,
      left: null != (p = null == (n = _.position) ? true : n.x) ? p : 0
    },
    alt: "",
    "aria-hidden": true
  })) : (D("reset"), (0, r.jsx)("img", {
    src: l.td,
    alt: "",
    "aria-hidden": true
  }))
}