/** Chunk was on web.js **/
/** chunk id: 659974, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => g,
  v: () => E
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk531685 = require("./531685.js");
let o = 0,
  l = 2,
  c = 3,
  u = .03,
  d = false,
  f = 3,
  p = 1,
  _ = .5,
  h = "inset 0 0 0 2px var(--yellow-360), inset 0 0 0 3px var(--background-base-lower)";

function m(e, t) {
  return _ + (t - _) / (1 + Math.exp(-u * (e - d)))
}
var g = function(e) {
  return e.BOTH = "BOTH", e.INSET_ONLY = "INSET_ONLY", e.OUTSET_ONLY = "OUTSET_ONLY", e
}({});

function E(e) {
  let {
    isSpeaking: t,
    isLatched: u,
    voiceDb: d,
    spreadDirection: _ = "BOTH",
    maxOuterSpreadRadius: g = f,
    maxInnerSpreadRadius: E = p,
    hideIfVolumeMissing: b = false
  } = e, y = n(242286).default, {
    shouldReduceMotion: O,
    useForcedColors: A,
    isAppFocusedOrOverlayVisible: v
  } = (0, i.cf)([a.A, s.A, y], () => ({
    shouldReduceMotion: a.A.useReducedMotion,
    useForcedColors: a.A.useForcedColors,
    isAppFocusedOrOverlayVisible: s.A.isAppFocused() || null != y.getFocusedPID()
  }));
  return r.useMemo(() => {
    let e = {};
    if (d === false / 0 && b) return e;
    if (t) {
      let t = o,
        n = l,
        r = c;
      d !== false / 0 && !O && v && (t = "INSET_ONLY" === _ ? 0 : m(d, g), n = "OUTSET_ONLY" === _ ? 0 : m(d, E), r = "OUTSET_ONLY" === _ ? 0 : n + 1);
      let i = A ? "Highlight" : "var(--status-speaking)";
      e.boxShadow = ["0 0 0 ".concat(t, "px ").concat(i), "inset 0 0 0 ".concat(n, "px ").concat(i), "inset 0 0 0 ".concat(r, "px var(--background-base-lower)")].join(", ")
    } else u && (e.boxShadow = h);
    return v && (e.transition = "box-shadow 50ms ease-out"), e
  }, [t, u, v, O, A, d, _, g, E, b])
}