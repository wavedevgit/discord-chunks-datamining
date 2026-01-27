/** Chunk was on 94682 **/
/** chunk id: 192, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => c,
  r: () => s
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk818348 = require("./818348.js");
let a = Chunk64700.createContext(null),
  o = {
    registerManageWidgetButtonRef: () => i.tE,
    manageFocusOnReorder: Chunk818348.tE,
    getManageButtonForWidget: () => null
  };

function s() {
  let e = l.useContext(a);
  return null != e ? e : o
}

function c(e) {
  let {
    children: t
  } = e, n = l.useRef(new Map), i = l.useCallback(e => t => {
    null != t ? n.current.set(e, t) : n.current.delete(e)
  }, []), o = l.useCallback(e => {
    requestAnimationFrame(() => {
      let t = n.current.get(e);
      null == t || t.focus()
    })
  }, []), s = l.useCallback(e => {
    var t;
    return null != (t = n.current.get(e)) ? t : null
  }, []), c = l.useMemo(() => ({
    registerManageWidgetButtonRef: i,
    manageFocusOnReorder: o,
    getManageButtonForWidget: s
  }), [i, o, s]);
  return (0, r.jsx)(a.Provider, {
    value: c,
    children: t
  })
}