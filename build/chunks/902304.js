/** Chunk was on web.js **/
/** chunk id: 902304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk846519 = require("./846519.js"),
  Chunk668781 = require("./668781.js"),
  Chunk846027 = require("./846027.js"),
  Chunk147913 = require("./147913.js"),
  Chunk710845 = require("./710845.js"),
  Chunk314897 = require("./314897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk797258 = require("./797258.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk254238 = require("./254238.js"),
  Chunk607214 = require("./607214.js"),
  Chunk258609 = require("./258609.js"),
  Chunk565473 = require("./565473.js"),
  Chunk444092 = require("./444092.js"),
  Chunk927923 = require("./927923.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let S = new Chunk710845.Z("GameConsoleManager"),
  A = 3e3,
  C = 6e4,
  N = 18e4;
async function R(e) {
  let t = f.Z.getChannelId();
  i()(null == t, "Syncing to remote while in voice!"), e.selfMute !== d.Z.isSelfMute() && await s.Z.toggleSelfMute({
    syncRemote: false
  }), e.selfDeaf !== d.Z.isSelfDeaf() && s.Z.toggleSelfDeaf({
    syncRemote: false
  })
}

function P(e) {
  let t = E.default.getAwaitingRemoteSessionInfo();
  return e.find(e => {
    let n = O.al.has(e.clientInfo.os),
      r = null != p.Z.getVoiceStateForSession(u.default.getId(), e.sessionId),
      i = null == t || (0, b.y)(t.type) === e.clientInfo.os;
    return n && i && r
  })
}
class D extends Chunk147913.Z {
  constructor(...e) {
    super(...e), T(this, "rollbackCommandTimeout", new a.V7), T(this, "awaitRemoteTimeout", new a.V7), T(this, "actions", {
      WAIT_FOR_REMOTE_SESSION: () => this.handleWaitForRemoteSession(),
      POST_CONNECTION_OPEN: () => this.handleSessionsChanged(),
      SESSIONS_REPLACE: () => this.handleSessionsChanged(),
      AUDIO_TOGGLE_SELF_DEAF: e => this.handleAudioStateToggle(e),
      AUDIO_TOGGLE_SELF_MUTE: e => this.handleAudioStateToggle(e),
      VOICE_STATE_UPDATES: e => this.handleVoiceStateUpdates(e),
      CONSOLE_COMMAND_UPDATE: e => this.handleConsoleCommandUpdate(e),
      PASSIVE_UPDATE_V2: e => this.handleVoiceStateUpdates(e),
      REMOTE_SESSION_DISCONNECT: () => this.handleRemoteSessionDisconnect()
    }), T(this, "maybeConnect", e => {
      let t = P(e);
      if (null == t) return null;
      this.awaitRemoteTimeout.stop(), (0, m.ef)(t.sessionId);
      let n = p.Z.getVoiceStateForSession(u.default.getId(), t.sessionId);
      null != n && R(n)
    }), T(this, "handleAudioStateToggle", e => {
      let {
        syncRemote: t,
        context: n
      } = e;
      if (!t || n !== v.Yn.DEFAULT) return;
      let r = d.Z.isSelfDeaf(),
        i = d.Z.isSelfMute(),
        a = u.default.getId(),
        o = E.default.getRemoteSessionId();
      if (null == o) return;
      let s = p.Z.getVoiceStateForSession(a, o);
      null != s && (s.selfDeaf !== r || s.selfMute !== i) && ((0, m.Vv)(o, {
        selfDeaf: r,
        selfMute: i
      }), this.rollbackCommandTimeout.start(A, () => {
        R(s)
      }))
    }), T(this, "handleVoiceStateUpdates", e => {
      let t = e.voiceStates,
        n = E.default.getRemoteSessionId();
      if (null == n) {
        let e = t.map(e => {
          let {
            sessionId: t
          } = e;
          return null != t ? _.Z.getSessionById(t) : null
        }).filter(h.lm);
        return this.maybeConnect(e)
      }
      let r = t.find(e => {
        let {
          sessionId: t
        } = e;
        return t === n
      });
      null != r && (this.rollbackCommandTimeout.stop(), R(r))
    }), T(this, "handleSessionsChanged", () => {
      let e = E.default.getRemoteSessionId();
      null != e && null == _.Z.getSessionById(e) && (0, m.s6)(), null == e && this.maybeConnect(Object.values(_.Z.getSessions()))
    }), T(this, "handleWaitForRemoteSession", () => {
      this.awaitRemoteTimeout.start(C, () => {
        (0, m.s6)(), o.Z.show({
          title: I.intl.string(I.t.wGMxr3),
          body: I.intl.string(I.t.i5k8b5)
        })
      })
    }), T(this, "handleConsoleCommandUpdate", e => {
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
        s = (0, y.Z)(null != o ? o : {
          id: "id",
          platform: I.intl.string(I.t["UQMV/E"]),
          name: I.intl.string(I.t["UQMV/E"])
        }, r, i);
      null != s && g.Z.showSelfDismissableAlert({
        title: s.title,
        body: s.body,
        errorCodeMessage: s.errorCodeMessage,
        reconnectPlatformType: s.isAccountLinkError ? a.type : true
      }), O.e8.has(i.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(N, () => (0, m.s6)(), true) : "failed" === r && (0, m.s6)()
    }), T(this, "handleRemoteSessionDisconnect", () => {
      this.awaitRemoteTimeout.stop()
    })
  }
}
let w = new D