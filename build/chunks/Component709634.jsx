/** Chunk was on 64935 **/
/** chunk id: 709634, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk449859 = require("./449859.jsx"),
  Chunk943815 = require("./943815.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk405269 = require("./405269.js"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk197172 = require("./197172.js"),
  Chunk679740 = require("./679740.js"),
  Chunk513653 = require("./513653.js");
let v = e => {
  let {
    reportingUserId: t,
    guildId: n,
    compact: l,
    channel: s,
    messageId: v,
    reportedTimestamp: O
  } = e, x = f.default.getUser(t), E = i.useMemo(() => l ? (0, p.A)((0, g.i$)(o()(), "LT")) : null, [l]), j = (0, m.P)({
    user: x,
    channelId: s.id,
    guildId: n,
    messageId: v
  })((0, u.m2)(x, s)), C = null != x ? x.getAvatarURL(n, (0, c.FT9)(c._3J.SIZE_16)) : A, I = null != x ? h.intl.format(_.default["+zqXZs"], {
    username: x.username,
    onUserClick: j
  }) : h.intl.string(_.default.xpRjfS);
  return (0, r.jsxs)("div", {
    className: a()(y.NB, y.JZ, E),
    children: [(0, r.jsx)(c.euF, {
      src: C,
      size: c._3J.SIZE_16,
      className: b.my,
      "aria-label": ""
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: b.Xh,
      children: I
    }), (0, r.jsxs)(c.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: [(0, r.jsx)("span", {
        className: b.Ek,
        children: "•"
      }), (0, r.jsx)(d.A, {
        timestamp: O,
        className: b.vE
      })]
    })]
  })
}