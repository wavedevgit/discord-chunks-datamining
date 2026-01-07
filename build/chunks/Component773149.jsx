/** Chunk was on 44799 **/
/** chunk id: 773149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk707541 = require("./707541.js"),
  Chunk60482 = require("./60482.js"),
  Chunk447941 = require("./447941.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk556970 = require("./556970.js"),
  Chunk914820 = require("./914820.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk138545 = require("./138545.js"),
  Chunk896481 = require("./896481.js"),
  Chunk289585 = require("./289585.js"),
  Chunk796571 = require("./796571.js");

function w(e) {
  let {
    guildId: t
  } = e, {
    state: n,
    lowestGameServerCost: o
  } = (0, s.cj)([p.Z], () => ({
    state: p.Z.getStateForGuild(t),
    lowestGameServerCost: p.Z.getLowestGameCostForGuild(t)
  })), w = (0, m.Z)(t), C = i.useMemo(() => {
    var e;
    if (0 !== Object.values(null != (e = null == n ? true : n.entitlements) ? e : {}).length) return w.length > 0 ? {
      type: "expiring",
      expiringAt: w[0].ends_at
    } : {
      type: "active",
      statusText: b.intl.string(g.default.FFLkmx)
    }
  }, [w, null == n ? true : n.entitlements]), {
    textColor: I
  } = (0, f.Z)((null == C ? true : C.type) === "active");
  return null == n ? null : (0, r.jsxs)(d.aB, {
    label: b.intl.string(x.default["B3OfL/"]),
    badge: "beta",
    isActive: (null == C ? true : C.type) === "active",
    isWarning: (null == C ? true : C.type) === "expiring",
    onClick: () => (0, v.Z)({
      guildId: t,
      analyticsLocation: c.Z.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: Z.imageContainer,
      children: [(0, r.jsx)("img", {
        className: l()(j.background, h.image, Z.image),
        src: _.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: l()(h.image, Z.gradient)
      })]
    }), (0, r.jsx)(d.Q9, {
      title: b.intl.string(x.default["B3OfL/"]),
      textColor: I,
      footer: (0, r.jsx)(d.uf, {
        cost: null != o ? o : 0,
        costDecorator: "+",
        status: C
      }),
      children: (0, r.jsx)(a.xvT, {
        className: h.description,
        color: I,
        variant: "text-sm/medium",
        children: b.intl.string(x.default.EGkJAG)
      })
    }), (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(u.Button, {
        variant: "primary",
        fullWidth: true,
        text: Object.values(n.entitlements).length > 0 ? b.intl.string(x.default.PuvU5b) : b.intl.string(x.default.b62EHM),
        onClick: e => {
          e.stopPropagation(), (0, v.Z)({
            guildId: t,
            analyticsLocation: c.Z.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}