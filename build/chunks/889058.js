/** Chunk was on 89479 **/
/** chunk id: 889058, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  m: () => c
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk475743 = require("./475743.js"),
  Chunk954571 = require("./954571.js"),
  Chunk25765 = require("./25765.js"),
  Chunk652215 = require("./652215.js");

function c(a, e) {
  let [t, c] = n.useState(i.N.LANDING), o = (0, r.A)(t), [d, x] = n.useState(null), [m, u] = n.useState(null), [N, h] = n.useState(true), p = n.useCallback(() => {
    switch (t) {
      case i.N.LANDING:
        c(i.N.PRE_CONNECT);
        break;
      case i.N.DISCORD_CONSENT:
        c(i.N.SUCCESS);
        break;
      case i.N.ERROR:
        c(i.N.PRE_CONNECT)
    }
  }, [t]), j = n.useCallback(a => {
    x(null), h(a), c(i.N.ERROR)
  }, []), C = n.useCallback(a => {
    x(a), c(i.N.PRE_CONNECT_WAITING)
  }, []), g = n.useCallback(a => {
    x(null), u(a), c(i.N.DISCORD_CONSENT)
  }, []);
  return n.useEffect(() => {
    t !== o && s.default.track(l.HAw.ACCOUNT_LINK_STEP, {
      location_stack: a,
      previous_step: o,
      current_step: t,
      platform_type: e
    })
  }, [t, o, a, e]), {
    slide: t,
    gotoNext: p,
    gotoError: j,
    handleWaitingForConnection: C,
    handleAuthToken: g,
    expectedCallbackState: d,
    callbackData: m,
    errorCode: N
  }
}