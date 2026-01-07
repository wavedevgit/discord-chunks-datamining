/** Chunk was on web.js **/
/** chunk id: 781391, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ag: () => o,
  Q_: () => i,
  UD: () => l,
  hi: () => a,
  y: () => s
});
var Chunk570140 = require("./570140.js");

function i(e) {
  r.Z.dispatch({
    type: "SYSTEM_THEME_CHANGE",
    systemTheme: e
  })
}

function a(e) {
  r.Z.dispatch({
    type: "UNSYNCED_USER_SETTINGS_UPDATE",
    settings: {
      useSystemTheme: e
    }
  })
}

function o(e) {
  r.Z.dispatch({
    type: "UPDATE_THEME_PREFERENCES",
    preferences: e
  })
}

function s(e) {
  r.Z.dispatch({
    type: "SET_THEME_OVERRIDE",
    theme: e
  })
}

function l() {
  r.Z.dispatch({
    type: "CLEAR_THEME_OVERRIDE"
  })
}
require("./541049.js"), require("./740492.js"), require("./874893.js")