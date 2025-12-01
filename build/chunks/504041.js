/** Chunk was on web.js **/
/** chunk id: 504041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => E
});
var Chunk455419 = require("./455419.js"),
  Chunk478906 = require("./478906.js"),
  Chunk603748 = require("./603748.js"),
  Chunk873505 = require("./873505.js"),
  Chunk385069 = require("./385069.js"),
  Chunk752689 = require("./752689.js"),
  Chunk645537 = require("./645537.js"),
  Chunk983977 = require("./983977.js"),
  Chunk158821 = require("./158821.js"),
  Chunk154343 = require("./154343.js"),
  Chunk852058 = require("./852058.js"),
  Chunk227399 = require("./227399.js"),
  Chunk218769 = require("./218769.js"),
  Chunk473749 = require("./473749.js");

function g(e) {
  return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
  let {
    keyboardDelegate: E,
    isVirtualized: b,
    layoutDelegate: y,
    layout: O
  } = e, v = (0, p.X)({
    usage: "search",
    sensitivity: "base"
  }), {
    direction: S
  } = (0, _.j)(), I = t.selectionManager.disabledBehavior, T = (0, h.useMemo)(() => E || new(0, a.x)({
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    disabledBehavior: I,
    ref: n,
    direction: S,
    collator: v,
    layoutDelegate: y,
    layout: O
  }), [E, t.collection, t.disabledKeys, I, n, S, v, y, O]), A = (0, l.Me)(e.id);
  r._e.set(t, A);
  let {
    gridProps: C
  } = (0, s.N)({
    ...e,
    id: A,
    keyboardDelegate: T
  }, t, n);
  b && (C["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, f.OV)() && "expandedKeys" in t && (C.role = "treegrid");
  let {
    column: N,
    direction: P
  } = t.sortDescriptor || {}, R = (0, m.q)(g(i.Z), "@react-aria/table"), w = (0, h.useMemo)(() => {
    var e, n;
    let r = null != (n = null == (e = t.collection.columns.find(e => e.key === N)) ? true : e.textValue) ? n : "";
    return P && N ? R.format(`${P}Sort`, {
      columnName: r
    }) : true
  }, [P, N, t.collection.columns]), D = (0, c.P)(w);
  return (0, u.r)(() => {
    w && (0, o.xQ)(w, "assertive", 500)
  }, [w]), {
    gridProps: (0, d.d)(C, D, {
      "aria-describedby": [D["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ")
    })
  }
}