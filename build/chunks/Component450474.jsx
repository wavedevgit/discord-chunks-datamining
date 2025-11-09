/** Chunk was on 29679 **/
/** chunk id: 450474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk203377 = require("./203377.js");
let d = e => {
  let {
    label: t,
    description: n,
    guild: d,
    guildMetadata: u,
    disabled: g
  } = e, m = (0, l.Wu)([o.Z], () => o.Z.getAllCategories()), p = i.useMemo(() => m.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [m]);
  return 0 === p.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(a.VcW, {
    label: t,
    description: n,
    value: u.secondaryCategoryIds,
    options: p,
    onChange: e => {
      let {
        secondaryCategoryIds: t
      } = u;
      if (e.length < t.length) t.filter(t => !e.includes(t)).forEach(e => (0, s.K0)(d.id, e));
      else {
        if (t.length >= c.Pg) return;
        e.filter(e => !t.includes(e)).forEach(e => (0, s.Kq)(d.id, e))
      }
    },
    isDisabled: g,
    multi: true
  })
}