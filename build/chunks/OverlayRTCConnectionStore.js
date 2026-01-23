/** Chunk was on 31748 **/
/** chunk id: 572487, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var r, l, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk652215 = require("./652215.js");
let s = {};

function c(e) {
  let t = s[e = null != e ? e : "null"];
  return null == t && (t = s[e] = {
    state: o.S7L.DISCONNECTED,
    quality: o.bFR.UNKNOWN,
    pings: [],
    hostname: null,
    lossRate: null
  }), t
}

function u(e, t, n) {
  let r = s[e = null != e ? e : "null"];
  return null != r ? t(r) : n
}
class d extends(l = Chunk311907.Ay.Store) {
  getConnectionState(e) {
    return u(e, e => {
      let {
        state: t
      } = e;
      return t
    }, o.S7L.DISCONNECTED)
  }
  getQuality(e) {
    return u(e, e => {
      let {
        quality: t
      } = e;
      return t
    }, o.bFR.UNKNOWN)
  }
  getHostname(e) {
    return u(e, e => {
      let {
        hostname: t
      } = e;
      return t
    }, null)
  }
  getPings(e) {
    return u(e, e => {
      let {
        pings: t
      } = e;
      return t
    }, [])
  }
  getAveragePing(e) {
    let t = this.getPings(e);
    return 0 === t.length ? 0 : t.reduce((e, t) => e + t.value, 0) / t.length
  }
  getLastPing(e) {
    var t;
    let n = this.getPings(e);
    return 0 === n.length ? 0 : null == (t = n[n.length - 1]) ? true : t.value
  }
  getOutboundLossRate(e) {
    return u(e, e => {
      let {
        lossRate: t
      } = e;
      return t
    }, null)
  }
}(r = "displayName") in d ? Object.defineProperty(d, r, {
  value: "OverlayRTCConnectionStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[r] = "OverlayRTCConnectionStore";
let f = new d(Chunk73153.h, {
  OVERLAY_INITIALIZE: function(e) {
    s = e.rtcConnectionStates
  },
  RTC_CONNECTION_STATE: function(e) {
    if (null != e.streamKey) returnfalse;
    let t = c(e.lobbyId);
    t.state = e.state, t.hostname = e.hostname
  },
  RTC_CONNECTION_PING: function(e) {
    let t = c(e.lobbyId);
    t.pings = e.pings, t.quality = e.quality
  },
  RTC_CONNECTION_LOSS_RATE: function(e) {
    c(e.lobbyId).lossRate = e.lossRate
  }
})