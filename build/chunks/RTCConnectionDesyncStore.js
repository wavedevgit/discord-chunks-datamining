/** Chunk was on web.js **/
/** chunk id: 584569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk73153 = require("./73153.js"),
  Chunk194862 = require("./194862.js"),
  Chunk357046 = require("./357046.js"),
  Chunk288737 = require("./288737.js"),
  Chunk562153 = require("./562153.js"),
  Chunk734057 = require("./734057.js"),
  Chunk383501 = require("./383501.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk652215 = require("./652215.js"),
  Chunk806931 = require("./806931.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = new Chunk194862.A,
  y = new Chunk194862.A,
  O = new Set;

function A(e, t, n) {
  let r = new c.A({
      userId: e.id,
      channelId: n
    }),
    i = (0, h.RQ)(r, null != t ? t : m.ME, e.id);
  b.set(e.id, i);
  let a = {
    type: g.lp.USER,
    user: e,
    id: e.id,
    streamId: null,
    voiceState: r,
    voicePlatform: null,
    speaking: false,
    latched: false,
    lastSpoke: 0,
    soundsharing: false,
    ringing: false,
    userNick: u.Ay.getName(t, n, e),
    userAvatarDecoration: (0, l.U)(e, t),
    localVideoDisabled: false,
    isPoppedOut: false
  };
  y.set(e.id, a)
}

function v(e) {
  let t = b.delete(e),
    n = y.delete(e),
    r = O.delete(e);
  return t || n || r
}

function S() {
  var e;
  let t = f.A.getChannelId();
  if (null == t) returnfalse;
  let n = null == (e = d.A.getChannel(t)) ? true : e.getGuildId(),
    r = false;
  return O.forEach(e => {
    if (null != _.A.getVoiceStateForChannel(t, e)) return void O.delete(e);
    let i = p.default.getUser(e);
    null != i && (r = true, O.delete(e), A(i, n, t))
  }), r
}

function I() {
  b.clear(), y.clear(), O.clear()
}

function T() {
  I()
}

function C(e) {
  let {
    state: t,
    context: n
  } = e;
  if (n !== a.x.DEFAULT || t !== m.S7L.DISCONNECTED) returnfalse;
  I()
}

function N(e) {
  let {
    voiceStates: t
  } = e, n = f.A.getChannelId();
  return null != n && t.reduce((e, t) => {
    let {
      userId: r,
      channelId: i
    } = t;
    return i === n && !!v(r) || e
  }, false)
}

function R(e) {
  let {
    userIds: t,
    guildId: n,
    channelId: r,
    context: i
  } = e;
  return i === a.x.DEFAULT && t.reduce((e, t) => {
    if (null != _.A.getVoiceStateForChannel(r, t)) return e;
    let i = p.default.getUser(t);
    return null == i ? (O.add(t), e) : (A(i, n, r), true)
  }, false)
}

function w(e) {
  let {
    userId: t,
    context: n
  } = e;
  return n === a.x.DEFAULT && v(t)
}
class P extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(_.A, p.default, d.A, f.A), this.syncWith([p.default], S)
  }
  get desyncedVoiceStatesCount() {
    return b.size()
  }
  getDesyncedUserIds() {
    return b.keys()
  }
  getDesyncedVoiceStates() {
    return b.values()
  }
  getDesyncedParticipants() {
    return y.values()
  }
}
E(P, "displayName", "RTCConnectionDesyncStore");
let D = new P(Chunk73153.h, {
  CONNECTION_OPEN: T,
  VOICE_CHANNEL_SELECT: I,
  RTC_CONNECTION_STATE: C,
  VOICE_STATE_UPDATES: N,
  RTC_CONNECTION_CLIENT_CONNECT: R,
  RTC_CONNECTION_CLIENT_DISCONNECT: w
})