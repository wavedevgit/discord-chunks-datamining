/** Chunk was on 88474 **/
/** chunk id: 584569, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./896048.js");
var r, l, Chunk311907 = require("./311907.js"),
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
let h = new Chunk194862.A,
  A = new Chunk194862.A,
  v = new Set;

function O(e, t, n) {
  let r = new u.A({
      userId: e.id,
      channelId: n
    }),
    l = (0, y.RQ)(r, null != t ? t : b.ME, e.id);
  h.set(e.id, l);
  let i = {
    type: _.lp.USER,
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
  A.set(e.id, i)
}

function S(e) {
  let t = h.delete(e),
    n = A.delete(e),
    r = v.delete(e);
  return t || n || r
}

function j() {
  var e;
  let t = f.A.getChannelId();
  if (null == t) returnfalse;
  let n = null == (e = p.A.getChannel(t)) ? true : e.getGuildId(),
    r = false;
  return v.forEach(e => {
    if (null != g.A.getVoiceStateForChannel(t, e)) return void v.delete(e);
    let l = m.default.getUser(e);
    null != l && (r = true, v.delete(e), O(l, n, t))
  }), r
}

function x() {
  h.clear(), A.clear(), v.clear()
}
class I extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(g.A, m.default, p.A, f.A), this.syncWith([m.default], j)
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
    return A.values()
  }
}(l = "displayName") in I ? Object.defineProperty(I, l, {
  value: "RTCConnectionDesyncStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : I[l] = "RTCConnectionDesyncStore";
let E = new I(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    x()
  },
  VOICE_CHANNEL_SELECT: x,
  RTC_CONNECTION_STATE: function(e) {
    let {
      state: t,
      context: n
    } = e;
    if (n !== a.x.DEFAULT || t !== b.S7L.DISCONNECTED) returnfalse;
    x()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e, n = f.A.getChannelId();
    return null != n && t.reduce((e, t) => {
      let {
        userId: r,
        channelId: l
      } = t;
      return l === n && !!S(r) || e
    }, false)
  },
  RTC_CONNECTION_CLIENT_CONNECT: function(e) {
    let {
      userIds: t,
      guildId: n,
      channelId: r,
      context: l
    } = e;
    return l === a.x.DEFAULT && t.reduce((e, t) => {
      if (null != g.A.getVoiceStateForChannel(r, t)) return e;
      let l = m.default.getUser(t);
      return null == l ? (v.add(t), e) : (O(l, n, r), true)
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