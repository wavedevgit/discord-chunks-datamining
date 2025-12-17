/** Chunk was on web.js **/
/** chunk id: 892071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => y,
  vP: () => b
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
  Chunk740492 = require("./740492.js"),
  Chunk998502 = require("./998502.js");
let E = Chunk473749.createContext({
  lang: "",
  style: "",
  className: "",
  focused: false
});

function b() {
  let e = Chunk473749.useContext(E);
  if (true === module) throw Error("useRootElementContext must be used within a RootElementContextProvider");
  return module
}

function y(e) {
  let {
    rootClassName: t,
    lang: n,
    theme: a,
    density: b,
    focused: y,
    fontScale: O,
    fontScaleClass: v,
    mouseMode: S,
    keyboardModeEnabled: I,
    saturation: T,
    desaturateUserColors: C,
    useForcedColors: A,
    systemForcedColors: N,
    useReducedMotion: P,
    alwaysShowLinkDecorations: R,
    hardwareAccelerationEnabled: w,
    highContrastMode: D,
    isPopoutWindow: x,
    children: L
  } = e, j = window.CSS.supports("selector(::-webkit-scrollbar)"), M = (0, l.e7)([d.Z], () => d.Z.zoom), k = x ? "" : "--custom-zoom: ".concat(M, ";"), U = (0, m.Z)("highlight_mana_buttons"), G = (0, m.Z)("highlight_mana_components"), Z = (0, m.Z)("highlight_void_toggleables"), F = (0, m.Z)("highlight_void_buttons"), B = (0, l.e7)([h.ZP], () => h.ZP.hdrDynamicRange), V = "font-size: ".concat(O, "%; --saturation-factor: ").concat(T, "; dynamic-range-limit: ").concat(B, "; ").concat(k), H = o()((0, f.Z)(), (0, c.QeD)(a), "density-".concat(b), v, {
    "low-saturation": T <= c.AEw,
    "keyboard-mode": I,
    "decorate-links": R,
    "no-webkit-scrollbar": !j,
    "has-webkit-scrollbar": j,
    "mouse-mode": S,
    "reduce-motion": P,
    "full-motion": !P,
    "is-mobile": s.tq,
    "app-focused": y,
    "desaturate-user-colors": C,
    "disable-forced-colors": !A && "active" === N,
    "enable-forced-colors": A,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !w,
    "visual-refresh-chat-input": false,
    "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
    "mana-text-inputs": (0, p.U)("RootElementContextProvider"),
    "highlight-mana-buttons": U,
    "highlight-mana-components": G,
    "highlight-void-toggleables": Z,
    "highlight-void-buttons": F,
    "high-contrast-mode": D
  }, t), Y = i.useMemo(() => ({
    lang: n,
    style: V,
    className: H,
    focused: y
  }), [n, V, H, y]);
  return (0, u.ZP)(() => {
    g.ZP.setTrafficLightPosition({
      x: 9,
      y: 9
    })
  }), (0, r.jsx)(E.Provider, {
    value: Y,
    children: L
  })
}