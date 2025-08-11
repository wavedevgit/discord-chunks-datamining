/** Chunk was on web.js **/
/** chunk id: 428268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk511010 = require("./511010.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk979192 = require("./979192.js"),
  Chunk873128 = require("./873128.js"),
  Chunk463031 = require("./463031.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk767826 = require("./767826.js");

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
let v = function(e) {
  let {
    guildId: t,
    leaderboardId: E
  } = e, {
    leaderboardsDisabled: y
  } = (0, f.O)(t, E), v = (0, i.e7)([d.Z], () => d.Z.getAccount(null, h.ABu.RIOT_GAMES)), I = (0, i.e7)([d.Z], () => d.Z.getAccount(null, h.ABu.LEAGUE_OF_LEGENDS)), T = (0, _.Z)({
    guildId: t,
    leaderboardId: E
  }), S = E === p.z;
  if ((!S || null != v && null != I) && !y) return null;
  let A = l.Z.get(h.ABu.RIOT_GAMES),
    N = S && null == v && null == I,
    C = S && null != v && null == I,
    R = S && null == v && null != I,
    P = C || R;

  function w() {
    null != T && (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("73217").then(n.bind(n, 139964));
      return n => (0, r.jsx)(e, O(b({}, n), {
        guildId: t,
        leaderboard: T
      }))
    })
  }

  function D() {
    return N || P ? (0, c.Z)({
      platformType: h.ABu.RIOT_GAMES
    }) : w()
  }

  function L() {
    return N ? m.intl.string(m.t.w6VSSE) : P ? m.intl.string(m.t.CHNBdn) : m.intl.string(m.t["0yRXHx"])
  }

  function x() {
    if (y) return null;
    let e = N ? (0, r.jsx)(s.d3s, {
        className: g.infoMessageIcon
      }) : (0, r.jsx)(s.aNP, {
        color: o.Z.colors.STATUS_WARNING,
        className: g.infoMessageIcon
      }),
      t = N ? m.intl.string(m.t["Ihg/Dg"]) : m.intl.string(m.t["J8U+Iy"]);
    return (0, r.jsxs)("div", {
      className: g.updateMessage,
      children: [e, (0, r.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: t
      })]
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      className: g.divider
    }), x(), (0, r.jsxs)(a.zx, {
      className: g.joinLeaderboardButton,
      innerClassName: g.joinLeaderboardButtonInner,
      onClick: D,
      children: [S && !y && (0, r.jsx)("img", {
        alt: "Riot Games",
        src: A.icon.whiteSVG,
        className: g.riotIcon
      }), L()]
    })]
  })
}