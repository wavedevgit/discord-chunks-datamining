/** Chunk was on 11010 **/
/** chunk id: 476221, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./35282.js");
var Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let l = {
  getStatus: function(e) {
    let t, n, l = arguments.length > 1 && true !== arguments[1] && arguments[1];
    switch (e) {
      case r.hes.CONNECTING:
        t = r.QKv.CONNECTING, n = i.intl.string(i.t.MzW9sN);
        break;
      case r.hes.AUTHENTICATING:
        t = r.QKv.CONNECTING, n = i.intl.string(i.t.GxXwE2);
        break;
      case r.hes.AWAITING_ENDPOINT:
        t = r.QKv.CONNECTING, n = i.intl.string(i.t.xEbu0Q);
        break;
      case r.hes.RTC_CONNECTED:
        t = r.QKv.CONNECTED, n = l ? i.intl.string(i.t.HtVOdd) : i.intl.string(i.t.daXg45);
        break;
      case r.hes.RTC_CONNECTING:
        t = r.QKv.CONNECTING, n = i.intl.string(i.t.Gp51dl);
        break;
      case r.hes.ICE_CHECKING:
        t = r.QKv.CONNECTING, n = i.intl.string(i.t["rdCyA/"]);
        break;
      case r.hes.DTLS_CONNECTING:
        t = r.QKv.CONNECTING, n = i.intl.string(i.t.UvB3gV);
        break;
      case r.hes.NO_ROUTE:
        t = r.QKv.ERROR, n = i.intl.string(i.t.mGhOIi);
        break;
      case r.hes.RTC_DISCONNECTED:
        t = r.QKv.ERROR, n = i.intl.string(i.t.M7LDmE);
        break;
      case r.hes.DISCONNECTED:
      default:
        t = r.QKv.ERROR, n = i.intl.string(i.t.NLKQbx)
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