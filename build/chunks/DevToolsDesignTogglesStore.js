/** Chunk was on 4756 **/
/** chunk id: 863750, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let o = {
    enable_recently_active: "Enable recently active channels",
    theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
    nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
    shop_include_unpublished: "[Shop] show unpublished items in shop",
    show_icymi_debug_scores: "Show ICYMI debug scores",
    channel_list_scrim: "Dim the channel list when chat appears"
  },
  a = {};
class u extends(i = Chunk442837.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
    return {
      toggleStates: a
    }
  }
  initialize(e) {
    for (var t in o) {
      var n, i;
      let r = null != (i = null == e || null == (n = e.toggleStates) ? true : n[t]) && i;
      a[t] = r
    }
  }
  get(e) {
    var t;
    return null != (t = a[e]) && t
  }
  set(e, t) {
    return a[e] = t, t
  }
  all() {
    return a
  }
  allWithDescriptions() {
    return Object.entries(a).map(e => {
      let [t, n] = e;
      return [t, n, o[t]]
    })
  }
}
l(u, "displayName", "DevToolsDesignTogglesStore"), l(u, "persistKey", "DevToolsDesignTogglesStore");
let c = new u(Chunk570140.Z, {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function(e) {
    a[e.toggle] = e.value
  }
})