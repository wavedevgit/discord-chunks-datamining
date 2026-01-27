/** Chunk was on web.js **/
/** chunk id: 973654, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  GQ: () => s,
  LA: () => i,
  NA: () => o,
  XG: () => l,
  k7: () => a
});
var Chunk73153 = require("./73153.js");

function i(e) {
  r.h.dispatch({
    type: "SYSTEM_THEME_CHANGE",
    systemTheme: e
  })
}

function a(e) {
  r.h.dispatch({
    type: "UNSYNCED_USER_SETTINGS_UPDATE",
    settings: {
      useSystemTheme: e
    }
  })
}

function o(e) {
  r.h.dispatch({
    type: "UPDATE_THEME_PREFERENCES",
    preferences: e
  })
}

function s(e) {
  r.h.dispatch({
    type: "SET_THEME_OVERRIDE",
    theme: e
  })
}

function l() {
  r.h.dispatch({
    type: "CLEAR_THEME_OVERRIDE"
  })
}
require("./677313.js"), require("./964404.js"), require("./185928.js")