/** Chunk was on web.js **/
/** chunk id: 89219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk789407 = require("./789407.js"),
  Chunk967249 = require("./967249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk927997 = require("./927997.js");

function d(e) {
  let {
    application: t,
    message: n,
    header: d,
    onClickContent: f,
    onView: p,
    guildId: _
  } = e, m = i.useMemo(() => (0, r.jsx)(a.Text, {
    variant: "text-xs/medium",
    className: u.description,
    color: "none",
    lineClamp: 1,
    children: c.intl.string(c.t["84qx9r"])
  }), []);
  return (0, r.jsx)(o.W, {
    header: d,
    title: t.name,
    iconSrc: s.r9.getWhiteIconURL(),
    info: m,
    onClickContent: f,
    trackingConfig: {
      id: t.id,
      linkType: l.U.RICH_PRESENCE_INVITE,
      onView: p,
      referrerId: n.author.id,
      guildId: _,
      channelId: n.channel_id,
      messageId: n.id,
      isDeadEnd: true
    }
  })
}