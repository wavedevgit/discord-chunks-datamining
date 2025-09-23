/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => P
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
  Chunk338390 = require("./338390.js"),
  Chunk803038 = require("./803038.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk392358 = require("./392358.js"),
  Chunk591146 = require("./591146.js"),
  Chunk377089 = require("./377089.js"),
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

function R(e, t, n) {
  let r = i.useCallback(() => ({
      i18n: {
        SPINNER_LOADING_LABEL: N.intl.string(N.t.ZTNur6),
        BUTTON_LOADING_STARTED_LABEL: N.intl.string(N.t.pfChQk),
        BUTTON_LOADING_FINISHED_LABEL: N.intl.string(N.t.SVPara),
        CLOSE_BUTTON_LABEL: N.intl.string(N.t.cpT0Cg),
        PLAY_BUTTON_LABEL: N.intl.string(N.t.RscU7O),
        PAUSE_BUTTON_LABEL: N.intl.string(N.t.ZcgDJS),
        NEW: N.intl.string(N.t.y2b7CA),
        BETA: N.intl.string(N.t.oW0eUV),
        EARLY_ACCESS: N.intl.string(N.t.EYxi0t),
        BILLING_TRIAL_FREE_TRIAL_TEXT: N.intl.string(N.t.IBYG5e)
      },
      theme: e,
      saturation: t,
      defaultLayerContext: E.nz,
      experiments: {
        enabledExperiments: n
      }
    }), [e, t, n]),
    [o, s] = i.useState(r);
  return i.useLayoutEffect(() => {
    function e() {
      s(r)
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), N.intl.onLocaleChange(e)
  }, [r]), o
}

function P(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [E] = i.useState(() => S.ZP.getEnableHardwareAcceleration()), {
    locale: N,
    theme: P,
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
  } = (0, l.cj)([v.default, u.Z, I.Z, T.Z, b.Z, y.Z], () => {
    var e;
    return {
      locale: v.default.locale,
      theme: null != n ? n : I.Z.theme,
      focused: o ? b.Z.getWindowFocused(t) : T.Z.isFocused(),
      currentWindow: o && null != (e = b.Z.getWindow(t)) ? e : window,
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
      confettiMode: y.Z.confettiMode
    }
  }), H = d.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, Y = (0, h.Z)(D, __OVERLAY__ || w), W = 0;
  1 !== M && (W = (0, c.OdO)(W, c.bgu.REDUCE_SATURATION_ENABLED));
  let K = (0, A.A)(),
    z = (0, m.Ml)("RootThemeContextProvider"),
    q = (0, m.CL)("RootThemeContextProvider"),
    X = (0, m.VM)("RootThemeContextProvider"),
    Q = (0, g.U)("RootThemeContextProvider"),
    J = _.Mc.useExperiment({
      location: "RootThemeContextProvider"
    }).enabled,
    $ = (0, f.Z)("RootThemeContextProvider"),
    ee = (0, O.$)({
      location: "RootThemeContextProvider"
    }),
    et = (0, p.On)({
      isPopoutWindow: o,
      isSearchDesktopTopLevelEnabled: ee
    }),
    en = R(P, M, i.useMemo(() => {
      let e = [];
      return z && e.push("refresh-fast-follow-avatars"), q && e.push("refresh-fast-follow-guild-bg"), X && e.push("refresh-fast-follow-distinct-borders"), Q && e.push("mana-text-inputs"), e
    }, [z, q, X, Q]));
  return (0, r.jsx)(c.kb5, {
    value: en,
    children: (0, r.jsx)(c.wMY, {
      theme: P,
      flags: W,
      saturation: M,
      density: K,
      children: (0, r.jsx)(C.cE, {
        lang: N,
        theme: P,
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
        hardwareAccelerationEnabled: E,
        highContrastMode: H && V,
        isPopoutWindow: o,
        rootClassName: s()(et, {
          "confetti-mode": F,
          "refresh-fast-follow-avatars": z && !$,
          "refresh-fast-follow-guild-bg": q,
          "refresh-fast-follow-distinct-borders": X,
          "client-theme-color-picker": J,
          "align-chat-input": $
        }),
        children: a
      })
    })
  })
}