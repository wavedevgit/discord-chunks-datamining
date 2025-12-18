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
  let [a, o] = n.useState(l.O.LANDING), c = (0, r.Z)(a), [d, u] = n.useState(null), [x, m] = n.useState(null), [h, N] = n.useState(true), p = n.useCallback(() => {
    switch (a) {
      case l.O.LANDING:
        o(l.O.PRE_CONNECT);
        break;
      case l.O.DISCORD_CONSENT:
        o(l.O.SUCCESS);
        break;
      case l.O.ERROR:
        o(l.O.PRE_CONNECT)
    }
  }, [a]), g = n.useCallback(e => {
    u(null), N(e), o(l.O.ERROR)
  }, []), C = n.useCallback(e => {
    u(e), o(l.O.PRE_CONNECT_WAITING)
  }, []), j = n.useCallback(e => {
    u(null), m(e), o(l.O.DISCORD_CONSENT)
  }, []);
  return n.useEffect(() => {
    a !== c && i.default.track(s.rMx.ACCOUNT_LINK_STEP, {
      location_stack: e,
      previous_step: c,
      current_step: a,
      platform_type: t
    })
  }, [a, c, e, t]), {
    slide: a,
    gotoNext: p,
    gotoError: g,
    handleWaitingForConnection: C,
    handleAuthToken: j,
    expectedCallbackState: d,
    callbackData: x,
    errorCode: h
  }
}