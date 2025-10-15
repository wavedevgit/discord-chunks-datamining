/** Chunk was on web.js **/
/** chunk id: 236069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk300284 = require("./300284.js"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk715903 = require("./715903.js"),
  Chunk295474 = require("./295474.js"),
  Chunk372897 = require("./372897.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function v(e) {
  let {
    guildId: t,
    analyticsLocations: n
  } = e, [i, o] = (0, f.ww)({
    guildId: t,
    analyticsLocations: n
  }), s = o ? h.intl.string(h.t["6ndMcq"]) : h.intl.string(h.t["0eiu6J"]), l = o ? h.intl.string(h.t.S09nw4) : h.intl.string(h.t.tEttXd);
  return (0, r.jsxs)(a.qXd, {
    color: a.DM8.DANGER,
    children: [s, (0, r.jsx)(a.EyT, {
      onClick: i,
      children: l
    })]
  })
}

function I() {
  let e = (0, Chunk300284.Z)({
    scrollPosition: Chunk526761.Y_.GUILD_TAG
  });
  return (0, Chunk951288.jsxs)(Chunk481060.qXd, {
    color: Chunk481060.DM8.DANGER,
    children: [Chunk388032.intl.string(Chunk388032.t.Zqlecb), (0, Chunk951288.jsx)(Chunk481060.EyT, {
      onClick: module,
      children: Chunk388032.intl.string(Chunk388032.t.SJehVW)
    })]
  })
}

function T(e) {
  var {
    analyticsLocations: t
  } = e, n = y(e, ["analyticsLocations"]);
  let {
    analyticsLocations: a
  } = (0, s.ZP)(t, o.Z.AUTOMOD_NAGBAR_NOTICE), l = (0, i.e7)([c.default, u.ZP], () => {
    if (null == n.guildId) return new Set;
    let e = c.default.getId();
    return (0, d.no)(u.ZP.getMember(n.guildId, e))
  }, [n.guildId]);
  return l.has(_.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || l.has(_.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(v, b(g({}, n), {
    analyticsLocations: a
  })) : l.has(_.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(I, {}) : (0, r.jsx)(v, b(g({}, n), {
    analyticsLocations: a
  }))
}