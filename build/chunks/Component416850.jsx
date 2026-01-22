/** Chunk was on 64992 **/
/** chunk id: 416850, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk417048 = require("./417048.jsx"),
  Chunk444550 = require("./444550.jsx"),
  Chunk999903 = require("./999903.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk769765 = require("./769765.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let N = e => {
  let {
    channel: {
      type: t
    }
  } = e;
  return (0, g.tr)(t) || t === p.rbe.GUILD_CATEGORY
};

function A(e) {
  let {
    guildId: t,
    onSelected: n
  } = e, {
    channels: l,
    categories: g
  } = (0, r.cf)([m.A], () => {
    let e = m.A.getCategories(t);
    return {
      channels: (0, o.A)(e._categories, e, N),
      categories: e
    }
  }), A = s()(l).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== p.rbe.GUILD_CATEGORY || null != g[t.id] && g[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, c.m1)(t, j.default, x.A)
    }
  }).value();
  return (0, i.jsx)(d.p, {
    description: b.intl.string(b.t["2Y9ZfA"]),
    value: p.dJq,
    onChange: n,
    options: A,
    renderOptionLabel: e => {
      let t = h.A.getChannel(e.value);
      if (null == t) return e.label;
      let n = h.A.getChannel(t.parent_id),
        l = null != n ? n.name : null;
      return (0, i.jsx)(a.X, {
        icon: (0, u.gU)(t),
        title: e.label,
        subtitle: l
      })
    },
    placeholder: b.intl.string(b.t["Z+oF8h"]),
    "data-migration-pending": true
  })
}