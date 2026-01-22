/** Chunk was on 88615 **/
/** chunk id: 89305, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js");

function i(e) {
  let {
    targetRef: t,
    onShouldClose: l,
    topThreshold: i = 40,
    bottomThreshold: s = 60,
    enabled: o = true
  } = e;
  r.useEffect(() => {
    if (!o || (null == t ? true : t.current) == null) return;
    let e = null,
      r = r => {
        if ((null == t ? true : t.current) == null || !(0, n.vq)(r.target, HTMLElement)) return;
        let o = r.target;
        if (!o.contains(t.current)) return;
        let a = o.scrollTop;
        if (null === e) {
          e = a;
          return
        }
        let u = a - e,
          d = Math.abs(u);
        (u < 0 && d > i || u > 0 && d > s) && l()
      };
    return document.addEventListener("scroll", r, {
      passive: true,
      capture: true
    }), () => {
      document.removeEventListener("scroll", r, {
        capture: true
      })
    }
  }, [o, t, l, i, s])
}