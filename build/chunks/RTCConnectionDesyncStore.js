/** Chunk was on 96750 **/
/** chunk id: 878884, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
let _ = new Chunk642047.Z,
  y = new Chunk642047.Z,
  O = new Set;

function S(e, t, n) {
  let r = new u.Z({
      userId: e.id,
      channelId: n
    }),
    i = (0, h.PH)(r, null != t ? t : b.ME, e.id);
  _.set(e.id, i);
  let l = {
    type: v.fO.USER,
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

function I(e) {
  let t = _.delete(e),
    n = y.delete(e),
    r = O.delete(e);
  return t || n || r
}

function j() {
  var e;
  let t = Chunk19780.Z.getChannelId();
  if (null == exports) returnfalse;
  let n = null == (e = Chunk592125.Z.getChannel(exports)) ? true : module.getGuildId(),
    r = false;
  return O.forEach(e => {
    if (null != g.Z.getVoiceStateForChannel(t, e)) return void O.delete(e);
    let i = m.default.getUser(e);
    null != i && (r = true, O.delete(e), S(i, n, t))
  }), r
}

function x() {
  _.clear(), y.clear(), O.clear()
}
class E extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk979651.Z, Chunk594174.default, Chunk592125.Z, Chunk19780.Z), this.syncWith([Chunk594174.default], j)
  }
  get desyncedVoiceStatesCount() {
    return _.size()
  }
  getDesyncedUserIds() {
    return _.keys()
  }
  getDesyncedVoiceStates() {
    return _.values()
  }
  getDesyncedParticipants() {
    return y.values()
  }
}(i = "displayName") in E ? Object.defineProperty(E, i, {
  value: "RTCConnectionDesyncStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : E[i] = "RTCConnectionDesyncStore";
let P = new E(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    x()
  },
  VOICE_CHANNEL_SELECT: x,
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      context: n
    } = e;
    if (n !== a.Yn.DEFAULT || t !== b.hes.DISCONNECTED) returnfalse;
    x()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = p.Z.getChannelId();
    return null != n && t.reduce((e, t) => {
      let {
        userId: r,
        channelId: i
      } = t;
      return i === n && !!I(r) || e
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
      return null == i ? (O.add(t), e) : (S(i, n, r), true)
    }, false)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t,
      context: n
    } = e;
    return n === a.Yn.DEFAULT && I(t)
  }
})