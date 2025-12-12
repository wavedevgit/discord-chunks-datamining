/** Chunk was on web.js **/
/** chunk id: 792258, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b,
  o: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk914788 = require("./914788.js"),
  Chunk322192 = require("./322192.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk435757 = require("./435757.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk641947 = require("./641947.js");
let h = [18, 18, 16, 16, 14, 12, 10];

function g(e) {
  var t;
  return null != (t = h[e.length - 1]) ? t : h[h.length - 1]
}
let E = Chunk473749.memo(e => {
  let {
    guildId: t,
    className: n,
    customSubtext: i
  } = e, o = (0, s.e7)([u.Z], () => u.Z.getGuild(t));
  if (true === o) return null;
  let h = o.features.has(f.GuildFeatures.VERIFIED) || o.features.has(f.GuildFeatures.PARTNERED),
    {
      name: g
    } = o;
  return (0, r.jsxs)("div", {
    className: a()(m.container, n),
    children: [(0, r.jsx)(d.Z, {
      guildId: t
    }), (0, r.jsxs)("div", {
      className: m.descriptors,
      children: [(0, r.jsxs)("div", {
        className: m.header,
        children: [h ? (0, r.jsx)(c.Z, {
          guild: o,
          tooltipPosition: "bottom",
          tooltipColor: l.aML.Colors.PRIMARY,
          className: m.guildBadge
        }) : null, (0, r.jsx)(l.Text, {
          variant: "text-md/semibold",
          children: g
        })]
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-subtle",
        children: null != i ? i : true !== o.approximateMemberCount ? _.intl.format(p.default["5JmNgg"], {
          members: o.approximateMemberCount
        }) : null
      })]
    })]
  })
});
E.displayName = "FamilyCenterActivityGuildRow";
let b = E