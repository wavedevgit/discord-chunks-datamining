/** Chunk was on 30243 **/
/** chunk id: 927057, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk811654 = require("./811654.js"),
  Chunk344991 = require("./344991.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk111566 = require("./111566.js");

function b(e) {
  var t;
  let {
    channelTypes: r
  } = e, b = (0, s.CJ)(), m = null == b || null == (t = b.message) ? true : t.getChannelId(), O = a.Z.getChannel(m), y = c.Z.getGuild(null == O ? true : O.getGuildId()), j = l.useMemo(() => (0, u.tx)(e.defaultValues, null == y ? true : y.id, r), [e.defaultValues, y, r]);
  return (0, n.jsx)(d.ZP, {
    selectActionComponent: e,
    queryOptions: e => (0, u.af)(e, m, r),
    renderIcon: (e, t) => {
      let r = a.Z.getChannel(null == e ? true : e.value);
      if (null == r) return null;
      let l = r.type === p.d4z.GUILD_CATEGORY ? i.ROc : (0, o.KS)(r);
      return null != l ? (0, n.jsx)(l, {
        size: "custom",
        color: "currentColor",
        width: t,
        height: t
      }) : null
    },
    renderOptionLabel: e => (0, n.jsx)("span", {
      className: f.label,
      children: e.label
    }),
    defaultValues: j
  })
}