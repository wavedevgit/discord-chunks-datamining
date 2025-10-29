/** Chunk was on 44799 **/
/** chunk id: 773149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk639777 = require("./639777.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk60482 = require("./60482.js"),
  Chunk765703 = require("./765703.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk459196 = require("./459196.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk922434 = require("./922434.js"),
  Chunk436370 = require("./436370.js"),
  Chunk611087 = require("./611087.js");

function I(e) {
  let {
    guildId: t
  } = e, {
    state: n,
    lowestGameServerCost: o
  } = (0, s.cj)([m.Z], () => ({
    state: m.Z.getStateForGuild(t),
    lowestGameServerCost: m.Z.getLowestGameCostForGuild(t)
  })), I = (0, g.Z)(t), E = (0, d.Z)(t), Z = i.useMemo(() => {
    var e;
    if (0 !== Object.values(null != (e = null == n ? true : n.entitlements) ? e : {}).length) return I.length > 0 ? {
      type: "expiring",
      expiringAt: I[0].ends_at
    } : {
      type: "active",
      statusText: b.intl.string(x.default.FFLkmx)
    }
  }, [I, null == n ? true : n.entitlements]), P = (0, f.d)((null == Z ? true : Z.type) === "active");
  return null == n ? null : (0, r.jsxs)(p.aB, {
    label: b.intl.string(_.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == Z ? true : Z.type) === "active",
    isWarning: (null == Z ? true : Z.type) === "expiring",
    onClick: () => (0, v.Z)({
      guildId: t,
      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: C.imageContainer,
      children: [(0, r.jsx)("img", {
        className: l()(j.background, h.image, C.image),
        src: w.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: l()(h.image, C.gradient)
      })]
    }), (0, r.jsx)(p.Q9, {
      title: b.intl.string(_.default["B3OfL/"]),
      textColor: P,
      footer: (0, r.jsx)(p.uf, {
        cost: null != o ? o : 0,
        costDecorator: "+",
        status: Z
      }),
      children: (0, r.jsx)(a.xvT, {
        className: h.description,
        color: P,
        variant: "text-sm/medium",
        children: b.intl.string(_.default.EGkJAG)
      })
    }), (0, r.jsx)(p.N4, {
      children: (0, r.jsx)(c.Button, {
        variant: "primary",
        fullWidth: true,
        text: E ? b.intl.string(_.default.PuvU5b) : b.intl.string(_.default.BYsbpX),
        onClick: e => {
          e.stopPropagation(), (0, v.Z)({
            guildId: t,
            analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}