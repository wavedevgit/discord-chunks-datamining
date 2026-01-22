/** Chunk was on web.js **/
/** chunk id: 26909, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => S,
  RG: () => E
}), require("./896048.js"), require("./747238.js"), require("./321073.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk283047 = require("./283047.js"),
  Chunk617617 = require("./617617.js");
require("./73510.js");
var Chunk705751 = require("./705751.js"),
  Chunk355097 = require("./355097.js");

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

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {
    pendingUsages: []
  },
  g = new Chunk283047.A({
    computeBonus: () => 1,
    lookupKey: e => e,
    afterCompute: () => {},
    numFrequentlyItems: Chunk705751.h2
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
  if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) returnfalse;
  m.pendingUsages = []
}

function O(e) {
  let {
    command: t,
    context: n
  } = e, r = b(n, t);
  m.pendingUsages.push({
    key: r,
    timestamp: Date.now()
  }), g.track(r), g.compute()
}

function A() {
  var e, t;
  let n = null != (e = null == (t = c.A.frecencyWithoutFetchingLatest.applicationCommandFrecency) ? true : t.applicationCommands) ? e : {};
  g.overwriteHistory(a().mapValues(n, e => h(p({}, e), {
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), m.pendingUsages)
}
class v extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    null != e && (m = e), this.syncWith([c.A], A)
  }
  getState() {
    return m
  }
  hasPendingUsage() {
    return m.pendingUsages.length > 0
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
f(v, "displayName", "ApplicationCommandFrecencyStore"), f(v, "persistKey", "ApplicationCommandFrecencyV2");
let S = new v(Chunk73153.h, {
  APPLICATION_COMMAND_USED: O,
  USER_SETTINGS_PROTO_UPDATE: y
})