/** Chunk was on web.js **/
/** chunk id: 544101, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk207963 = require("./207963.jsx"),
  Chunk289770 = require("./289770.js"),
  Chunk247818 = require("./247818.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk794998 = require("./794998.js");

function _(e) {
  let {
    channelTypes: t
  } = e, n = (0, c.jc)(), _ = null == n ? true : n.channelId, h = o.A.getChannel(_), m = l.A.getGuild(null == h ? true : h.getGuildId()), g = e => (0, u.z0)(e, _, t), E = (e, t) => {
    let n = o.A.getChannel(null == e ? true : e.value);
    if (null == n) return null;
    let i = n.type === f.rbe.GUILD_CATEGORY ? a.sjq : (0, s.gU)(n);
    return null != i ? (0, r.jsx)(i, {
      size: "custom",
      color: "currentColor",
      width: t,
      height: t
    }) : null
  }, b = e => (0, r.jsx)("span", {
    className: p.Pf,
    children: e.label
  }), y = i.useMemo(() => (0, u.iA)(e.defaultValues, null == m ? true : m.id, t), [e.defaultValues, m, t]);
  return (0, r.jsx)(d.Ay, {
    selectActionComponent: e,
    queryOptions: g,
    renderIcon: E,
    renderOptionLabel: b,
    defaultValues: y
  })
}