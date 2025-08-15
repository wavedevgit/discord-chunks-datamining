/** Chunk was on 22173 **/
/** chunk id: 196255, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk456269 = require("./456269.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk423046 = require("./423046.js");
let d = e => {
  var t, n;
  let {
    message: a,
    channel: d,
    renderColon: m,
    hasUnreads: h
  } = e, {
    user: g,
    author: f
  } = (0, o.AJ)(d), b = null != (n = null != (t = null == f ? true : f.nick) ? t : null == g ? true : g.username) ? n : "", p = (0, i.l)({
    user: null == a ? true : a.author,
    channelId: d.id,
    guildId: d.guild_id,
    messageId: null == a ? true : a.id,
    stopPropagation: true,
    ariaLabel: c.intl.formatToPlainString(c.t.CSIeU1, {
      name: b
    })
  })(null != f ? f : true)(b, d.id);
  return (0, r.jsxs)(l.Text, {
    tag: "span",
    className: s()(u.author, {
      [u.hasUnreads]: h
    }),
    variant: "text-sm/semibold",
    children: [p, true === m ? ": " : null]
  })
}