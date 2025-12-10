/** Chunk was on web.js **/
/** chunk id: 878884, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk570140 = require("./570140.js"),
  Chunk642047 = require("./642047.js"),
  Chunk541638 = require("./541638.js"),
  Chunk189786 = require("./189786.js"),
  Chunk5192 = require("./5192.js"),
  Chunk592125 = require("./592125.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk981631 = require("./981631.js"),
  Chunk354459 = require("./354459.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = new Chunk642047.Z,
  y = new Chunk642047.Z,
  O = new Set;

function v(e, t, n) {
  let r = new c.Z({
      userId: e.id,
      channelId: n
    }),
    i = (0, m.PH)(r, null != t ? t : h.ME, e.id);
  b.set(e.id, i);
  let a = {
    type: g.fO.USER,
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
    userNick: u.ZP.getName(t, n, e),
    userAvatarDecoration: (0, l.o)(e, t),
    localVideoDisabled: false,
    isPoppedOut: false
  };
  y.set(e.id, a)
}

function S(e) {
  let t = b.delete(e),
    n = y.delete(e),
    r = O.delete(e);
  return t || n || r
}

function I() {
  var e;
  let t = Chunk19780.Z.getChannelId();
  if (null == exports) returnfalse;
  let n = null == (e = Chunk592125.Z.getChannel(exports)) ? true : module.getGuildId(),
    r = false;
  return O.forEach(e => {
    if (null != _.Z.getVoiceStateForChannel(t, e)) return void O.delete(e);
    let i = p.default.getUser(e);
    null != i && (r = true, O.delete(e), v(i, n, t))
  }), r
}

function T() {
  b.clear(), y.clear(), O.clear()
}

function C() {
  T()
}

function A(e) {
  let {
    state: t,
    context: n
  } = e;
  if (n !== a.Yn.DEFAULT || t !== h.hes.DISCONNECTED) returnfalse;
  T()
}

function N(e) {
  let {
    voiceStates: t
  } = e, n = f.Z.getChannelId();
  return null != n && t.reduce((e, t) => {
    let {
      userId: r,
      channelId: i
    } = t;
    return i === n && !!S(r) || e
  }, false)
}

function P(e) {
  let {
    userIds: t,
    guildId: n,
    channelId: r,
    context: i
  } = e;
  return i === a.Yn.DEFAULT && t.reduce((e, t) => {
    if (null != _.Z.getVoiceStateForChannel(r, t)) return e;
    let i = p.default.getUser(t);
    return null == i ? (O.add(t), e) : (v(i, n, r), true)
  }, false)
}

function R(e) {
  let {
    userId: t,
    context: n
  } = e;
  return n === a.Yn.DEFAULT && S(t)
}
class D extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk979651.Z, Chunk594174.default, Chunk592125.Z, Chunk19780.Z), this.syncWith([Chunk594174.default], I)
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
E(D, "displayName", "RTCConnectionDesyncStore");
let w = new D(Chunk570140.Z, {
  CONNECTION_OPEN: C,
  VOICE_CHANNEL_SELECT: T,
  RTC_CONNECTION_STATE: A,
  VOICE_STATE_UPDATES: N,
  RTC_CONNECTION_CLIENT_CONNECT: P,
  RTC_CONNECTION_CLIENT_DISCONNECT: R
})