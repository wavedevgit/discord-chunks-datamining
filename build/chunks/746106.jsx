/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk338390 = require("./338390.js"),
  Chunk803038 = require("./803038.js"),
  Chunk392358 = require("./392358.js"),
  Chunk591146 = require("./591146.js"),
  Chunk928518 = require("./928518.js"),
  Chunk823961 = require("./823961.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk264783 = require("./264783.js"),
  Chunk892071 = require("./892071.js");

function I(e) {
  let {
    windowKey: t,
    children: n
  } = e, o = null != t, [I] = i.useState(() => y.ZP.getEnableHardwareAcceleration()), {
    locale: T,
    theme: S,
    focused: A,
    currentWindow: N,
    fontScale: C,
    fontScaleClass: R,
    keyboardModeEnabled: P,
    saturation: w,
    desaturateUserColors: D,
    useForcedColors: L,
    systemForcedColors: x,
    useReducedMotion: M,
    alwaysShowLinkDecorations: k,
    confettiMode: j,
    highContrastMode: U
  } = (0, s.cj)([g.default, c.Z, E.Z, b.Z, h.Z, m.Z], () => {
    var e;
    return {
      locale: g.default.locale,
      theme: E.Z.theme,
      focused: o ? h.Z.getWindowFocused(t) : b.Z.isFocused(),
      currentWindow: o && null != (e = h.Z.getWindow(t)) ? e : window,
      fontScale: c.Z.fontScale,
      fontScaleClass: c.Z.fontScaleClass,
      keyboardModeEnabled: c.Z.keyboardModeEnabled,
      saturation: c.Z.saturation,
      desaturateUserColors: c.Z.desaturateUserColors,
      useForcedColors: c.Z.useForcedColors,
      systemForcedColors: c.Z.systemForcedColors,
      useReducedMotion: c.Z.useReducedMotion,
      alwaysShowLinkDecorations: c.Z.alwaysShowLinkDecorations,
      highContrastMode: c.Z.isHighContrastModeEnabled,
      confettiMode: m.Z.confettiMode
    }
  }), G = u.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, B = (0, _.Z)(N, __OVERLAY__ || A), Z = 0;
  1 !== w && (Z = (0, l.OdO)(Z, l.bgu.REDUCE_SATURATION_ENABLED));
  let F = (0, O.A)(),
    V = (0, p.Ml)("RootThemeContextProvider"),
    H = (0, p.CL)("RootThemeContextProvider"),
    Y = (0, p.VM)("RootThemeContextProvider"),
    W = f.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    K = (0, d.Z)("RootThemeContextProvider");
  return <l.wMY theme={S} flags={Z} saturation={w} density={F}><v.cE lang={T} theme={S} density={F} focused={A} fontScale={C} fontScaleClass={R} keyboardModeEnabled={P} mouseMode={B} saturation={w} desaturateUserColors={D} useForcedColors={L} systemForcedColors={x} useReducedMotion={M} alwaysShowLinkDecorations={k} hardwareAccelerationEnabled={I} highContrastMode={G && U} rootClassName={a()({
        "confetti-mode": j,
        "refresh-fast-follow-avatars": V && !K,
        "refresh-fast-follow-guild-bg": H,
        "refresh-fast-follow-distinct-borders": Y,
        "client-theme-color-picker": W,
        "align-chat-input": K
      })}>{n}</v.cE></l.wMY>
}