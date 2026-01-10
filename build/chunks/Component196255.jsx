/** Chunk was on 87646 **/
/** chunk id: 196255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk456269 = require("./456269.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk583921 = require("./583921.js");
let d = e => {
  var t, n;
  let {
    message: s,
    channel: d,
    renderColon: h,
    hasUnreads: g
  } = e, {
    user: m,
    author: f
  } = (0, o.AJ)(d), p = null != (n = null != (t = null == f ? true : f.nick) ? t : null == m ? true : m.username) ? n : "", v = (0, a.l)({
    user: null == s ? true : s.author,
    channelId: d.id,
    guildId: d.guild_id,
    messageId: null == s ? true : s.id,
    stopPropagation: true,
    ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, {
      name: p
    })
  })(null != f ? f : true)(p, d.id);
  return (0, i.jsxs)(l.Text, {
    tag: "span",
    className: r()(u.author, {
      [u.hasUnreads]: g
    }),
    variant: "text-sm/semibold",
    children: [v, true === h ? ": " : null]
  })
}