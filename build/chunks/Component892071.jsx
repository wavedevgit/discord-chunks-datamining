/** Chunk was on web.js **/
/** chunk id: 892071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => b,
  vP: () => E
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
  Chunk580747 = require("./580747.js"),
  Chunk819439 = require("./819439.js"),
  Chunk998502 = require("./998502.js");
let g = Chunk647438.createContext({
  lang: "",
  style: "",
  className: "",
  focused: false
});

function E() {
  let e = Chunk647438.useContext(g);
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
    keyboardModeEnabled: I,
    saturation: T,
    desaturateUserColors: S,
    useForcedColors: A,
    systemForcedColors: C,
    useReducedMotion: N,
    alwaysShowLinkDecorations: R,
    hardwareAccelerationEnabled: P,
    highContrastMode: w,
    isPopoutWindow: D,
    children: x
  } = e, L = window.CSS.supports("selector(::-webkit-scrollbar)"), j = (0, l.e7)([u.Z], () => u.Z.zoom), M = D ? "" : "--custom-zoom: ".concat(j, ";"), k = "font-size: ".concat(y, "%; --saturation-factor: ").concat(T, "; ").concat(M), U = (0, p.Z)("highlight_mana_buttons"), G = (0, p.Z)("highlight_mana_components"), B = (0, p.Z)("highlight_void_toggleables"), Z = (0, p.Z)("highlight_void_buttons"), F = o()((0, d.Z)(), (0, c.QeD)(a), "density-".concat(E), O, {
    "low-saturation": T <= c.AEw,
    "keyboard-mode": I,
    "decorate-links": R,
    "no-webkit-scrollbar": !L,
    "has-webkit-scrollbar": L,
    "mouse-mode": v,
    "reduce-motion": N,
    "full-motion": !N,
    "is-mobile": s.tq,
    "app-focused": b,
    "desaturate-user-colors": S,
    "disable-forced-colors": !A && "active" === C,
    "enable-forced-colors": A,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !P,
    "visual-refresh-chat-input": false,
    "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
    "mana-text-inputs": (0, f.U)("RootElementContextProvider"),
    "highlight-mana-buttons": U,
    "highlight-mana-components": G,
    "highlight-void-toggleables": B,
    "highlight-void-buttons": Z,
    "high-contrast-mode": w
  }, t), V = i.useMemo(() => ({
    lang: n,
    style: k,
    className: F,
    focused: b
  }), [n, k, F, b]), H = (0, h.$)({
    location: "RootElementContextProvider"
  });
  return i.useLayoutEffect(() => {
    if (D) return;
    let e = H ? {
      x: 10,
      y: 13
    } : {
      x: 9,
      y: 9
    };
    m.ZP.setTrafficLightPosition(e)
  }, [D, H]), (0, r.jsx)(g.Provider, {
    value: V,
    children: x
  })
}