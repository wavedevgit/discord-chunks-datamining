/** Chunk was on 96750 **/
/** chunk id: 878884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, i, Chunk442837 = require("./442837.js"),
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
let h = new Chunk642047.Z,
  y = new Chunk642047.Z,
  O = new Set;

function j(e, t, n) {
  let r = new u.Z({
      userId: e.id,
      channelId: n
    }),
    i = (0, v.PH)(r, null != t ? t : _.ME, e.id);
  h.set(e.id, i);
  let l = {
    type: b.fO.USER,
    user: e,
    id: e.id,
    streamId: null,
    voiceState: r,
    voicePlatform: null,
    speaking: false,
    lastSpoke: 0,
    soundsharing: false,
    ringing: false,
    userNick: d.ZP.getName(t, n, e),
    userAvatarDecoration: (0, c.o)(e, t),
    localVideoDisabled: false
  };
  y.set(e.id, l)
}

function S(e) {
  let t = h.delete(e),
    n = y.delete(e),
    r = O.delete(e);
  return t || n || r
}

function x() {
  var e;
  let t = Chunk19780.Z.getChannelId();
  if (null == exports) returnfalse;
  let n = null == (e = Chunk592125.Z.getChannel(exports)) ? true : module.getGuildId(),
    r = false;
  return O.forEach(e => {
    if (null != g.Z.getVoiceStateForChannel(t, e)) return void O.delete(e);
    let i = m.default.getUser(e);
    null != i && (r = true, O.delete(e), j(i, n, t))
  }), r
}

function I() {
  h.clear(), y.clear(), O.clear()
}
class P extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk979651.Z, Chunk594174.default, Chunk592125.Z, Chunk19780.Z), this.syncWith([Chunk594174.default], x)
  }
  get desyncedVoiceStatesCount() {
    return h.size()
  }
  getDesyncedUserIds() {
    return h.keys()
  }
  getDesyncedVoiceStates() {
    return h.values()
  }
  getDesyncedParticipants() {
    return y.values()
  }
}(i = "displayName") in P ? Object.defineProperty(P, i, {
  value: "RTCConnectionDesyncStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : P[i] = "RTCConnectionDesyncStore";
let C = new P(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    I()
  },
  VOICE_CHANNEL_SELECT: I,
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      context: n
    } = e;
    if (n !== a.Yn.DEFAULT || t !== _.hes.DISCONNECTED) returnfalse;
    I()
  },
  VOICE_STATE_UPDATES: function(e) {
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
  },
  RTC_CONNECTION_CLIENT_CONNECT: function(e) {
    let {
      userIds: t,
      guildId: n,
      channelId: r,
      context: i
    } = e;
    return i === a.Yn.DEFAULT && t.reduce((e, t) => {
      if (null != g.Z.getVoiceStateForChannel(r, t)) return e;
      let i = m.default.getUser(t);
      return null == i ? (O.add(t), e) : (j(i, n, r), true)
    }, false)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t,
      context: n
    } = e;
    return n === a.Yn.DEFAULT && S(t)
  }
})