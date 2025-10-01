/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => L
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
  Chunk819439 = require("./819439.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk264783 = require("./264783.js"),
  Chunk892071 = require("./892071.jsx"),
  Chunk614177 = require("./614177.js"),
  Chunk388032 = require("./388032.jsx");

function D(e, t, n, r) {
  let o = i.useContext(_.Z),
    s = i.useCallback(() => ({
      i18n: {
        SPINNER_LOADING_LABEL: w.intl.string(w.t.ZTNur6),
        BUTTON_LOADING_STARTED_LABEL: w.intl.string(w.t.pfChQk),
        BUTTON_LOADING_FINISHED_LABEL: w.intl.string(w.t.SVPara),
        CLOSE_BUTTON_LABEL: w.intl.string(w.t.cpT0Cg),
        PLAY_BUTTON_LABEL: w.intl.string(w.t.RscU7O),
        PAUSE_BUTTON_LABEL: w.intl.string(w.t.ZcgDJS),
        NEW: w.intl.string(w.t.y2b7CA),
        BETA: w.intl.string(w.t.oW0eUV),
        EARLY_ACCESS: w.intl.string(w.t.EYxi0t),
        BILLING_TRIAL_FREE_TRIAL_TEXT: w.intl.string(w.t.IBYG5e),
        MODAL_DONT_SHOW_AGAIN: w.intl.string(P.default.m3Vfcn)
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
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), w.intl.onLocaleChange(e)
  }, [s]), l
}

function L(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [c] = i.useState(() => C.ZP.getEnableHardwareAcceleration()), {
    locale: _,
    theme: y,
    focused: P,
    currentWindow: w,
    fontScale: L,
    fontScaleClass: x,
    keyboardModeEnabled: j,
    saturation: M,
    desaturateUserColors: k,
    useForcedColors: U,
    systemForcedColors: G,
    useReducedMotion: B,
    alwaysShowLinkDecorations: Z,
    confettiMode: F,
    highContrastMode: V
  } = (0, l.cj)([T.default, d.Z, S.Z, A.Z, O.Z, v.Z], () => {
    var e;
    return {
      locale: T.default.locale,
      theme: null != n ? n : S.Z.theme,
      focused: o ? O.Z.getWindowFocused(t) : A.Z.isFocused(),
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
  }), H = f.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, Y = (0, m.Z)(w, __OVERLAY__ || P), W = 0;
  1 !== M && (W = (0, u.OdO)(W, u.bgu.REDUCE_SATURATION_ENABLED));
  let K = (0, N.A)(),
    z = (0, g.Ml)("RootThemeContextProvider"),
    q = (0, g.CL)("RootThemeContextProvider"),
    X = (0, g.VM)("RootThemeContextProvider"),
    Q = (0, E.U)("RootThemeContextProvider"),
    J = (0, b.A)("RootThemeContextProvider"),
    $ = p.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    ee = (0, I.$)({
      location: "RootThemeContextProvider"
    }),
    et = (0, h.On)({
      isPopoutWindow: o,
      isSearchDesktopTopLevelEnabled: ee
    }),
    en = D(y, M, i.useMemo(() => {
      let e = [];
      return z && e.push("refresh-fast-follow-avatars"), q && e.push("refresh-fast-follow-guild-bg"), X && e.push("refresh-fast-follow-distinct-borders"), Q && e.push("mana-text-inputs"), J && e.push("mana-toggle-inputs"), e
    }, [z, q, X, Q, J]), P);
  return (0, r.jsx)(u.kb5, {
    value: en,
    children: (0, r.jsx)(u.wMY, {
      theme: y,
      flags: W,
      saturation: M,
      density: K,
      children: (0, r.jsx)(R.cE, {
        lang: _,
        theme: y,
        density: K,
        focused: P,
        fontScale: L,
        fontScaleClass: x,
        keyboardModeEnabled: j,
        mouseMode: Y,
        saturation: M,
        desaturateUserColors: k,
        useForcedColors: U,
        systemForcedColors: G,
        useReducedMotion: B,
        alwaysShowLinkDecorations: Z,
        hardwareAccelerationEnabled: c,
        highContrastMode: H && V,
        isPopoutWindow: o,
        rootClassName: s()(et, {
          "confetti-mode": F,
          "refresh-fast-follow-avatars": z,
          "refresh-fast-follow-guild-bg": q,
          "refresh-fast-follow-distinct-borders": X,
          "client-theme-color-picker": $
        }),
        children: a
      })
    })
  })
}