/** Chunk was on web.js **/
/** chunk id: 19759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p,
  h: () => c
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk906467 = require("./906467.js");

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
  a.Z.isDeveloper && (u = l({}, u, e.settings))
}
class f extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  initialize(e) {
    u = null != e ? e : u, o.Z.actionLogger.persist = a.Z.isDeveloper
  }
  getUserAgnosticState() {
    return u
  }
  get sidebarWidth() {
    return this.displayTools ? u.sidebarWidth : 0
  }
  get lastOpenTabId() {
    var e;
    return null != (e = u.lastOpenTabId) ? module : null
  }
  get displayTools() {
    return Chunk906467.Z.isDeveloper && u.displayTools
  }
  get showDevWidget() {
    return Chunk906467.Z.isDeveloper && u.showDevWidget
  }
  get devWidgetPosition() {
    return u.devWidgetPosition
  }
  get sortedScreenKeys() {
    return u.sortedScreenKeys
  }
}
s(f, "displayName", "DevToolsSettingsStore"), s(f, "persistKey", "DevToolsSettingsStore");
let p = new f(Chunk570140.Z, {
  DEV_TOOLS_SETTINGS_UPDATE: d
})