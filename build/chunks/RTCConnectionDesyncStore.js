/** Chunk was on 88474 **/
/** chunk id: 584569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var r, i, Chunk311907 = require("./311907.js"),
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
let A = new Chunk194862.A,
  _ = new Chunk194862.A,
  v = new Set;

function O(e, t, n) {
  let r = new u.A({
      userId: e.id,
      channelId: n
    }),
    i = (0, y.RQ)(r, null != t ? t : h.ME, e.id);
  A.set(e.id, i);
  let l = {
    type: b.lp.USER,
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
    userNick: d.Ay.getName(t, n, e),
    userAvatarDecoration: (0, c.U)(e, t),
    localVideoDisabled: false,
    isPoppedOut: false
  };
  _.set(e.id, l)
}

function S(e) {
  let t = A.delete(e),
    n = _.delete(e),
    r = v.delete(e);
  return t || n || r
}

function j() {
  var e;
  let t = p.A.getChannelId();
  if (null == t) returnfalse;
  let n = null == (e = f.A.getChannel(t)) ? true : e.getGuildId(),
    r = false;
  return v.forEach(e => {
    if (null != g.A.getVoiceStateForChannel(t, e)) return void v.delete(e);
    let i = m.default.getUser(e);
    null != i && (r = true, v.delete(e), O(i, n, t))
  }), r
}

function I() {
  A.clear(), _.clear(), v.clear()
}
class x extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(g.A, m.default, f.A, p.A), this.syncWith([m.default], j)
  }
  get desyncedVoiceStatesCount() {
    return A.size()
  }
  getDesyncedUserIds() {
    return A.keys()
  }
  getDesyncedVoiceStates() {
    return A.values()
  }
  getDesyncedParticipants() {
    return _.values()
  }
}(i = "displayName") in x ? Object.defineProperty(x, i, {
  value: "RTCConnectionDesyncStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : x[i] = "RTCConnectionDesyncStore";
let E = new x(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    I()
  },
  VOICE_CHANNEL_SELECT: I,
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      context: n
    } = e;
    if (n !== a.x.DEFAULT || t !== h.S7L.DISCONNECTED) returnfalse;
    I()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = p.A.getChannelId();
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
    return i === a.x.DEFAULT && t.reduce((e, t) => {
      if (null != g.A.getVoiceStateForChannel(r, t)) return e;
      let i = m.default.getUser(t);
      return null == i ? (v.add(t), e) : (O(i, n, r), true)
    }, false)
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
    let {
      userId: t,
      context: n
    } = e;
    return n === a.x.DEFAULT && S(t)
  }
})