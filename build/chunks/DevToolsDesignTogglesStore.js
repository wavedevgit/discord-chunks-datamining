/** Chunk was on 62117 **/
/** chunk id: 863750, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let a = {
    enable_recently_active: "Enable recently active channels",
    theme_setting_in_account_sheet: "Show theme settings in the Account action sheet",
    nav_experiment_server_drawer_enabled: "[NavI] Enable expandable server drawer",
    shop_include_unpublished: "[Shop] show unpublished items in shop",
    show_icymi_debug_scores: "Show ICYMI debug scores",
    channel_list_scrim: "Dim the channel list when chat appears"
  },
  d = {};
class o extends(i = Chunk442837.ZP.DeviceSettingsStore) {
  getUserAgnosticState() {
    return {
      toggleStates: d
    }
  }
  initialize(e) {
    for (var t in a) {
      var n, i;
      let s = null != (i = null == e || null == (n = e.toggleStates) ? true : n[t]) && i;
      d[t] = s
    }
  }
  get(e) {
    var t;
    return null != (t = d[e]) && t
  }
  set(e, t) {
    return d[e] = t, t
  }
  all() {
    return d
  }
  allWithDescriptions() {
    return Object.entries(d).map(e => {
      let [t, n] = e;
      return [t, n, a[t]]
    })
  }
}
r(o, "displayName", "DevToolsDesignTogglesStore"), r(o, "persistKey", "DevToolsDesignTogglesStore");
let h = new o(Chunk570140.Z, {
  DEV_TOOLS_DESIGN_TOGGLE_SET: function(e) {
    d[e.toggle] = e.value
  }
})