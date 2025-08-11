/** Chunk was on 67544 **/
/** chunk id: 115092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk73800 = require("./73800.js");

function s(e) {
  let {
    isPaused: t,
    onInterval: n,
    interval: s,
    onIntervalSet: o,
    onIntervalCleared: a
  } = e;
  (0, r.useEffect)(() => {
    if (!t) {
      null == o || o();
      let e = setInterval(n, s);
      return () => {
        null == a || a(), clearInterval(e)
      }
    }
  }, [s, t, n, a, o])
}