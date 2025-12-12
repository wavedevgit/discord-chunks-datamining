/** Chunk was on web.js **/
/** chunk id: 941084, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ed: () => i,
  SZ: () => o,
  _$: () => s,
  y: () => l
});
var Chunk473749 = require("./473749.js");
let i = (0, Chunk473749.createContext)({}),
  o = (0, Chunk473749.createContext)(null),
  a = (0, Chunk473749.forwardRef)(function(e, t) {
    let {
      render: n
    } = (0, r.useContext)(o);
    return r.createElement(r.Fragment, null, n(e, t))
  });

function s(e, t) {
  var n;
  let i = null == e ? true : e.renderDropIndicator,
    o = null == e || null == (n = e.isVirtualDragging) ? true : n.call(e),
    s = (0, r.useCallback)(e => {
      if (o || (null == t ? true : t.isDropTarget(e))) return i ? i(e) : r.createElement(a, {
        target: e
      })
    }, [null == t ? true : t.target, o, i]);
  return (null == e ? true : e.useDropIndicator) ? s : true
}

function l(e, t, n) {
  var i, o, a, s, l, c;
  let u = e.focusedKey,
    d = null;
  if ((null == t || null == (i = t.isVirtualDragging) ? true : i.call(t)) && (null == n || null == (o = n.target) ? true : o.type) === "item" && (d = n.target.key, "after" === n.target.dropPosition)) {
    let e = n.collection.getKeyAfter(d),
      t = null;
    if (null != e) {
      let r = null != (s = null == (a = n.collection.getItem(d)) ? true : a.level) ? s : 0;
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