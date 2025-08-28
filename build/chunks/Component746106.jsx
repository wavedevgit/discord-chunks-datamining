/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk338390 = require("./338390.js"),
  Chunk803038 = require("./803038.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk392358 = require("./392358.js"),
  Chunk591146 = require("./591146.js"),
  Chunk928518 = require("./928518.js"),
  Chunk823961 = require("./823961.js"),
  Chunk819439 = require("./819439.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk264783 = require("./264783.js"),
  Chunk892071 = require("./892071.jsx");

function S(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, S = null != t, [A] = i.useState(() => v.ZP.getEnableHardwareAcceleration()), {
    locale: C,
    theme: N,
    focused: R,
    currentWindow: P,
    fontScale: w,
    fontScaleClass: D,
    keyboardModeEnabled: x,
    saturation: L,
    desaturateUserColors: j,
    useForcedColors: M,
    systemForcedColors: k,
    useReducedMotion: U,
    alwaysShowLinkDecorations: G,
    confettiMode: B,
    highContrastMode: Z
  } = (0, s.cj)([b.default, c.Z, y.Z, O.Z, m.Z, g.Z], () => {
    var e;
    return {
      locale: b.default.locale,
      theme: null != n ? n : y.Z.theme,
      focused: S ? m.Z.getWindowFocused(t) : O.Z.isFocused(),
      currentWindow: S && null != (e = m.Z.getWindow(t)) ? e : window,
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
      confettiMode: g.Z.confettiMode
    }
  }), F = u.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, V = (0, p.Z)(P, __OVERLAY__ || R), H = 0;
  1 !== L && (H = (0, l.OdO)(H, l.bgu.REDUCE_SATURATION_ENABLED));
  let Y = (0, I.A)(),
    W = (0, h.Ml)("RootThemeContextProvider"),
    K = (0, h.CL)("RootThemeContextProvider"),
    z = (0, h.VM)("RootThemeContextProvider"),
    q = f.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    X = (0, d.Z)("RootThemeContextProvider"),
    Q = (0, E.$V)({
      location: "RootThemeContextProvider"
    }),
    J = (0, _.On)({
      isPopoutWindow: S,
      isSearchDesktopTopLevelEnabled: Q
    });
  return (0, r.jsx)(l.wMY, {
    theme: N,
    flags: H,
    saturation: L,
    density: Y,
    children: (0, r.jsx)(T.cE, {
      lang: C,
      theme: N,
      density: Y,
      focused: R,
      fontScale: w,
      fontScaleClass: D,
      keyboardModeEnabled: x,
      mouseMode: V,
      saturation: L,
      desaturateUserColors: j,
      useForcedColors: M,
      systemForcedColors: k,
      useReducedMotion: U,
      alwaysShowLinkDecorations: G,
      hardwareAccelerationEnabled: A,
      highContrastMode: F && Z,
      isPopoutWindow: S,
      rootClassName: o()(J, {
        "confetti-mode": B,
        "refresh-fast-follow-avatars": W && !X,
        "refresh-fast-follow-guild-bg": K,
        "refresh-fast-follow-distinct-borders": z,
        "client-theme-color-picker": q,
        "align-chat-input": X
      }),
      children: a
    })
  })
}