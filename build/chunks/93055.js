/** Chunk was on 96430 **/
/** chunk id: 93055, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Af: () => A,
  CJ: () => h,
  Fe: () => f,
  Rm: () => _,
  pe: () => E
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

function E(t) {
  let {
    favoritesEnabled: e,
    hasStaffPrivileges: n
  } = (0, d.l)("useCanFavoriteChannel"), r = (0, a.bG)([u.A], () => u.A.isFavorite(t.id)), i = t.isDM() || t.isThread();
  return e && !__OVERLAY__ && !r && (!i || n)
}

function A(t) {
  return (0, a.bG)([u.A], () => u.A.getFavorite(t))
}

function _() {
  return (0, a.bG)([l.Ay], () => l.Ay.getChannels(c.YYv))[i.r.GUILD_CATEGORY].map(t => ({
    id: "null" === t.channel.id ? null : t.channel.id,
    name: t.channel.name
  }))
}

function f() {
  return (0, a.bG)([o.A], () => o.A.getGuildId()) === c.YYv
}

function h() {
  let {
    isFavoritesPerk: t
  } = (0, d.l)("useFavoriteAdded"), e = (0, s.T)(), n = r.useCallback(() => {
    t && e.notifyFavoriteAdded()
  }, [e, t]), i = r.useCallback(() => {
    t && e.clearFavoriteAdded()
  }, [e, t]);
  return {
    favoriteAdded: e.favoriteAdded,
    notifyFavoriteAdded: n,
    clearFavoriteAdded: i
  }
}