/** Chunk was on 61344 **/
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
    loading: s,
    paused: o = false
  } = e, [c] = l.useState(() => new r.M(t));
  l.useEffect(() => {
    o || (s ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, i, a))
  }, [s, o, a, c, n, i])
}