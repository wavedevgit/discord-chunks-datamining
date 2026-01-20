/** Chunk was on web.js **/
/** chunk id: 892071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => b,
  vP: () => E
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597952 = require("./597952.js"),
  Chunk877371 = require("./877371.js"),
  Chunk580747 = require("./580747.js"),
  Chunk740492 = require("./740492.js"),
  Chunk998502 = require("./998502.js");
let g = Chunk473749.createContext({
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

function b(e) {
  let {
    rootClassName: t,
    lang: n,
    theme: a,
    density: E,
    focused: b,
    fontScale: y,
    fontScaleClass: O,
    mouseMode: v,
    keyboardModeEnabled: S,
    saturation: I,
    desaturateUserColors: T,
    useForcedColors: C,
    systemForcedColors: A,
    useReducedMotion: N,
    alwaysShowLinkDecorations: P,
    hardwareAccelerationEnabled: w,
    highContrastMode: R,
    isPopoutWindow: D,
    children: x
  } = e, L = window.CSS.supports("selector(::-webkit-scrollbar)"), j = (0, l.e7)([d.Z], () => d.Z.zoom), M = D ? "" : "--custom-zoom: ".concat(j, ";"), k = (0, _.Z)("highlight_mana_buttons"), U = (0, _.Z)("highlight_mana_components"), G = (0, _.Z)("highlight_void_toggleables"), Z = (0, _.Z)("highlight_void_buttons"), F = (0, l.e7)([h.ZP], () => h.ZP.hdrDynamicRange), B = "font-size: ".concat(y, "%; --saturation-factor: ").concat(I, "; dynamic-range-limit: ").concat(F, "; ").concat(M), V = o()((0, f.Z)(), (0, c.QeD)(a), "density-".concat(E), O, {
    "low-saturation": I <= c.AEw,
    "keyboard-mode": S,
    "decorate-links": P,
    "no-webkit-scrollbar": !L,
    "has-webkit-scrollbar": L,
    "mouse-mode": v,
    "reduce-motion": N,
    "full-motion": !N,
    "is-mobile": s.tq,
    "app-focused": b,
    "desaturate-user-colors": T,
    "disable-forced-colors": !C && "active" === A,
    "enable-forced-colors": C,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !w,
    "visual-refresh-chat-input": false,
    "mana-toggle-inputs": (0, p.A)("RootElementContextProvider"),
    "highlight-mana-buttons": k,
    "highlight-mana-components": U,
    "highlight-void-toggleables": G,
    "highlight-void-buttons": Z,
    "high-contrast-mode": R
  }, t), H = i.useMemo(() => ({
    lang: n,
    style: B,
    className: V,
    focused: b
  }), [n, B, V, b]);
  return (0, u.ZP)(() => {
    m.ZP.setTrafficLightPosition({
      x: 9,
      y: 9
    })
  }), (0, r.jsx)(g.Provider, {
    value: H,
    children: x
  })
}