/** Chunk was on 9536 **/
/** chunk id: 324330, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $r: () => h,
  JA: () => p,
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
  Chunk429578 = require("./429578.js");

function b(e) {
  if (null == e) returnfalse;
  let t = e.features.has(g.GuildFeatures.COMMUNITY),
    n = e.features.has(g.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  return t || n
}

function p() {
  let e = u.Z.getProps().guild;
  null != e && (b(e) ? (d.Z.close(), (0, o._X)(e.id)) : d.Z.open(e.id, g.pNK.MEMBERS))
}

function h() {
  let e = b((0, l.e7)([u.Z], () => u.Z.getProps().guild, []));
  return (0, r.jsxs)("div", {
    className: m.rowContainer,
    children: [(0, r.jsx)("div", {
      children: f.intl.string(f.t["9Oq93m"])
    }), e && (0, r.jsx)(a.rgF, {
      size: "xs",
      color: "currentColor",
      className: m.linkIcon
    })]
  })
}

function x() {
  var e;
  let {
    guild: t
  } = (0, l.e7)([u.Z], () => u.Z.getProps(), [], i.isEqual), n = null != (e = null == t ? true : t.id) ? e : g.lds;
  return (0, s.n2)(n) ? (0, r.jsx)(c.Z, {
    guildId: n
  }) : null
}