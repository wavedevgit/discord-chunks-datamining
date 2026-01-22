/** Chunk was on web.js **/
/** chunk id: 798899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk572211 = require("./572211.jsx"),
  Chunk443795 = require("./443795.js"),
  Chunk768349 = require("./768349.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk609653 = require("./609653.js");

function d(e) {
  let {
    application: t,
    message: n,
    header: d,
    onClickContent: f,
    onView: p,
    guildId: _
  } = e, h = i.useMemo(() => (0, r.jsx)(a.Text, {
    variant: "text-xs/medium",
    className: u.h_,
    color: "none",
    lineClamp: 1,
    children: c.intl.string(c.t["84qx9r"])
  }), []);
  return (0, r.jsx)(s.h, {
    header: d,
    title: t.name,
    iconSrc: o.HT.getWhiteIconURL(),
    info: h,
    onClickContent: f,
    trackingConfig: {
      id: t.id,
      linkType: l.J.RICH_PRESENCE_INVITE,
      onView: p,
      referrerId: n.author.id,
      guildId: _,
      channelId: n.channel_id,
      messageId: n.id,
      isDeadEnd: true
    }
  })
}