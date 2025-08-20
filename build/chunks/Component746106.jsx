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
    children: n
  } = e, a = null != t, [S] = i.useState(() => v.ZP.getEnableHardwareAcceleration()), {
    locale: A,
    theme: C,
    focused: N,
    currentWindow: R,
    fontScale: P,
    fontScaleClass: w,
    keyboardModeEnabled: D,
    saturation: x,
    desaturateUserColors: L,
    useForcedColors: j,
    systemForcedColors: M,
    useReducedMotion: k,
    alwaysShowLinkDecorations: U,
    confettiMode: G,
    highContrastMode: B
  } = (0, s.cj)([b.default, c.Z, y.Z, O.Z, m.Z, g.Z], () => {
    var e;
    return {
      locale: b.default.locale,
      theme: y.Z.theme,
      focused: a ? m.Z.getWindowFocused(t) : O.Z.isFocused(),
      currentWindow: a && null != (e = m.Z.getWindow(t)) ? e : window,
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
  }), Z = u.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, V = (0, p.Z)(R, __OVERLAY__ || N), F = 0;
  1 !== x && (F = (0, l.OdO)(F, l.bgu.REDUCE_SATURATION_ENABLED));
  let H = (0, I.A)(),
    Y = (0, h.Ml)("RootThemeContextProvider"),
    W = (0, h.CL)("RootThemeContextProvider"),
    K = (0, h.VM)("RootThemeContextProvider"),
    z = f.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    q = (0, d.Z)("RootThemeContextProvider"),
    X = (0, E.$)({
      location: "RootThemeContextProvider"
    }),
    Q = (0, _.On)({
      isPopoutWindow: a,
      isSearchDesktopTopLevelEnabled: X
    });
  return (0, r.jsx)(l.wMY, {
    theme: C,
    flags: F,
    saturation: x,
    density: H,
    children: (0, r.jsx)(T.cE, {
      lang: A,
      theme: C,
      density: H,
      focused: N,
      fontScale: P,
      fontScaleClass: w,
      keyboardModeEnabled: D,
      mouseMode: V,
      saturation: x,
      desaturateUserColors: L,
      useForcedColors: j,
      systemForcedColors: M,
      useReducedMotion: k,
      alwaysShowLinkDecorations: U,
      hardwareAccelerationEnabled: S,
      highContrastMode: Z && B,
      rootClassName: o()(Q, {
        "confetti-mode": G,
        "refresh-fast-follow-avatars": Y && !q,
        "refresh-fast-follow-guild-bg": W,
        "refresh-fast-follow-distinct-borders": K,
        "client-theme-color-picker": z,
        "align-chat-input": q
      }),
      children: n
    })
  })
}