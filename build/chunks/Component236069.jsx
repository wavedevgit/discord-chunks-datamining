/** Chunk was on 11868 **/
/** chunk id: 236069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function T(e) {
  let {
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: i
  } = e, [a, o] = (0, u.ww)({
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: i,
    openWithoutBackstack: true
  }), c = o ? E.intl.string(E.t["6ndMcn"]) : E.intl.string(E.t["0eiu6O"]), s = o ? E.intl.string(E.t.S09nw8) : E.intl.string(E.t.tEttXV);
  return (0, r.jsxs)(l.qXd, {
    color: l.DM8.DANGER,
    children: [c, (0, r.jsx)(l.EyT, {
      onClick: a,
      children: s
    })]
  })
}

function O() {
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

function p(e) {
  let t = (0, i.e7)([o.default, c.ZP], () => {
    if (null == e.guildId) return new Set;
    let t = o.default.getId();
    return (0, s.no)(c.ZP.getMember(e.guildId, t))
  }, [e.guildId]);
  return t.has(d.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || t.has(d.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(T, I({}, e)) : t.has(d.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(O, {}) : (0, r.jsx)(T, I({}, e))
}