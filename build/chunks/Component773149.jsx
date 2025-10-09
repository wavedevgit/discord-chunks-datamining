/** Chunk was on 44799 **/
/** chunk id: 773149, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk19394 = require("./19394.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk60482 = require("./60482.js"),
  Chunk735276 = require("./735276.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk922434 = require("./922434.js"),
  Chunk436370 = require("./436370.js"),
  Chunk611087 = require("./611087.js");

function I(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)), o = i.useMemo(() => {
    var e;
    let t = Object.values(null != (e = null == n ? true : n.entitlements) ? e : {});
    if (0 === t.length) return;
    let r = (0, d.h)(t);
    return r.length > 0 ? {
      type: "expiring",
      expiringAt: r[0].ends_at
    } : {
      type: "active",
      statusText: _.intl.string(v.default.FFLkm5)
    }
  }, [null == n ? true : n.entitlements]), I = (0, f.d)((null == o ? true : o.type) === "active"), E = i.useMemo(() => {
    if ((null == n ? true : n.catalog) == null) return 0;
    let e = Object.values(n.catalog);
    return 0 === e.length ? 0 : Math.min(...e.map(e => e.baseCost))
  }, [null == n ? true : n.catalog]);
  return null == n ? null : (0, r.jsxs)(p.aB, {
    label: _.intl.string(x.default.B3OfLy),
    badge: "beta",
    isActive: (null == o ? true : o.type) === "active",
    isWarning: (null == o ? true : o.type) === "expiring",
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
    }), (0, r.jsx)(p.Q9, {
      title: _.intl.string(x.default.B3OfLy),
      textColor: I,
      footer: (0, r.jsx)(p.uf, {
        cost: E,
        costDecorator: "+",
        status: o
      }),
      children: (0, r.jsx)(a.xvT, {
        className: b.description,
        color: I,
        variant: "text-sm/medium",
        children: _.intl.string(x.default.EGkJAA)
      })
    }), (0, r.jsx)(p.N4, {
      children: (0, r.jsx)(c.zxk, {
        variant: "primary",
        fullWidth: true,
        text: _.intl.string(x.default.PuvU5e),
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