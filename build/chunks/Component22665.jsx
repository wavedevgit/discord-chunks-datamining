/** Chunk was on web.js **/
/** chunk id: 22665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk223021 = require("./223021.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk797013 = require("./797013.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424271 = require("./424271.js"),
  Chunk724913 = require("./724913.js"),
  Chunk328756 = require("./328756.js");
let O = e => {
  let {
    reportingUserId: t,
    guildId: n,
    compact: a,
    channel: s,
    messageId: O,
    reportedTimestamp: v
  } = e, I = p.default.getUser(t), T = i.useMemo(() => a ? (0, f.Z)((0, h.vc)(l()(), "LT")) : null, [a]), S = (0, _.l)({
    user: I,
    channelId: s.id,
    guildId: n,
    messageId: O
  })((0, u.JZ)(I, s)), A = null != I ? I.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : y, C = null != I ? g.intl.format(m.default["+zqXZs"], {
    username: I.username,
    onUserClick: S
  }) : g.intl.string(m.default.xpRjfS);
  return (0, r.jsxs)("div", {
    className: o()(b.messageSpine, b.repliedMessage, T),
    children: [(0, r.jsx)(c.qEK, {
      src: A,
      size: c.EFr.SIZE_16,
      className: E.avatar,
      "aria-label": ""
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: E.username,
      children: C
    }), (0, r.jsxs)(c.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: [(0, r.jsx)("span", {
        className: E.timestampSeparator,
        children: "•"
      }), (0, r.jsx)(d.Z, {
        timestamp: v,
        className: E.timestamp
      })]
    })]
  })
}