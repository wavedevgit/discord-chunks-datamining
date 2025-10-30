/** Chunk was on 44799 **/
/** chunk id: 773149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk60482 = require("./60482.js"),
  Chunk765703 = require("./765703.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk789142 = require("./789142.js"),
  Chunk97200 = require("./97200.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk470039 = require("./470039.js"),
  Chunk581040 = require("./581040.js"),
  Chunk918342 = require("./918342.js"),
  Chunk611087 = require("./611087.js");

function w(e) {
  let {
    guildId: t
  } = e, {
    state: n,
    lowestGameServerCost: o
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
        className: l()(h.background, b.image, j.image),
        src: C.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: l()(b.image, j.gradient)
      })]
    }), (0, r.jsx)(d.Q9, {
      title: _.intl.string(x.default["B3OfL/"]),
      textColor: E,
      footer: (0, r.jsx)(d.uf, {
        cost: null != o ? o : 0,
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
        text: _.intl.string(x.default.PuvU5b),
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