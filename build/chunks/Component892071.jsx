/** Chunk was on web.js **/
/** chunk id: 892071, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => p,
  vP: () => _
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk597952 = require("./597952.js"),
  Chunk377089 = require("./377089.js"),
  Chunk580747 = require("./580747.js");
let f = Chunk73800.createContext({
  lang: "",
  style: "",
  className: ""
});

function _() {
  let e = Chunk73800.useContext(f);
  if (true === module) throw Error("useRootElementContext must be used within a RootElementContextProvider");
  return module
}

function p(e) {
  let {
    rootClassName: t,
    lang: n,
    theme: o,
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
    children: N
  } = e, C = window.CSS.supports("selector(::-webkit-scrollbar)"), R = "font-size: ".concat(h, "%; --saturation-factor: ").concat(b, ";"), P = (0, d.Z)("highlight_mana_buttons"), w = (0, d.Z)("highlight_mana_components"), D = (0, d.Z)("highlight_void_toggleables"), L = (0, d.Z)("highlight_void_buttons"), x = a()((0, c.Z)(), (0, l.QeD)(o), "density-".concat(_), m, {
    "low-saturation": b <= l.AEw,
    "keyboard-mode": E,
    "decorate-links": T,
    "no-webkit-scrollbar": !C,
    "has-webkit-scrollbar": C,
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
    "highlight-void-buttons": L,
    "high-contrast-mode": A
  }, t), M = i.useMemo(() => ({
    lang: n,
    style: R,
    className: x
  }), [n, R, x]);
  return (0, r.jsx)(f.Provider, {
    value: M,
    children: N
  })
}