/** Chunk was on 11212 **/
"use strict";
a.d(e, {
  j: () => f,
  r: () => n
});
var c = a(99815),
  d = a(81063),
  s = a(463031);

function n(t) {
  return t.leaderboard_id === s.z ? function(t) {
    var e;
    let d = t.users[0],
      s = null == d ? void 0 : null === (e = d.statistics[c.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === e ? void 0 : e.value;
    try {
      return null != s ? a(624119)("./champion_".concat(s, ".jpg")).default : a(721191).Z
    } catch (t) {
      return a(721191).Z
    }
  }(t) : null != t.settings.splash_asset_id ? (0, d.xF)(t.settings.application_id, t.settings.splash_asset_id) : null
}

function f(t) {
  return t.leaderboard_id === s.z ? function(t) {
    var e, d;
    let s = null == t ? void 0 : null === (e = t.users) || void 0 === e ? void 0 : e[0],
      n = null == s ? void 0 : null === (d = s.statistics[c.E.LOL_MOST_PLAYED_CHAMPION_ID]) || void 0 === d ? void 0 : d.value;
    try {
      return null != n ? a(692425)("./champion_".concat(n, ".jpg")).default : null
    } catch (t) {
      return null
    }
  }(t) : (0, d.xF)(t.settings.application_id, t.settings.winner_asset_id)
}