/** Chunk was on web.js **/
/** chunk id: 22665, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk342153 = require("./342153.js"),
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
  } = e, S = _.default.getUser(t), I = i.useMemo(() => a ? (0, f.Z)((0, m.vc)(l()(), "LT")) : null, [a]), T = (0, p.l)({
    user: S,
    channelId: s.id,
    guildId: n,
    messageId: O
  })((0, u.JZ)(S, s)), A = null != S ? S.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : y, C = null != S ? g.intl.format(h.default["+zqXZs"], {
    username: S.username,
    onUserClick: T
  }) : g.intl.string(h.default.xpRjfS);
  return (0, r.jsxs)("div", {
    className: o()(b.messageSpine, b.repliedMessage, I),
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