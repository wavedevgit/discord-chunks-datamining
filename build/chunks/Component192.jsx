/** Chunk was on 38663 **/
/** chunk id: 192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => c,
  r: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk818348 = require("./818348.js");
let a = Chunk64700.createContext(null),
  s = {
    registerManageWidgetButtonRef: () => i.tE,
    manageFocusOnReorder: Chunk818348.tE,
    getManageButtonForWidget: () => null
  };

function o() {
  let e = l.useContext(a);
  return null != e ? e : s
}

function c(e) {
  let {
    children: t
  } = e, n = l.useRef(new Map), i = l.useCallback(e => t => {
    null != t ? n.current.set(e, t) : n.current.delete(e)
  }, []), s = l.useCallback(e => {
    requestAnimationFrame(() => {
      let t = n.current.get(e);
      null == t || t.focus()
    })
  }, []), o = l.useCallback(e => {
    var t;
    return null != (t = n.current.get(e)) ? t : null
  }, []), c = l.useMemo(() => ({
    registerManageWidgetButtonRef: i,
    manageFocusOnReorder: s,
    getManageButtonForWidget: o
  }), [i, s, o]);
  return (0, r.jsx)(a.Provider, {
    value: c,
    children: t
  })
}