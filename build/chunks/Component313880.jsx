/** Chunk was on 7602 **/
/** chunk id: 313880, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => c
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
let c = e => {
  var t, s;
  let {
    message: n,
    channel: c,
    renderColon: u,
    hasUnreads: g
  } = e, {
    user: m,
    author: v
  } = (0, o.kn)(c), p = null != (t = null != (s = null == v ? true : v.nick) ? s : null == m ? true : m.username) ? t : "", f = (0, a.P)({
    user: null == n ? true : n.author,
    channelId: c.id,
    guildId: c.guild_id,
    messageId: null == n ? true : n.id,
    stopPropagation: true,
    ariaLabel: d.intl.formatToPlainString(d.t.CSIeU1, {
      name: p
    })
  })(null != v ? v : true)(p, c.id);
  return (0, i.jsxs)(l.Text, {
    tag: "span",
    className: r()(h.c, {
      [h.p]: g
    }),
    variant: "text-sm/semibold",
    children: [f, true === u ? ": " : null]
  })
}