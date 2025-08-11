/** Chunk was on 82096 **/
/** chunk id: 476221, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./35282.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let i = {
  getStatus: function(e) {
    let t, n, i = arguments.length > 1 && true !== arguments[1] && arguments[1];
    switch (e) {
      case r.hes.CONNECTING:
        t = r.QKv.CONNECTING, n = l.intl.string(l.t.MzW9sL);
        break;
      case r.hes.AUTHENTICATING:
        t = r.QKv.CONNECTING, n = l.intl.string(l.t.GxXwEx);
        break;
      case r.hes.AWAITING_ENDPOINT:
        t = r.QKv.CONNECTING, n = l.intl.string(l.t.xEbu0d);
        break;
      case r.hes.RTC_CONNECTED:
        t = r.QKv.CONNECTED, n = i ? l.intl.string(l.t.HtVOdX) : l.intl.string(l.t["daXg4+"]);
        break;
      case r.hes.RTC_CONNECTING:
        t = r.QKv.CONNECTING, n = l.intl.string(l.t.Gp51dn);
        break;
      case r.hes.ICE_CHECKING:
        t = r.QKv.CONNECTING, n = l.intl.string(l.t.rdCyAw);
        break;
      case r.hes.DTLS_CONNECTING:
        t = r.QKv.CONNECTING, n = l.intl.string(l.t.UvB3gY);
        break;
      case r.hes.NO_ROUTE:
        t = r.QKv.ERROR, n = l.intl.string(l.t.mGhOIi);
        break;
      case r.hes.RTC_DISCONNECTED:
        t = r.QKv.ERROR, n = l.intl.string(l.t.M7LDmJ);
        break;
      case r.hes.DISCONNECTED:
      default:
        t = r.QKv.ERROR, n = l.intl.string(l.t.NLKQb2)
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