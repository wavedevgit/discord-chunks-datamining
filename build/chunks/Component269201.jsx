/** Chunk was on web.js **/
/** chunk id: 269201, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => s
}), require("./997841.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk70007 = require("./70007.jsx"),
  Chunk231338 = require("./231338.js");

function s(e) {
  let {
    children: t,
    theme: n = a.BR.DARK,
    primaryColor: s = null,
    secondaryColor: l = null,
    gradient: c = null,
    flags: u = 0,
    contrast: d = 1,
    saturation: f = 1,
    density: p = "compact",
    disableAdaptiveTheme: _ = false,
    reduceAdaptiveTheme: m = false
  } = e, h = i.useMemo(() => (0, o.TT)({
    theme: n,
    primaryColor: s,
    secondaryColor: l,
    gradient: c,
    flags: u,
    contrast: d,
    saturation: f,
    density: p,
    disableAdaptiveTheme: _,
    reduceAdaptiveTheme: m
  }), [n, s, l, c, u, d, f, p, _, m]);
  return (0, r.jsx)(o.Ni.Provider, {
    value: h,
    children: t
  })
}