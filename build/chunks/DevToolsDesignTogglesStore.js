/** Chunk was on web.js **/
/** chunk id: 863750, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let s = {
    enable_recently_active: "Enable recently active channels",
    theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
    nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
    shop_include_unpublished: "[Shop] show unpublished items in shop",
    show_icymi_debug_scores: "Show ICYMI debug scores",
    channel_list_scrim: "Dim the channel list when chat appears"
  },
  l = {};

function c(e) {
  l[e.toggle] = e.value
}
class u extends(r = Chunk442837.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
    return {
      toggleStates: l
    }
  }
  initialize(e) {
    for (var t in s) {
      var n, r;
      let i = null != (r = null == e || null == (n = e.toggleStates) ? true : n[t]) && r;
      l[t] = i
    }
  }
  get(e) {
    var t;
    return null != (t = l[e]) && t
  }
  set(e, t) {
    return l[e] = t, t
  }
  all() {
    return l
  }
  allWithDescriptions() {
    return Object.entries(l).map(e => {
      let [t, n] = e;
      return [t, n, s[t]]
    })
  }
}
a(u, "displayName", "DevToolsDesignTogglesStore"), a(u, "persistKey", "DevToolsDesignTogglesStore");
let d = new u(Chunk570140.Z, {
  DEV_TOOLS_DESIGN_TOGGLE_SET: c
})