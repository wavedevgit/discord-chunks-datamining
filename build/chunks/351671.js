/** Chunk was on 86142 **/
/** chunk id: 351671, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  L: () => a,
  Q: () => o
});
var r, Chunk376943 = require("./376943.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  a = ((r = {}).ROLE_SUBSCRIPTION = "role_subscription", r.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting", r);

function o(e) {
  let t = decodeURIComponent(e),
    n = (0, i.vu)(t);
  return null != n && n.channelId === l.VV.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === s.BVt.SETTINGS(s.nc_.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : true
}