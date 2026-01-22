/** Chunk was on web.js **/
/** chunk id: 399339, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => o
}), require("./938796.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk38021 = require("./38021.jsx"),
  Chunk818348 = require("./818348.js");

function o(e) {
  let {
    children: t,
    theme: n = s.NJ.DARK,
    primaryColor: o = null,
    secondaryColor: l = null,
    gradient: c = null,
    flags: u = 0,
    contrast: d = 1,
    saturation: f = 1,
    density: p = "compact",
    disableAdaptiveTheme: _ = false,
    reduceAdaptiveTheme: h = false
  } = e, m = i.useMemo(() => (0, a.dI)({
    theme: n,
    primaryColor: o,
    secondaryColor: l,
    gradient: c,
    flags: u,
    contrast: d,
    saturation: f,
    density: p,
    disableAdaptiveTheme: _,
    reduceAdaptiveTheme: h
  }), [n, o, l, c, u, d, f, p, _, h]);
  return (0, r.jsx)(a.Dx.Provider, {
    value: m,
    children: t
  })
}