/** Chunk was on web.js **/
/** chunk id: 778629, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qk: () => s,
  Uu: () => a,
  pd: () => l
});
var Chunk898534 = require("./898534.js"),
  Chunk647438 = require("./647438.js");
let a = {
  CollectionRoot: ({
    collection: e,
    renderDropIndicator: t
  }) => o(e, null, t),
  CollectionBranch: ({
    collection: e,
    parent: t,
    renderDropIndicator: n
  }) => o(e, t, n)
};

function o(e, t, n) {
  return (0, r.H)({
    items: t ? e.getChildren(t.key) : e,
    dependencies: [n],
    children(t) {
      var r;
      let a = t.render(t);
      if (!n || "item" !== t.type) return a;
      let o = t.key,
        s = e.getKeyAfter(o);
      return i.createElement(i.Fragment, null, n({
        type: "item",
        key: o,
        dropPosition: "before"
      }), a, (null == s || (null == (r = e.getItem(s)) ? true : r.type) !== "item") && n({
        type: "item",
        key: o,
        dropPosition: "after"
      }))
    }
  })
}
let s = (0, Chunk647438.createContext)(a);

function l(e) {
  return (0, i.useMemo)(() => null != e ? new Set([e]) : null, [e])
}