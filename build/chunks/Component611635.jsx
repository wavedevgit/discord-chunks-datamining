/** Chunk was on web.js **/
/** chunk id: 611635, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  fs: () => y,
  xb: () => E
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk607399 = require("./607399.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk775602 = require("./775602.js"),
  Chunk203740 = require("./203740.js"),
  Chunk614738 = require("./614738.js"),
  Chunk354328 = require("./354328.js"),
  Chunk964404 = require("./964404.js"),
  Chunk837921 = require("./837921.js");
let g = Chunk64700.createContext({
  lang: "",
  style: "",
  className: "",
  focused: false
});

function E() {
  let e = i.useContext(g);
  if (true === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
  return e
}

function y(e) {
  let {
    rootClassName: t,
    lang: n,
    theme: a,
    density: E,
    focused: y,
    fontScale: b,
    fontScaleClass: O,
    mouseMode: v,
    keyboardModeEnabled: A,
    saturation: I,
    desaturateUserColors: S,
    useForcedColors: T,
    systemForcedColors: C,
    useReducedMotion: N,
    alwaysShowLinkDecorations: w,
    hardwareAccelerationEnabled: R,
    highContrastMode: P,
    isPopoutWindow: D,
    children: L
  } = e, x = window.CSS.supports("selector(::-webkit-scrollbar)"), M = (0, l.bG)([d.A], () => d.A.zoom), j = D ? "" : "--custom-zoom: ".concat(M, ";"), k = (0, _.A)("highlight_mana_buttons"), U = (0, _.A)("highlight_mana_components"), G = (0, _.A)("highlight_void_toggleables"), F = (0, _.A)("highlight_void_buttons"), V = (0, l.bG)([h.Ay], () => h.Ay.hdrDynamicRange), B = "font-size: ".concat(b, "%; --saturation-factor: ").concat(I, "; dynamic-range-limit: ").concat(V, "; ").concat(j), H = o()((0, f.A)(), (0, c.mo9)(a), "density-".concat(E), O, {
    "low-saturation": I <= c.yvq,
    "keyboard-mode": A,
    "decorate-links": w,
    "no-webkit-scrollbar": !x,
    "has-webkit-scrollbar": x,
    "mouse-mode": v,
    "reduce-motion": N,
    "full-motion": !N,
    "is-mobile": s.Fr,
    "app-focused": y,
    "desaturate-user-colors": S,
    "disable-forced-colors": !T && "active" === C,
    "enable-forced-colors": T,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !R,
    "visual-refresh-chat-input": false,
    "mana-toggle-inputs": (0, p.y)("RootElementContextProvider"),
    "highlight-mana-buttons": k,
    "highlight-mana-components": U,
    "highlight-void-toggleables": G,
    "highlight-void-buttons": F,
    "high-contrast-mode": P
  }, t), Y = i.useMemo(() => ({
    lang: n,
    style: B,
    className: H,
    focused: y
  }), [n, B, H, y]);
  return (0, u.Ay)(() => {
    m.Ay.setTrafficLightPosition({
      x: 9,
      y: 9
    })
  }), (0, r.jsx)(g.Provider, {
    value: Y,
    children: L
  })
}