/** Chunk was on 44799 **/
/** chunk id: 773149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk707541 = require("./707541.js"),
  Chunk60482 = require("./60482.js"),
  Chunk8575 = require("./8575.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk138545 = require("./138545.js"),
  Chunk896481 = require("./896481.js"),
  Chunk289585 = require("./289585.js"),
  Chunk796571 = require("./796571.js");

function Z(e) {
  let {
    guildId: t
  } = e, {
    state: n,
    lowestGameServerCost: i
  } = (0, a.cj)([f.Z], () => ({
    state: f.Z.getStateForGuild(t),
    lowestGameServerCost: f.Z.getLowestGameCostForGuild(t)
  })), Z = (0, p.Z)(t), {
    textColor: C
  } = (0, d.Z)((null == Z ? true : Z.type) === "active");
  return null == n ? null : (0, r.jsxs)(c.aB, {
    label: g.intl.string(v.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == Z ? true : Z.type) === "active",
    isWarning: (null == Z ? true : Z.type) === "expiring",
    onClick: () => (0, m.Z)({
      guildId: t,
      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: h.imageContainer,
      children: [(0, r.jsx)("img", {
        className: o()(b.background, x.image, h.image),
        src: j.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: o()(x.image, h.gradient)
      })]
    }), (0, r.jsx)(c.Q9, {
      title: g.intl.string(v.default["B3OfL/"]),
      textColor: C,
      footer: (0, r.jsx)(c.uf, {
        cost: null != i ? i : 0,
        costDecorator: "+",
        status: Z
      }),
      children: (0, r.jsx)(l.xvT, {
        className: x.description,
        color: C,
        variant: "text-sm/medium",
        children: g.intl.string(v.default.EGkJAG)
      })
    }), (0, r.jsx)(c.N4, {
      children: (0, r.jsx)(s.Button, {
        variant: "primary",
        fullWidth: true,
        text: Object.values(n.entitlements).length > 0 ? g.intl.string(v.default.PuvU5b) : g.intl.string(v.default.b62EHM),
        onClick: e => {
          e.stopPropagation(), (0, m.Z)({
            guildId: t,
            analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}