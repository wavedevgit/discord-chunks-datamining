/** Chunk was on 92617 **/
/** chunk id: 93055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Af: () => p,
  CJ: () => A,
  Fe: () => v,
  Rm: () => b,
  pe: () => f
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk478437 = require("./478437.js"),
  Chunk311907 = require("./311907.js");
require("./734057.js");
var Chunk808728 = require("./808728.js"),
  Chunk967198 = require("./967198.js");
require("./661191.js");
var Chunk181079 = require("./181079.js"),
  Chunk616075 = require("./616075.js"),
  Chunk924703 = require("./924703.js"),
  Chunk652215 = require("./652215.js");

function f(e) {
  let {
    favoritesEnabled: t,
    hasStaffPrivileges: n
  } = (0, c.l)("useCanFavoriteChannel"), r = (0, a.bG)([d.A], () => d.A.isFavorite(e.id)), i = e.isDM() || e.isThread();
  return t && !__OVERLAY__ && !r && (!i || n)
}

function p(e) {
  return (0, a.bG)([d.A], () => d.A.getFavorite(e))
}

function b() {
  return (0, a.bG)([l.Ay], () => l.Ay.getChannels(s.YYv))[i.r.GUILD_CATEGORY].map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function v() {
  return (0, a.bG)([o.A], () => o.A.getGuildId()) === s.YYv
}

function A() {
  let {
    isFavoritesPerk: e
  } = (0, c.l)("useFavoriteAdded"), t = (0, u.T)(), n = r.useCallback(() => {
    e && t.notifyFavoriteAdded()
  }, [t, e]), i = r.useCallback(() => {
    e && t.clearFavoriteAdded()
  }, [t, e]);
  return {
    favoriteAdded: t.favoriteAdded,
    notifyFavoriteAdded: n,
    clearFavoriteAdded: i
  }
}