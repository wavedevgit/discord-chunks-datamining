/** Chunk was on web.js **/
/** chunk id: 927057, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk811654 = require("./811654.js"),
  Chunk344991 = require("./344991.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk111566 = require("./111566.js");

function p(e) {
  var t;
  let {
    channelTypes: n
  } = e, p = (0, c.CJ)(), h = null == p || null == (t = p.message) ? true : t.getChannelId(), m = s.Z.getChannel(h), g = l.Z.getGuild(null == m ? true : m.getGuildId()), E = e => (0, u.af)(e, h, n), b = (e, t) => {
    let n = s.Z.getChannel(null == e ? true : e.value);
    if (null == n) return null;
    let i = n.type === f.d4z.GUILD_CATEGORY ? a.ROc : (0, o.KS)(n);
    return null != i ? (0, r.jsx)(i, {
      size: "custom",
      color: "currentColor",
      width: t,
      height: t
    }) : null
  }, y = e => (0, r.jsx)("span", {
    className: _.label,
    children: e.label
  }), O = i.useMemo(() => (0, u.tx)(e.defaultValues, null == g ? true : g.id, n), [e.defaultValues, g, n]);
  return (0, r.jsx)(d.ZP, {
    selectActionComponent: e,
    queryOptions: E,
    renderIcon: b,
    renderOptionLabel: y,
    defaultValues: O
  })
}