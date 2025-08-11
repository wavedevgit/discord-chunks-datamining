/** Chunk was on web.js **/
/** chunk id: 38755, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk763520 = require("./763520.js");

function o(e) {
  let {
    location: t,
    videoSpinnerContext: n,
    userId: o,
    streamId: a,
    loading: s,
    paused: l = false
  } = e, [c] = r.useState(() => new i.o(t));
  r.useEffect(() => {
    l || (s ? c.onSpinnerStarted() : null != a && c.trackSpinnerDuration(n, o, a))
  }, [s, l, a, c, n, o])
}