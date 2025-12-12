/** Chunk was on web.js **/
/** chunk id: 538870, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  _: () => g,
  h: () => h
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk451478 = require("./451478.js");
let s = 0,
  l = 2,
  c = 3,
  u = .06,
  d = false,
  f = 3,
  p = 2,
  _ = "inset 0 0 0 2px var(--yellow-360), inset 0 0 0 3px var(--background-base-lower)";

function m(e, t) {
  return t / (1 + Math.exp(-u * (e - d)))
}
var h = function(e) {
  return e.BOTH = "BOTH", e.INSET_ONLY = "INSET_ONLY", e.OUTSET_ONLY = "OUTSET_ONLY", e
}({});

function g(e) {
  let {
    isSpeaking: t,
    isLatched: n,
    voiceDb: u,
    spreadDirection: d = "BOTH",
    maxOuterSpreadRadius: h = f,
    maxInnerSpreadRadius: g = p
  } = e, {
    shouldReduceMotion: E,
    isAppFocused: b
  } = (0, i.cj)([o.Z, a.Z], () => ({
    shouldReduceMotion: o.Z.useReducedMotion,
    isAppFocused: a.Z.isAppFocused()
  }));
  return r.useMemo(() => {
    let e = {};
    if (t) {
      let t = s,
        n = l,
        r = c;
      u !== false / 0 && !E && b && (t = m(u, "INSET_ONLY" === d ? 0 : h), n = m(u, "OUTSET_ONLY" === d ? 0 : g), r = "OUTSET_ONLY" === d ? 0 : n + 1), e.boxShadow = ["0 0 0 ".concat(t, "px var(--status-speaking)"), "inset 0 0 0 ".concat(n, "px var(--status-speaking)"), "inset 0 0 0 ".concat(r, "px var(--background-base-lower)")].join(", ")
    } else n && (e.boxShadow = _);
    return b && (e.transition = "box-shadow 50ms ease-out"), e
  }, [t, n, b, E, u, d, h, g])
}