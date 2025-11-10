/** Chunk was on 46931 **/
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
    paused: c = false
  } = e, [s] = r.useState(() => new i.o(t));
  r.useEffect(() => {
    c || (o ? s.onSpinnerStarted() : null != a && s.trackSpinnerDuration(n, l, a))
  }, [o, c, a, s, n, l])
}