/** Chunk was on web.js **/
/** chunk id: 795452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => o
}), require("./997841.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk70007 = require("./70007.jsx");

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
  } = e, h = i.useContext(a.Ni);
  a.qF;
  let m = i.useMemo(() => (0, a.TT)({
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
  return (0, r.jsx)(a.Ni.Provider, {
    value: m,
    children: t
  })
}