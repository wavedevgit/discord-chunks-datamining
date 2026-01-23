/** Chunk was on web.js **/
/** chunk id: 709634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
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
let O = e => {
  let {
    reportingUserId: t,
    guildId: n,
    compact: a,
    channel: o,
    messageId: O,
    reportedTimestamp: v
  } = e, A = _.default.getUser(t), I = i.useMemo(() => a ? (0, f.A)((0, h.i$)(l()(), "LT")) : null, [a]), S = (0, p.P)({
    user: A,
    channelId: o.id,
    guildId: n,
    messageId: O
  })((0, u.m2)(A, o)), T = null != A ? A.getAvatarURL(n, (0, c.FT9)(c._3J.SIZE_16)) : b, C = null != A ? g.intl.format(m.default["+zqXZs"], {
    username: A.username,
    onUserClick: S
  }) : g.intl.string(m.default.xpRjfS);
  return (0, r.jsxs)("div", {
    className: s()(y.NB, y.JZ, I),
    children: [(0, r.jsx)(c.euF, {
      src: T,
      size: c._3J.SIZE_16,
      className: E.my,
      "aria-label": ""
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: E.Xh,
      children: C
    }), (0, r.jsxs)(c.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: [(0, r.jsx)("span", {
        className: E.Ek,
        children: "•"
      }), (0, r.jsx)(d.A, {
        timestamp: v,
        className: E.vE
      })]
    })]
  })
}