/** Chunk was on 15076 **/
/** chunk id: 569658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk740504 = require("./740504.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let j = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, u.r8)(t) || t === p.d4z.GUILD_CATEGORY
};

function f(e) {
  let {
    guildId: t,
    onSelected: n
  } = e, {
    channels: s,
    categories: u
  } = (0, r.cj)([g.Z], () => {
    let e = g.Z.getCategories(t);
    return {
      channels: (0, o.Z)(e._categories, e, j),
      categories: e
    }
  }), f = l()(s).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== p.d4z.GUILD_CATEGORY || null != u[t.id] && u[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, d.F6)(t, x.default, m.Z)
    }
  }).value();
  return (0, i.jsx)(a.VcW, {
    description: v.intl.string(v.t["2Y9ZfA"]),
    value: p.lds,
    onChange: n,
    options: f,
    renderOptionLabel: e => {
      let t = h.Z.getChannel(e.value);
      if (null == t) return e.label;
      let n = h.Z.getChannel(t.parent_id),
        s = null != n ? n.name : null;
      return (0, i.jsx)(a.ZZ$, {
        icon: (0, c.KS)(t),
        title: e.label,
        subtitle: s
      })
    },
    placeholder: v.intl.string(v.t["Z+oF8h"])
  })
}