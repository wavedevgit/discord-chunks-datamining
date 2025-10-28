/** Chunk was on 33622 **/
/** chunk id: 506699, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  y: () => n
});
var Chunk647438 = require("./647438.js");

function n(e) {
  let {
    ref: a,
    box: t,
    onResize: n
  } = e;
  (0, u.useEffect)(() => {
    let e = null == a ? true : a.current;
    if (e)
      if (true === window.ResizeObserver) return window.addEventListener("resize", n, false), () => {
        window.removeEventListener("resize", n, false)
      };
      else {
        let a = new window.ResizeObserver(e => {
          e.length && n()
        });
        return a.observe(e, {
          box: t
        }), () => {
          e && a.unobserve(e)
        }
      }
  }, [n, a, t])
}