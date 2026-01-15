/** Chunk was on web.js **/
/** chunk id: 746106, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => w
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk354012 = require("./354012.js"),
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
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk451478 = require("./451478.js"),
  Chunk998502 = require("./998502.js"),
  Chunk264783 = require("./264783.js"),
  Chunk892071 = require("./892071.jsx"),
  Chunk271860 = require("./271860.js"),
  Chunk388032 = require("./388032.jsx");

function P(e, t, n, r, o) {
  let s = i.useContext(p.Z),
    l = i.useCallback(() => ({
      i18n: {
        CANCEL: N.intl.string(N.t["ETE/oC"]),
        BACK: N.intl.string(N.t["13/7kX"]),
        NEXT: N.intl.string(N.t.PDTjLN),
        SPINNER_LOADING_LABEL: N.intl.string(N.t.ZTNur7),
        BUTTON_LOADING_STARTED_LABEL: N.intl.string(N.t.pfChQr),
        BUTTON_LOADING_FINISHED_LABEL: N.intl.string(N.t.SVParY),
        CLOSE_BUTTON_LABEL: N.intl.string(N.t.cpT0Cq),
        PLAY_BUTTON_LABEL: N.intl.string(N.t.RscU7I),
        PAUSE_BUTTON_LABEL: N.intl.string(N.t.ZcgDJX),
        NEW: N.intl.string(N.t.y2b7CA),
        BETA: N.intl.string(N.t.oW0eUd),
        EARLY_ACCESS: N.intl.string(N.t.EYxi0o),
        BILLING_TRIAL_FREE_TRIAL_TEXT: N.intl.string(N.t.IBYG5U),
        MODAL_DONT_SHOW_AGAIN: N.intl.string(A.default.m3Vfcs),
        LISTBOX_EMPTY_STATE: N.intl.string(A.default.db85vU),
        LISTBOX_EMPTY_STATE_WITH_QUERY: e => N.intl.formatToPlainString(A.default.bPKiId, {
          query: e
        }),
        KEY_CTRL_A11Y_LABEL: N.intl.string(N.t.jm6v8i),
        KEY_CMD_A11Y_LABEL: N.intl.string(N.t.pYkiQq),
        KEY_ALT_A11Y_LABEL: N.intl.string(N.t.R2n7d3),
        KEY_OPTION_A11Y_LABEL: N.intl.string(N.t.FMYSJY),
        KEY_SHIFT: N.intl.string(N.t["L+jWo5"]),
        KEY_SHIFT_A11Y_LABEL: N.intl.string(N.t["q+/2+S"]),
        KEY_UP_A11Y_LABEL: N.intl.string(N.t.HxzHDb),
        KEY_DOWN_A11Y_LABEL: N.intl.string(N.t["a+iRlH"]),
        KEY_LEFT_A11Y_LABEL: N.intl.string(N.t.xFjIVC),
        KEY_RIGHT_A11Y_LABEL: N.intl.string(N.t["BT3jf/"]),
        KEY_PAGEUP: N.intl.string(N.t.VdCWGI),
        KEY_PAGEDOWN: N.intl.string(N.t.gpSh3U),
        KEY_ANY: N.intl.string(N.t.CkGpcV),
        KEY_ENTER: N.intl.string(N.t.SUweGy),
        KEY_ENTER_A11Y_LABEL: N.intl.string(N.t.yLNala),
        KEY_RETURN_A11Y_LABEL: N.intl.string(N.t.V7nPj0),
        KEY_ESCAPE: N.intl.string(N.t.cQmsQF),
        KEY_ESCAPE_A11Y_LABEL: N.intl.string(N.t["2qsw5/"]),
        KEY_BACKSPACE: N.intl.string(N.t["L+36+h"]),
        KEY_BACKSPACE_A11Y_LABEL: N.intl.string(N.t["9c/Ikv"]),
        KEY_DELETE_A11Y_LABEL: N.intl.string(N.t.BTFDmq),
        DATE_INPUT_OPEN_CALENDAR_LABEL: N.intl.string(A.default.I8kUqR),
        CALENDAR_PREVIOUS_MONTH_LABEL: N.intl.string(A.default.raS6yf),
        CALENDAR_NEXT_MONTH_LABEL: N.intl.string(A.default["/cp93l"]),
        INLINE_NOTICE_GENERIC_ERROR: N.intl.string(N.t["rTU7/z"]),
        STEP_INDICATOR: (e, t) => N.intl.formatToPlainString(A.default["v2YSk/"], {
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
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), N.intl.onLocaleChange(e)
  }, [l]), u
}

function w(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [c] = i.useState(() => I.ZP.getEnableHardwareAcceleration()), {
    locale: p,
    theme: b,
    focused: A,
    currentWindow: N,
    fontScale: w,
    fontScaleClass: R,
    keyboardModeEnabled: D,
    saturation: x,
    desaturateUserColors: L,
    useForcedColors: j,
    systemForcedColors: M,
    useReducedMotion: k,
    alwaysShowLinkDecorations: U,
    highContrastMode: G
  } = (0, l.cj)([O.default, d.Z, v.Z, y.Z, S.Z], () => {
    var e;
    return {
      locale: O.default.locale,
      theme: null != n ? n : v.Z.theme,
      focused: o ? y.Z.getWindowFocused(t) : S.Z.isFocused(),
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
      highContrastMode: d.Z.isHighContrastModeEnabled
    }
  }), Z = f.U.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, F = (0, h.Z)(N, __OVERLAY__ || A), B = 0;
  1 !== x && (B = (0, u.OdO)(B, u.bgu.REDUCE_SATURATION_ENABLED));
  let V = (0, T.A)(),
    H = (0, m.Ml)("RootThemeContextProvider"),
    Y = (0, m.CL)("RootThemeContextProvider"),
    W = (0, m.VM)("RootThemeContextProvider"),
    K = (0, g.U)("RootThemeContextProvider"),
    z = (0, E.A)("RootThemeContextProvider"),
    q = (0, _.On)({
      isPopoutWindow: o
    }),
    Q = P(b, x, i.useMemo(() => {
      let e = [];
      return H && e.push("refresh-fast-follow-avatars"), Y && e.push("refresh-fast-follow-guild-bg"), W && e.push("refresh-fast-follow-distinct-borders"), K && e.push("mana-text-inputs"), z && e.push("mana-toggle-inputs"), e
    }, [H, Y, W, K, z]), A, p);
  return (0, r.jsx)(u.kb5, {
    value: Q,
    children: (0, r.jsx)(u.wMY, {
      theme: b,
      flags: B,
      saturation: x,
      density: V,
      children: (0, r.jsx)(C.cE, {
        lang: p,
        theme: b,
        density: V,
        focused: A,
        fontScale: w,
        fontScaleClass: R,
        keyboardModeEnabled: D,
        mouseMode: F,
        saturation: x,
        desaturateUserColors: L,
        useForcedColors: j,
        systemForcedColors: M,
        useReducedMotion: k,
        alwaysShowLinkDecorations: U,
        hardwareAccelerationEnabled: c,
        highContrastMode: Z && G,
        isPopoutWindow: o,
        rootClassName: s()(q, {
          "refresh-fast-follow-avatars": H,
          "refresh-fast-follow-guild-bg": Y,
          "refresh-fast-follow-distinct-borders": W
        }),
        children: a
      })
    })
  })
}