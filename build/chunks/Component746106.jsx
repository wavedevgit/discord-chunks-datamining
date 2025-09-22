/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk631562 = require("./631562.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk338390 = require("./338390.js"),
  Chunk803038 = require("./803038.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk392358 = require("./392358.js"),
  Chunk591146 = require("./591146.js"),
  Chunk314910 = require("./314910.jsx"),
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

function N(e, t) {
  let n = i.useCallback(() => ({
      i18n: {
        SPINNER_LOADING_LABEL: C.intl.string(C.t.ZTNur6),
        BUTTON_LOADING_STARTED_LABEL: C.intl.string(C.t.pfChQk),
        BUTTON_LOADING_FINISHED_LABEL: C.intl.string(C.t.SVPara),
        CLOSE_BUTTON_LABEL: C.intl.string(C.t.cpT0Cg),
        PLAY_BUTTON_LABEL: C.intl.string(C.t.RscU7O),
        PAUSE_BUTTON_LABEL: C.intl.string(C.t.ZcgDJS),
        NEW: C.intl.string(C.t.y2b7CA),
        BETA: C.intl.string(C.t.oW0eUV),
        EARLY_ACCESS: C.intl.string(C.t.EYxi0t),
        BILLING_TRIAL_FREE_TRIAL_TEXT: C.intl.string(C.t.IBYG5e)
      },
      theme: e,
      saturation: t,
      defaultLayerContext: g.nz
    }), [e, t]),
    [r, o] = i.useState(n);
  return i.useLayoutEffect(() => {
    function e() {
      o(n)
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), C.intl.onLocaleChange(e)
  }, [n]), r
}

function R(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [g] = i.useState(() => T.ZP.getEnableHardwareAcceleration()), {
    locale: C,
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
  } = (0, l.cj)([O.default, u.Z, v.Z, I.Z, E.Z, b.Z], () => {
    var e;
    return {
      locale: O.default.locale,
      theme: null != n ? n : v.Z.theme,
      focused: o ? E.Z.getWindowFocused(t) : I.Z.isFocused(),
      currentWindow: o && null != (e = E.Z.getWindow(t)) ? e : window,
      fontScale: u.Z.fontScale,
      fontScaleClass: u.Z.fontScaleClass,
      keyboardModeEnabled: u.Z.keyboardModeEnabled,
      saturation: u.Z.saturation,
      desaturateUserColors: u.Z.desaturateUserColors,
      useForcedColors: u.Z.useForcedColors,
      systemForcedColors: u.Z.systemForcedColors,
      useReducedMotion: u.Z.useReducedMotion,
      alwaysShowLinkDecorations: u.Z.alwaysShowLinkDecorations,
      highContrastMode: u.Z.isHighContrastModeEnabled,
      confettiMode: b.Z.confettiMode
    }
  }), V = d.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, H = (0, h.Z)(w, __OVERLAY__ || P), Y = 0;
  1 !== j && (Y = (0, c.OdO)(Y, c.bgu.REDUCE_SATURATION_ENABLED));
  let W = (0, S.A)(),
    K = (0, m.Ml)("RootThemeContextProvider"),
    z = (0, m.CL)("RootThemeContextProvider"),
    q = (0, m.VM)("RootThemeContextProvider"),
    X = _.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    Q = (0, f.Z)("RootThemeContextProvider"),
    J = (0, y.$)({
      location: "RootThemeContextProvider"
    }),
    $ = (0, p.On)({
      isPopoutWindow: o,
      isSearchDesktopTopLevelEnabled: J
    }),
    ee = N(R, j);
  return (0, r.jsx)(c.kb5, {
    value: ee,
    children: (0, r.jsx)(c.wMY, {
      theme: R,
      flags: Y,
      saturation: j,
      density: W,
      children: (0, r.jsx)(A.cE, {
        lang: C,
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
        hardwareAccelerationEnabled: g,
        highContrastMode: V && F,
        isPopoutWindow: o,
        rootClassName: s()($, {
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