/** Chunk was on 91173 **/
/** chunk id: 626751, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk987909 = require("./987909.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk630388 = require("./630388.js"),
  Chunk35125 = require("./35125.js"),
  Chunk523361 = require("./523361.js"),
  Chunk981631 = require("./981631.js");

function p(e) {
  var t, n;
  let {
    channel: p,
    message: m
  } = e, f = null != (n = null == (t = m.roleSubscriptionData) ? true : t.is_renewal) && n ? (0, u.Md)() : (0, u.Q8)(), g = p.guild_id, _ = (0, l.e7)([o.Z], () => {
    var e;
    return null == (e = o.Z.getGuild(g)) ? true : e.systemChannelFlags
  }, [g]), h = null != _ && (0, s.yE)(_, d.xmn.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), b = i.useMemo(() => (0, c._i)(p, m), [p, m]);
  return h ? null : (0, r.jsx)(a.Z, {
    channel: p,
    message: m,
    buttonLabels: f,
    stickers: u.HG,
    event: d.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: b
  })
}