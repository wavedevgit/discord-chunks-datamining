/** Chunk was on 20941 **/
/** chunk id: 544101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    channelTypes: t
  } = e, n = (0, c.jc)(), p = null == n ? true : n.channelId, h = s.A.getChannel(p), b = o.A.getGuild(null == h ? true : h.getGuildId()), g = l.useMemo(() => (0, u.iA)(e.defaultValues, null == b ? true : b.id, t), [e.defaultValues, b, t]);
  return (0, r.jsx)(d.Ay, {
    selectActionComponent: e,
    queryOptions: e => (0, u.z0)(e, p, t),
    renderIcon: (e, t) => {
      let n = s.A.getChannel(null == e ? true : e.value);
      if (null == n) return null;
      let l = n.type === m.rbe.GUILD_CATEGORY ? a.sjq : (0, i.gU)(n);
      return null != l ? (0, r.jsx)(l, {
        size: "custom",
        color: "currentColor",
        width: t,
        height: t
      }) : null
    },
    renderOptionLabel: e => (0, r.jsx)("span", {
      className: f.Pf,
      children: e.label
    }),
    defaultValues: g
  })
}