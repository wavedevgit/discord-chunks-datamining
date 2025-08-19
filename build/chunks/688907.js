/** Chunk was on 93886 **/
/** chunk id: 688907, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  BH: () => s,
  MH: () => o,
  j4: () => u,
  nC: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk761781 = require("./761781.js"),
  Chunk695346 = require("./695346.js");

function s() {
  return c(Chunk695346.YT.useSetting(), (0, Chunk442837.e7)([Chunk761781.Z], () => Chunk761781.Z.currentUserApplicationIds.size > 0))
}

function o() {
  return c(Chunk695346.YT.getSetting(), Chunk761781.Z.currentUserApplicationIds.size > 0)
}

function c(e, t) {
  return e === r.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? t ? r.Tv.ONLY_GAMES_PLAYED : r.Tv.ACTIVITY_NOTIFICATIONS_ENABLED : e !== r.Tv.ONLY_GAMES_PLAYED || t ? e : r.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
}

function d() {
  return Chunk695346.Qq.useSetting()
}

function u() {
  return Chunk695346.Qq.getSetting()
}