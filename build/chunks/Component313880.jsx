/** Chunk was on 48898 **/
/** chunk id: 313880, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk435470 = require("./435470.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk834502 = require("./834502.js");
let u = e => {
  var t, n;
  let {
    message: s,
    channel: u,
    renderColon: h,
    hasUnreads: g
  } = e, {
    user: m,
    author: p
  } = (0, o.kn)(u), f = null != (t = null != (n = null == p ? true : p.nick) ? n : null == m ? true : m.username) ? t : "", v = (0, a.P)({
    user: null == s ? true : s.author,
    channelId: u.id,
    guildId: u.guild_id,
    messageId: null == s ? true : s.id,
    stopPropagation: true,
    ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, {
      name: f
    })
  })(null != p ? p : true)(f, u.id);
  return (0, i.jsxs)(l.Text, {
    tag: "span",
    className: r()(d.c, {
      [d.p]: g
    }),
    variant: "text-sm/semibold",
    children: [v, true === h ? ": " : null]
  })
}