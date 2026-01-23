/** Chunk was on 38663 **/
/** chunk id: 823016, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => u,
  r: () => c
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk775602 = require("./775602.js"),
  Chunk818348 = require("./818348.js");
let o = Chunk64700.createContext(null),
  s = {
    registerItemRef: () => a.tE,
    registerDragHandleRef: () => a.tE,
    manageFocusOnReorder: Chunk818348.tE,
    manageFocusOnDelete: Chunk818348.tE
  };

function c() {
  let e = l.useContext(o);
  return null != e ? e : s
}

function u(e) {
  let {
    children: t,
    emptyListFallbackRef: n
  } = e, a = l.useRef(new Map), s = l.useRef(new Map), c = l.useRef([]), u = l.useCallback(() => {
    c.current = Array.from(a.current.keys()).sort((e, t) => {
      let n = a.current.get(e),
        r = a.current.get(t);
      if (null == n || null == r) return 0;
      let l = n.compareDocumentPosition(r);
      return (l & Node.DOCUMENT_POSITION_FOLLOWING) != 0 ? false : +((l & Node.DOCUMENT_POSITION_PRECEDING) != 0)
    })
  }, []), d = l.useCallback(e => t => {
    null != t ? s.current.set(e, t) : s.current.delete(e)
  }, []), f = l.useCallback(e => t => {
    null != t ? a.current.set(e, t) : a.current.delete(e)
  }, []), p = l.useCallback(e => {
    i.A.keyboardModeEnabled && requestAnimationFrame(() => {
      let t = s.current.get(e);
      null == t || t.focus()
    })
  }, []), g = l.useCallback(e => {
    if (!i.A.keyboardModeEnabled) return;
    u();
    let t = c.current,
      r = t.indexOf(e);
    if (false === r) return;
    let l = r + 1 < t.length ? r + 1 : r - 1;
    if (l >= 0) {
      let e = t[l];
      requestAnimationFrame(() => {
        let t = a.current.get(e);
        null == t || t.focus()
      })
    } else requestAnimationFrame(() => {
      null == n || n.focus()
    })
  }, [n, u]), m = l.useMemo(() => ({
    registerDragHandleRef: d,
    registerItemRef: f,
    manageFocusOnReorder: p,
    manageFocusOnDelete: g
  }), [d, f, p, g]);
  return (0, r.jsx)(o.Provider, {
    value: m,
    children: t
  })
}