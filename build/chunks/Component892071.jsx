/** Chunk was on web.js **/
/** chunk id: 892071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => g,
  vP: () => m
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk597952 = require("./597952.js"),
  Chunk377089 = require("./377089.js"),
  Chunk877371 = require("./877371.js"),
  Chunk580747 = require("./580747.js");
let h = Chunk647438.createContext({
  lang: "",
  style: "",
  className: "",
  focused: false
});

function m() {
  let e = Chunk647438.useContext(h);
  if (true === module) throw Error("useRootElementContext must be used within a RootElementContextProvider");
  return module
}

function g(e) {
  let {
    rootClassName: t,
    lang: n,
    theme: a,
    density: m,
    focused: g,
    fontScale: E,
    fontScaleClass: b,
    mouseMode: y,
    keyboardModeEnabled: O,
    saturation: v,
    desaturateUserColors: I,
    useForcedColors: S,
    systemForcedColors: T,
    useReducedMotion: A,
    alwaysShowLinkDecorations: C,
    hardwareAccelerationEnabled: N,
    highContrastMode: R,
    isPopoutWindow: P,
    children: w
  } = e, D = window.CSS.supports("selector(::-webkit-scrollbar)"), L = (0, l.e7)([u.Z], () => u.Z.zoom), x = P ? "" : "--custom-zoom: ".concat(L, ";"), M = "font-size: ".concat(E, "%; --saturation-factor: ").concat(v, "; ").concat(x), k = (0, p.Z)("highlight_mana_buttons"), j = (0, p.Z)("highlight_mana_components"), U = (0, p.Z)("highlight_void_toggleables"), G = (0, p.Z)("highlight_void_buttons"), B = o()((0, d.Z)(), (0, c.QeD)(a), "density-".concat(m), b, {
    "low-saturation": v <= c.AEw,
    "keyboard-mode": O,
    "decorate-links": C,
    "no-webkit-scrollbar": !D,
    "has-webkit-scrollbar": D,
    "mouse-mode": y,
    "reduce-motion": A,
    "full-motion": !A,
    "is-mobile": s.tq,
    "app-focused": g,
    "desaturate-user-colors": I,
    "disable-forced-colors": !S && "active" === T,
    "enable-forced-colors": S,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !N,
    "visual-refresh-chat-input": false,
    "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
    "mana-text-inputs": (0, f.U)("RootElementContextProvider"),
    "highlight-mana-buttons": k,
    "highlight-mana-components": j,
    "highlight-void-toggleables": U,
    "highlight-void-buttons": G,
    "high-contrast-mode": R
  }, t), Z = i.useMemo(() => ({
    lang: n,
    style: M,
    className: B,
    focused: g
  }), [n, M, B, g]);
  return (0, r.jsx)(h.Provider, {
    value: Z,
    children: w
  })
}