/** Chunk was on 95257 **/
/** chunk id: 593214, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Mt: () => C,
  li: () => f,
  s4: () => h,
  up: () => p,
  zv: () => v
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js");
require("./592125.js");
var Chunk984933 = require("./984933.js"),
  Chunk914010 = require("./914010.js");
require("./709054.js");
var Chunk853856 = require("./853856.js"),
  Chunk362658 = require("./362658.js"),
  Chunk434065 = require("./434065.js"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let {
    favoritesEnabled: n,
    hasStaffPrivileges: t
  } = (0, c.z)("useCanFavoriteChannel"), a = (0, l.e7)([d.Z], () => d.Z.isFavorite(e.id)), i = e.isDM() || e.isThread();
  return n && !__OVERLAY__ && !a && (!i || t)
}

function h(e) {
  return (0, l.e7)([d.Z], () => d.Z.getFavorite(e))
}

function v() {
  return (0, Chunk442837.e7)([Chunk984933.ZP], () => Chunk984933.ZP.getChannels(Chunk981631.I_8))[Chunk106351.d.GUILD_CATEGORY].map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function C() {
  return (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()) === Chunk981631.I_8
}

function p() {
  let {
    isFavoritesPerk: e
  } = (0, Chunk362658.z)("useFavoriteAdded"), n = (0, Chunk434065.r)(), t = Chunk473749.useCallback(() => {
    module && exports.notifyFavoriteAdded()
  }, [exports, module]), i = Chunk473749.useCallback(() => {
    module && exports.clearFavoriteAdded()
  }, [exports, module]);
  return {
    favoriteAdded: exports.favoriteAdded,
    notifyFavoriteAdded: require,
    clearFavoriteAdded: Chunk106351
  }
}