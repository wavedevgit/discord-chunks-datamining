/** Chunk was on web.js **/
/** chunk id: 110294, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Qk: () => l,
  Uu: () => o,
  pd: () => c
});
var Chunk632765 = require("./632765.js"),
  Chunk473749 = require("./473749.js");
let o = {
  CollectionRoot: ({
    collection: e,
    renderDropIndicator: t
  }) => a(e, null, t),
  CollectionBranch: ({
    collection: e,
    parent: t,
    renderDropIndicator: n
  }) => a(e, t, n)
};

function a(e, t, n) {
  return (0, r.H)({
    items: t ? e.getChildren(t.key) : e,
    dependencies: [n],
    children(t) {
      let r = t.render(t);
      return n && "item" === t.type ? i.createElement(i.Fragment, null, n({
        type: "item",
        key: t.key,
        dropPosition: "before"
      }), r, s(e, t, n)) : r
    }
  })
}

function s(e, t, n) {
  let r = t.key,
    o = e.getKeyAfter(r),
    a = null != o ? e.getItem(o) : null;
  for (; null != a && "item" !== a.type;) a = null != (o = e.getKeyAfter(a.key)) ? e.getItem(o) : null;
  let s = null != t.nextKey ? e.getItem(t.nextKey) : null;
  for (; null != s && "item" !== s.type;) s = null != s.nextKey ? e.getItem(s.nextKey) : null;
  let l = [];
  if (null == s) {
    let r = t;
    for (; r && (!a || r.parentKey !== a.parentKey && a.level < r.level);) {
      let t = n({
        type: "item",
        key: r.key,
        dropPosition: "after"
      });
      (0, i.isValidElement)(t) && l.push((0, i.cloneElement)(t, {
        key: `${r.key}-after`
      })), r = null != r.parentKey ? e.getItem(r.parentKey) : null
    }
  }
  return l
}
let l = (0, Chunk473749.createContext)(o);

function c(e) {
  return (0, i.useMemo)(() => null != e ? new Set([e]) : null, [e])
}