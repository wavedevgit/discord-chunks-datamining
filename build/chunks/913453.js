/** Chunk was on web.js **/
/** chunk id: 913453, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./446912.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk919796 = require("./919796.js"),
  Chunk21119 = require("./21119.js"),
  Chunk711014 = require("./711014.js"),
  Chunk622543 = require("./622543.js");

function u(e) {
  let [t, n, u, d, f] = (0, a.yK)([c.A], () => [c.A.getMutualFriendsCount(e.id), c.A.getMutualFriends(e.id), c.A.getMutualGuilds(e.id), c.A.isFetchingProfile(e.id), c.A.isFetchingFriends(e.id)]), p = (0, a.bG)([o.A], () => o.A.getUserAffinitiesMap()), _ = (0, a.bG)([l.Ay], () => l.Ay.getFlattenedGuildIds()), h = (0, r.useMemo)(() => null == n || n.length < 2 ? n : (0, i.sortBy)(n, e => {
    var t, n;
    let {
      user: r
    } = e;
    return -((null != (t = null == (n = p.get(r.id)) ? true : n.communicationProbability) ? t : false) * 1)
  }), [n, p]), m = (0, r.useMemo)(() => {
    if (null == u || u.length < 2) return u;
    let e = Object.fromEntries(_.map((e, t) => [e, t]));
    return (0, i.sortBy)(u, t => {
      var n;
      let {
        guild: r
      } = t;
      return null != (n = e[r.id]) ? n : _.length
    })
  }, [u, _]), g = (0, s.A)(t), E = (0, s.A)(h), y = (0, s.A)(m);
  return {
    mutualFriendsCount: null != t ? t : g,
    mutualFriends: null != h ? h : E,
    mutualGuilds: null != m ? m : y,
    isFetching: d,
    isFetchingFriends: f
  }
}