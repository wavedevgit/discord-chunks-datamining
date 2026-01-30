/** Chunk was on 64935 **/
/** chunk id: 798899, original params: e,t,n (module,exports,require) **/
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
    onClickContent: p,
    onView: m,
    guildId: f
  } = e, g = i.useMemo(() => (0, r.jsx)(l.Text, {
    variant: "text-xs/medium",
    className: u.h_,
    color: "none",
    lineClamp: 1,
    children: c.intl.string(c.t["84qx9r"])
  }), []);
  return (0, r.jsx)(a.h, {
    header: d,
    title: t.name,
    iconSrc: s.HT.getWhiteIconURL(),
    info: g,
    onClickContent: p,
    trackingConfig: {
      id: t.id,
      linkType: o.J.RICH_PRESENCE_INVITE,
      onView: m,
      referrerId: n.author.id,
      guildId: f,
      channelId: n.channel_id,
      messageId: n.id,
      isDeadEnd: true
    }
  })
}