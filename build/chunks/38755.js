/** Chunk was on 63373 **/
/** chunk id: 38755, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk763520 = require("./763520.js");

function r(e) {
  let {
    location: t,
    videoSpinnerContext: n,
    userId: r,
    streamId: s,
    loading: a,
    paused: o = false
  } = e, [c] = l.useState(() => new i.o(t));
  l.useEffect(() => {
    o || (a ? c.onSpinnerStarted() : null != s && c.trackSpinnerDuration(n, r, s))
  }, [a, o, s, c, n, r])
}