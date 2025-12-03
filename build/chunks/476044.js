/** Chunk was on 44799 **/
/** chunk id: 476044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js");

function o(e) {
  let {
    targetRef: t,
    onShouldClose: n,
    topThreshold: o = 40,
    bottomThreshold: l = 60,
    enabled: a = true
  } = e;
  r.useEffect(() => {
    if (!a || (null == t ? true : t.current) == null) return;
    let e = null,
      r = r => {
        if ((null == t ? true : t.current) == null || !(0, i.kK)(r.target, HTMLElement)) return;
        let a = r.target;
        if (!a.contains(t.current)) return;
        let s = a.scrollTop;
        if (null === e) {
          e = s;
          return
        }
        let u = s - e,
          c = Math.abs(u);
        (u < 0 && c > o || u > 0 && c > l) && n()
      };
    return document.addEventListener("scroll", r, {
      passive: true,
      capture: true
    }), () => {
      document.removeEventListener("scroll", r, {
        capture: true
      })
    }
  }, [a, t, n, o, l])
}