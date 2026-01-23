/** Chunk was on 31748 **/
/** chunk id: 778862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk684339 = require("./684339.js");

function i(e) {
  let {
    location: t,
    videoSpinnerContext: n,
    userId: i,
    streamId: a,
    loading: o,
    paused: s = false
  } = e, [c] = r.useState(() => new l.M(t));
  r.useEffect(() => {
    s || (o ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, i, a))
  }, [o, s, a, c, n, i])
}