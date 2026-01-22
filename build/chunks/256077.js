/** Chunk was on 46636 **/
/** chunk id: 256077, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  p: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function i() {
  let [e, t] = r.useState(null), n = r.useRef(new Map), i = r.useRef(new Map), l = r.useCallback((e, r) => {
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
  }, []), s = r.useCallback((e, r) => {
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
  return r.useEffect(() => {
    let e = i.current;
    return () => {
      e.forEach(e => clearTimeout(e))
    }
  }, []), {
    hoveredGroupId: e,
    handleGroupHover: l,
    handleGroupHoverRemove: s
  }
}