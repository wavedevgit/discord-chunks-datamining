/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => w
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk137579 = require("./137579.js"),
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
  Chunk571123 = require("./571123.js"),
  Chunk388032 = require("./388032.jsx");

function R(e, t, n, r, o) {
  let s = i.useContext(p.Z),
    l = i.useCallback(() => ({
      i18n: {
        CANCEL: P.intl.string(P.t["ETE/oC"]),
        BACK: P.intl.string(P.t["13/7kX"]),
        NEXT: P.intl.string(P.t.PDTjLN),
        SPINNER_LOADING_LABEL: P.intl.string(P.t.ZTNur7),
        BUTTON_LOADING_STARTED_LABEL: P.intl.string(P.t.pfChQr),
        BUTTON_LOADING_FINISHED_LABEL: P.intl.string(P.t.SVParY),
        CLOSE_BUTTON_LABEL: P.intl.string(P.t.cpT0Cq),
        PLAY_BUTTON_LABEL: P.intl.string(P.t.RscU7I),
        PAUSE_BUTTON_LABEL: P.intl.string(P.t.ZcgDJX),
        NEW: P.intl.string(P.t.y2b7CA),
        BETA: P.intl.string(P.t.oW0eUd),
        EARLY_ACCESS: P.intl.string(P.t.EYxi0o),
        BILLING_TRIAL_FREE_TRIAL_TEXT: P.intl.string(P.t.IBYG5U),
        MODAL_DONT_SHOW_AGAIN: P.intl.string(N.default.m3Vfcs),
        LISTBOX_EMPTY_STATE: P.intl.string(N.default.db85vU),
        LISTBOX_EMPTY_STATE_WITH_QUERY: e => P.intl.formatToPlainString(N.default.bPKiId, {
          query: e
        }),
        KEY_CTRL_A11Y_LABEL: P.intl.string(P.t.jm6v8i),
        KEY_CMD_A11Y_LABEL: P.intl.string(P.t.pYkiQq),
        KEY_ALT_A11Y_LABEL: P.intl.string(P.t.R2n7d3),
        KEY_OPTION_A11Y_LABEL: P.intl.string(P.t.FMYSJY),
        KEY_SHIFT: P.intl.string(P.t["L+jWo5"]),
        KEY_SHIFT_A11Y_LABEL: P.intl.string(P.t["q+/2+S"]),
        KEY_UP_A11Y_LABEL: P.intl.string(P.t.HxzHDb),
        KEY_DOWN_A11Y_LABEL: P.intl.string(P.t["a+iRlH"]),
        KEY_LEFT_A11Y_LABEL: P.intl.string(P.t.xFjIVC),
        KEY_RIGHT_A11Y_LABEL: P.intl.string(P.t["BT3jf/"]),
        KEY_PAGEUP: P.intl.string(P.t.VdCWGI),
        KEY_PAGEDOWN: P.intl.string(P.t.gpSh3U),
        KEY_ANY: P.intl.string(P.t.CkGpcV),
        KEY_ENTER: P.intl.string(P.t.SUweGy),
        KEY_ENTER_A11Y_LABEL: P.intl.string(P.t.yLNala),
        KEY_RETURN_A11Y_LABEL: P.intl.string(P.t.V7nPj0),
        KEY_ESCAPE: P.intl.string(P.t.cQmsQF),
        KEY_ESCAPE_A11Y_LABEL: P.intl.string(P.t["2qsw5/"]),
        KEY_BACKSPACE: P.intl.string(P.t["L+36+h"]),
        KEY_BACKSPACE_A11Y_LABEL: P.intl.string(P.t["9c/Ikv"]),
        KEY_DELETE_A11Y_LABEL: P.intl.string(P.t.BTFDmq),
        DATE_INPUT_OPEN_CALENDAR_LABEL: P.intl.string(N.default.I8kUqR),
        CALENDAR_PREVIOUS_MONTH_LABEL: P.intl.string(N.default.raS6yf),
        CALENDAR_NEXT_MONTH_LABEL: P.intl.string(N.default["/cp93l"]),
        INLINE_NOTICE_GENERIC_ERROR: P.intl.string(P.t["rTU7/z"]),
        STEP_INDICATOR: (e, t) => P.intl.formatToPlainString(N.default["v2YSk/"], {
          stepNumber: e,
          stepCount: t
        })
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
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), P.intl.onLocaleChange(e)
  }, [l]), u
}

function w(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [c] = i.useState(() => T.ZP.getEnableHardwareAcceleration()), {
    locale: p,
    theme: b,
    focused: N,
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
    confettiMode: Z,
    highContrastMode: B
  } = (0, l.cj)([v.default, d.Z, S.Z, I.Z, y.Z, O.Z], () => {
    var e;
    return {
      locale: v.default.locale,
      theme: null != n ? n : S.Z.theme,
      focused: o ? y.Z.getWindowFocused(t) : I.Z.isFocused(),
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
  }).enabled, V = (0, m.Z)(P, __OVERLAY__ || N), H = 0;
  1 !== L && (H = (0, u.OdO)(H, u.bgu.REDUCE_SATURATION_ENABLED));
  let Y = (0, C.A)(),
    W = (0, h.Ml)("RootThemeContextProvider"),
    K = (0, h.CL)("RootThemeContextProvider"),
    z = (0, h.VM)("RootThemeContextProvider"),
    q = (0, g.U)("RootThemeContextProvider"),
    Q = (0, E.A)("RootThemeContextProvider"),
    X = (0, _.On)({
      isPopoutWindow: o
    }),
    J = R(b, L, i.useMemo(() => {
      let e = [];
      return W && e.push("refresh-fast-follow-avatars"), K && e.push("refresh-fast-follow-guild-bg"), z && e.push("refresh-fast-follow-distinct-borders"), q && e.push("mana-text-inputs"), Q && e.push("mana-toggle-inputs"), e
    }, [W, K, z, q, Q]), N, p);
  return (0, r.jsx)(u.kb5, {
    value: J,
    children: (0, r.jsx)(u.wMY, {
      theme: b,
      flags: H,
      saturation: L,
      density: Y,
      children: (0, r.jsx)(A.cE, {
        lang: p,
        theme: b,
        density: Y,
        focused: N,
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
        hardwareAccelerationEnabled: c,
        highContrastMode: F && B,
        isPopoutWindow: o,
        rootClassName: s()(X, {
          "confetti-mode": Z,
          "refresh-fast-follow-avatars": W,
          "refresh-fast-follow-guild-bg": K,
          "refresh-fast-follow-distinct-borders": z
        }),
        children: a
      })
    })
  })
}