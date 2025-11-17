/** Chunk was on 384 **/
/** chunk id: 324330, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $r: () => b,
  JA: () => h,
  ZP: () => x
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk241559 = require("./241559.js"),
  Chunk527379 = require("./527379.js"),
  Chunk313364 = require("./313364.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk703662 = require("./703662.js");

function f(e) {
  if (null == e) returnfalse;
  let t = e.features.has(g.GuildFeatures.COMMUNITY),
    n = e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  return t || n
}

function h() {
  let e = Chunk999382.Z.getProps().guild;
  null != module && (f(module) ? (Chunk434404.Z.close(), (0, Chunk527379._X)(module.id)) : Chunk434404.Z.open(module.id, Chunk981631.pNK.MEMBERS))
}

function b() {
  let e = f((0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild, []));
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk703662.rowContainer,
    children: [(0, Chunk54381.jsx)("div", {
      children: Chunk388032.intl.string(Chunk388032.t["9Oq93m"])
    }), module && (0, Chunk54381.jsx)(Chunk481060.rgF, {
      size: "xs",
      color: "currentColor",
      className: Chunk703662.linkIcon
    })]
  })
}

function x() {
  var e;
  let {
    guild: t
  } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps(), [], Chunk392711.isEqual), n = null != (e = null == exports ? true : exports.id) ? module : Chunk981631.lds;
  return (0, Chunk241559.n2)(require) ? (0, Chunk54381.jsx)(Chunk313364.Z, {
    guildId: require
  }) : null
}