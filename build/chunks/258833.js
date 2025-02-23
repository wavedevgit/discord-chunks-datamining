/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120);
var r = n(147913),
  i = n(460181),
  o = n(474873),
  a = n(523746),
  s = n(592125),
  l = n(292959),
  c = n(944486),
  u = n(246946),
  d = n(979651),
  f = n(938475),
  p = n(358221);

function _(e, t) {
  if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
}

function h(e, t) {
  return t.get ? t.get.call(e) : t.value
}

function m(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable) throw TypeError("attempted to set read only private field");
    t.value = n
  }
}

function g(e, t, n) {
  if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e)
}

function E(e, t) {
  var n = g(e, t, "get");
  return h(e, n)
}

function v(e, t, n) {
  _(e, t), t.set(e, n)
}

function b(e, t, n) {
  var r = g(e, t, "set");
  return m(e, r, n), n
}

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let O = (0, i.uk)("call_calling", o.Z.getSoundpack());
var S = new WeakMap;
class I extends r.Z {
  _initialize() {
    this.stores = new Map().set(a.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(u.Z, this.handleRingUpdate).set(d.Z, this.handleRingUpdate).set(p.Z, this.handleChannelRTCStoreChange).set(o.Z, this.handleSoundpackUpdate)
  }
  constructor(...e) {
    super(...e), v(this, S, {
      writable: !0,
      value: new Set
    }), y(this, "actions", {
      GUILD_LOCAL_RING_START: e => this.handleGuildRingStart(e),
      GUILD_RING_STOP: e => this.handleGuildRingStop(e)
    }), y(this, "_handleRing", (e, t) => {
      let n = d.Z.getCurrentClientVoiceChannelId(t),
        r = s.Z.getChannel(n),
        i = null != n && (null == r ? void 0 : r.guild_id) == null && f.ZP.countVoiceStatesForChannel(n) >= 2;
      null == n || i || !e || l.Z.isSoundDisabled("call_calling") || u.Z.disableSounds ? O.stop() : O.loop()
    }), y(this, "handleSoundpackUpdate", () => {
      O.stop(), O = (0, i.uk)("call_calling", o.Z.getSoundpack())
    }), y(this, "handleRingUpdate", () => {
      var e, t;
      let n = c.Z.getVoiceChannelId(),
        r = null !== (t = null === (e = s.Z.getChannel(n)) || void 0 === e ? void 0 : e.guild_id) && void 0 !== t ? t : null,
        i = a.Z.getCalls().some(e => e.ringing.length > 0 && d.Z.getCurrentClientVoiceChannelId(null) === e.channelId);
      this._handleRing(i || E(this, S).size > 0, r)
    }), y(this, "handleGuildRingStart", e => {
      let {
        ringing: t,
        guildId: n
      } = e;
      t.forEach(e => {
        E(this, S).add(e)
      }), this._handleRing(E(this, S).size > 0, n)
    }), y(this, "handleGuildRingStop", e => {
      let {
        ringing: t,
        guildId: n
      } = e;
      t.forEach(e => {
        E(this, S).delete(e)
      }), this._handleRing(E(this, S).size > 0, n)
    }), y(this, "handleChannelRTCStoreChange", () => {
      let e = c.Z.getVoiceChannelId(),
        t = E(this, S).size > 0;
      if (!t) return;
      if (null == e && t) {
        b(this, S, new Set), this._handleRing(E(this, S).size > 0, null);
        return
      }
      if (null == e) return;
      let n = p.Z.getGuildRingingUsers(e),
        r = E(this, S).difference(n);
      r.size > 0 && (r.forEach(e => {
        E(this, S).delete(e)
      }), this._handleRing(E(this, S).size > 0, null))
    })
  }
}
let T = new I