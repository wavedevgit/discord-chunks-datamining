/** Chunk was on web.js **/
/** chunk id: 975616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => w
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk932433 = require("./932433.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk116833 = require("./116833.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk536199 = require("./536199.js"),
  Chunk989395 = require("./989395.js"),
  Chunk71855 = require("./71855.jsx"),
  Chunk867628 = require("./867628.js"),
  Chunk534409 = require("./534409.js"),
  Chunk614738 = require("./614738.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk869146 = require("./869146.js"),
  Chunk773669 = require("./773669.js"),
  Chunk544028 = require("./544028.js"),
  Chunk531685 = require("./531685.js"),
  Chunk837921 = require("./837921.js"),
  Chunk418842 = require("./418842.js"),
  Chunk611635 = require("./611635.jsx"),
  Chunk763600 = require("./763600.js"),
  Chunk985018 = require("./985018.jsx");

function N(e, t, n, r, o) {
  let s = i.useContext(p.A),
    l = i.useCallback(() => ({
      i18n: {
        CANCEL: C.intl.string(C.t["ETE/oC"]),
        BACK: C.intl.string(C.t["13/7kX"]),
        NEXT: C.intl.string(C.t.PDTjLN),
        SUBMIT: C.intl.string(C.t.geKm7t),
        SPINNER_LOADING_LABEL: C.intl.string(C.t.ZTNur7),
        BUTTON_LOADING_STARTED_LABEL: C.intl.string(C.t.pfChQr),
        BUTTON_LOADING_FINISHED_LABEL: C.intl.string(C.t.SVParY),
        CLOSE_BUTTON_LABEL: C.intl.string(C.t.cpT0Cq),
        PLAY_BUTTON_LABEL: C.intl.string(C.t.RscU7I),
        PAUSE_BUTTON_LABEL: C.intl.string(C.t.ZcgDJX),
        NEW: C.intl.string(C.t.y2b7CA),
        BETA: C.intl.string(C.t.oW0eUd),
        EARLY_ACCESS: C.intl.string(C.t.EYxi0o),
        BILLING_TRIAL_FREE_TRIAL_TEXT: C.intl.string(C.t.IBYG5U),
        MODAL_DONT_SHOW_AGAIN: C.intl.string(T.default.m3Vfcs),
        LISTBOX_EMPTY_STATE: C.intl.string(T.default.db85vU),
        LISTBOX_EMPTY_STATE_WITH_QUERY: e => C.intl.formatToPlainString(T.default.bPKiId, {
          query: e
        }),
        KEY_CTRL_A11Y_LABEL: C.intl.string(C.t.jm6v8i),
        KEY_CMD_A11Y_LABEL: C.intl.string(C.t.pYkiQq),
        KEY_ALT_A11Y_LABEL: C.intl.string(C.t.R2n7d3),
        KEY_OPTION_A11Y_LABEL: C.intl.string(C.t.FMYSJY),
        KEY_SHIFT: C.intl.string(C.t["L+jWo5"]),
        KEY_SHIFT_A11Y_LABEL: C.intl.string(C.t["q+/2+S"]),
        KEY_UP_A11Y_LABEL: C.intl.string(C.t.HxzHDb),
        KEY_DOWN_A11Y_LABEL: C.intl.string(C.t["a+iRlH"]),
        KEY_LEFT_A11Y_LABEL: C.intl.string(C.t.xFjIVC),
        KEY_RIGHT_A11Y_LABEL: C.intl.string(C.t["BT3jf/"]),
        KEY_PAGEUP: C.intl.string(C.t.VdCWGI),
        KEY_PAGEDOWN: C.intl.string(C.t.gpSh3U),
        KEY_ANY: C.intl.string(C.t.CkGpcV),
        KEY_ENTER: C.intl.string(C.t.SUweGy),
        KEY_ENTER_A11Y_LABEL: C.intl.string(C.t.yLNala),
        KEY_RETURN_A11Y_LABEL: C.intl.string(C.t.V7nPj0),
        KEY_ESCAPE: C.intl.string(C.t.cQmsQF),
        KEY_ESCAPE_A11Y_LABEL: C.intl.string(C.t["2qsw5/"]),
        KEY_BACKSPACE: C.intl.string(C.t["L+36+h"]),
        KEY_BACKSPACE_A11Y_LABEL: C.intl.string(C.t["9c/Ikv"]),
        KEY_DELETE_A11Y_LABEL: C.intl.string(C.t.BTFDmq),
        DATE_INPUT_OPEN_CALENDAR_LABEL: C.intl.string(T.default.I8kUqR),
        CALENDAR_PREVIOUS_MONTH_LABEL: C.intl.string(T.default.raS6yf),
        CALENDAR_NEXT_MONTH_LABEL: C.intl.string(T.default["/cp93l"]),
        INLINE_NOTICE_GENERIC_ERROR: C.intl.string(C.t["rTU7/z"]),
        STEP_INDICATOR: (e, t) => C.intl.formatToPlainString(T.default["v2YSk/"], {
          stepNumber: e,
          stepCount: t
        }),
        SELECT_PLACEHOLDER: C.intl.string(T.default["A+pfVR"]),
        CLEAR_SELECTION: C.intl.string(T.default.JA5C7L),
        SELECTED_TAGS_HEADING: C.intl.string(T.default.VMNfsY),
        PERCENT_COMPLETE: e => C.intl.formatToPlainString(T.default["2L/ygS"], {
          percent: e
        })
      },
      locale: o,
      theme: e,
      saturation: t,
      defaultLayerContext: E.uY,
      experiments: {
        enabledExperiments: n
      },
      trackImpression: s,
      isWindowFocused: () => r,
      dynamicGraphicComponents: c.Q
    }), [e, t, n, s, r, o]),
    [u, d] = i.useState(l);
  return i.useLayoutEffect(() => {
    function e() {
      d(l)
    }(0, a.waitForAllDefaultIntlMessagesLoaded)().then(e), C.intl.onLocaleChange(e)
  }, [l]), u
}

function w(e) {
  let {
    windowKey: t,
    themeOverride: n,
    children: a
  } = e, o = null != t, [c] = i.useState(() => A.Ay.getEnableHardwareAcceleration()), {
    locale: p,
    theme: E,
    focused: T,
    currentWindow: C,
    fontScale: w,
    fontScaleClass: R,
    keyboardModeEnabled: P,
    saturation: D,
    desaturateUserColors: L,
    useForcedColors: x,
    systemForcedColors: M,
    useReducedMotion: j,
    alwaysShowLinkDecorations: k,
    highContrastMode: U
  } = (0, l.cf)([b.default, d.A, O.A, y.A, v.A], () => {
    var e;
    return {
      locale: b.default.locale,
      theme: null != n ? n : O.A.theme,
      focused: o ? y.A.getWindowFocused(t) : v.A.isFocused(),
      currentWindow: o && null != (e = y.A.getWindow(t)) ? e : window,
      fontScale: d.A.fontScale,
      fontScaleClass: d.A.fontScaleClass,
      keyboardModeEnabled: d.A.keyboardModeEnabled,
      saturation: d.A.saturation,
      desaturateUserColors: d.A.desaturateUserColors,
      useForcedColors: d.A.useForcedColors,
      systemForcedColors: d.A.systemForcedColors,
      useReducedMotion: d.A.useReducedMotion,
      alwaysShowLinkDecorations: d.A.alwaysShowLinkDecorations,
      highContrastMode: d.A.isHighContrastModeEnabled
    }
  }), G = f.z.useExperiment({
    location: "RootThemeContextProvider"
  }, {
    autoTrackExposure: true
  }).enabled, V = (0, h.A)(C, __OVERLAY__ || T), F = 0;
  1 !== D && (F = (0, u.yVx)(F, u.ofu.REDUCE_SATURATION_ENABLED));
  let B = (0, I.C)(),
    H = (0, m.qK)("RootThemeContextProvider"),
    Y = (0, m.k5)("RootThemeContextProvider"),
    W = (0, m.lV)("RootThemeContextProvider"),
    K = (0, g.y)("RootThemeContextProvider"),
    z = (0, _.m2)({
      isPopoutWindow: o
    }),
    q = N(E, D, i.useMemo(() => {
      let e = [];
      return H && e.push("refresh-fast-follow-avatars"), Y && e.push("refresh-fast-follow-guild-bg"), W && e.push("refresh-fast-follow-distinct-borders"), K && e.push("mana-toggle-inputs"), e
    }, [H, Y, W, K]), T, p);
  return (0, r.jsx)(u.GE8, {
    value: q,
    children: (0, r.jsx)(u.eSm, {
      theme: E,
      flags: F,
      saturation: D,
      density: B,
      children: (0, r.jsx)(S.fs, {
        lang: p,
        theme: E,
        density: B,
        focused: T,
        fontScale: w,
        fontScaleClass: R,
        keyboardModeEnabled: P,
        mouseMode: V,
        saturation: D,
        desaturateUserColors: L,
        useForcedColors: x,
        systemForcedColors: M,
        useReducedMotion: j,
        alwaysShowLinkDecorations: k,
        hardwareAccelerationEnabled: c,
        highContrastMode: G && U,
        isPopoutWindow: o,
        rootClassName: s()(z, {
          "refresh-fast-follow-avatars": H,
          "refresh-fast-follow-guild-bg": Y,
          "refresh-fast-follow-distinct-borders": W
        }),
        children: a
      })
    })
  })
}