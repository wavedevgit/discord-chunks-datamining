/** Chunk was on 26434 **/
/** chunk id: 22665, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk318713 = require("./318713.jsx"),
  Chunk223021 = require("./223021.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk55935 = require("./55935.js"),
  Chunk764295 = require("./764295.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk424271 = require("./424271.js"),
  Chunk724913 = require("./724913.js"),
  Chunk328756 = require("./328756.js");
let v = e => {
  let {
    reportingUserId: t,
    guildId: n,
    compact: l,
    channel: a,
    messageId: v,
    reportedTimestamp: O
  } = e, y = f.default.getUser(t), x = i.useMemo(() => l ? (0, p.Z)((0, g.vc)(s()(), "LT")) : null, [l]), j = (0, m.l)({
    user: y,
    channelId: a.id,
    guildId: n,
    messageId: v
  })((0, u.JZ)(y, a)), I = null != y ? y.getAvatarURL(n, (0, c.pxk)(c.EFr.SIZE_16)) : C, S = null != y ? h.intl.format(_.default["+zqXZm"], {
    username: y.username,
    onUserClick: j
  }) : h.intl.string(_.default.xpRjfX);
  return (0, r.jsxs)("div", {
    className: o()(E.messageSpine, E.repliedMessage, x),
    children: [(0, r.jsx)(c.qEK, {
      src: I,
      size: c.EFr.SIZE_16,
      className: b.avatar,
      "aria-label": ""
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: b.username,
      children: S
    }), (0, r.jsxs)(c.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: [(0, r.jsx)("span", {
        className: b.timestampSeparator,
        children: "•"
      }), (0, r.jsx)(d.Z, {
        timestamp: O,
        className: b.timestamp
      })]
    })]
  })
}