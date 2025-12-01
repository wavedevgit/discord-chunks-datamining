/** Chunk was on web.js **/
/** chunk id: 938475, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PH: () => P,
  ZP: () => F,
  sQ: () => C
}), require("./388685.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk759174 = require("./759174.js"),
  Chunk570140 = require("./570140.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js");

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
let v = Object.freeze([]),
  S = {};

function I(e) {
  let t = S[e];
  return null == t && (t = new R(e), S[e] = t), t
}

function T(e, t) {
  return f.ZP.getMember(e, t.id)
}

function A(e, t, n) {
  var r;
  let i = null != (r = null == t ? true : t.nick) ? r : h.ZP.getName(n);
  return {
    member: t,
    comparator: C(e, i)
  }
}

function C(e, t) {
  return "".concat(e.selfStream ? "\0" : "\x01").concat(t.toLowerCase(), "\0").concat(e.userId)
}

function N(e, t, n) {
  return A(n, T(e, t), t)
}

function P(e, t, n, r) {
  var i;
  let a = p.default.getUser(n),
    o = null == a;
  null == a && (a = new c.Z({
    id: n,
    username: "...",
    discriminator: n.slice(false, false)
  }));
  let {
    member: s,
    comparator: l
  } = N(t, a, e), u = {
    voiceState: e,
    user: a,
    member: s,
    comparator: l,
    nick: null == s ? true : s.nick,
    connectedOn: null != (i = null == r ? true : r.connectedOn) ? i : Date.now()
  };
  return o && (u._isPlaceholder = true), u
}
class R {
  updateVoiceState(e) {
    if (null != this._pending) return this._pending.add(e), false;
    let t = _.Z.getVoiceState(this.guildId, e),
      n = this._voiceStates.get(e),
      r = p.default.getUser(e);
    if (null != t && null != r) {
      if (null == n) return this._voiceStates.set(e, P(t, this.guildId, e)), true;
      else if (n.voiceState !== t) {
        var i;
        let a = T(this.guildId, r),
          o = null != (i = null == a ? true : a.nick) ? i : h.ZP.getName(r);
        return this._voiceStates.set(e, O(b({}, n), {
          member: a,
          comparator: C(t, o),
          nick: o,
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
      let a = T(this.guildId, n);
      if ((null == a ? true : a.nick) !== (null == (r = t.member) ? true : r.nick) || (null == a ? true : a.avatar) !== (null == (i = t.member) ? true : i.avatar)) {
        let {
          comparator: r
        } = A(t.voiceState, a, n);
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
      return null != n && t.user !== n ? (this._voiceStates.set(n.id, P(t.voiceState, this.guildId, n.id, t)), true) : e
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
    return 0 === t.length ? v : t
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
      this._pending = true, module.forEach(e => this.updateVoiceState(e))
    }
  }
  constructor(e) {
    E(this, "guildId", true), E(this, "_pending", new Set), E(this, "_voiceStates", new s.h(e => {
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

function w() {
  S = {}
}

function D() {
  Z()
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
    return I(null != n ? n : g.ME).updateVoiceState(r) || e
  }, false)
}

function L(e) {
  var t, n;
  let r = false,
    i = new Set(null == (t = S[e.guildId]) ? true : t.getUserIds()),
    a = new Set(null == (n = e.voiceStates) ? true : n.map(e => e.userId)),
    o = new Set(e.removedVoiceStateUsers);
  for (let t of new Set([...i, ...a])) r = I(e.guildId).updateVoiceState(t) || r;
  for (let t of i) o.has(t) || (r = I(e.guildId).updateMember(t) || r);
  return r
}

function j(e) {
  let {
    guildId: t
  } = e, n = u.default.getId();
  return null != n && I(null != t ? t : g.ME).updateVoiceState(n)
}

function M() {
  return a().reduce(S, (e, t) => t.updateUsers() || e, false)
}

function k(e) {
  let {
    guildId: t,
    user: n
  } = e;
  return I(t).updateMember(n.id)
}

function U(e) {
  let {
    guild: t
  } = e;
  delete S[t.id]
}

function G(e) {
  let {
    guild: t
  } = e;
  delete S[t.id]
}

function Z() {
  S = {};
  let e = Chunk979651.Z.getAllVoiceStates();
  Chunk709054.default.keys(module).forEach(t => {
    Object.keys(e[t]).forEach(e => {
      I(null != t ? t : g.ME).updateVoiceState(e)
    })
  })
}
class B extends(r = Chunk442837.ZP.Store) {
  initialize() {
    Z(), this.waitFor(Chunk314897.default, Chunk592125.Z, Chunk271383.ZP, Chunk594174.default, Chunk979651.Z), this.syncWith([Chunk594174.default], M)
  }
  getVoiceStates(e) {
    return I(null != e ? e : g.ME).getVoiceStates()
  }
  getAllVoiceStates() {
    return S
  }
  getVoiceStatesForChannel(e) {
    let t = e.getGuildId(),
      n = e.id;
    return I(null != t ? t : g.ME).getVoiceStatesForChannel(n)
  }
  getVoiceStatesForChannelAlt(e, t) {
    return I(null != t ? t : g.ME).getVoiceStatesForChannel(e)
  }
  countVoiceStatesForChannel(e) {
    let t = d.Z.getChannel(e);
    if (null == t) return 0;
    let n = t.getGuildId();
    return I(null != n ? n : g.ME).countVoiceStatesForChannel(e)
  }
  getVoiceStateVersion(e) {
    return I(null != e ? e : g.ME).getVersion()
  }
}
E(B, "displayName", "SortedVoiceStateStore");
let F = new B(Chunk570140.Z, {
  CONNECTION_OPEN: w,
  OVERLAY_INITIALIZE: D,
  VOICE_CHANNEL_SELECT: j,
  VOICE_STATE_UPDATES: x,
  GUILD_MEMBER_UPDATE: k,
  GUILD_CREATE: U,
  GUILD_DELETE: G,
  PASSIVE_UPDATE_V2: L
})