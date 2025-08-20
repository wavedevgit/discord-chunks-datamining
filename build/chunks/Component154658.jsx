/** Chunk was on web.js **/
/** chunk id: 154658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk381338 = require("./381338.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206295 = require("./206295.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk528567 = require("./528567.js"),
  Chunk371583 = require("./371583.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk358856 = require("./358856.js");

function m(e) {
  switch (e) {
    case o.q.DAILY:
      return p.intl.string(p.t.UfbhDA);
    case o.q.WEEKLY:
      return p.intl.string(p.t["9x5Nam"]);
    case o.q.MONTHLY:
      return p.intl.string(p.t.xB2Co6);
    default:
      return p.intl.string(p.t["4N67JS"])
  }
}

function g(e) {
  var t, n, i, o;
  let {
    guildId: g,
    leaderboard: E,
    className: b
  } = e, y = null == E || null == (t = E.users) ? true : t[0], {
    sort_by_statistic_id: O
  } = E.guild_settings, v = null != (o = null == y || null == (i = y.statistics) || null == (n = i[O]) ? true : n.value) ? o : 0, I = p.intl.formatToPlainString(p.t.yhdo8v, {
    value: v,
    statisticName: (0, f.C)(O)
  }), T = (0, _.j)(E), {
    primaryColor: S,
    secondaryColor: A
  } = (0, c.Z)("".concat(T, "?forColors")), C = (0, s.e7)([u.default], () => u.default.getUser(null == y ? true : y.user_id));
  if (null == C) return null;
  let N = d.ZP.getName(g, true, C);
  return (0, r.jsxs)("div", {
    className: a()(h.container, b),
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(A, " 0%, ").concat(S, " 100%)")
    },
    children: [(0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: h.title,
      children: m(E.settings.interval_type)
    }), (0, r.jsx)(l.qEK, {
      src: C.getAvatarURL(g, 16),
      size: l.EFr.SIZE_16,
      "aria-label": "avatar"
    }), (0, r.jsx)(l.LZC, {
      size: 6,
      horizontal: true
    }), (0, r.jsxs)("div", {
      className: h.textContainer,
      children: [(0, r.jsx)(l.Text, {
        className: h.username,
        variant: "text-xs/semibold",
        color: "header-primary",
        children: N
      }), (0, r.jsx)(l.Text, {
        className: h.statsText,
        variant: "text-xxs/medium",
        color: "text-secondary",
        children: I
      })]
    }), null != T && (0, r.jsx)("div", {
      className: h.heroArtContainer,
      children: (0, r.jsx)("img", {
        className: h.heroArt,
        src: T,
        alt: ""
      })
    })]
  })
}