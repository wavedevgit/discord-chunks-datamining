/** Chunk was on 44799 **/
/** chunk id: 773149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk707541 = require("./707541.js"),
  Chunk60482 = require("./60482.js"),
  Chunk765703 = require("./765703.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk44542 = require("./44542.js"),
  Chunk160589 = require("./160589.js"),
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
    lowestGameServerCost: l
  } = (0, s.cj)([p.Z], () => ({
    state: p.Z.getStateForGuild(t),
    lowestGameServerCost: p.Z.getLowestGameCostForGuild(t)
  })), Z = (0, m.Z)(t), w = i.useMemo(() => {
    var e;
    if (0 !== Object.values(null != (e = null == n ? true : n.entitlements) ? e : {}).length) return Z.length > 0 ? {
      type: "expiring",
      expiringAt: Z[0].ends_at
    } : {
      type: "active",
      statusText: b.intl.string(v.default.FFLkmx)
    }
  }, [Z, null == n ? true : n.entitlements]), {
    textColor: I
  } = (0, f.Z)((null == w ? true : w.type) === "active");
  return null == n ? null : (0, r.jsxs)(d.aB, {
    label: b.intl.string(x.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == w ? true : w.type) === "active",
    isWarning: (null == w ? true : w.type) === "expiring",
    onClick: () => (0, g.Z)({
      guildId: t,
      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: _.imageContainer,
      children: [(0, r.jsx)("img", {
        className: a()(j.background, h.image, _.image),
        src: C.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: a()(h.image, _.gradient)
      })]
    }), (0, r.jsx)(d.Q9, {
      title: b.intl.string(x.default["B3OfL/"]),
      textColor: I,
      footer: (0, r.jsx)(d.uf, {
        cost: null != l ? l : 0,
        costDecorator: "+",
        status: w
      }),
      children: (0, r.jsx)(o.xvT, {
        className: h.description,
        color: I,
        variant: "text-sm/medium",
        children: b.intl.string(x.default.EGkJAG)
      })
    }), (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(c.Button, {
        variant: "primary",
        fullWidth: true,
        text: Object.values(n.entitlements).length > 0 ? b.intl.string(x.default.PuvU5b) : b.intl.string(x.default.b62EHM),
        onClick: e => {
          e.stopPropagation(), (0, g.Z)({
            guildId: t,
            analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}