/** Chunk was on 60831 **/
/** chunk id: 362446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var l, i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let s = {};

function u(e) {
  let t = s[e = null != e ? e : "null"];
  return null == t && (t = s[e] = {
    state: o.hes.DISCONNECTED,
    quality: o.IE4.UNKNOWN,
    pings: [],
    hostname: null,
    lossRate: null
  }), t
}

function c(e, t, n) {
  let l = s[e = null != e ? e : "null"];
  return null != l ? t(l) : n
}
class d extends(i = Chunk442837.ZP.Store) {
  getConnectionState(e) {
    return c(e, e => {
      let {
        state: t
      } = e;
      return t
    }, o.hes.DISCONNECTED)
  }
  getQuality(e) {
    return c(e, e => {
      let {
        quality: t
      } = e;
      return t
    }, o.IE4.UNKNOWN)
  }
  getHostname(e) {
    return c(e, e => {
      let {
        hostname: t
      } = e;
      return t
    }, null)
  }
  getPings(e) {
    return c(e, e => {
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
    return c(e, e => {
      let {
        lossRate: t
      } = e;
      return t
    }, null)
  }
}(l = "displayName") in d ? Object.defineProperty(d, l, {
  value: "OverlayRTCConnectionStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : d[l] = "OverlayRTCConnectionStore";
let f = new d(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    s = e.rtcConnectionStates
  },
  RTC_CONNECTION_STATE: function(e) {
    if (null != e.streamKey) returnfalse;
    let t = u(e.lobbyId);
    t.state = e.state, t.hostname = e.hostname
  },
  RTC_CONNECTION_PING: function(e) {
    let t = u(e.lobbyId);
    t.pings = e.pings, t.quality = e.quality
  },
  RTC_CONNECTION_LOSS_RATE: function(e) {
    u(e.lobbyId).lossRate = e.lossRate
  }
})