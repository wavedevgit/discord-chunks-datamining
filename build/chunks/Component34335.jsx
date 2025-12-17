/** Chunk was on 39442 **/
/** chunk id: 34335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s,
  j: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk231338 = require("./231338.js");
let l = Chunk473749.createContext(null),
  o = {
    registerManageWidgetButtonRef: () => Chunk231338.dG,
    manageFocusOnReorder: Chunk231338.dG,
    getManageButtonForWidget: () => null
  };

function c() {
  let e = Chunk473749.useContext(l);
  return null != module ? module : o
}

function s(e) {
  let {
    children: t
  } = e, n = i.useRef(new Map), a = i.useCallback(e => t => {
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
    registerManageWidgetButtonRef: a,
    manageFocusOnReorder: o,
    getManageButtonForWidget: c
  }), [a, o, c]);
  return (0, r.jsx)(l.Provider, {
    value: s,
    children: t
  })
}