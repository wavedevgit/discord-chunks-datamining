/** Chunk was on 49559 **/
/** chunk id: 544101, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    channelTypes: t
  } = e, n = (0, c.jc)(), f = null == n ? true : n.channelId, O = o.A.getChannel(f), b = s.A.getGuild(null == O ? true : O.getGuildId()), y = l.useMemo(() => (0, u.iA)(e.defaultValues, null == b ? true : b.id, t), [e.defaultValues, b, t]);
  return (0, r.jsx)(d.Ay, {
    selectActionComponent: e,
    queryOptions: e => (0, u.z0)(e, f, t),
    renderIcon: (e, t) => {
      let n = o.A.getChannel(null == e ? true : e.value);
      if (null == n) return null;
      let l = n.type === p.rbe.GUILD_CATEGORY ? a.sjq : (0, i.gU)(n);
      return null != l ? (0, r.jsx)(l, {
        size: "custom",
        color: "currentColor",
        width: t,
        height: t
      }) : null
    },
    renderOptionLabel: e => (0, r.jsx)("span", {
      className: m.Pf,
      children: e.label
    }),
    defaultValues: y
  })
}