/** Chunk was on web.js **/
/** chunk id: 486507, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => s
});
var Chunk746047 = require("./746047.js"),
  Chunk634809 = require("./634809.js"),
  Chunk180717 = require("./180717.js"),
  Chunk473749 = require("./473749.js");

function s(e) {
  let {
    collection: t,
    focusMode: n
  } = e, s = e.UNSAFE_selectionState || (0, i.q)(e), l = (0, a.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), c = s.setFocusedKey;
  s.setFocusedKey = (e, i) => {
    if ("cell" === n && null != e) {
      let n = t.getItem(e);
      if ((null == n ? true : n.type) === "item") {
        var o, a, s, l;
        let c = (0, r._P)(n, t);
        e = "last" === i ? null != (s = null == (o = (0, r.s)(c)) ? true : o.key) ? s : null : null != (l = null == (a = (0, r.l8)(c)) ? true : a.key) ? l : null
      }
    }
    c(e, i)
  };
  let u = (0, a.useMemo)(() => new(0, o.Z)(t, s), [t, s]),
    d = (0, a.useRef)(null);
  return (0, a.useEffect)(() => {
    if (null != s.focusedKey && d.current && !t.getItem(s.focusedKey)) {
      let e = d.current.getItem(s.focusedKey),
        n = (null == e ? true : e.parentKey) != null && ("cell" === e.type || "rowheader" === e.type || "column" === e.type) ? d.current.getItem(e.parentKey) : e;
      if (!n) return void s.setFocusedKey(null);
      let i = d.current.rows,
        o = t.rows,
        a = i.length - o.length,
        l = Math.min(a > 1 ? Math.max(n.index - a + 1, 0) : n.index, o.length - 1),
        c = null;
      for (; l >= 0;) {
        if (!u.isDisabled(o[l].key) && "headerrow" !== o[l].type) {
          c = o[l];
          break
        }
        l < o.length - 1 ? l++ : (l > n.index && (l = n.index), l--)
      }
      if (c) {
        let i = c.hasChildNodes ? [...(0, r._P)(c, t)] : [],
          o = c.hasChildNodes && n !== e && e && e.index < i.length ? i[e.index].key : c.key;
        s.setFocusedKey(o)
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