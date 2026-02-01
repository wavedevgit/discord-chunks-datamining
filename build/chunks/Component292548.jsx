/** Chunk was on 9753 **/
/** chunk id: 292548, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk147351 = require("./147351.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk942075 = require("./942075.js"),
  Chunk226139 = require("./226139.js"),
  Chunk652215 = require("./652215.js");

function p(e) {
  var t, n;
  let {
    channel: p,
    message: m
  } = e, f = null != (t = null == (n = m.roleSubscriptionData) ? true : n.is_renewal) && t ? (0, u.J9)() : (0, u.oL)(), g = p.guild_id, _ = (0, a.bG)([o.A], () => {
    var e;
    return null == (e = o.A.getGuild(g)) ? true : e.systemChannelFlags
  }, [g]), h = null != _ && (0, l.Lt)(_, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), b = i.useMemo(() => (0, c.y4)(p, m), [p, m]);
  return h ? null : (0, r.jsx)(s.A, {
    channel: p,
    message: m,
    buttonLabels: f,
    stickers: u.D3,
    event: d.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: b
  })
}