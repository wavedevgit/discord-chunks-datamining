/** Chunk was on web.js **/
/** chunk id: 654455, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  LU: () => E,
  ZP: () => I
}), require("./388685.js"), require("./35282.js"), require("./539854.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk704907 = require("./704907.js"),
  Chunk581883 = require("./581883.js");
require("./689079.js");
var Chunk674563 = require("./674563.js"),
  Chunk526761 = require("./526761.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
    pendingUsages: []
  },
  g = new Chunk704907.Z({
    computeBonus: () => 1,
    lookupKey: e => e,
    afterCompute: () => {},
    numFrequentlyItems: Chunk674563.yP
  });

function E(e, t) {
  return e.filter(e => {
    if (e.includes(":"))
      if ((null == t ? true : t.guild) != null) return t.guild.id === e.split(":")[1];
      else returnfalse;
    returntrue
  }).map(e => e.split(":")[0])
}

function b(e, t) {
  return 0 > Number(t.id) ? t.id : (null == e ? true : e.guild) != null && null != t.guildId ? "".concat(t.id, ":").concat(e.guild.id) : t.id
}

function y(e) {
  let {
    settings: {
      type: t
    },
    wasSaved: n
  } = e;
  if (t !== d.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  h.pendingUsages = []
}

function O(e) {
  let {
    command: t,
    context: n
  } = e, r = b(n, t);
  h.pendingUsages.push({
    key: r,
    timestamp: Date.now()
  }), g.track(r), g.compute()
}

function v() {
  var e, t;
  let n = null != (t = null == (e = c.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) ? true : e.applicationCommands) ? t : {};
  g.overwriteHistory(a().mapValues(n, e => m(p({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), h.pendingUsages)
}
class S extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    null != e && (h = e), this.syncWith([c.Z], v)
  }
  getState() {
    return h
  }
  hasPendingUsage() {
    return h.pendingUsages.length > 0
  }
  getCommandFrecencyWithoutLoadingLatest() {
    return g
  }
  getScoreWithoutLoadingLatest(e, t) {
    var n;
    return null != (n = g.getScore(b(e, t))) ? n : 0
  }
  getTopCommandsWithoutLoadingLatest() {
    return g.frequently
  }
}
f(S, "displayName", "ApplicationCommandFrecencyStore"), f(S, "persistKey", "ApplicationCommandFrecencyV2");
let I = new S(Chunk570140.Z, {
  APPLICATION_COMMAND_USED: O,
  USER_SETTINGS_PROTO_UPDATE: y
})