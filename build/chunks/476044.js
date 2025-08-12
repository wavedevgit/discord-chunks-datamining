/** Chunk was on 44799 **/
/** chunk id: 476044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk73800 = require("./73800.js"),
  Chunk374470 = require("./374470.js");

function i(e) {
  let {
    targetRef: t,
    onShouldClose: n,
    topThreshold: i = 40,
    bottomThreshold: l = 60,
    enabled: s = true
  } = e;
  r.useEffect(() => {
    if (!s || (null == t ? true : t.current) == null) return;
    let e = null,
      r = r => {
        if ((null == t ? true : t.current) == null || !(0, o.k)(r.target, HTMLElement)) return;
        let s = r.target;
        if (!s.contains(t.current)) return;
        let a = s.scrollTop;
        if (null === e) {
          e = a;
          return
        }
        let u = a - e,
          c = Math.abs(u);
        (u < 0 && c > i || u > 0 && c > l) && n()
      };
    return document.addEventListener("scroll", r, {
      passive: true,
      capture: true
    }), () => {
      document.removeEventListener("scroll", r, {
        capture: true
      })
    }
  }, [s, t, n, i, l])
}