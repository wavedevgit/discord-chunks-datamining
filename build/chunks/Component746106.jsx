/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => w
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

function P(e, t, n, r) {
  let o = i.useContext(f.Z),
    s = i.useCallback(() => ({
      i18n: {
        SPINNER_LOADING_LABEL: R.intl.string(R.t.ZTNur6),
        BUTTON_LOADING_STARTED_LABEL: R.intl.string(R.t.pfChQk),
        BUTTON_LOADING_FINISHED_LABEL: R.intl.string(R.t.SVPara),
        CLOSE_BUTTON_LABEL: R.intl.string(R.t.cpT0Cg),
        PLAY_BUTTON_LABEL: R.intl.string(R.t.RscU7O),
        PAUSE_BUTTON_LABEL: R.intl.string(R.t.ZcgDJS),
        NEW: R.intl.string(R.t.y2b7CA),
        BETA: R.intl.string(R.t.oW0eUV),
        EARLY_ACCESS: R.intl.string(R.t.EYxi0t),
        BILLING_TRIAL_FREE_TRIAL_TEXT: R.intl.string(R.t.IBYG5e)
      },
      theme: e,
      saturation: t,
      defaultLayerContext: b.nz,
      experiments: {
        enabledExperiments: n
      },
      trackImpression: o,
      isWindowFocused: () => r
    }), [e, t, n, o, r]),
    [l, c] = i.useState(s);
  return i.useLayoutEffect(() => {
    function e() {
      c(s)
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), R.intl.onLocaleChange(e)
  }, [s]), l
}

function w(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [f] = i.useState(() => A.ZP.getEnableHardwareAcceleration()), {
    locale: b,
    theme: R,
    focused: w,
    currentWindow: D,
    fontScale: x,
    fontScaleClass: L,
    keyboardModeEnabled: j,
    saturation: M,
    desaturateUserColors: k,
    useForcedColors: U,
    systemForcedColors: G,
    useReducedMotion: B,
    alwaysShowLinkDecorations: Z,
    confettiMode: F,
    highContrastMode: V
  } = (0, l.cj)([I.default, u.Z, T.Z, S.Z, y.Z, O.Z], () => {
    var e;
    return {
      locale: I.default.locale,
      theme: null != n ? n : T.Z.theme,
      focused: o ? y.Z.getWindowFocused(t) : S.Z.isFocused(),
      currentWindow: o && null != (e = y.Z.getWindow(t)) ? e : window,
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
      confettiMode: O.Z.confettiMode
    }
  }), H = d.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, Y = (0, h.Z)(D, __OVERLAY__ || w), W = 0;
  1 !== M && (W = (0, c.OdO)(W, c.bgu.REDUCE_SATURATION_ENABLED));
  let K = (0, C.A)(),
    z = (0, m.Ml)("RootThemeContextProvider"),
    q = (0, m.CL)("RootThemeContextProvider"),
    X = (0, m.VM)("RootThemeContextProvider"),
    Q = (0, g.U)("RootThemeContextProvider"),
    J = (0, E.A)("RootThemeContextProvider"),
    $ = _.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    ee = (0, v.$)({
      location: "RootThemeContextProvider"
    }),
    et = (0, p.On)({
      isPopoutWindow: o,
      isSearchDesktopTopLevelEnabled: ee
    }),
    en = P(R, M, i.useMemo(() => {
      let e = [];
      return z && e.push("refresh-fast-follow-avatars"), q && e.push("refresh-fast-follow-guild-bg"), X && e.push("refresh-fast-follow-distinct-borders"), Q && e.push("mana-text-inputs"), J && e.push("mana-toggle-inputs"), e
    }, [z, q, X, Q, J]), w);
  return (0, r.jsx)(c.kb5, {
    value: en,
    children: (0, r.jsx)(c.wMY, {
      theme: R,
      flags: W,
      saturation: M,
      density: K,
      children: (0, r.jsx)(N.cE, {
        lang: b,
        theme: R,
        density: K,
        focused: w,
        fontScale: x,
        fontScaleClass: L,
        keyboardModeEnabled: j,
        mouseMode: Y,
        saturation: M,
        desaturateUserColors: k,
        useForcedColors: U,
        systemForcedColors: G,
        useReducedMotion: B,
        alwaysShowLinkDecorations: Z,
        hardwareAccelerationEnabled: f,
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