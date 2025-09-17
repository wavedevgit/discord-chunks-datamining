/** Chunk was on 44799 **/
/** chunk id: 248641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js"), require("./953529.js");
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
  Chunk693587 = require("./693587.js"),
  Chunk809741 = require("./809741.jsx"),
  Chunk989308 = require("./989308.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk922434 = require("./922434.js"),
  Chunk530045 = require("./530045.js"),
  Chunk517862 = require("./517862.js");

function E(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)), i = o.useMemo(() => {
    if ((null == n ? true : n.instances) != null && 0 !== Object.keys(n.instances).length) return {
      type: "active",
      statusText: v.intl.string(f.default.FFLkm5)
    }
  }, [null == n ? true : n.instances]), E = (0, p.d)((null == i ? true : i.type) === "active"), T = o.useMemo(() => {
    if ((null == n ? true : n.catalog) == null) return 0;
    let e = Object.values(n.catalog);
    return 0 === e.length ? 0 : Math.min(...e.map(e => e.baseCost))
  }, [null == n ? true : n.catalog]);
  return null == n ? null : (0, r.jsxs)(d.aB, {
    label: v.intl.string(_.default["fjt/vr"]),
    badge: "new",
    isActive: (null == i ? true : i.type) === "active",
    onClick: () => (0, g.Z)({
      guildId: t,
      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: h.imageContainer,
      children: [(0, r.jsx)("img", {
        className: l()(C.background, x.image, h.image),
        src: b.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: l()(x.image, h.gradient)
      })]
    }), (0, r.jsx)(d.Q9, {
      title: v.intl.string(_.default["fjt/vr"]),
      textColor: E,
      footer: (0, r.jsx)(d.uf, {
        cost: T,
        costDecorator: "+",
        status: i
      }),
      children: (0, r.jsx)(a.xvT, {
        className: x.description,
        color: E,
        variant: "text-sm/medium",
        children: v.intl.string(_.default.P7VSCg)
      })
    }), (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(c.zxk, {
        variant: "primary",
        fullWidth: true,
        text: v.intl.string(_.default.MbdLuL),
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