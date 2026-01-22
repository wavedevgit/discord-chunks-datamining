/** Chunk was on web.js **/
/** chunk id: 607567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => B,
  RQ: () => R,
  hz: () => C
}), require("./896048.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk713402 = require("./713402.js"),
  Chunk73153 = require("./73153.js"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk652215 = require("./652215.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = Object.freeze([]),
  v = {};

function S(e) {
  let t = v[e];
  return null == t && (t = new w(e), v[e] = t), t
}

function I(e, t) {
  return f.Ay.getMember(e, t.id)
}

function T(e, t, n) {
  var r;
  let i = null != (r = null == t ? true : t.nick) ? r : m.Ay.getName(n);
  return {
    member: t,
    comparator: C(e, i)
  }
}

function C(e, t) {
  return "".concat(e.selfStream ? "\0" : "\x01").concat(t.toLowerCase(), "\0").concat(e.userId)
}

function N(e, t, n) {
  return T(n, I(e, t), t)
}

function R(e, t, n, r) {
  var i;
  let a = p.default.getUser(n),
    s = null == a;
  null == a && (a = new c.A({
    id: n,
    username: "...",
    discriminator: n.slice(false, false)
  }));
  let {
    member: o,
    comparator: l
  } = N(t, a, e), u = {
    voiceState: e,
    user: a,
    member: o,
    comparator: l,
    nick: null == o ? true : o.nick,
    connectedOn: null != (i = null == r ? true : r.connectedOn) ? i : Date.now()
  };
  return s && (u._isPlaceholder = true), u
}
class w {
  updateVoiceState(e) {
    if (null != this._pending) return this._pending.add(e), false;
    let t = _.A.getVoiceState(this.guildId, e),
      n = this._voiceStates.get(e),
      r = p.default.getUser(e);
    if (null != t && null != r) {
      if (null == n) return this._voiceStates.set(e, R(t, this.guildId, e)), true;
      else if (n.voiceState !== t) {
        var i;
        let a = I(this.guildId, r),
          s = null != (i = null == a ? true : a.nick) ? i : m.Ay.getName(r);
        return this._voiceStates.set(e, O(b({}, n), {
          member: a,
          comparator: C(t, s),
          nick: s,
          voiceState: t
        })), true
      }
    } else if (null != n) return this._voiceStates.delete(e), true;
    returnfalse
  }
  updateMember(e) {
    if (null != this._pending) return this._pending.add(e), false;
    let t = this._voiceStates.get(e),
      n = p.default.getUser(e);
    if (null != t && null != n) {
      var r, i;
      let a = I(this.guildId, n);
      if ((null == a ? true : a.nick) !== (null == (r = t.member) ? true : r.nick) || (null == a ? true : a.avatar) !== (null == (i = t.member) ? true : i.avatar)) {
        let {
          comparator: r
        } = T(t.voiceState, a, n);
        return this._voiceStates.set(e, O(b({}, t), {
          member: a,
          comparator: r,
          nick: null == a ? true : a.nick
        })), true
      }
    }
    returnfalse
  }
  updateUsers() {
    return null == this._pending && this._voiceStates.values().reduce((e, t) => {
      let n = p.default.getUser(t.user.id);
      return null != n && t.user !== n ? (this._voiceStates.set(n.id, R(t.voiceState, this.guildId, n.id, t)), true) : e
    }, false)
  }
  getUserIds() {
    return this.processPending(), this._voiceStates.keys()
  }
  getVoiceStates() {
    return this.processPending(), this._voiceStates.indexes()
  }
  getVoiceStatesForChannel(e) {
    this.processPending();
    let t = this._voiceStates.values(e);
    return 0 === t.length ? A : t
  }
  countVoiceStatesForChannel(e) {
    return this.processPending(), this._voiceStates.size(e)
  }
  getVersion() {
    return this.processPending(), this._voiceStates.version
  }
  processPending() {
    if (null != this._pending) {
      let e = this._pending;
      this._pending = true, e.forEach(e => this.updateVoiceState(e))
    }
  }
  constructor(e) {
    E(this, "guildId", true), E(this, "_pending", new Set), E(this, "_voiceStates", new o.J(e => {
      let {
        voiceState: {
          channelId: t
        }
      } = e;
      return null != t ? [t] : []
    }, e => {
      let {
        comparator: t
      } = e;
      return t
    })), this.guildId = e
  }
}

function P() {
  v = {}
}

function D() {
  V()
}

function x(e) {
  let {
    voiceStates: t
  } = e;
  return t.reduce((e, t) => {
    let {
      guildId: n,
      userId: r
    } = t;
    return S(null != n ? n : g.ME).updateVoiceState(r) || e
  }, false)
}

function L(e) {
  var t, n;
  let r = false,
    i = new Set(null == (t = v[e.guildId]) ? true : t.getUserIds()),
    a = new Set(null == (n = e.voiceStates) ? true : n.map(e => e.userId)),
    s = new Set(e.removedVoiceStateUsers);
  for (let t of new Set([...i, ...a])) r = S(e.guildId).updateVoiceState(t) || r;
  for (let t of i) s.has(t) || (r = S(e.guildId).updateMember(t) || r);
  return r
}

function j(e) {
  let {
    guildId: t
  } = e, n = u.default.getId();
  return null != n && S(null != t ? t : g.ME).updateVoiceState(n)
}

function M() {
  return a().reduce(v, (e, t) => t.updateUsers() || e, false)
}

function k(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return S(t).updateMember(n.id)
}

function U(e) {
  let {
    guild: t
  } = e;
  delete v[t.id]
}

function G(e) {
  let {
    guild: t
  } = e;
  delete v[t.id]
}

function V() {
  v = {};
  let e = _.A.getAllVoiceStates();
  h.default.keys(e).forEach(t => {
    Object.keys(e[t]).forEach(e => {
      S(null != t ? t : g.ME).updateVoiceState(e)
    })
  })
}
class F extends(r = Chunk311907.Ay.Store) {
  initialize() {
    V(), this.waitFor(u.default, d.A, f.Ay, p.default, _.A), this.syncWith([p.default], M)
  }
  getVoiceStates(e) {
    return S(null != e ? e : g.ME).getVoiceStates()
  }
  getAllVoiceStates() {
    return v
  }
  getVoiceStatesForChannel(e) {
    let t = e.getGuildId(),
      n = e.id;
    return S(null != t ? t : g.ME).getVoiceStatesForChannel(n)
  }
  getVoiceStatesForChannelAlt(e, t) {
    return S(null != t ? t : g.ME).getVoiceStatesForChannel(e)
  }
  countVoiceStatesForChannel(e) {
    let t = d.A.getChannel(e);
    if (null == t) return 0;
    let n = t.getGuildId();
    return S(null != n ? n : g.ME).countVoiceStatesForChannel(e)
  }
  getVoiceStateVersion(e) {
    return S(null != e ? e : g.ME).getVersion()
  }
}
E(F, "displayName", "SortedVoiceStateStore");
let B = new F(Chunk73153.h, {
  CONNECTION_OPEN: P,
  OVERLAY_INITIALIZE: D,
  VOICE_CHANNEL_SELECT: j,
  VOICE_STATE_UPDATES: x,
  GUILD_MEMBER_UPDATE: k,
  GUILD_CREATE: U,
  GUILD_DELETE: G,
  PASSIVE_UPDATE_V2: L
})