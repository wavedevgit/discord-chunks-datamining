/** Chunk was on 47841 **/
/** chunk id: 719175, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk460760 = require("./460760.js"),
  Chunk997590 = require("./997590.js"),
  Chunk927573 = require("./927573.js");
let d = e => {
  let {
    label: t,
    description: n,
    guild: d,
    guildMetadata: u,
    disabled: g
  } = e, m = (0, l.yK)([o.A], () => o.A.getAllCategories()), p = i.useMemo(() => m.map(e => {
    let {
      categoryId: t,
      name: n
    } = e;
    return {
      id: t.toString(),
      value: t,
      label: n
    }
  }), [m]);
  return 0 === p.length ? (0, r.jsx)(s.y$y, {}) : (0, r.jsx)(s.ZiE, {
    selectionMode: "multiple",
    label: t,
    description: n,
    value: u.secondaryCategoryIds,
    options: p,
    onSelectionChange: e => {
      let {
        secondaryCategoryIds: t
      } = u;
      if (e.length < t.length) t.filter(t => !e.includes(t)).forEach(e => (0, a.Tz)(d.id, e));
      else {
        if (t.length >= c._4) return;
        e.filter(e => !t.includes(e)).forEach(e => (0, a.nA)(d.id, e))
      }
    },
    disabled: g
  })
}