/** Chunk was on 49882 **/
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
    streamId: o,
    loading: a,
    paused: s = false
  } = e, [c] = r.useState(() => new i.o(t));
  r.useEffect(() => {
    s || (a ? c.onSpinnerStarted() : null != o && c.trackSpinnerDuration(n, l, o))
  }, [a, s, o, c, n, l])
}