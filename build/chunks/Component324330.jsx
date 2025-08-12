/** Chunk was on 5533 **/
/** chunk id: 324330, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => h,
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk147629 = require("./147629.js");

function h() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild, []),
    i = null != (e = null == require ? true : require.features.has(Chunk981631.oNc.COMMUNITY)) && module,
    s = null != (t = null == require ? true : require.features.has(Chunk981631.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && exports,
    c = Chunk392711 || Chunk241559;
  return (0, Chunk255367.jsxs)(Chunk481060.P3F, {
    onClick: e => {
      null != n && (c ? (e.preventDefault(), d.Z.close(), (0, o._X)(n.id)) : d.Z.open(n.id, m.pNK.MEMBERS))
    },
    className: Chunk147629.rowContainer,
    children: [(0, Chunk255367.jsx)("div", {
      children: Chunk388032.intl.string(Chunk388032.t["9Oq93t"])
    }), Chunk313364 && (0, Chunk255367.jsx)(Chunk481060.rgF, {
      size: "xs",
      color: "currentColor",
      className: Chunk147629.linkIcon
    })]
  })
}

function f() {
  var e;
  let {
    guild: t
  } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps(), [], Chunk392711.isEqual), n = null != (e = null == exports ? true : exports.id) ? module : Chunk981631.lds;
  return (0, Chunk241559.n2)(require) ? (0, Chunk255367.jsx)(Chunk313364.Z, {
    guildId: require
  }) : null
}