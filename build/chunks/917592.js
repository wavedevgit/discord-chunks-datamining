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
      case l.S7L.CONNECTING:
        t = l.vkP.CONNECTING, n = r.intl.string(r.t.MzW9sN);
        break;
      case l.S7L.AUTHENTICATING:
        t = l.vkP.CONNECTING, n = r.intl.string(r.t.GxXwE2);
        break;
      case l.S7L.AWAITING_ENDPOINT:
        t = l.vkP.CONNECTING, n = r.intl.string(r.t.xEbu0Q);
        break;
      case l.S7L.RTC_CONNECTED:
        t = l.vkP.CONNECTED, n = i ? r.intl.string(r.t.HtVOdd) : r.intl.string(r.t.daXg45);
        break;
      case l.S7L.RTC_CONNECTING:
        t = l.vkP.CONNECTING, n = r.intl.string(r.t.Gp51dl);
        break;
      case l.S7L.ICE_CHECKING:
        t = l.vkP.CONNECTING, n = r.intl.string(r.t["rdCyA/"]);
        break;
      case l.S7L.DTLS_CONNECTING:
        t = l.vkP.CONNECTING, n = r.intl.string(r.t.UvB3gV);
        break;
      case l.S7L.NO_ROUTE:
        t = l.vkP.ERROR, n = r.intl.string(r.t.mGhOIi);
        break;
      case l.S7L.RTC_DISCONNECTED:
        t = l.vkP.ERROR, n = r.intl.string(r.t.M7LDmE);
        break;
      case l.S7L.DISCONNECTED:
      default:
        t = l.vkP.ERROR, n = r.intl.string(r.t.NLKQbx)
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