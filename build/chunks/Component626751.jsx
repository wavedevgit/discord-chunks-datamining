/** Chunk was on web.js **/
/** chunk id: 626751, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk987909 = require("./987909.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk630388 = require("./630388.js"),
  Chunk35125 = require("./35125.js"),
  Chunk523361 = require("./523361.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  var t, n;
  let {
    channel: f,
    message: _
  } = e, p = null != (n = null == (t = _.roleSubscriptionData) ? true : t.is_renewal) && n ? (0, u.Md)() : (0, u.Q8)(), h = f.guild_id, m = (0, a.e7)([s.Z], () => {
    var e;
    return null == (e = s.Z.getGuild(h)) ? true : e.systemChannelFlags
  }, [h]), g = null != m && (0, l.yE)(m, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), E = i.useMemo(() => (0, c._i)(f, _), [f, _]);
  return g ? null : (0, r.jsx)(o.Z, {
    channel: f,
    message: _,
    buttonLabels: p,
    stickers: u.HG,
    event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: E
  })
}