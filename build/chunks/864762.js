/** Chunk was on 51343 **/
/** chunk id: 864762, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  k: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk110924 = require("./110924.js"),
  Chunk626135 = require("./626135.js"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js");

function o(e, t) {
  let [a, o] = l.useState(r.O.LANDING), c = (0, n.Z)(a), [d, u] = l.useState(null), [x, m] = l.useState(null), [h, N] = l.useState(true), C = l.useCallback(() => {
    switch (a) {
      case r.O.LANDING:
        o(r.O.PRE_CONNECT);
        break;
      case r.O.DISCORD_CONSENT:
        o(r.O.SUCCESS);
        break;
      case r.O.ERROR:
        o(r.O.PRE_CONNECT)
    }
  }, [a]), j = l.useCallback(e => {
    u(null), N(e), o(r.O.ERROR)
  }, []), p = l.useCallback(e => {
    u(e), o(r.O.PRE_CONNECT_WAITING)
  }, []), v = l.useCallback(e => {
    u(null), m(e), o(r.O.DISCORD_CONSENT)
  }, []);
  return l.useEffect(() => {
    a !== c && s.default.track(i.rMx.ACCOUNT_LINK_STEP, {
      location_stack: e,
      previous_step: c,
      current_step: a,
      platform_type: t
    })
  }, [a, c, e, t]), {
    slide: a,
    gotoNext: C,
    gotoError: j,
    handleWaitingForConnection: p,
    handleAuthToken: v,
    expectedCallbackState: d,
    callbackData: x,
    errorCode: h
  }
}