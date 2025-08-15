/** Chunk was on web.js **/
/** chunk id: 642474, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => s
}), require("./997841.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk710260 = require("./710260.jsx"),
  Chunk231338 = require("./231338.js");

function s(e) {
  let {
    children: t,
    theme: n = o.BR.DARK,
    primaryColor: s = null,
    secondaryColor: l = null,
    gradient: c = null,
    flags: u = 0,
    contrast: d = 1,
    saturation: f = 1,
    density: _ = "compact",
    disableAdaptiveTheme: p = false,
    reduceAdaptiveTheme: h = false
  } = e, m = i.useMemo(() => (0, a.TT)({
    theme: n,
    primaryColor: s,
    secondaryColor: l,
    gradient: c,
    flags: u,
    contrast: d,
    saturation: f,
    density: _,
    disableAdaptiveTheme: p,
    reduceAdaptiveTheme: h
  }), [n, s, l, c, u, d, f, _, p, h]);
  return (0, r.jsx)(a.Ni.Provider, {
    value: m,
    children: t
  })
}