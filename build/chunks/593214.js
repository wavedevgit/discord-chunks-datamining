/** Chunk was on 99534 **/
/** chunk id: 593214, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Mt: () => f,
  li: () => h,
  s4: () => Z,
  up: () => g,
  zv: () => v
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
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

function h(t) {
  let {
    favoritesEnabled: n,
    hasStaffPrivileges: i
  } = (0, s.z)("useCanFavoriteChannel"), e = (0, r.e7)([o.Z], () => o.Z.isFavorite(t.id)), l = t.isDM() || t.isThread();
  return n && !__OVERLAY__ && !e && (!l || i)
}

function Z(t) {
  return (0, r.e7)([o.Z], () => o.Z.getFavorite(t))
}

function v() {
  return (0, Chunk442837.e7)([Chunk984933.ZP], () => Chunk984933.ZP.getChannels(Chunk981631.I_8))[Chunk106351.d.GUILD_CATEGORY].map(t => ({
    id: "null" === t.channel.id ? null : t.channel.id,
    name: t.channel.name
  }))
}

function f() {
  return (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()) === Chunk981631.I_8
}

function g() {
  let {
    isFavoritesPerk: t
  } = (0, Chunk362658.z)("useFavoriteAdded"), n = (0, Chunk434065.r)(), i = Chunk647438.useCallback(() => {
    module && exports.notifyFavoriteAdded()
  }, [exports, module]), l = Chunk647438.useCallback(() => {
    module && exports.clearFavoriteAdded()
  }, [exports, module]);
  return {
    favoriteAdded: exports.favoriteAdded,
    notifyFavoriteAdded: require,
    clearFavoriteAdded: Chunk106351
  }
}