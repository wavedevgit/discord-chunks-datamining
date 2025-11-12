/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk400497 = require("./400497.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk198168 = require("./198168.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk299363 = require("./299363.js"),
  Chunk793903 = require("./793903.js"),
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
  Chunk982519 = require("./982519.js"),
  Chunk388032 = require("./388032.jsx");

function P(e, t, n, r, o) {
  let s = i.useContext(_.Z),
    l = i.useCallback(() => ({
      i18n: {
        SPINNER_LOADING_LABEL: R.intl.string(R.t.ZTNur7),
        BUTTON_LOADING_STARTED_LABEL: R.intl.string(R.t.pfChQr),
        BUTTON_LOADING_FINISHED_LABEL: R.intl.string(R.t.SVParY),
        CLOSE_BUTTON_LABEL: R.intl.string(R.t.cpT0Cq),
        PLAY_BUTTON_LABEL: R.intl.string(R.t.RscU7I),
        PAUSE_BUTTON_LABEL: R.intl.string(R.t.ZcgDJX),
        NEW: R.intl.string(R.t.y2b7CA),
        BETA: R.intl.string(R.t.oW0eUd),
        EARLY_ACCESS: R.intl.string(R.t.EYxi0o),
        BILLING_TRIAL_FREE_TRIAL_TEXT: R.intl.string(R.t.IBYG5U),
        MODAL_DONT_SHOW_AGAIN: R.intl.string(N.default.m3Vfcs),
        LISTBOX_EMPTY_STATE: R.intl.string(N.default.db85vU),
        LISTBOX_EMPTY_STATE_WITH_QUERY: e => R.intl.formatToPlainString(N.default.bPKiId, {
          query: e
        }),
        KEY_CTRL_A11Y_LABEL: R.intl.string(R.t.jm6v8i),
        KEY_CMD_A11Y_LABEL: R.intl.string(R.t.pYkiQq),
        KEY_ALT_A11Y_LABEL: R.intl.string(R.t.R2n7d3),
        KEY_OPTION_A11Y_LABEL: R.intl.string(R.t.FMYSJY),
        KEY_SHIFT: R.intl.string(R.t["L+jWo5"]),
        KEY_SHIFT_A11Y_LABEL: R.intl.string(R.t["q+/2+S"]),
        KEY_UP_A11Y_LABEL: R.intl.string(R.t.HxzHDb),
        KEY_DOWN_A11Y_LABEL: R.intl.string(R.t["a+iRlH"]),
        KEY_LEFT_A11Y_LABEL: R.intl.string(R.t.xFjIVC),
        KEY_RIGHT_A11Y_LABEL: R.intl.string(R.t["BT3jf/"]),
        KEY_PAGEUP: R.intl.string(R.t.VdCWGI),
        KEY_PAGEDOWN: R.intl.string(R.t.gpSh3U),
        KEY_ANY: R.intl.string(R.t.CkGpcV),
        KEY_ENTER: R.intl.string(R.t.SUweGy),
        KEY_ENTER_A11Y_LABEL: R.intl.string(R.t.yLNala),
        KEY_RETURN_A11Y_LABEL: R.intl.string(R.t.V7nPj0),
        KEY_ESCAPE: R.intl.string(R.t.cQmsQF),
        KEY_ESCAPE_A11Y_LABEL: R.intl.string(R.t["2qsw5/"]),
        KEY_BACKSPACE: R.intl.string(R.t["L+36+h"]),
        KEY_BACKSPACE_A11Y_LABEL: R.intl.string(R.t["9c/Ikv"]),
        KEY_DELETE_A11Y_LABEL: R.intl.string(R.t.BTFDmq),
        DATE_INPUT_OPEN_CALENDAR_LABEL: R.intl.string(N.default.I8kUqR),
        CALENDAR_PREVIOUS_MONTH_LABEL: R.intl.string(N.default.raS6yf),
        CALENDAR_NEXT_MONTH_LABEL: R.intl.string(N.default["/cp93l"])
      },
      locale: o,
      theme: e,
      saturation: t,
      defaultLayerContext: b.nz,
      experiments: {
        enabledExperiments: n
      },
      trackImpression: s,
      isWindowFocused: () => r,
      dynamicGraphicComponents: c._
    }), [e, t, n, s, r, o]),
    [u, d] = i.useState(l);
  return i.useLayoutEffect(() => {
    function e() {
      d(l)
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), R.intl.onLocaleChange(e)
  }, [l]), u
}

function D(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [c] = i.useState(() => S.ZP.getEnableHardwareAcceleration()), {
    locale: _,
    theme: b,
    focused: N,
    currentWindow: R,
    fontScale: D,
    fontScaleClass: w,
    keyboardModeEnabled: x,
    saturation: L,
    desaturateUserColors: M,
    useForcedColors: j,
    systemForcedColors: k,
    useReducedMotion: U,
    alwaysShowLinkDecorations: G,
    confettiMode: B,
    highContrastMode: Z
  } = (0, l.cj)([v.default, d.Z, I.Z, T.Z, y.Z, O.Z], () => {
    var e;
    return {
      locale: v.default.locale,
      theme: null != n ? n : I.Z.theme,
      focused: o ? y.Z.getWindowFocused(t) : T.Z.isFocused(),
      currentWindow: o && null != (e = y.Z.getWindow(t)) ? e : window,
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
      confettiMode: O.Z.confettiMode
    }
  }), F = f.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, V = (0, h.Z)(R, __OVERLAY__ || N), H = 0;
  1 !== L && (H = (0, u.OdO)(H, u.bgu.REDUCE_SATURATION_ENABLED));
  let Y = (0, A.A)(),
    W = (0, m.Ml)("RootThemeContextProvider"),
    K = (0, m.CL)("RootThemeContextProvider"),
    z = (0, m.VM)("RootThemeContextProvider"),
    q = (0, g.U)("RootThemeContextProvider"),
    X = (0, E.A)("RootThemeContextProvider"),
    Q = (0, p.On)({
      isPopoutWindow: o
    }),
    J = P(b, L, i.useMemo(() => {
      let e = [];
      return W && e.push("refresh-fast-follow-avatars"), K && e.push("refresh-fast-follow-guild-bg"), z && e.push("refresh-fast-follow-distinct-borders"), q && e.push("mana-text-inputs"), X && e.push("mana-toggle-inputs"), e
    }, [W, K, z, q, X]), N, _);
  return (0, r.jsx)(u.kb5, {
    value: J,
    children: (0, r.jsx)(u.wMY, {
      theme: b,
      flags: H,
      saturation: L,
      density: Y,
      children: (0, r.jsx)(C.cE, {
        lang: _,
        theme: b,
        density: Y,
        focused: N,
        fontScale: D,
        fontScaleClass: w,
        keyboardModeEnabled: x,
        mouseMode: V,
        saturation: L,
        desaturateUserColors: M,
        useForcedColors: j,
        systemForcedColors: k,
        useReducedMotion: U,
        alwaysShowLinkDecorations: G,
        hardwareAccelerationEnabled: c,
        highContrastMode: F && Z,
        isPopoutWindow: o,
        rootClassName: s()(Q, {
          "confetti-mode": B,
          "refresh-fast-follow-avatars": W,
          "refresh-fast-follow-guild-bg": K,
          "refresh-fast-follow-distinct-borders": z
        }),
        children: a
      })
    })
  })
}