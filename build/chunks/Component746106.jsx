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
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk793903 = require("./793903.js"),
  Chunk338390 = require("./338390.js"),
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
  Chunk388032 = require("./388032.jsx");

function w(e, t, n) {
  let r = i.useContext(f.Z),
    o = i.useCallback(() => ({
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
        BILLING_TRIAL_FREE_TRIAL_TEXT: P.intl.string(P.t.IBYG5e)
      },
      theme: e,
      saturation: t,
      defaultLayerContext: y.nz,
      experiments: {
        enabledExperiments: n
      },
      trackImpression: r
    }), [e, t, n, r]),
    [s, l] = i.useState(o);
  return i.useLayoutEffect(() => {
    function e() {
      l(o)
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), P.intl.onLocaleChange(e)
  }, [o]), s
}

function D(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [f] = i.useState(() => C.ZP.getEnableHardwareAcceleration()), {
    locale: y,
    theme: P,
    focused: D,
    currentWindow: x,
    fontScale: L,
    fontScaleClass: j,
    keyboardModeEnabled: M,
    saturation: k,
    desaturateUserColors: U,
    useForcedColors: G,
    systemForcedColors: B,
    useReducedMotion: Z,
    alwaysShowLinkDecorations: F,
    confettiMode: V,
    highContrastMode: H
  } = (0, l.cj)([T.default, u.Z, S.Z, A.Z, O.Z, v.Z], () => {
    var e;
    return {
      locale: T.default.locale,
      theme: null != n ? n : S.Z.theme,
      focused: o ? O.Z.getWindowFocused(t) : A.Z.isFocused(),
      currentWindow: o && null != (e = O.Z.getWindow(t)) ? e : window,
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
      confettiMode: v.Z.confettiMode
    }
  }), Y = d.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, W = (0, m.Z)(x, __OVERLAY__ || D), K = 0;
  1 !== k && (K = (0, c.OdO)(K, c.bgu.REDUCE_SATURATION_ENABLED));
  let z = (0, N.A)(),
    q = (0, g.Ml)("RootThemeContextProvider"),
    X = (0, g.CL)("RootThemeContextProvider"),
    Q = (0, g.VM)("RootThemeContextProvider"),
    J = (0, E.U)("RootThemeContextProvider"),
    $ = (0, b.A)("RootThemeContextProvider"),
    ee = p.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    et = (0, _.Z)("RootThemeContextProvider"),
    en = (0, I.$)({
      location: "RootThemeContextProvider"
    }),
    er = (0, h.On)({
      isPopoutWindow: o,
      isSearchDesktopTopLevelEnabled: en
    }),
    ei = w(P, k, i.useMemo(() => {
      let e = [];
      return q && e.push("refresh-fast-follow-avatars"), X && e.push("refresh-fast-follow-guild-bg"), Q && e.push("refresh-fast-follow-distinct-borders"), J && e.push("mana-text-inputs"), $ && e.push("mana-toggle-inputs"), e
    }, [q, X, Q, J, $]));
  return (0, r.jsx)(c.kb5, {
    value: ei,
    children: (0, r.jsx)(c.wMY, {
      theme: P,
      flags: K,
      saturation: k,
      density: z,
      children: (0, r.jsx)(R.cE, {
        lang: y,
        theme: P,
        density: z,
        focused: D,
        fontScale: L,
        fontScaleClass: j,
        keyboardModeEnabled: M,
        mouseMode: W,
        saturation: k,
        desaturateUserColors: U,
        useForcedColors: G,
        systemForcedColors: B,
        useReducedMotion: Z,
        alwaysShowLinkDecorations: F,
        hardwareAccelerationEnabled: f,
        highContrastMode: Y && H,
        isPopoutWindow: o,
        rootClassName: s()(er, {
          "confetti-mode": V,
          "refresh-fast-follow-avatars": q && !et,
          "refresh-fast-follow-guild-bg": X,
          "refresh-fast-follow-distinct-borders": Q,
          "client-theme-color-picker": ee,
          "align-chat-input": et
        }),
        children: a
      })
    })
  })
}