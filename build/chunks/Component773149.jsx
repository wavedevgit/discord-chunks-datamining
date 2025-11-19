/** Chunk was on 44799 **/
/** chunk id: 773149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk60482 = require("./60482.js"),
  Chunk765703 = require("./765703.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk130231 = require("./130231.js"),
  Chunk613275 = require("./613275.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk922434 = require("./922434.js"),
  Chunk436370 = require("./436370.js"),
  Chunk611087 = require("./611087.js");

function w(e) {
  let {
    guildId: t
  } = e, {
    state: n,
    lowestGameServerCost: l
  } = (0, s.cj)([f.Z], () => ({
    state: f.Z.getStateForGuild(t),
    lowestGameServerCost: f.Z.getLowestGameCostForGuild(t)
  })), w = (0, m.Z)(t), I = i.useMemo(() => {
    var e;
    if (0 !== Object.values(null != (e = null == n ? true : n.entitlements) ? e : {}).length) return w.length > 0 ? {
      type: "expiring",
      expiringAt: w[0].ends_at
    } : {
      type: "active",
      statusText: _.intl.string(v.default.FFLkmx)
    }
  }, [w, null == n ? true : n.entitlements]), E = (0, p.d)((null == I ? true : I.type) === "active");
  return null == n ? null : (0, r.jsxs)(d.aB, {
    label: _.intl.string(x.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == I ? true : I.type) === "active",
    isWarning: (null == I ? true : I.type) === "expiring",
    onClick: () => (0, g.Z)({
      guildId: t,
      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: j.imageContainer,
      children: [(0, r.jsx)("img", {
        className: o()(h.background, b.image, j.image),
        src: C.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: o()(b.image, j.gradient)
      })]
    }), (0, r.jsx)(d.Q9, {
      title: _.intl.string(x.default["B3OfL/"]),
      textColor: E,
      footer: (0, r.jsx)(d.uf, {
        cost: null != l ? l : 0,
        costDecorator: "+",
        status: I
      }),
      children: (0, r.jsx)(a.xvT, {
        className: b.description,
        color: E,
        variant: "text-sm/medium",
        children: _.intl.string(x.default.EGkJAG)
      })
    }), (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(c.Button, {
        variant: "primary",
        fullWidth: true,
        text: Object.values(n.entitlements).length > 0 ? _.intl.string(x.default.PuvU5b) : _.intl.string(x.default.b62EHM),
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