/** Chunk was on web.js **/
/** chunk id: 700989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => E
});
var Chunk406647 = require("./406647.js"),
  Chunk994607 = require("./994607.js"),
  Chunk258357 = require("./258357.js"),
  Chunk873505 = require("./873505.js"),
  Chunk755238 = require("./755238.js"),
  Chunk677061 = require("./677061.js"),
  Chunk682308 = require("./682308.js"),
  Chunk765112 = require("./765112.js"),
  Chunk43341 = require("./43341.js"),
  Chunk154343 = require("./154343.js"),
  Chunk191905 = require("./191905.js"),
  Chunk594886 = require("./594886.js"),
  Chunk970185 = require("./970185.js"),
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