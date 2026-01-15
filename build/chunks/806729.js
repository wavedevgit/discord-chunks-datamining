/** Chunk was on web.js **/
/** chunk id: 806729, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./467055.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk699682 = require("./699682.js"),
  Chunk752048 = require("./752048.js"),
  Chunk771845 = require("./771845.js"),
  Chunk621853 = require("./621853.js");

function u(e) {
  let [t, n, u, d, f] = (0, a.Wu)([c.Z], () => [c.Z.getMutualFriendsCount(e.id), c.Z.getMutualFriends(e.id), c.Z.getMutualGuilds(e.id), c.Z.isFetchingProfile(e.id), c.Z.isFetchingFriends(e.id)]), p = (0, a.e7)([s.Z], () => s.Z.getUserAffinitiesMap()), _ = (0, a.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()), h = (0, r.useMemo)(() => null == n || n.length < 2 ? n : (0, i.sortBy)(n, e => {
    var t, n;
    let {
      user: r
    } = e;
    return -((null != (n = null == (t = p.get(r.id)) ? true : t.communicationProbability) ? n : false) * 1)
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
  }, [u, _]), g = (0, o.Z)(t), E = (0, o.Z)(h), b = (0, o.Z)(m);
  return {
    mutualFriendsCount: null != t ? t : g,
    mutualFriends: null != h ? h : E,
    mutualGuilds: null != m ? m : b,
    isFetching: d,
    isFetchingFriends: f
  }
}