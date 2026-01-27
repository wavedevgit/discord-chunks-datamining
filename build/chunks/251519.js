/** Chunk was on web.js **/
/** chunk id: 251519, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk451988 = require("./451988.js"),
  Chunk157559 = require("./157559.js"),
  Chunk827343 = require("./827343.js"),
  Chunk439372 = require("./439372.js"),
  Chunk626584 = require("./626584.js"),
  Chunk961350 = require("./961350.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk528767 = require("./528767.js"),
  Chunk977997 = require("./977997.js"),
  Chunk403362 = require("./403362.js"),
  Chunk108713 = require("./108713.js"),
  Chunk124697 = require("./124697.js"),
  Chunk643501 = require("./643501.js"),
  Chunk30529 = require("./30529.js"),
  Chunk18125 = require("./18125.js"),
  Chunk544105 = require("./544105.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = new Chunk626584.A("GameConsoleManager"),
  T = 3e3,
  C = 6e4,
  N = 18e4;
async function w(e) {
  let t = f.A.getChannelId();
  i()(null == t, "Syncing to remote while in voice!"), e.selfMute !== d.A.isSelfMute() && await s.A.toggleSelfMute({
    syncRemote: false
  }), e.selfDeaf !== d.A.isSelfDeaf() && s.A.toggleSelfDeaf({
    syncRemote: false
  })
}

function R(e) {
  let t = E.default.getAwaitingRemoteSessionInfo();
  return e.find(e => {
    let n = O.hv.has(e.clientInfo.os),
      r = null != _.A.getVoiceStateForSession(u.default.getId(), e.sessionId),
      i = null == t || (0, y.X)(t.type) === e.clientInfo.os;
    return n && i && r
  })
}
class P extends Chunk439372.A {
  constructor(...e) {
    super(...e), I(this, "rollbackCommandTimeout", new a.Ep), I(this, "awaitRemoteTimeout", new a.Ep), I(this, "actions", {
      WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
      POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
      SESSIONS_REPLACE: () => this.handleSessionsChanged(),
      AUDIO_TOGGLE_SELF_DEAF: e => this.handleAudioStateToggle(e),
      AUDIO_TOGGLE_SELF_MUTE: e => this.handleAudioStateToggle(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e),
      CONSOLE_COMMAND_UPDATE: e => this.handleConsoleCommandUpdate(e),
      PASSIVE_UPDATE_V2: e => this.handleVoiceStateUpdates(e),
      REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
    }), I(this, "maybeConnect", e => {
      let t = R(e);
      if (null == t) return null;
      this.awaitRemoteTimeout.stop(), (0, m.m9)(t.sessionId);
      let n = _.A.getVoiceStateForSession(u.default.getId(), t.sessionId);
      null != n && w(n)
    }), I(this, "handleAudioStateToggle", e => {
      let {
        syncRemote: t,
        context: n
      } = e;
      if (!t || n !== v.x.DEFAULT) return;
      let r = d.A.isSelfDeaf(),
        i = d.A.isSelfMute(),
        a = u.default.getId(),
        o = E.default.getRemoteSessionId();
      if (null == o) return;
      let s = _.A.getVoiceStateForSession(a, o);
      null == s || (s.selfDeaf !== r || s.selfMute !== i) && ((0, m.JS)(o, {
        selfDeaf: r,
        selfMute: i
      }), this.rollbackCommandTimeout.start(T, () => {
        w(s)
      }))
    }), I(this, "handleVoiceStateUpdates", e => {
      let t = e.voiceStates,
        n = E.default.getRemoteSessionId();
      if (null == n) {
        let e = t.map(e => {
          let {
            sessionId: t
          } = e;
          return null != t ? p.A.getSessionById(t) : null
        }).filter(h.Vq);
        return this.maybeConnect(e)
      }
      let r = t.find(e => {
        let {
          sessionId: t
        } = e;
        return t === n
      });
      null != r && (this.rollbackCommandTimeout.stop(), w(r))
    }), I(this, "handleSessionsChanged", () => {
      let e = E.default.getRemoteSessionId();
      null != e && null == p.A.getSessionById(e) && (0, m.ZG)(), null == e && this.maybeConnect(Object.values(p.A.getSessions()))
    }), I(this, "handleWaitForRemoteSession", () => {
      this.awaitRemoteTimeout.start(C, () => {
        (0, m.ZG)(), o.A.show({
          title: A.intl.string(A.t.wGMxr3),
          body: A.intl.string(A.t.i5k8b5)
        })
      })
    }), I(this, "handleConsoleCommandUpdate", e => {
      var t;
      let {
        id: n,
        result: r,
        error: i
      } = e;
      if ("failed" !== r && "n/a" !== r || null == i) return;
      S.info("Console command Error result:", r, i);
      let a = E.default.getAwaitingRemoteSessionInfo();
      if ((null == a ? true : a.commandId) !== n) return;
      let o = E.default.getDevice(a.type, null != (t = a.deviceId) ? t : ""),
        s = (0, b.A)(null != o ? o : {
          id: "id",
          platform: A.intl.string(A.t["UQMV/E"]),
          name: A.intl.string(A.t["UQMV/E"])
        }, r, i);
      null != s && g.A.showSelfDismissableAlert({
        title: s.title,
        body: s.body,
        errorCodeMessage: s.errorCodeMessage,
        reconnectPlatformType: s.isAccountLinkError ? a.type : true
      }), O.v_.has(i.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(N, () => (0, m.ZG)(), true) : "failed" === r && (0, m.ZG)()
    }), I(this, "handleRemoteSessionDisconnect", () => {
      this.awaitRemoteTimeout.stop()
    })
  }
}
let D = new P