/** Chunk was on web.js **/
/** chunk id: 463085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => a
}), require("./997841.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk710260 = require("./710260.js");

function a(e) {
  let {
    children: t,
    theme: n,
    primaryColor: a,
    secondaryColor: s,
    gradient: l,
    flags: c,
    contrast: u,
    saturation: d,
    density: f,
    disableAdaptiveTheme: _,
    reduceAdaptiveTheme: p
  } = e, h = i.useContext(o.Ni);
  o.qF;
  let m = i.useMemo(() => (0, o.TT)({
    theme: null != n ? n : h.theme,
    primaryColor: null != a ? a : h.primaryColor,
    secondaryColor: null != s ? s : h.secondaryColor,
    gradient: null != l ? l : h.gradient,
    flags: null != c ? c : h.flags,
    contrast: null != u ? u : h.contrast,
    saturation: null != d ? d : h.saturation,
    density: null != f ? f : h.density,
    disableAdaptiveTheme: null != _ ? _ : h.disableAdaptiveTheme,
    reduceAdaptiveTheme: null != p ? p : h.reduceAdaptiveTheme
  }), [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, h.disableAdaptiveTheme, h.reduceAdaptiveTheme, a, s, l, c, u, d, f, _, p]);
  return <o.Ni.Provider value={m}>{t}</o.Ni.Provider>
}