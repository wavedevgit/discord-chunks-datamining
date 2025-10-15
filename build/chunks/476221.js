/** Chunk was on 60831 **/
/** chunk id: 476221, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => r
}), require("./35282.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let r = {
  getStatus: function(e) {
    let t, n, r = arguments.length > 1 && true !== arguments[1] && arguments[1];
    switch (e) {
      case l.hes.CONNECTING:
        t = l.QKv.CONNECTING, n = i.intl.string(i.t.MzW9sL);
        break;
      case l.hes.AUTHENTICATING:
        t = l.QKv.CONNECTING, n = i.intl.string(i.t.GxXwEx);
        break;
      case l.hes.AWAITING_ENDPOINT:
        t = l.QKv.CONNECTING, n = i.intl.string(i.t.xEbu0d);
        break;
      case l.hes.RTC_CONNECTED:
        t = l.QKv.CONNECTED, n = r ? i.intl.string(i.t.HtVOdX) : i.intl.string(i.t["daXg4+"]);
        break;
      case l.hes.RTC_CONNECTING:
        t = l.QKv.CONNECTING, n = i.intl.string(i.t.Gp51dn);
        break;
      case l.hes.ICE_CHECKING:
        t = l.QKv.CONNECTING, n = i.intl.string(i.t.rdCyAw);
        break;
      case l.hes.DTLS_CONNECTING:
        t = l.QKv.CONNECTING, n = i.intl.string(i.t.UvB3gY);
        break;
      case l.hes.NO_ROUTE:
        t = l.QKv.ERROR, n = i.intl.string(i.t.mGhOIi);
        break;
      case l.hes.RTC_DISCONNECTED:
        t = l.QKv.ERROR, n = i.intl.string(i.t.M7LDmJ);
        break;
      case l.hes.DISCONNECTED:
      default:
        t = l.QKv.ERROR, n = i.intl.string(i.t.NLKQb2)
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