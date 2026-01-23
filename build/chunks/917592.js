/** Chunk was on 31748 **/
/** chunk id: 917592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./747238.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let i = {
  getStatus: function(e) {
    let t, n, i = arguments.length > 1 && true !== arguments[1] && arguments[1];
    switch (e) {
      case r.S7L.CONNECTING:
        t = r.vkP.CONNECTING, n = l.intl.string(l.t.MzW9sN);
        break;
      case r.S7L.AUTHENTICATING:
        t = r.vkP.CONNECTING, n = l.intl.string(l.t.GxXwE2);
        break;
      case r.S7L.AWAITING_ENDPOINT:
        t = r.vkP.CONNECTING, n = l.intl.string(l.t.xEbu0Q);
        break;
      case r.S7L.RTC_CONNECTED:
        t = r.vkP.CONNECTED, n = i ? l.intl.string(l.t.HtVOdd) : l.intl.string(l.t.daXg45);
        break;
      case r.S7L.RTC_CONNECTING:
        t = r.vkP.CONNECTING, n = l.intl.string(l.t.Gp51dl);
        break;
      case r.S7L.ICE_CHECKING:
        t = r.vkP.CONNECTING, n = l.intl.string(l.t["rdCyA/"]);
        break;
      case r.S7L.DTLS_CONNECTING:
        t = r.vkP.CONNECTING, n = l.intl.string(l.t.UvB3gV);
        break;
      case r.S7L.NO_ROUTE:
        t = r.vkP.ERROR, n = l.intl.string(l.t.mGhOIi);
        break;
      case r.S7L.RTC_DISCONNECTED:
        t = r.vkP.ERROR, n = l.intl.string(l.t.M7LDmE);
        break;
      case r.S7L.DISCONNECTED:
      default:
        t = r.vkP.ERROR, n = l.intl.string(l.t.NLKQbx)
    }
    return {
      connectionStatus: t,
      connectionStatusText: n
    }
  },
  getShortHostname: function(e) {
    return null == e ? "" : e.split(".")[0]
  }
}