/** Chunk was on web.js **/
/** chunk id: 258833, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk147913 = require("./147913.js"),
  Chunk460181 = require("./460181.js"),
  Chunk474873 = require("./474873.js"),
  Chunk523746 = require("./523746.js"),
  Chunk592125 = require("./592125.js"),
  Chunk292959 = require("./292959.js"),
  Chunk944486 = require("./944486.js"),
  Chunk246946 = require("./246946.js"),
  Chunk979651 = require("./979651.js"),
  Chunk938475 = require("./938475.js"),
  Chunk358221 = require("./358221.js");

function _(e, t) {
  if (t.has(e)) throw TypeError("Cannot initialize the same private elements twice on an object")
}

function m(e, t) {
  return t.get ? t.get.call(e) : t.value
}

function h(e, t, n) {
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
  return m(e, n)
}

function b(e, t, n) {
  _(e, t), t.set(e, n)
}

function y(e, t, n) {
  var r = g(e, t, "set");
  return h(e, r, n), n
}

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = (0, Chunk460181.uk)("call_calling", Chunk474873.Z.getSoundpack());
var S = new WeakMap;
class I extends Chunk147913.Z {
  _initialize() {
    this.stores = new Map().set(Chunk523746.Z, this.handleRingUpdate).set(Chunk292959.Z, this.handleRingUpdate).set(Chunk246946.Z, this.handleRingUpdate).set(Chunk979651.Z, this.handleRingUpdate).set(Chunk358221.Z, this.handleChannelRTCStoreChange).set(Chunk474873.Z, this.handleSoundpackUpdate)
  }
  constructor(...e) {
    super(...e), b(this, S, {
      writable: true,
      value: new Set
    }), O(this, "actions", {
      GUILD_LOCAL_RING_START: e => this.handleGuildRingStart(e),
      GUILD_RING_STOP: e => this.handleGuildRingStop(e)
    }), O(this, "_handleRing", (e, t) => {
      let n = d.Z.getCurrentClientVoiceChannelId(t),
        r = null != n && f.ZP.countVoiceStatesForChannel(n) >= 2;
      null == n || r || !e || l.Z.isSoundDisabled("call_calling") || u.Z.disableSounds ? v.stop() : v.loop()
    }), O(this, "handleSoundpackUpdate", () => {
      v.stop(), v = (0, i.uk)("call_calling", o.Z.getSoundpack())
    }), O(this, "handleRingUpdate", () => {
      var e, t;
      let n = c.Z.getVoiceChannelId(),
        r = null != (t = null == (e = s.Z.getChannel(n)) ? true : e.guild_id) ? t : null,
        i = a.Z.getCalls().some(e => e.ringing.length > 0 && d.Z.getCurrentClientVoiceChannelId(null) === e.channelId);
      this._handleRing(i || E(this, S).size > 0, r)
    }), O(this, "handleGuildRingStart", e => {
      let {
        ringing: t,
        guildId: n
      } = e;
      t.forEach(e => {
        E(this, S).add(e)
      }), this._handleRing(E(this, S).size > 0, n)
    }), O(this, "handleGuildRingStop", e => {
      let {
        ringing: t,
        guildId: n
      } = e;
      t.forEach(e => {
        E(this, S).delete(e)
      }), this._handleRing(E(this, S).size > 0, n)
    }), O(this, "handleChannelRTCStoreChange", () => {
      let e = c.Z.getVoiceChannelId(),
        t = E(this, S).size > 0;
      if (!t) return;
      if (null == e && t) {
        y(this, S, new Set), this._handleRing(E(this, S).size > 0, null);
        return
      }
      if (null == e) return;
      let n = p.Z.getGuildRingingUsers(e),
        r = new Set([...E(this, S)].filter(e => !n.has(e)));
      r.size > 0 && (r.forEach(e => {
        E(this, S).delete(e)
      }), this._handleRing(E(this, S).size > 0, null))
    })
  }
}
let T = new I