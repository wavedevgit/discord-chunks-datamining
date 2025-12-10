/** Chunk was on 49941 **/
/** chunk id: 34335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => c,
  j: () => s
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk231338 = require("./231338.js");
let a = Chunk473749.createContext(null),
  o = {
    registerManageWidgetButtonRef: () => Chunk231338.dG,
    manageFocusOnReorder: Chunk231338.dG,
    getManageButtonForWidget: () => null
  };

function s() {
  let e = Chunk473749.useContext(a);
  return null != module ? module : o
}

function c(e) {
  let {
    children: t
  } = e, n = i.useRef(new Map), l = i.useCallback(e => t => {
    null != t ? n.current.set(e, t) : n.current.delete(e)
  }, []), o = i.useCallback(e => {
    requestAnimationFrame(() => {
      let t = n.current.get(e);
      null == t || t.focus()
    })
  }, []), s = i.useCallback(e => {
    var t;
    return null != (t = n.current.get(e)) ? t : null
  }, []), c = i.useMemo(() => ({
    registerManageWidgetButtonRef: l,
    manageFocusOnReorder: o,
    getManageButtonForWidget: s
  }), [l, o, s]);
  return (0, r.jsx)(a.Provider, {
    value: c,
    children: t
  })
}