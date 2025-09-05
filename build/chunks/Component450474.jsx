/** Chunk was on 88479 **/
/** chunk id: 450474, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk203377 = require("./203377.js");
let d = e => {
  let {
    guild: t,
    guildMetadata: n,
    disabled: d
  } = e, u = (0, l.Wu)([o.Z], () => o.Z.getAllCategories()), m = i.useMemo(() => u.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [u]);
  return 0 === m.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(a.VcW, {
    value: n.secondaryCategoryIds,
    options: m,
    onChange: e => {
      let {
        secondaryCategoryIds: r
      } = n;
      if (e.length < r.length) r.filter(t => !e.includes(t)).forEach(e => (0, s.K0)(t.id, e));
      else {
        if (r.length >= c.Pg) return;
        e.filter(e => !r.includes(e)).forEach(e => (0, s.Kq)(t.id, e))
      }
    },
    isDisabled: d,
    multi: true
  })
}