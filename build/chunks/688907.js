/** Chunk was on 97162 **/
/** chunk id: 688907, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  BH: () => o,
  MH: () => s,
  j4: () => p,
  nC: () => d
});
var Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk761781 = require("./761781.js"),
  Chunk695346 = require("./695346.js");

function o() {
  return l(Chunk695346.YT.useSetting(), (0, Chunk442837.e7)([Chunk761781.Z], () => Chunk761781.Z.currentUserApplicationIds.size > 0))
}

function s() {
  return l(Chunk695346.YT.getSetting(), Chunk761781.Z.currentUserApplicationIds.size > 0)
}

function l(e, t) {
  return e === i.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? t ? i.Tv.ONLY_GAMES_PLAYED : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED : e !== i.Tv.ONLY_GAMES_PLAYED || t ? e : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
}

function d() {
  return Chunk695346.Qq.useSetting()
}

function p() {
  return Chunk695346.Qq.getSetting()
}