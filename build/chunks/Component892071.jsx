/** Chunk was on web.js **/
/** chunk id: 892071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => p,
  vP: () => _
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597952 = require("./597952.js"),
  Chunk377089 = require("./377089.js"),
  Chunk580747 = require("./580747.js");
let f = Chunk647438.createContext({
  lang: "",
  style: "",
  className: ""
});

function _() {
  let e = Chunk647438.useContext(f);
  if (true === module) throw Error("useRootElementContext must be used within a RootElementContextProvider");
  return module
}

function p(e) {
  let {
    rootClassName: t,
    lang: n,
    theme: a,
    density: _,
    focused: p,
    fontScale: h,
    fontScaleClass: m,
    mouseMode: g,
    keyboardModeEnabled: E,
    saturation: b,
    desaturateUserColors: y,
    useForcedColors: O,
    systemForcedColors: v,
    useReducedMotion: I,
    alwaysShowLinkDecorations: T,
    hardwareAccelerationEnabled: S,
    highContrastMode: A,
    children: C
  } = e, N = window.CSS.supports("selector(::-webkit-scrollbar)"), R = "font-size: ".concat(h, "%; --saturation-factor: ").concat(b, ";"), P = (0, d.Z)("highlight_mana_buttons"), w = (0, d.Z)("highlight_mana_components"), D = (0, d.Z)("highlight_void_toggleables"), x = (0, d.Z)("highlight_void_buttons"), L = o()((0, c.Z)(), (0, l.QeD)(a), "density-".concat(_), m, {
    "low-saturation": b <= l.AEw,
    "keyboard-mode": E,
    "decorate-links": T,
    "no-webkit-scrollbar": !N,
    "has-webkit-scrollbar": N,
    "mouse-mode": g,
    "reduce-motion": I,
    "full-motion": !I,
    "is-mobile": s.tq,
    "app-focused": p,
    "desaturate-user-colors": y,
    "disable-forced-colors": !O && "active" === v,
    "enable-forced-colors": O,
    "visual-refresh": true,
    "hardware-acceleration-disabled": !S,
    "visual-refresh-chat-input": false,
    "mana-text-inputs": (0, u.U)("RootElementContextProvider"),
    "highlight-mana-buttons": P,
    "highlight-mana-components": w,
    "highlight-void-toggleables": D,
    "highlight-void-buttons": x,
    "high-contrast-mode": A
  }, t), j = i.useMemo(() => ({
    lang: n,
    style: R,
    className: L
  }), [n, R, L]);
  return (0, r.jsx)(f.Provider, {
    value: j,
    children: C
  })
}