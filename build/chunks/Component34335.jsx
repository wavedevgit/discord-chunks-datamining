/** Chunk was on 22325 **/
/** chunk id: 34335, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => c,
  j: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk231338 = require("./231338.js");
let l = Chunk647438.createContext(null),
  o = {
    registerManageWidgetButtonRef: () => Chunk231338.dG,
    manageFocusOnReorder: Chunk231338.dG,
    getManageButtonForWidget: () => null
  };

function s() {
  let e = Chunk647438.useContext(l);
  return null != module ? module : o
}

function c(e) {
  let {
    children: t
  } = e, n = i.useRef(new Map), a = i.useCallback(e => t => {
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
    registerManageWidgetButtonRef: a,
    manageFocusOnReorder: o,
    getManageButtonForWidget: s
  }), [a, o, s]);
  return (0, r.jsx)(l.Provider, {
    value: c,
    children: t
  })
}