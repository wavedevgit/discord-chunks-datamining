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
  let {
    channelTypes: t
  } = e, n = (0, c.CJ)(), p = null == n ? true : n.channelId, h = s.Z.getChannel(p), m = l.Z.getGuild(null == h ? true : h.getGuildId()), g = e => (0, u.af)(e, p, t), E = (e, t) => {
    let n = s.Z.getChannel(null == e ? true : e.value);
    if (null == n) return null;
    let i = n.type === f.d4z.GUILD_CATEGORY ? a.ROc : (0, o.KS)(n);
    return null != i ? (0, r.jsx)(i, {
      size: "custom",
      color: "currentColor",
      width: t,
      height: t
    }) : null
  }, b = e => (0, r.jsx)("span", {
    className: _.label,
    children: e.label
  }), y = i.useMemo(() => (0, u.tx)(e.defaultValues, null == m ? true : m.id, t), [e.defaultValues, m, t]);
  return (0, r.jsx)(d.ZP, {
    selectActionComponent: e,
    queryOptions: g,
    renderIcon: E,
    renderOptionLabel: b,
    defaultValues: y
  })
}