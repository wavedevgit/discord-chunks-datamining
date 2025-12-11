/** Chunk was on 9536 **/
/** chunk id: 450474, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk526429 = require("./526429.js"),
  Chunk203377 = require("./203377.js");
let u = e => {
  let {
    label: t,
    description: n,
    guild: u,
    guildMetadata: g,
    disabled: m
  } = e, f = (0, l.Wu)([c.Z], () => c.Z.getAllCategories()), p = i.useMemo(() => f.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      value: t,
      label: n
    }
  }), [f]);
  return 0 === p.length ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(a.d, {
    label: t,
    description: n,
    value: g.secondaryCategoryIds,
    options: p,
    onChange: e => {
      let {
        secondaryCategoryIds: t
      } = g;
      if (e.length < t.length) t.filter(t => !e.includes(t)).forEach(e => (0, o.K0)(u.id, e));
      else {
        if (t.length >= d.Pg) return;
        e.filter(e => !t.includes(e)).forEach(e => (0, o.Kq)(u.id, e))
      }
    },
    isDisabled: m,
    multi: true
  })
}