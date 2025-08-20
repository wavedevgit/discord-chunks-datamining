/** Chunk was on 84927 **/
/** chunk id: 362446, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var r, l, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk981631 = require("./981631.js");
let o = {};

function c(e) {
  let t = o[e = null != e ? e : "null"];
  return null == t && (t = o[e] = {
    state: a.hes.DISCONNECTED,
    quality: a.IE4.UNKNOWN,
    pings: [],
    hostname: null,
    lossRate: null
  }), t
}

function u(e, t, n) {
  let r = o[e = null != e ? e : "null"];
  return null != r ? t(r) : n
}
class d extends(l = Chunk442837.ZP.Store) {
  getConnectionState(e) {
    return u(e, e => {
      let {
        state: t
      } = e;
      return t
    }, a.hes.DISCONNECTED)
  }
  getQuality(e) {
    return u(e, e => {
      let {
        quality: t
      } = e;
      return t
    }, a.IE4.UNKNOWN)
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
let h = new d(Chunk570140.Z, {
  OVERLAY_INITIALIZE: function(e) {
    o = e.rtcConnectionStates
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