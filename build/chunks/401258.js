/** Chunk was on 67544 **/
/** chunk id: 401258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk668826 = require("./668826.js"),
  Chunk115092 = require("./115092.js");

function a(e) {
  let {
    isPaused: t,
    pointsPerInterval: n,
    interval: a,
    itemId: i,
    onPointsInterval: c
  } = e, l = (0, r.useRef)(Date.now()), u = (0, r.useCallback)(() => {
    let e = (Date.now() - l.current) * n / a;
    (0, s.KH)(i, e), null == c || c(), l.current = Date.now()
  }, [n, a, i, c]), d = (0, r.useCallback)(() => {
    l.current = Date.now()
  }, []), f = (0, r.useCallback)(u, [u]);
  return (0, o.Z)({
    isPaused: t,
    onInterval: u,
    interval: a,
    onIntervalSet: d,
    onIntervalCleared: f
  }), null
}