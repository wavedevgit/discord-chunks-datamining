/** Chunk was on 29611 **/
n.d(t, {
  Z: () => r
}), n(301563);
var i = n(981631),
  o = n(388032);
let r = {
  getStatus: function(e) {
    let t, n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
      case i.hes.CONNECTING:
        t = i.QKv.CONNECTING, n = o.NW.string(o.t.MzW9sL);
        break;
      case i.hes.AUTHENTICATING:
        t = i.QKv.CONNECTING, n = o.NW.string(o.t.GxXwEx);
        break;
      case i.hes.AWAITING_ENDPOINT:
        t = i.QKv.CONNECTING, n = o.NW.string(o.t.xEbu0d);
        break;
      case i.hes.RTC_CONNECTED:
        t = i.QKv.CONNECTED, n = r ? o.NW.string(o.t.HtVOdX) : o.NW.string(o.t["daXg4+"]);
        break;
      case i.hes.RTC_CONNECTING:
        t = i.QKv.CONNECTING, n = o.NW.string(o.t.Gp51dn);
        break;
      case i.hes.ICE_CHECKING:
        t = i.QKv.CONNECTING, n = o.NW.string(o.t.rdCyAw);
        break;
      case i.hes.DTLS_CONNECTING:
        t = i.QKv.CONNECTING, n = o.NW.string(o.t.UvB3gY);
        break;
      case i.hes.NO_ROUTE:
        t = i.QKv.ERROR, n = o.NW.string(o.t.mGhOIi);
        break;
      case i.hes.RTC_DISCONNECTED:
        t = i.QKv.ERROR, n = o.NW.string(o.t.M7LDmJ);
        break;
      case i.hes.DISCONNECTED:
      default:
        t = i.QKv.ERROR, n = o.NW.string(o.t.NLKQb2)
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