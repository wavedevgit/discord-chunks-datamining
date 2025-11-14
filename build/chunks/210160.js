/** Chunk was on 29709 **/
/** chunk id: 210160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => i
}), require("./388685.js");
var Chunk647438 = require("./647438.js");

function i() {
  let [e, t] = Chunk647438.useState(null), n = Chunk647438.useRef(new Map), i = Chunk647438.useRef(new Map), l = Chunk647438.useCallback((e, r) => {
    let l = n.current.get(e);
    null == l && (l = new Set, n.current.set(e, l));
    let s = i.current.get(e);
    if (null != s && (clearTimeout(s), i.current.delete(e)), null != r) l.add(r), t(e), null != i.current.get(e) && (clearTimeout(i.current.get(e)), i.current.delete(e));
    else if (0 === l.size) {
      let n = setTimeout(() => {
        t(t => t === e ? null : t), i.current.delete(e)
      }, 100);
      i.current.set(e, n)
    }
  }, []), s = Chunk647438.useCallback((e, r) => {
    let l = n.current.get(e);
    if (null == l) return;
    l.delete(r);
    let s = i.current.get(e);
    if (null != s && (clearTimeout(s), i.current.delete(e)), 0 === l.size) {
      let n = setTimeout(() => {
        t(t => t === e ? null : t), i.current.delete(e)
      }, 100);
      i.current.set(e, n)
    }
  }, []);
  return Chunk647438.useEffect(() => {
    let e = i.current;
    return () => {
      module.forEach(e => clearTimeout(e))
    }
  }, []), {
    hoveredGroupId: module,
    handleGroupHover: l,
    handleGroupHoverRemove: s
  }
}