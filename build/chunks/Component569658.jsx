/** Chunk was on 15076 **/
/** chunk id: 569658, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk311047 = require("./311047.jsx"),
  Chunk668339 = require("./668339.jsx"),
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
let f = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, h.r8)(t) || t === j.d4z.GUILD_CATEGORY
};

function N(e) {
  let {
    guildId: t,
    onSelected: n
  } = e, {
    channels: s,
    categories: h
  } = (0, r.cj)([m.Z], () => {
    let e = m.Z.getCategories(t);
    return {
      channels: (0, d.Z)(e._categories, e, f),
      categories: e
    }
  }), N = l()(s).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== j.d4z.GUILD_CATEGORY || null != h[t.id] && h[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, c.F6)(t, p.default, x.Z)
    }
  }).value();
  return (0, i.jsx)(o.d, {
    description: v.intl.string(v.t["2Y9ZfA"]),
    value: j.lds,
    onChange: n,
    options: N,
    renderOptionLabel: e => {
      let t = g.Z.getChannel(e.value);
      if (null == t) return e.label;
      let n = g.Z.getChannel(t.parent_id),
        s = null != n ? n.name : null;
      return (0, i.jsx)(a.Z, {
        icon: (0, u.KS)(t),
        title: e.label,
        subtitle: s
      })
    },
    placeholder: v.intl.string(v.t["Z+oF8h"])
  })
}