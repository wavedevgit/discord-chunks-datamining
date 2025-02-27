/** Chunk was on 29611 **/
n.d(t, {
  Z: () => h
});
var i, o, r, a = n(442837),
  l = n(570140),
  c = n(981631);
let s = {};

function u(e) {
  let t = s[e = null != e ? e : "null"];
  return null == t && (t = s[e] = {
    state: c.hes.DISCONNECTED,
    quality: c.IE4.UNKNOWN,
    pings: [],
    hostname: null,
    lossRate: null
  }), t
}

function d(e, t, n) {
  let i = s[e = null != e ? e : "null"];
  return null != i ? t(i) : n
}
class _ extends(r = a.ZP.Store) {
  getConnectionState(e) {
    return d(e, e => {
      let {
        state: t
      } = e;
      return t
    }, c.hes.DISCONNECTED)
  }
  getQuality(e) {
    return d(e, e => {
      let {
        quality: t
      } = e;
      return t
    }, c.IE4.UNKNOWN)
  }
  getHostname(e) {
    return d(e, e => {
      let {
        hostname: t
      } = e;
      return t
    }, null)
  }
  getPings(e) {
    return d(e, e => {
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
    return 0 === n.length ? 0 : null === (t = n[n.length - 1]) || void 0 === t ? void 0 : t.value
  }
  getOutboundLossRate(e) {
    return d(e, e => {
      let {
        lossRate: t
      } = e;
      return t
    }, null)
  }
}
o = "OverlayRTCConnectionStore", (i = "displayName") in _ ? Object.defineProperty(_, i, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[i] = o;
let h = new _(l.Z, {
  OVERLAY_INITIALIZE: function(e) {
    s = e.rtcConnectionStates
  },
  RTC_CONNECTION_STATE: function(e) {
    if (null != e.streamKey) return !1;
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