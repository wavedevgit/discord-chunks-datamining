/** Chunk was on 44799 **/
/** chunk id: 248641, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk258640 = require("./258640.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk470039 = require("./470039.js"),
  Chunk581040 = require("./581040.js"),
  Chunk263669 = require("./263669.js"),
  Chunk44825 = require("./44825.js");

function j(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(t)), i = o.useMemo(() => {
    if ((null == n ? true : n.instances) != null && 0 !== Object.keys(n.instances).length) return {
      type: "active",
      statusText: x.intl.string(g.default.FFLkm5)
    }
  }, [null == n ? true : n.instances]), j = (0, p.d)((null == i ? true : i.type) === "active"), P = o.useMemo(() => {
    if ((null == n ? true : n.catalog) == null) return 0;
    let e = Object.values(n.catalog);
    return 0 === e.length ? 0 : Math.min(...e.map(e => e.baseCost))
  }, [null == n ? true : n.catalog]);
  return null == n ? null : (0, r.jsxs)(d.aB, {
    label: x.intl.string(v.default["fjt/vr"]),
    badge: "new",
    isActive: (null == i ? true : i.type) === "active",
    onClick: () => (0, f.Z)({
      guildId: t,
      analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
    }),
    children: [(0, r.jsxs)("div", {
      className: h.imageContainer,
      children: [(0, r.jsx)("img", {
        className: l()(b.background, _.image, h.image),
        src: C.Z,
        alt: ""
      }), (0, r.jsx)("div", {
        className: l()(_.image, h.gradient)
      })]
    }), (0, r.jsx)(d.Q9, {
      title: x.intl.string(v.default["fjt/vr"]),
      textColor: j,
      footer: (0, r.jsx)(d.uf, {
        cost: P,
        costDecorator: "+",
        status: i
      }),
      children: (0, r.jsx)(a.xv, {
        className: _.description,
        color: j,
        variant: "text-sm/medium",
        children: x.intl.string(v.default.P7VSCg)
      })
    }), (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(c.zxk, {
        variant: "primary",
        fullWidth: true,
        text: x.intl.string(v.default.MbdLuL),
        onClick: e => {
          e.stopPropagation(), (0, f.Z)({
            guildId: t,
            analyticsLocation: u.Z.GUILD_POWERUPS_OVERVIEW
          })
        }
      })
    })]
  })
}