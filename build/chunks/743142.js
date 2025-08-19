/** Chunk was on 27978 **/
/** chunk id: 743142, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => o,
  L: () => s
});
var r, Chunk754688 = require("./754688.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  o = ((r = {}).ROLE_SUBSCRIPTION = "role_subscription", r.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting", r);

function s(e) {
  let t = decodeURIComponent(e),
    n = (0, i.Qj)(t);
  return null != n && n.channelId === a.oC.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === l.Z5c.SETTINGS(l.oAB.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : true
}