/** Chunk was on web.js **/
/** chunk id: 872219, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => E
});
var Chunk224507 = require("./224507.js"),
  Chunk825733 = require("./825733.js"),
  Chunk442058 = require("./442058.js"),
  Chunk217512 = require("./217512.js"),
  Chunk873291 = require("./873291.js"),
  Chunk723906 = require("./723906.js"),
  Chunk807177 = require("./807177.js"),
  Chunk98909 = require("./98909.js"),
  Chunk803082 = require("./803082.js"),
  Chunk790637 = require("./790637.js"),
  Chunk74172 = require("./74172.js"),
  Chunk853590 = require("./853590.js"),
  Chunk47276 = require("./47276.js"),
  Chunk64700 = require("./64700.js");

function g(e) {
  return e && e.__esModule ? e.default : e
}

function E(e, t, n) {
  let {
    keyboardDelegate: E,
    isVirtualized: y,
    layoutDelegate: b,
    layout: O
  } = e, v = (0, p.Q)({
    usage: "search",
    sensitivity: "base"
  }), {
    direction: A
  } = (0, _.Y)(), I = t.selectionManager.disabledBehavior, S = (0, m.useMemo)(() => E || new(0, a.h)({
    collection: t.collection,
    disabledKeys: t.disabledKeys,
    disabledBehavior: I,
    ref: n,
    direction: A,
    collator: v,
    layoutDelegate: b,
    layout: O
  }), [E, t.collection, t.disabledKeys, I, n, A, v, b, O]), T = (0, l.Bi)(e.id);
  r.V4.set(t, T);
  let {
    gridProps: C
  } = (0, o.E)({
    ...e,
    id: T,
    keyboardDelegate: S
  }, t, n);
  y && (C["aria-rowcount"] = t.collection.size + t.collection.headerRows.length), (0, f.D5)() && "expandedKeys" in t && (C.role = "treegrid");
  let {
    column: N,
    direction: w
  } = t.sortDescriptor || {}, R = (0, h.o)(g(i.A), "@react-aria/table"), P = (0, m.useMemo)(() => {
    var e, n;
    let r = null != (n = null == (e = t.collection.columns.find(e => e.key === N)) ? true : e.textValue) ? n : "";
    return w && N ? R.format(`${w}Sort`, {
      columnName: r
    }) : true
  }, [w, N, t.collection.columns]), D = (0, c.I)(P);
  return (0, u.w)(() => {
    P && (0, s.iP)(P, "assertive", 500)
  }, [P]), {
    gridProps: (0, d.v)(C, D, {
      "aria-describedby": [D["aria-describedby"], C["aria-describedby"]].filter(Boolean).join(" ")
    })
  }
}