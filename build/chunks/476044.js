/** Chunk was on 44799 **/
/** chunk id: 476044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk647438 = require("./647438.js"),
  Chunk374470 = require("./374470.js");

function o(e) {
  let {
    targetRef: t,
    onShouldClose: n,
    topThreshold: o = 40,
    bottomThreshold: s = 60,
    enabled: l = true
  } = e;
  r.useEffect(() => {
    if (!l || (null == t ? true : t.current) == null) return;
    let e = null,
      r = r => {
        if ((null == t ? true : t.current) == null || !(0, i.k)(r.target, HTMLElement)) return;
        let l = r.target;
        if (!l.contains(t.current)) return;
        let a = l.scrollTop;
        if (null === e) {
          e = a;
          return
        }
        let c = a - e,
          u = Math.abs(c);
        (c < 0 && u > o || c > 0 && u > s) && n()
      };
    return document.addEventListener("scroll", r, {
      passive: true,
      capture: true
    }), () => {
      document.removeEventListener("scroll", r, {
        capture: true
      })
    }
  }, [l, t, n, o, s])
}