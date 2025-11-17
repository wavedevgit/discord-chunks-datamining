/** Chunk was on 51343 **/
/** chunk id: 864762, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  k: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk110924 = require("./110924.js"),
  Chunk626135 = require("./626135.js"),
  Chunk798930 = require("./798930.js"),
  Chunk981631 = require("./981631.js");

function o(e, a) {
  let [t, o] = n.useState(l.O.LANDING), c = (0, r.Z)(t), [d, x] = n.useState(null), [u, h] = n.useState(null), [m, N] = n.useState(true), C = n.useCallback(() => {
    switch (t) {
      case l.O.LANDING:
        o(l.O.PRE_CONNECT);
        break;
      case l.O.DISCORD_CONSENT:
        o(l.O.SUCCESS);
        break;
      case l.O.ERROR:
        o(l.O.PRE_CONNECT)
    }
  }, [t]), j = n.useCallback(e => {
    x(null), N(e), o(l.O.ERROR)
  }, []), p = n.useCallback(e => {
    x(e), o(l.O.PRE_CONNECT_WAITING)
  }, []), v = n.useCallback(e => {
    x(null), h(e), o(l.O.DISCORD_CONSENT)
  }, []);
  return n.useEffect(() => {
    t !== c && s.default.track(i.rMx.ACCOUNT_LINK_STEP, {
      location_stack: e,
      previous_step: c,
      current_step: t,
      platform_type: a
    })
  }, [t, c, e, a]), {
    slide: t,
    gotoNext: C,
    gotoError: j,
    handleWaitingForConnection: p,
    handleAuthToken: v,
    expectedCallbackState: d,
    callbackData: u,
    errorCode: m
  }
}