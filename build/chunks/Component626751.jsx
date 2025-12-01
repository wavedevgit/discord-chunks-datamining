/** Chunk was on web.js **/
/** chunk id: 626751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk987909 = require("./987909.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk35125 = require("./35125.js"),
  Chunk523361 = require("./523361.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  var t, n;
  let {
    channel: f,
    message: p
  } = e, _ = null != (n = null == (t = p.roleSubscriptionData) ? true : t.is_renewal) && n ? (0, u.Md)() : (0, u.Q8)(), m = f.guild_id, h = (0, o.e7)([l.Z], () => {
    var e;
    return null == (e = l.Z.getGuild(m)) ? true : e.systemChannelFlags
  }, [m]), g = null != h && (0, a.yE)(h, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), E = i.useMemo(() => (0, c._i)(f, p), [f, p]);
  return g ? null : (0, r.jsx)(s.Z, {
    channel: f,
    message: p,
    buttonLabels: _,
    stickers: u.HG,
    event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: E
  })
}