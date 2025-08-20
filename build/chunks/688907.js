/** Chunk was on web.js **/
/** chunk id: 688907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  BH: () => s,
  MH: () => l,
  j4: () => d,
  nC: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk761781 = require("./761781.js"),
  Chunk695346 = require("./695346.js");

function s() {
  return c(Chunk695346.YT.useSetting(), (0, Chunk442837.e7)([Chunk761781.Z], () => Chunk761781.Z.currentUserApplicationIds.size > 0))
}

function l() {
  return c(Chunk695346.YT.getSetting(), Chunk761781.Z.currentUserApplicationIds.size > 0)
}

function c(e, t) {
  return e === i.Tv.ACTIVITY_NOTIFICATIONS_UNSET ? t ? i.Tv.ONLY_GAMES_PLAYED : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED : e !== i.Tv.ONLY_GAMES_PLAYED || t ? e : i.Tv.ACTIVITY_NOTIFICATIONS_ENABLED
}

function u() {
  return Chunk695346.Qq.useSetting()
}

function d() {
  return Chunk695346.Qq.getSetting()
}