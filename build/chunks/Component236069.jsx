/** Chunk was on web.js **/
/** chunk id: 236069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk300284 = require("./300284.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk715903 = require("./715903.js"),
  Chunk295474 = require("./295474.js"),
  Chunk372897 = require("./372897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: i
  } = e, [o, s] = (0, u.ww)({
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: i,
    openWithoutBackstack: true
  }), l = s ? _.intl.string(_.t["6ndMcn"]) : _.intl.string(_.t["0eiu6O"]), c = s ? _.intl.string(_.t.S09nw8) : _.intl.string(_.t.tEttXV);
  return (0, r.jsxs)(a.qXd, {
    color: a.DM8.DANGER,
    children: [l, (0, r.jsx)(a.EyT, {
      onClick: o,
      children: c
    })]
  })
}

function g() {
  let e = (0, Chunk300284.Z)({
    scrollPosition: Chunk526761.Y_.GUILD_TAG
  });
  return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [Chunk388032.intl.string(Chunk388032.t.ZqlecX), (0, Chunk951288.jsx)(Chunk481060.EyT, {
      onClick: module,
      children: Chunk388032.intl.string(Chunk388032.t.SJehVV)
    })]
  })
}

function E(e) {
  let t = (0, i.e7)([s.default, l.ZP], () => {
    if (null == e.guildId) return new Set;
    let t = s.default.getId();
    return (0, c.no)(l.ZP.getMember(e.guildId, t))
  }, [e.guildId]);
  return t.has(d.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(d.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(m, h({}, e)) : t.has(d.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(g, {}) : (0, r.jsx)(m, h({}, e))
}