/** Chunk was on web.js **/
/** chunk id: 831039, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => E
});
var Chunk709629 = require("./709629.js"),
  Chunk388196 = require("./388196.js"),
  Chunk731316 = require("./731316.js"),
  Chunk873505 = require("./873505.js"),
  Chunk100924 = require("./100924.js"),
  Chunk39807 = require("./39807.js"),
  Chunk24645 = require("./24645.js"),
  Chunk217728 = require("./217728.js"),
  Chunk586235 = require("./586235.js"),
  Chunk154343 = require("./154343.js"),
  Chunk162004 = require("./162004.js"),
  Chunk960095 = require("./960095.js"),
  Chunk792160 = require("./792160.js"),
  Chunk647438 = require("./647438.js");

function g(e) {
  return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
  let {
    keyboardDelegate: E,
    isVirtualized: b,
    layoutDelegate: y,
    layout: O
  } = e, v = (0, _.X)({
    usage: "search",
    sensitivity: "base"
  }), {
    direction: I
  } = (0, p.j)(), T = t.selectionManager.disabledBehavior, S = (0, m.useMemo)(() => E || new(0, a.x)({
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    disabledBehavior: T,
    ref: n,
    direction: I,
    collator: v,
    layoutDelegate: y,
    layout: O
  }), [E, t.collection, t.disabledKeys, T, n, I, v, y, O]), A = (0, l.Me)(e.id);
  r._e.set(t, A);
  let {
    gridProps: C
  } = (0, s.N)({
    ...e,
    id: A,
    keyboardDelegate: S
  }, t, n);
  b && (C["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, f.OV)() && "expandedKeys" in t && (C.role = "treegrid");
  let {
    column: N,
    direction: R
  } = t.sortDescriptor || {}, P = (0, h.q)(g(i.Z), "@react-aria/table"), w = (0, m.useMemo)(() => {
    var e, n;
    let r = null != (n = null == (e = t.collection.columns.find(e => e.key === N)) ? true : e.textValue) ? n : "";
    return R && N ? P.format(`${R}Sort`, {
      columnName: r
    }) : true
  }, [R, N, t.collection.columns]), D = (0, c.P)(w);
  return (0, u.r)(() => {
    w && (0, o.xQ)(w, "assertive", 500)
  }, [w]), {
    gridProps: (0, d.d)(C, D, {
      "aria-describedby": [D["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ")
    })
  }
}