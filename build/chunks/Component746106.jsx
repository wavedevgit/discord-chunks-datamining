/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => A
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
  Chunk892071 = require("./892071.jsx"),
  Chunk388032 = require("./388032.jsx");

function A(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, A = null != t, [C] = i.useState(() => v.ZP.getEnableHardwareAcceleration()), {
    locale: N,
    theme: R,
    focused: P,
    currentWindow: w,
    fontScale: D,
    fontScaleClass: x,
    keyboardModeEnabled: L,
    saturation: j,
    desaturateUserColors: M,
    useForcedColors: k,
    systemForcedColors: U,
    useReducedMotion: G,
    alwaysShowLinkDecorations: B,
    confettiMode: Z,
    highContrastMode: F
  } = (0, s.cj)([b.default, c.Z, y.Z, O.Z, m.Z, g.Z], () => {
    var e;
    return {
      locale: b.default.locale,
      theme: null != n ? n : y.Z.theme,
      focused: A ? m.Z.getWindowFocused(t) : O.Z.isFocused(),
      currentWindow: A && null != (e = m.Z.getWindow(t)) ? e : window,
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
  }), V = u.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, H = (0, p.Z)(w, __OVERLAY__ || P), Y = 0;
  1 !== j && (Y = (0, l.OdO)(Y, l.bgu.REDUCE_SATURATION_ENABLED));
  let W = (0, I.A)(),
    K = (0, h.Ml)("RootThemeContextProvider"),
    z = (0, h.CL)("RootThemeContextProvider"),
    q = (0, h.VM)("RootThemeContextProvider"),
    X = f.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    Q = (0, d.Z)("RootThemeContextProvider"),
    J = (0, E.$)({
      location: "RootThemeContextProvider"
    }),
    $ = (0, _.On)({
      isPopoutWindow: A,
      isSearchDesktopTopLevelEnabled: J
    }),
    ee = i.useMemo(() => ({
      i18n: {
        SPINNER_LOADING_LABEL: S.intl.string(S.t.ZTNur6),
        BUTTON_LOADING_STARTED_LABEL: S.intl.string(S.t.pfChQk),
        BUTTON_LOADING_FINISHED_LABEL: S.intl.string(S.t.SVPara),
        CLOSE_BUTTON_LABEL: S.intl.string(S.t.cpT0Cg),
        PLAY_BUTTON_LABEL: S.intl.string(S.t.RscU7O),
        PAUSE_BUTTON_LABEL: S.intl.string(S.t.ZcgDJS)
      },
      theme: R,
      saturation: j
    }), [R, j]);
  return (0, r.jsx)(l.kb5, {
    value: ee,
    children: (0, r.jsx)(l.wMY, {
      theme: R,
      flags: Y,
      saturation: j,
      density: W,
      children: (0, r.jsx)(T.cE, {
        lang: N,
        theme: R,
        density: W,
        focused: P,
        fontScale: D,
        fontScaleClass: x,
        keyboardModeEnabled: L,
        mouseMode: H,
        saturation: j,
        desaturateUserColors: M,
        useForcedColors: k,
        systemForcedColors: U,
        useReducedMotion: G,
        alwaysShowLinkDecorations: B,
        hardwareAccelerationEnabled: C,
        highContrastMode: V && F,
        isPopoutWindow: A,
        rootClassName: o()($, {
          "confetti-mode": Z,
          "refresh-fast-follow-avatars": K && !Q,
          "refresh-fast-follow-guild-bg": z,
          "refresh-fast-follow-distinct-borders": q,
          "client-theme-color-picker": X,
          "align-chat-input": Q
        }),
        children: a
      })
    })
  })
}