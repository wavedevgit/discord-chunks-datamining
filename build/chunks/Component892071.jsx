/** Chunk was on web.js **/
/** chunk id: 892071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => m,
  vP: () => h
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597952 = require("./597952.js"),
  Chunk377089 = require("./377089.js"),
  Chunk580747 = require("./580747.js"),
  Chunk819439 = require("./819439.js"),
  Chunk998502 = require("./998502.js");
let p = Chunk647438.createContext({
  lang: "",
  style: "",
  className: ""
});

function h() {
  let e = Chunk647438.useContext(p);
  if (true === module) throw Error("useRootElementContext must be used within a RootElementContextProvider");
  return module
}

function m(e) {
  let {
    rootClassName: t,
    lang: n,
    theme: o,
    density: h,
    focused: m,
    fontScale: g,
    fontScaleClass: E,
    mouseMode: b,
    keyboardModeEnabled: y,
    saturation: O,
    desaturateUserColors: v,
    useForcedColors: I,
    systemForcedColors: T,
    useReducedMotion: S,
    alwaysShowLinkDecorations: A,
    hardwareAccelerationEnabled: C,
    highContrastMode: N,
    isPopoutWindow: R,
    children: P
  } = e, w = window.CSS.supports("selector(::-webkit-scrollbar)"), D = "font-size: ".concat(g, "%; --saturation-factor: ").concat(O, ";"), x = (0, d.Z)("highlight_mana_buttons"), L = (0, d.Z)("highlight_mana_components"), j = (0, d.Z)("highlight_void_toggleables"), M = (0, d.Z)("highlight_void_buttons"), k = a()((0, c.Z)(), (0, l.QeD)(o), "density-".concat(h), E, {
    "low-saturation": O <= l.AEw,
    "keyboard-mode": y,
    "decorate-links": A,
    "no-webkit-scrollbar": !w,
    "has-webkit-scrollbar": w,
    "mouse-mode": b,
    "reduce-motion": S,
    "full-motion": !S,
    "is-mobile": s.tq,
    "app-focused": m,
    "desaturate-user-colors": v,
    "disable-forced-colors": !I && "active" === T,
    "enable-forced-colors": I,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !C,
    "visual-refresh-chat-input": false,
    "mana-text-inputs": (0, u.U)("RootElementContextProvider"),
    "highlight-mana-buttons": x,
    "highlight-mana-components": L,
    "highlight-void-toggleables": j,
    "highlight-void-buttons": M,
    "high-contrast-mode": N
  }, t), U = i.useMemo(() => ({
    lang: n,
    style: D,
    className: k
  }), [n, D, k]), G = (0, f.$V)({
    location: "RootElementContextProvider"
  });
  return i.useLayoutEffect(() => {
    if (R) return;
    let e = G ? {
      x: 10,
      y: 12
    } : {
      x: 9,
      y: 8
    };
    _.ZP.setTrafficLightPosition(e)
  }, [R, G]), (0, r.jsx)(p.Provider, {
    value: U,
    children: P
  })
}