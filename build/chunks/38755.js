/** Chunk was on 86642 **/
/** chunk id: 38755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk763520 = require("./763520.js");

function l(e) {
  let {
    location: t,
    videoSpinnerContext: n,
    userId: l,
    streamId: a,
    loading: o,
    paused: s = false
  } = e, [c] = i.useState(() => new r.o(t));
  i.useEffect(() => {
    s || (o ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, l, a))
  }, [o, s, a, c, n, l])
}