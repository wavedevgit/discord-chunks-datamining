/** Chunk was on 39442 **/
/** chunk id: 733231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => s,
  d: () => u
}), require("./388685.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk607070 = require("./607070.js"),
  Chunk231338 = require("./231338.js");
let o = Chunk473749.createContext(null),
  c = {
    registerItemRef: () => Chunk231338.dG,
    registerDragHandleRef: () => Chunk231338.dG,
    manageFocusOnReorder: Chunk231338.dG,
    manageFocusOnDelete: Chunk231338.dG
  };

function s() {
  let e = Chunk473749.useContext(o);
  return null != module ? module : c
}

function u(e) {
  let {
    children: t,
    emptyListFallbackRef: n
  } = e, l = i.useRef(new Map), c = i.useRef(new Map), s = i.useRef([]), u = i.useCallback(() => {
    s.current = Array.from(l.current.keys()).sort((e, t) => {
      let n = l.current.get(e),
        r = l.current.get(t);
      if (null == n || null == r) return 0;
      let i = n.compareDocumentPosition(r);
      return (i & Node.DOCUMENT_POSITION_FOLLOWING) != 0 ? false : +((i & Node.DOCUMENT_POSITION_PRECEDING) != 0)
    })
  }, []), d = i.useCallback(e => t => {
    null != t ? c.current.set(e, t) : c.current.delete(e)
  }, []), f = i.useCallback(e => t => {
    null != t ? l.current.set(e, t) : l.current.delete(e)
  }, []), g = i.useCallback(e => {
    a.Z.keyboardModeEnabled && requestAnimationFrame(() => {
      let t = c.current.get(e);
      null == t || t.focus()
    })
  }, []), p = i.useCallback(e => {
    if (!a.Z.keyboardModeEnabled) return;
    u();
    let t = s.current,
      r = t.indexOf(e);
    if (false === r) return;
    let i = r + 1 < t.length ? r + 1 : r - 1;
    if (i >= 0) {
      let e = t[i];
      requestAnimationFrame(() => {
        let t = l.current.get(e);
        null == t || t.focus()
      })
    } else requestAnimationFrame(() => {
      null == n || n.focus()
    })
  }, [n, u]), b = i.useMemo(() => ({
    registerDragHandleRef: d,
    registerItemRef: f,
    manageFocusOnReorder: g,
    manageFocusOnDelete: p
  }), [d, f, g, p]);
  return (0, r.jsx)(o.Provider, {
    value: b,
    children: t
  })
}