/** Chunk was on 384 **/
/** chunk id: 450474, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk203377 = require("./203377.js");
let d = e => {
  let {
    label: t,
    description: n,
    guild: d,
    guildMetadata: g,
    disabled: m
  } = e, p = (0, l.Wu)([c.Z], () => c.Z.getAllCategories()), f = i.useMemo(() => p.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [p]);
  return 0 === f.length ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(s.d, {
    label: t,
    description: n,
    value: g.secondaryCategoryIds,
    options: f,
    onChange: e => {
      let {
        secondaryCategoryIds: t
      } = g;
      if (e.length < t.length) t.filter(t => !e.includes(t)).forEach(e => (0, o.K0)(d.id, e));
      else {
        if (t.length >= u.Pg) return;
        e.filter(e => !t.includes(e)).forEach(e => (0, o.Kq)(d.id, e))
      }
    },
    isDisabled: m,
    multi: true
  })
}