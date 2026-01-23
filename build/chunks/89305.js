/** Chunk was on 88615 **/
/** chunk id: 89305, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js");

function i(e) {
  let {
    targetRef: t,
    onShouldClose: n,
    topThreshold: i = 40,
    bottomThreshold: o = 60,
    enabled: s = true
  } = e;
  r.useEffect(() => {
    if (!s || (null == t ? true : t.current) == null) return;
    let e = null,
      r = r => {
        if ((null == t ? true : t.current) == null || !(0, l.vq)(r.target, HTMLElement)) return;
        let s = r.target;
        if (!s.contains(t.current)) return;
        let a = s.scrollTop;
        if (null === e) {
          e = a;
          return
        }
        let u = a - e,
          d = Math.abs(u);
        (u < 0 && d > i || u > 0 && d > o) && n()
      };
    return document.addEventListener("scroll", r, {
      passive: true,
      capture: true
    }), () => {
      document.removeEventListener("scroll", r, {
        capture: true
      })
    }
  }, [s, t, n, i, o])
}