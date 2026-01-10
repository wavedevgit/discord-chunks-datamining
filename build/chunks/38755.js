/** Chunk was on 69813 **/
/** chunk id: 38755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk763520 = require("./763520.js");

function i(e) {
  let {
    location: t,
    videoSpinnerContext: n,
    userId: i,
    streamId: a,
    loading: o,
    paused: c = false
  } = e, [s] = r.useState(() => new l.o(t));
  r.useEffect(() => {
    c || (o ? s.onSpinnerStarted() : null != a && s.trackSpinnerDuration(n, i, a))
  }, [o, c, a, s, n, i])
}