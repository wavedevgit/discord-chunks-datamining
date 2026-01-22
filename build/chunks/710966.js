/** Chunk was on web.js **/
/** chunk id: 710966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AE: () => O,
  Ay: () => N,
  Nb: () => C
}), require("./896048.js"), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk972347 = require("./972347.js"),
  Chunk205693 = require("./205693.js"),
  Chunk4511 = require("./4511.js"),
  Chunk52133 = require("./52133.js"),
  Chunk451988 = require("./451988.js"),
  Chunk961350 = require("./961350.js"),
  Chunk676279 = require("./676279.js"),
  Chunk927813 = require("./927813.js"),
  Chunk723702 = require("./723702.js"),
  Chunk661191 = require("./661191.js"),
  Chunk808180 = require("./808180.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = 100,
  y = 0,
  O = {
    any: 100
  },
  A = 100,
  v = 3,
  S = 30 * Chunk927813.A.Millis.SECOND,
  I = 120 * Chunk927813.A.Millis.SECOND,
  T = false !== (0, Chunk676279.EL)();
var C = function(e) {
  return e.UserSSRCUpdate = "user-ssrc-update", e.Update = "update", e
}({});
class N extends Chunk972347.A {
  getWantsLevel() {
    let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 0,
      t = this.getVideoParticipantCount();
    return this.ladder.getMaxSinkValue(t, e)
  }
  userVideoDisabled(e) {
    return this.offscreenDisabledUsers[e]
  }
  isOneToOneCall() {
    return 1 === this.otherUsers.size
  }
  updateCallUserIds(e) {
    this.otherUsers = new Set(e), this.otherUsers.delete(u.default.getId()), this.update()
  }
  shouldReceiveFromUser(e) {
    var t, n;
    let r = !((null == (t = this.connection) ? true : t.getLocalVideoDisabled(e)) || this.userVideoDisabled(e) && (null == (n = this.videoHealthManager) ? true : n.getCurrentVideoToggleState(e)) !== m.bb8.AUTO_PROBING);
    return h.X.isIncomingVideoEnabled() && r
  }
  getAudioSSRCs() {
    return this.audioSsrcs
  }
  setConnection(e) {
    var t, n, r, i, a, o;
    let l = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    null == (t = this.connection) || t.removeListener(s.yq.LocalVideoDisabled, this.handleLocalVideoDisabled), null == (n = this.connection) || n.removeListener(s.yq.LocalMute, this.handleLocalMute), null == (r = this.connection) || r.removeListener(s.yq.ActiveSinksChange, this.delayedUpdate), this.connection = e, null == (i = this.connection) || i.addListener(s.yq.LocalVideoDisabled, this.handleLocalVideoDisabled), null == (a = this.connection) || a.addListener(s.yq.LocalMute, this.handleLocalMute), null == (o = this.connection) || o.addListener(s.yq.ActiveSinksChange, this.delayedUpdate), l && this.update()
  }
  setAudioSSRC(e, t) {
    return t > 0 ? this.audioSsrcs[e] = t : delete this.audioSsrcs[e], this.update()
  }
  setVideoSSRCs(e, t) {
    let n = t.filter(e => {
      var t;
      return e.active && (null != (t = e.ssrc) ? t : 0) > 0
    }).map(e => {
      var t;
      return {
        quality: null != (t = e.quality) ? t : 100,
        ssrc: e.ssrc
      }
    });
    if (n.length > 0) this.videoSsrcs[e] = n, this.participants.add(e);
    else {
      if (true !== this.videoSsrcs[e])
        for (let {
            ssrc: t
          }
          of this.videoSsrcs[e]) delete this.framesReceived[t];
      delete this.remoteVideoSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), this.emit("user-ssrc-update", e, this.audioSsrcs[e], [])
    }
    return this.update(Array.from(this.participants))
  }
  setFirstFrameReceived(e) {
    return this.framesReceived[e] = true, this.update()
  }
  setStreamId(e, t) {
    return null != t ? this.streamIds[e] = t : (e in this.streamIds && delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e]), this.update()
  }
  destroyUser(e) {
    return delete this.audioSsrcs[e], delete this.videoSsrcs[e], this.participants.delete(e), delete this.streamPixelCounts[this.streamIds[e]], delete this.streamIds[e], this.update(Array.from(this.participants))
  }
  reset() {
    this.setConnection(null, false), this.audioSsrcs = {}, this.videoSsrcs = {}, this.remoteVideoSsrcs = {}, this.framesReceived = {}, this.streamIds = {}, this.streamPixelCounts = {}, this.latestWants = O, h.X.off(h.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged)
  }
  setSelectedParticipant(e) {
    if (e === this.selectedParticipantId) return this.latestWants;
    let t = [];
    if (null != this.selectedParticipantId && this.selectedParticipantId !== this.userId && t.push(this.selectedParticipantId), null != e)
      if (this.participants.has(e)) this.selectedParticipantId = e, t.push(e);
      else {
        if (this.userId !== e) return console.warn("Participant not found: ".concat(e)), this.latestWants;
        this.selectedParticipantId = e
      }
    else this.selectedParticipantId = null;
    return this.update(t.filter(e => {
      var t;
      return (null == (t = this.videoSsrcs[e]) ? true : t.length) > 1
    }))
  }
  setPipOpen(e) {
    return (this.pipOpen = e, null != this.selectedParticipantId) ? this.update([this.selectedParticipantId]) : this.latestWants
  }
  getOffscreenDisabledUsers() {
    return this.offscreenDisabledUsers
  }
  setSimulcastDebugOverride(e, t) {
    this.simulcastDebugOverrides.set(e, t), this.update()
  }
  setVideoSize(e, t) {
    t > 0 ? this.streamPixelCounts[e] = t : delete this.streamPixelCounts[e], this.delayedUpdate()
  }
  getVideoParticipantCount() {
    let e = 0;
    for (let n of Object.keys(this.videoSsrcs)) {
      var t;
      !(null == (t = this.connection) ? true : t.getLocalVideoDisabled(n)) && e++
    }
    return e
  }
  getOffscreenTimeoutMs() {
    return this.isStageChannel ? I : S
  }
  getSimulcastOverrideQuality(e) {
    return this.simulcastDebugOverrides.has(e) ? this.simulcastDebugOverrides.get(e) : g.r8.NO_OVERRIDE
  }
  constructor(e, t, n, r = new o.r) {
    var a;
    super(), a = this, E(this, "userId", true), E(this, "isStageChannel", true), E(this, "supportsSeamless", true), E(this, "ladder", true), E(this, "connection", true), E(this, "audioSsrcs", true), E(this, "videoSsrcs", true), E(this, "remoteVideoSsrcs", true), E(this, "framesReceived", true), E(this, "streamIds", true), E(this, "offscreenUsers", true), E(this, "offscreenDisabledUsers", true), E(this, "streamPixelCounts", true), E(this, "latestWants", true), E(this, "participants", true), E(this, "selectedParticipantId", true), E(this, "delayedCall", true), E(this, "offscreenTimeout", true), E(this, "pipOpen", true), E(this, "simulcastDebugOverrides", true), E(this, "videoHealthManager", true), E(this, "otherUsers", true), E(this, "delayedUpdate", true), E(this, "addLru", true), E(this, "updateOffscreenUsers", true), E(this, "handleLocalVideoDisabled", true), E(this, "handleLocalMute", true), E(this, "update", true), E(this, "incomingVideoEnabledChanged", true), this.userId = e, this.isStageChannel = t, this.supportsSeamless = n, this.ladder = r, this.connection = null, this.audioSsrcs = {}, this.videoSsrcs = {}, this.remoteVideoSsrcs = {}, this.framesReceived = {}, this.streamIds = {}, this.offscreenUsers = {}, this.offscreenDisabledUsers = {}, this.streamPixelCounts = {}, this.latestWants = O, this.participants = new Set, this.selectedParticipantId = null, this.pipOpen = false, this.simulcastDebugOverrides = new Map, this.videoHealthManager = null, this.otherUsers = new Set, this.delayedUpdate = () => {
      this.delayedCall.delay()
    }, this.addLru = (e, t, n) => {
      if (n.push(e), n.length <= v) return;
      let r = false,
        i = false;
      for (let e = 0; e < n.length; e++) {
        let a = n[e],
          s = t - this.offscreenUsers[a];
        s > r && (r = s, i = e)
      }
      this.offscreenDisabledUsers[n[i]] = true, n.splice(i, 1)
    }, this.updateOffscreenUsers = () => {
      var e, t;
      if (!(null == (e = this.connection) ? true : e.getActiveOutputSinkTrackingEnabled())) return;
      let n = Date.now(),
        r = [];
      for (let [e, i] of _.default.entries(this.streamIds)) null != i && ((null == (t = this.connection) ? true : t.getHasActiveVideoOutputSink(i)) ? (delete this.offscreenUsers[e], delete this.offscreenDisabledUsers[e]) : null == this.offscreenUsers[e] ? (this.offscreenUsers[e] = n, this.addLru(e, n, r)) : this.offscreenDisabledUsers[e] || (n - this.offscreenUsers[e] >= this.getOffscreenTimeoutMs() ? this.offscreenDisabledUsers[e] = true : this.addLru(e, n, r)));
      if (r.length > 0) {
        let e = n + this.getOffscreenTimeoutMs();
        for (let t of r) e = Math.min(e, this.offscreenUsers[t] + this.getOffscreenTimeoutMs());
        this.offscreenTimeout.start(e - n, this.update)
      } else this.offscreenTimeout.stop()
    }, this.handleLocalVideoDisabled = (e, t) => {
      this.update()
    }, this.handleLocalMute = (e, t) => {
      this.update()
    }, this.update = function() {
      var e, t;
      let n = arguments.length > 0 && true !== arguments[0] ? arguments[0] : [],
        r = a.getWantsLevel(),
        s = {
          any: r
        };
      a.updateOffscreenUsers();
      let o = (0, p.isDesktop)() && a.isOneToOneCall() && !a.isStageChannel;
      for (let [t, i] of _.default.entries(a.videoSsrcs)) {
        let c = [],
          u = false,
          d = null != (e = a.streamPixelCounts[a.streamIds[t]]) ? e : 0,
          f = a.getWantsLevel(d),
          p = i[0].ssrc;
        if (a.shouldReceiveFromUser(t)) {
          let e = t === a.selectedParticipantId && r !== b && !a.pipOpen;
          if (i.length > 1) {
            for (let t of i) t.quality === b ? e ? (s[t.ssrc] = b, p = t.ssrc) : s[t.ssrc] = y : e ? s[t.ssrc] = y : (o && (s[t.ssrc] = f), p = t.ssrc);
            if (a.supportsSeamless && !a.framesReceived[p])
              for (let e of (u = true, c = [p], i)) e.ssrc !== p && a.framesReceived[e.ssrc] && (e.quality === b ? s[e.ssrc] = b : s[e.ssrc] = o ? f : r, c.push(e.ssrc))
          } else e ? s[p] = b : o && (s[p] = f)
        } else
          for (let e of i) s[e.ssrc] = y;
        let _ = a.getSimulcastOverrideQuality(t);
        for (let e of (_ === g.r8.HIGH ? s[p] = b : _ === g.r8.LOW && (s[p] = 50), a.supportsSeamless && u || (c = [p]), i)) c.includes(e.ssrc) || delete a.framesReceived[e.ssrc];
        (n.includes(t) || true !== a.remoteVideoSsrcs[t] && !(0, l.A)(a.remoteVideoSsrcs[t], c)) && (a.remoteVideoSsrcs[t] = [...c], a.emit("user-ssrc-update", t, a.audioSsrcs[t], c))
      }
      for (let [e, n] of Object.entries(a.audioSsrcs))(null == (t = a.connection) ? true : t.getLocalMute(e)) && (s[n] = 0);
      return T ? a.latestWants : (null == a.connection || i().isEqual(a.latestWants, s) || (a.latestWants = s, a.emit("update", s)), s)
    }, this.incomingVideoEnabledChanged = () => {
      this.update()
    }, this.delayedCall = new c.J_(A, this.update), this.offscreenTimeout = new c.Ep, h.X.on(h.N.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged)
  }
}