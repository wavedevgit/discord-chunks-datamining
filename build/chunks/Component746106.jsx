/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk631562 = require("./631562.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk198168 = require("./198168.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk793903 = require("./793903.js"),
  Chunk803038 = require("./803038.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk392358 = require("./392358.js"),
  Chunk591146 = require("./591146.js"),
  Chunk377089 = require("./377089.js"),
  Chunk877371 = require("./877371.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk928518 = require("./928518.js"),
  Chunk823961 = require("./823961.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk264783 = require("./264783.js"),
  Chunk892071 = require("./892071.jsx"),
  Chunk490340 = require("./490340.js"),
  Chunk388032 = require("./388032.jsx");

function w(e, t, n, r) {
  let o = i.useContext(_.Z),
    s = i.useCallback(() => ({
      i18n: {
        SPINNER_LOADING_LABEL: P.intl.string(P.t.ZTNur6),
        BUTTON_LOADING_STARTED_LABEL: P.intl.string(P.t.pfChQk),
        BUTTON_LOADING_FINISHED_LABEL: P.intl.string(P.t.SVPara),
        CLOSE_BUTTON_LABEL: P.intl.string(P.t.cpT0Cg),
        PLAY_BUTTON_LABEL: P.intl.string(P.t.RscU7O),
        PAUSE_BUTTON_LABEL: P.intl.string(P.t.ZcgDJS),
        NEW: P.intl.string(P.t.y2b7CA),
        BETA: P.intl.string(P.t.oW0eUV),
        EARLY_ACCESS: P.intl.string(P.t.EYxi0t),
        BILLING_TRIAL_FREE_TRIAL_TEXT: P.intl.string(P.t.IBYG5e),
        MODAL_DONT_SHOW_AGAIN: P.intl.string(R.default.m3Vfcn)
      },
      theme: e,
      saturation: t,
      defaultLayerContext: y.nz,
      experiments: {
        enabledExperiments: n
      },
      trackImpression: o,
      isWindowFocused: () => r,
      dynamicGraphicComponents: c._
    }), [e, t, n, o, r]),
    [l, u] = i.useState(s);
  return i.useLayoutEffect(() => {
    function e() {
      u(s)
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), P.intl.onLocaleChange(e)
  }, [s]), l
}

function D(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [c] = i.useState(() => A.ZP.getEnableHardwareAcceleration()), {
    locale: _,
    theme: y,
    focused: R,
    currentWindow: P,
    fontScale: D,
    fontScaleClass: L,
    keyboardModeEnabled: x,
    saturation: M,
    desaturateUserColors: j,
    useForcedColors: k,
    systemForcedColors: U,
    useReducedMotion: G,
    alwaysShowLinkDecorations: B,
    confettiMode: Z,
    highContrastMode: F
  } = (0, l.cj)([I.default, d.Z, T.Z, S.Z, O.Z, v.Z], () => {
    var e;
    return {
      locale: I.default.locale,
      theme: null != n ? n : T.Z.theme,
      focused: o ? O.Z.getWindowFocused(t) : S.Z.isFocused(),
      currentWindow: o && null != (e = O.Z.getWindow(t)) ? e : window,
      fontScale: d.Z.fontScale,
      fontScaleClass: d.Z.fontScaleClass,
      keyboardModeEnabled: d.Z.keyboardModeEnabled,
      saturation: d.Z.saturation,
      desaturateUserColors: d.Z.desaturateUserColors,
      useForcedColors: d.Z.useForcedColors,
      systemForcedColors: d.Z.systemForcedColors,
      useReducedMotion: d.Z.useReducedMotion,
      alwaysShowLinkDecorations: d.Z.alwaysShowLinkDecorations,
      highContrastMode: d.Z.isHighContrastModeEnabled,
      confettiMode: v.Z.confettiMode
    }
  }), V = f.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, H = (0, m.Z)(P, __OVERLAY__ || R), Y = 0;
  1 !== M && (Y = (0, u.OdO)(Y, u.bgu.REDUCE_SATURATION_ENABLED));
  let W = (0, C.A)(),
    K = (0, g.Ml)("RootThemeContextProvider"),
    z = (0, g.CL)("RootThemeContextProvider"),
    q = (0, g.VM)("RootThemeContextProvider"),
    X = (0, E.U)("RootThemeContextProvider"),
    Q = (0, b.A)("RootThemeContextProvider"),
    J = p.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    $ = (0, h.On)({
      isPopoutWindow: o
    }),
    ee = w(y, M, i.useMemo(() => {
      let e = [];
      return K && e.push("refresh-fast-follow-avatars"), z && e.push("refresh-fast-follow-guild-bg"), q && e.push("refresh-fast-follow-distinct-borders"), X && e.push("mana-text-inputs"), Q && e.push("mana-toggle-inputs"), e
    }, [K, z, q, X, Q]), R);
  return (0, r.jsx)(u.kb5, {
    value: ee,
    children: (0, r.jsx)(u.wMY, {
      theme: y,
      flags: Y,
      saturation: M,
      density: W,
      children: (0, r.jsx)(N.cE, {
        lang: _,
        theme: y,
        density: W,
        focused: R,
        fontScale: D,
        fontScaleClass: L,
        keyboardModeEnabled: x,
        mouseMode: H,
        saturation: M,
        desaturateUserColors: j,
        useForcedColors: k,
        systemForcedColors: U,
        useReducedMotion: G,
        alwaysShowLinkDecorations: B,
        hardwareAccelerationEnabled: c,
        highContrastMode: V && F,
        isPopoutWindow: o,
        rootClassName: s()($, {
          "confetti-mode": Z,
          "refresh-fast-follow-avatars": K,
          "refresh-fast-follow-guild-bg": z,
          "refresh-fast-follow-distinct-borders": q,
          "client-theme-color-picker": J
        }),
        children: a
      })
    })
  })
}