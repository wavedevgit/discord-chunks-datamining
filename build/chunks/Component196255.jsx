/** Chunk was on 22173 **/
/** chunk id: 196255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk456269 = require("./456269.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk583921 = require("./583921.js");
let d = e => {
  var t, n;
  let {
    message: l,
    channel: d,
    renderColon: m,
    hasUnreads: h
  } = e, {
    user: g,
    author: f
  } = (0, o.AJ)(d), x = null != (n = null != (t = null == f ? true : f.nick) ? t : null == g ? true : g.username) ? n : "", j = (0, i.l)({
    user: null == l ? true : l.author,
    channelId: d.id,
    guildId: d.guild_id,
    messageId: null == l ? true : l.id,
    stopPropagation: true,
    ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, {
      name: x
    })
  })(null != f ? f : true)(x, d.id);
  return (0, s.jsxs)(r.Text, {
    tag: "span",
    className: a()(u.author, {
      [u.hasUnreads]: h
    }),
    variant: "text-sm/semibold",
    children: [j, true === m ? ": " : null]
  })
}