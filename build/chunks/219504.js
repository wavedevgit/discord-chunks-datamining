/** Chunk was on 21968 **/
/** chunk id: 219504, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => r
}), require("./896048.js");
var Chunk64700 = require("./64700.js");

function r(e, t) {
  let [n, r] = i.useState(null), l = i.useCallback(e => {
    r(e)
  }, []), a = i.useCallback(() => {
    r(null)
  }, []), s = i.useCallback(i => {
    a();
    let r = e.find(e => {
        let {
          id: t
        } = e;
        return n === t
      }),
      l = e.find(e => {
        let {
          id: t
        } = e;
        return i === t
      });
    if (null == r || null == l || r === l) return;
    let s = [...e],
      o = s.indexOf(r),
      c = s.indexOf(l),
      d = +(c - o > 0);
    s.splice(o, 1), c = s.indexOf(l), s.splice(c + d, 0, r), t(s)
  }, [e, n, a, t]);
  return {
    draggingId: n,
    handleDragStart: l,
    handleDragReset: a,
    handleDragComplete: s
  }
}