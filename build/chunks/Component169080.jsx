/** Chunk was on web.js **/
/** chunk id: 169080, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => g,
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk709737 = require("./709737.jsx"),
  Chunk986398 = require("./986398.jsx"),
  Chunk69589 = require("./69589.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk955876 = require("./955876.js");
let g = [require("./191420.js"), require("./774621.js"), require("./49274.js"), require("./904141.js")];

function E(e) {
  var t, n;
  let {
    generateImageRef: a,
    leaderboard: g,
    userId: E,
    guildId: b
  } = e, y = (0, s.e7)([u.default], () => u.default.getUser(E)), O = g.guild_settings.sort_by_statistic_id, v = i.useMemo(() => g.users.findIndex(e => e.user_id === E) + 1, [g, E]), I = i.useMemo(() => g.users.find(e => e.user_id === E), [g, E]);
  o()(null != I, "User row should not be null"), o()(null != y, "User must exist");
  let T = d.ZP.getName(b, true, y),
    S = null != (n = null == (t = I.statistics[O]) ? true : t.value) ? n : 0;
  return (0, r.jsxs)("div", {
    ref: a,
    className: m.container,
    children: [(0, r.jsx)(p.Z, {
      user: y,
      rank: v,
      avatarClassName: m.avatar,
      rankBadgeVisibility: "visibleWithoutBorder"
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: m.gameTitleContainer,
        children: [(0, r.jsx)(_.Z, {
          className: m.winnerImage,
          leaderboard: g
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: m.gameTitle,
          children: "League of Legends"
        })]
      }), (0, r.jsx)(l.LZC, {
        size: 4
      }), (0, r.jsx)(l.Text, {
        className: m.title,
        variant: "text-md/semibold",
        children: h.intl.format(h.t.tluICw, {
          username: T,
          rank: v
        })
      }), (0, r.jsx)(l.LZC, {
        size: 2
      }), (0, r.jsxs)(c.Gk, {
        location: c.Gt.EMBED,
        children: [(0, r.jsx)(f.DC, {
          value: S,
          statisticId: O
        }), (0, r.jsx)(f.Js, {
          intervalStart: g.interval_start,
          intervalEnd: g.interval_end
        })]
      })]
    })]
  })
}