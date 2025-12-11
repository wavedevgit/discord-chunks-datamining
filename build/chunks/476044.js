/** Chunk was on 44799 **/
/** chunk id: 476044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js");

function l(e) {
  let {
    targetRef: t,
    onShouldClose: n,
    topThreshold: l = 40,
    bottomThreshold: a = 60,
    enabled: o = true
  } = e;
  r.useEffect(() => {
    if (!o || (null == t ? true : t.current) == null) return;
    let e = null,
      r = r => {
        if ((null == t ? true : t.current) == null || !(0, i.kK)(r.target, HTMLElement)) return;
        let o = r.target;
        if (!o.contains(t.current)) return;
        let s = o.scrollTop;
        if (null === e) {
          e = s;
          return
        }
        let c = s - e,
          u = Math.abs(c);
        (c < 0 && u > l || c > 0 && u > a) && n()
      };
    return document.addEventListener("scroll", r, {
      passive: true,
      capture: true
    }), () => {
      document.removeEventListener("scroll", r, {
        capture: true
      })
    }
  }, [o, t, n, l, a])
}