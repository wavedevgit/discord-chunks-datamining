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
  Chunk377089 = require("./377089.js"),
  Chunk877371 = require("./877371.js"),
  Chunk580747 = require("./580747.js"),
  Chunk998502 = require("./998502.js");
let g = Chunk473749.createContext({
  lang: "",
  style: "",
  className: "",
  focused: false
});

function E() {
  let e = Chunk473749.useContext(g);
  if (true === module) throw Error("useRootElementContext must be used within a RootElementContextProvider");
  return module
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
    useForcedColors: A,
    systemForcedColors: C,
    useReducedMotion: N,
    alwaysShowLinkDecorations: P,
    hardwareAccelerationEnabled: R,
    highContrastMode: w,
    isPopoutWindow: D,
    children: x
  } = e, L = window.CSS.supports("selector(::-webkit-scrollbar)"), j = (0, l.e7)([d.Z], () => d.Z.zoom), M = D ? "" : "--custom-zoom: ".concat(j, ";"), k = "font-size: ".concat(y, "%; --saturation-factor: ").concat(I, "; ").concat(M), U = (0, m.Z)("highlight_mana_buttons"), G = (0, m.Z)("highlight_mana_components"), Z = (0, m.Z)("highlight_void_toggleables"), B = (0, m.Z)("highlight_void_buttons"), F = o()((0, f.Z)(), (0, c.QeD)(a), "density-".concat(E), O, {
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
    "disable-forced-colors": !A && "active" === C,
    "enable-forced-colors": A,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !R,
    "visual-refresh-chat-input": false,
    "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
    "mana-text-inputs": (0, p.U)("RootElementContextProvider"),
    "highlight-mana-buttons": U,
    "highlight-mana-components": G,
    "highlight-void-toggleables": Z,
    "highlight-void-buttons": B,
    "high-contrast-mode": w
  }, t), V = i.useMemo(() => ({
    lang: n,
    style: k,
    className: F,
    focused: b
  }), [n, k, F, b]);
  return (0, u.ZP)(() => {
    h.ZP.setTrafficLightPosition({
      x: 9,
      y: 9
    })
  }), (0, r.jsx)(g.Provider, {
    value: V,
    children: x
  })
}