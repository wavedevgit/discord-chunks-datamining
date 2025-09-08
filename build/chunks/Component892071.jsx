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
  Chunk481060 = require("./481060.js"),
  Chunk597952 = require("./597952.js"),
  Chunk377089 = require("./377089.js"),
  Chunk877371 = require("./877371.js"),
  Chunk580747 = require("./580747.js"),
  Chunk819439 = require("./819439.js"),
  Chunk998502 = require("./998502.js");
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
    useForcedColors: T,
    systemForcedColors: S,
    useReducedMotion: A,
    alwaysShowLinkDecorations: C,
    hardwareAccelerationEnabled: N,
    highContrastMode: R,
    isPopoutWindow: P,
    children: w
  } = e, D = window.CSS.supports("selector(::-webkit-scrollbar)"), x = "font-size: ".concat(E, "%; --saturation-factor: ").concat(v, ";"), L = (0, f.Z)("highlight_mana_buttons"), j = (0, f.Z)("highlight_mana_components"), M = (0, f.Z)("highlight_void_toggleables"), k = (0, f.Z)("highlight_void_buttons"), U = o()((0, c.Z)(), (0, l.QeD)(a), "density-".concat(m), b, {
    "low-saturation": v <= l.AEw,
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
    "disable-forced-colors": !T && "active" === S,
    "enable-forced-colors": T,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !N,
    "visual-refresh-chat-input": false,
    "mana-toggle-inputs": (0, d.A)("RootElementContextProvider"),
    "mana-text-inputs": (0, u.U)("RootElementContextProvider"),
    "highlight-mana-buttons": L,
    "highlight-mana-components": j,
    "highlight-void-toggleables": M,
    "highlight-void-buttons": k,
    "high-contrast-mode": R
  }, t), G = i.useMemo(() => ({
    lang: n,
    style: x,
    className: U,
    focused: g
  }), [n, x, U, g]), B = (0, _.$)({
    location: "RootElementContextProvider"
  });
  return i.useLayoutEffect(() => {
    if (P) return;
    let e = B ? {
      x: 10,
      y: 13
    } : {
      x: 9,
      y: 9
    };
    p.ZP.setTrafficLightPosition(e)
  }, [P, B]), (0, r.jsx)(h.Provider, {
    value: G,
    children: w
  })
}