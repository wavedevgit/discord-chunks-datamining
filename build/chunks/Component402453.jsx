/** Chunk was on web.js **/
/** chunk id: 402453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l,
  KJ: () => o,
  ZF: () => s,
  kb: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js");
let a = {
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
      KEY_SHIFT: "Shift"
    },
    theme: "light",
    saturation: .5,
    defaultLayerContext: true,
    trackImpression: true,
    isWindowFocused: true,
    dynamicGraphicComponents: true
  },
  o = Chunk647438.createContext(a);

function s() {
  let e = Chunk647438.useContext(o);
  return module === a && console.warn("useManaContext must be used within a ManaContext.Provider"), module
}

function l(e) {
  var t, n;
  return (null != (n = null == (t = s().experiments) ? true : t.enabledExperiments) ? n : []).includes("mana-toggle-inputs")
}

function c(e) {
  let {
    children: t,
    value: n
  } = e;
  return (0, r.jsx)(o.Provider, {
    value: n,
    children: t
  })
}