/** Chunk was on 90882 **/
/** chunk id: 34335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s,
  j: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk231338 = require("./231338.js");
let a = Chunk473749.createContext(null),
  o = {
    registerManageWidgetButtonRef: () => l.dG,
    manageFocusOnReorder: Chunk231338.dG,
    getManageButtonForWidget: () => null
  };

function c() {
  let e = i.useContext(a);
  return null != e ? e : o
}

function s(e) {
  let {
    children: t
  } = e, n = i.useRef(new Map), l = i.useCallback(e => t => {
    null != t ? n.current.set(e, t) : n.current.delete(e)
  }, []), o = i.useCallback(e => {
    requestAnimationFrame(() => {
      let t = n.current.get(e);
      null == t || t.focus()
    })
  }, []), c = i.useCallback(e => {
    var t;
    return null != (t = n.current.get(e)) ? t : null
  }, []), s = i.useMemo(() => ({
    registerManageWidgetButtonRef: l,
    manageFocusOnReorder: o,
    getManageButtonForWidget: c
  }), [l, o, c]);
  return (0, r.jsx)(a.Provider, {
    value: s,
    children: t
  })
}