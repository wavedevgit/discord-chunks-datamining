/** Chunk was on web.js **/
/** chunk id: 902304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let T = new Chunk710845.Z("GameConsoleManager"),
  A = 3e3,
  C = 6e4,
  N = 18e4;
async function P(e) {
  let t = f.Z.getChannelId();
  i()(null == t, "Syncing to remote while in voice!"), e.selfMute !== d.Z.isSelfMute() && await s.Z.toggleSelfMute({
    syncRemote: false
  }), e.selfDeaf !== d.Z.isSelfDeaf() && s.Z.toggleSelfDeaf({
    syncRemote: false
  })
}

function R(e) {
  let t = E.default.getAwaitingRemoteSessionInfo();
  return e.find(e => {
    let n = O.al.has(e.clientInfo.os),
      r = null != _.Z.getVoiceStateForSession(u.default.getId(), e.sessionId),
      i = null == t || (0, b.y)(t.type) === e.clientInfo.os;
    return n && i && r
  })
}
class w extends Chunk147913.Z {
  constructor(...e) {
    super(...e), I(this, "rollbackCommandTimeout", new a.V7), I(this, "awaitRemoteTimeout", new a.V7), I(this, "actions", {
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
      this.awaitRemoteTimeout.stop(), (0, h.ef)(t.sessionId);
      let n = _.Z.getVoiceStateForSession(u.default.getId(), t.sessionId);
      null != n && P(n)
    }), I(this, "handleAudioStateToggle", e => {
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
      let s = _.Z.getVoiceStateForSession(a, o);
      null != s && (s.selfDeaf !== r || s.selfMute !== i) && ((0, h.Vv)(o, {
        selfDeaf: r,
        selfMute: i
      }), this.rollbackCommandTimeout.start(A, () => {
        P(s)
      }))
    }), I(this, "handleVoiceStateUpdates", e => {
      let t = e.voiceStates,
        n = E.default.getRemoteSessionId();
      if (null == n) {
        let e = t.map(e => {
          let {
            sessionId: t
          } = e;
          return null != t ? p.Z.getSessionById(t) : null
        }).filter(m.lm);
        return this.maybeConnect(e)
      }
      let r = t.find(e => {
        let {
          sessionId: t
        } = e;
        return t === n
      });
      null != r && (this.rollbackCommandTimeout.stop(), P(r))
    }), I(this, "handleSessionsChanged", () => {
      let e = E.default.getRemoteSessionId();
      null != e && null == p.Z.getSessionById(e) && (0, h.s6)(), null == e && this.maybeConnect(Object.values(p.Z.getSessions()))
    }), I(this, "handleWaitForRemoteSession", () => {
      this.awaitRemoteTimeout.start(C, () => {
        (0, h.s6)(), o.Z.show({
          title: S.intl.string(S.t.wGMxr3),
          body: S.intl.string(S.t.i5k8b5)
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
      T.info("Console command Error result:", r, i);
      let a = E.default.getAwaitingRemoteSessionInfo();
      if ((null == a ? true : a.commandId) !== n) return;
      let o = E.default.getDevice(a.type, null != (t = a.deviceId) ? t : ""),
        s = (0, y.Z)(null != o ? o : {
          id: "id",
          platform: S.intl.string(S.t["UQMV/E"]),
          name: S.intl.string(S.t["UQMV/E"])
        }, r, i);
      null != s && g.Z.showSelfDismissableAlert({
        title: s.title,
        body: s.body,
        errorCodeMessage: s.errorCodeMessage,
        reconnectPlatformType: s.isAccountLinkError ? a.type : true
      }), O.e8.has(i.code) && this.awaitRemoteTimeout.isStarted() ? this.awaitRemoteTimeout.start(N, () => (0, h.s6)(), true) : "failed" === r && (0, h.s6)()
    }), I(this, "handleRemoteSessionDisconnect", () => {
      this.awaitRemoteTimeout.stop()
    })
  }
}
let D = new w