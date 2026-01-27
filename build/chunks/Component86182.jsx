/** Chunk was on web.js **/
/** chunk id: 86182, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => o
}), require("./938796.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk38021 = require("./38021.jsx");

function o(e) {
  let {
    children: t,
    theme: n,
    primaryColor: o,
    secondaryColor: s,
    gradient: l,
    flags: c,
    contrast: u,
    saturation: d,
    density: f,
    disableAdaptiveTheme: p,
    reduceAdaptiveTheme: _
  } = e, h = i.useContext(a.Dx);
  a.PQ;
  let m = i.useMemo(() => (0, a.dI)({
    theme: null != n ? n : h.theme,
    primaryColor: null != o ? o : h.primaryColor,
    secondaryColor: null != s ? s : h.secondaryColor,
    gradient: null != l ? l : h.gradient,
    flags: null != c ? c : h.flags,
    contrast: null != u ? u : h.contrast,
    saturation: null != d ? d : h.saturation,
    density: null != f ? f : h.density,
    disableAdaptiveTheme: null != p ? p : h.disableAdaptiveTheme,
    reduceAdaptiveTheme: null != _ ? _ : h.reduceAdaptiveTheme
  }), [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, h.disableAdaptiveTheme, h.reduceAdaptiveTheme, o, s, l, c, u, d, f, p, _]);
  return (0, r.jsx)(a.Dx.Provider, {
    value: m,
    children: t
  })
}