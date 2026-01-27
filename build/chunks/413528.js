/** Chunk was on web.js **/
/** chunk id: 413528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk439372 = require("./439372.js"),
  Chunk400492 = require("./400492.js"),
  Chunk312671 = require("./312671.js"),
  Chunk470710 = require("./470710.js"),
  Chunk734057 = require("./734057.js"),
  Chunk803224 = require("./803224.js"),
  Chunk309010 = require("./309010.js"),
  Chunk351906 = require("./351906.js"),
  Chunk977997 = require("./977997.js"),
  Chunk607567 = require("./607567.js"),
  Chunk313961 = require("./313961.js");

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

function y(e, t, n) {
  _(e, t), t.set(e, n)
}

function b(e, t, n) {
  var r = g(e, t, "set");
  return m(e, r, n), n
}

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = (0, Chunk400492.aN)("call_calling", Chunk312671.A.getSoundpack());
var A = new WeakMap;
class I extends Chunk439372.A {
  _initialize() {
    this.stores = new Map().set(o.A, this.handleRingUpdate).set(l.A, this.handleRingUpdate).set(u.A, this.handleRingUpdate).set(d.A, this.handleRingUpdate).set(p.A, this.handleChannelRTCStoreChange).set(a.A, this.handleSoundpackUpdate)
  }
  constructor(...e) {
    super(...e), y(this, A, {
      writable: true,
      value: new Set
    }), O(this, "actions", {
      GUILD_LOCAL_RING_START: e => this.handleGuildRingStart(e),
      GUILD_RING_STOP: e => this.handleGuildRingStop(e)
    }), O(this, "_handleRing", (e, t) => {
      let n = d.A.getCurrentClientVoiceChannelId(t),
        r = null != n && f.Ay.countVoiceStatesForChannel(n) >= 2;
      null == n || r || !e || l.A.isSoundDisabled("call_calling") || u.A.disableSounds ? v.stop() : v.loop()
    }), O(this, "handleSoundpackUpdate", () => {
      v.stop(), v = (0, i.aN)("call_calling", a.A.getSoundpack())
    }), O(this, "handleRingUpdate", () => {
      var e, t;
      let n = c.A.getVoiceChannelId(),
        r = null != (e = null == (t = s.A.getChannel(n)) ? true : t.guild_id) ? e : null,
        i = o.A.getCalls().some(e => e.ringing.length > 0 && d.A.getCurrentClientVoiceChannelId(null) === e.channelId);
      this._handleRing(i || E(this, A).size > 0, r)
    }), O(this, "handleGuildRingStart", e => {
      let {
        ringing: t,
        guildId: n
      } = e;
      t.forEach(e => {
        E(this, A).add(e)
      }), this._handleRing(E(this, A).size > 0, n)
    }), O(this, "handleGuildRingStop", e => {
      let {
        ringing: t,
        guildId: n
      } = e;
      t.forEach(e => {
        E(this, A).delete(e)
      }), this._handleRing(E(this, A).size > 0, n)
    }), O(this, "handleChannelRTCStoreChange", () => {
      let e = c.A.getVoiceChannelId(),
        t = E(this, A).size > 0;
      if (!t) return;
      if (null == e && t) {
        b(this, A, new Set), this._handleRing(E(this, A).size > 0, null);
        return
      }
      if (null == e) return;
      let n = p.A.getGuildRingingUsers(e),
        r = new Set([...E(this, A)].filter(e => !n.has(e)));
      r.size > 0 && (r.forEach(e => {
        E(this, A).delete(e)
      }), this._handleRing(E(this, A).size > 0, null))
    })
  }
}
let S = new I