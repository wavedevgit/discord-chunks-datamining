/** Chunk was on web.js **/
/** chunk id: 265059, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  q: () => c
});
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk540999 = require("./540999.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}
let c = 460,
  u = {
    sidebarWidth: 460,
    lastOpenTabId: null,
    displayTools: false,
    showDevWidget: false,
    devWidgetPosition: {
      x: 0,
      y: 0
    },
    sortedScreenKeys: []
  };

function d(e) {
  o.A.isDeveloper && (u = l({}, u, e.settings))
}
class f extends(r = Chunk311907.Ay.DeviceSettingsStore) {
  initialize(e) {
    u = null != e ? e : u, a.h.actionLogger.persist = o.A.isDeveloper
  }
  getUserAgnosticState() {
    return u
  }
  get sidebarWidth() {
    return this.displayTools ? u.sidebarWidth : 0
  }
  get lastOpenTabId() {
    var e;
    return null != (e = u.lastOpenTabId) ? e : null
  }
  get displayTools() {
    return o.A.isDeveloper && u.displayTools
  }
  get showDevWidget() {
    return o.A.isDeveloper && u.showDevWidget
  }
  get devWidgetPosition() {
    return u.devWidgetPosition
  }
  get sortedScreenKeys() {
    return u.sortedScreenKeys
  }
}
s(f, "displayName", "DevToolsSettingsStore"), s(f, "persistKey", "DevToolsSettingsStore");
let p = new f(Chunk73153.h, {
  DEV_TOOLS_SETTINGS_UPDATE: d
})