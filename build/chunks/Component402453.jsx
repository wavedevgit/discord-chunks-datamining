/** Chunk was on web.js **/
/** chunk id: 402453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c,
  KJ: () => s,
  ZF: () => l,
  kb: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk227399 = require("./227399.js");
let o = {
    i18n: {
      SPINNER_LOADING_LABEL: "Loading",
      BUTTON_LOADING_STARTED_LABEL: "Loading",
      BUTTON_LOADING_FINISHED_LABEL: "Loading",
      CLOSE_BUTTON_LABEL: "Close",
      PLAY_BUTTON_LABEL: "Play",
      PAUSE_BUTTON_LABEL: "Pause",
      NEW: "New",
      BETA: "Beta",
      EARLY_ACCESS: "Early Access",
      BILLING_TRIAL_FREE_TRIAL_TEXT: "Free Trial",
      MODAL_DONT_SHOW_AGAIN: "Don't show again",
      LISTBOX_EMPTY_STATE: "No items to show",
      LISTBOX_EMPTY_STATE_WITH_QUERY: e => "No results for ‘".concat(e, "’"),
      KEY_CTRL_A11Y_LABEL: "Ctrl",
      KEY_CMD_A11Y_LABEL: "Cmd",
      KEY_ALT_A11Y_LABEL: "Alt",
      KEY_OPTION_A11Y_LABEL: "Option",
      KEY_SHIFT_A11Y_LABEL: "Shift",
      KEY_UP_A11Y_LABEL: "Up",
      KEY_DOWN_A11Y_LABEL: "Down",
      KEY_LEFT_A11Y_LABEL: "Left",
      KEY_RIGHT_A11Y_LABEL: "Right",
      KEY_PAGEUP: "Page Up",
      KEY_PAGEDOWN: "Page Down",
      KEY_ANY: "Any",
      KEY_ENTER: "Enter",
      KEY_ENTER_A11Y_LABEL: "Enter",
      KEY_RETURN_A11Y_LABEL: "Return",
      KEY_ESCAPE: "Escape",
      KEY_ESCAPE_A11Y_LABEL: "Escape",
      KEY_BACKSPACE: "Backspace",
      KEY_BACKSPACE_A11Y_LABEL: "Backspace",
      KEY_DELETE_A11Y_LABEL: "Delete",
      KEY_SHIFT: "Shift",
      DATE_INPUT_OPEN_CALENDAR_LABEL: "Open calendar",
      CALENDAR_PREVIOUS_MONTH_LABEL: "Previous month",
      CALENDAR_NEXT_MONTH_LABEL: "Next month"
    },
    theme: "light",
    locale: "en-US",
    saturation: .5,
    defaultLayerContext: true,
    trackImpression: true,
    isWindowFocused: true,
    dynamicGraphicComponents: true
  },
  s = Chunk473749.createContext(o);

function l() {
  let e = Chunk473749.useContext(s);
  return module === o && console.warn("useManaContext must be used within a ManaContext.Provider"), module
}

function c(e) {
  var t, n;
  return (null != (n = null == (t = l().experiments) ? true : t.enabledExperiments) ? n : []).includes("mana-toggle-inputs")
}

function u(e) {
  let {
    children: t,
    value: n
  } = e;
  return (0, r.jsx)(s.Provider, {
    value: n,
    children: (0, r.jsx)(a.b, {
      locale: n.locale,
      children: t
    })
  })
}