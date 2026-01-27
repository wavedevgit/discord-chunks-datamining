/** Chunk was on web.js **/
/** chunk id: 342876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => s
});
var Chunk371926 = require("./371926.js"),
  Chunk36310 = require("./36310.js"),
  Chunk74733 = require("./74733.js"),
  Chunk64700 = require("./64700.js");

function s(e) {
  let {
    collection: t,
    focusMode: n
  } = e, s = e.UNSAFE_selectionState || (0, i.R)(e), l = (0, o.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = s.setFocusedKey;
  s.setFocusedKey = (e, i) => {
    if ("cell" === n && null != e) {
      let n = t.getItem(e);
      if ((null == n ? true : n.type) === "item") {
        var a, o, s, l;
        let c = (0, r.iQ)(n, t);
        e = "last" === i ? null != (s = null == (a = (0, r.W)(c)) ? true : a.key) ? s : null : null != (l = null == (o = (0, r.ue)(c)) ? true : o.key) ? l : null
      }
    }
    c(e, i)
  };
  let u = (0, o.useMemo)(() => new(0, a.Y)(t, s), [t, s]),
    d = (0, o.useRef)(null);
  return (0, o.useEffect)(() => {
    if (null != s.focusedKey && d.current && !t.getItem(s.focusedKey)) {
      let e = d.current.getItem(s.focusedKey),
        n = (null == e ? true : e.parentKey) != null && ("cell" === e.type || "rowheader" === e.type || "column" === e.type) ? d.current.getItem(e.parentKey) : e;
      if (!n) return void s.setFocusedKey(null);
      let i = d.current.rows,
        a = t.rows,
        o = i.length - a.length,
        l = Math.min(o > 1 ? Math.max(n.index - o + 1, 0) : n.index, a.length - 1),
        c = null;
      for (; l >= 0;) {
        if (!u.isDisabled(a[l].key) && "headerrow" !== a[l].type) {
          c = a[l];
          break
        }
        l < a.length - 1 ? l++ : (l > n.index && (l = n.index), l--)
      }
      if (c) {
        let i = c.hasChildNodes ? [...(0, r.iQ)(c, t)] : [],
          a = c.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : c.key;
        s.setFocusedKey(a)
      } else s.setFocusedKey(null)
    }
    d.current = t
  }, [t, u, s, s.focusedKey]), {
    collection: t,
    disabledKeys: l,
    isKeyboardNavigationDisabled: false,
    selectionManager: u
  }
}