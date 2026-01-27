/** Chunk was on web.js **/
/** chunk id: 20280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U5: () => a,
  Ux: () => i,
  XW: () => l,
  oC: () => s
});
var Chunk64700 = require("./64700.js");
let i = (0, Chunk64700.createContext)({}),
  a = (0, Chunk64700.createContext)(null),
  o = (0, Chunk64700.forwardRef)(function(e, t) {
    let {
      render: n
    } = (0, r.useContext)(a);
    return r.createElement(r.Fragment, null, n(e, t))
  });

function s(e, t) {
  var n;
  let i = null == e ? true : e.renderDropIndicator,
    a = null == e || null == (n = e.isVirtualDragging) ? true : n.call(e),
    s = (0, r.useCallback)(e => {
      if (a || (null == t ? true : t.isDropTarget(e))) return i ? i(e) : r.createElement(o, {
        target: e
      })
    }, [null == t ? true : t.target, a, i]);
  return (null == e ? true : e.useDropIndicator) ? s : true
}

function l(e, t, n) {
  var i, a, o, s, l, c;
  let u = e.focusedKey,
    d = null;
  if ((null == t || null == (i = t.isVirtualDragging) ? true : i.call(t)) && (null == n || null == (a = n.target) ? true : a.type) === "item" && (d = n.target.key, "after" === n.target.dropPosition)) {
    let e = n.collection.getKeyAfter(d),
      t = null;
    if (null != e) {
      let r = null != (s = null == (o = n.collection.getItem(d)) ? true : o.level) ? s : 0;
      for (; e;) {
        let i = n.collection.getItem(e);
        if (!i) break;
        if ("item" !== i.type) {
          e = n.collection.getKeyAfter(e);
          continue
        }
        if ((null != (l = i.level) ? l : 0) <= r) break;
        t = e, e = n.collection.getKeyAfter(e)
      }
    }
    d = null != (c = null != e ? e : t) ? c : d
  }
  return (0, r.useMemo)(() => new Set([u, d].filter(e => null != e)), [u, d])
}