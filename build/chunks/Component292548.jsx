/** Chunk was on web.js **/
/** chunk id: 292548, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
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

function f(e) {
  var t, n;
  let {
    channel: f,
    message: p
  } = e, _ = null != (t = null == (n = p.roleSubscriptionData) ? true : n.is_renewal) && t ? (0, u.J9)() : (0, u.oL)(), h = f.guild_id, m = (0, s.bG)([l.A], () => {
    var e;
    return null == (e = l.A.getGuild(h)) ? true : e.systemChannelFlags
  }, [h]), g = null != m && (0, a.Lt)(m, d.ogj.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), E = i.useMemo(() => (0, c.y4)(f, p), [f, p]);
  return g ? null : (0, r.jsx)(o.A, {
    channel: f,
    message: p,
    buttonLabels: _,
    stickers: u.D3,
    event: d.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
    eventProperties: E
  })
}