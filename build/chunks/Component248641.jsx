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
  Chunk19394 = require("./19394.js"),
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
  Chunk611087 = require("./611087.js");

function E(e) {
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
  }, [null == n ? true : n.entitlements]), E = (0, f.d)((null == o ? true : o.type) === "active"), I = i.useMemo(() => {
    if ((null == n ? true : n.catalog) == null) return 0;
    let e = Object.values(n.catalog);
    return 0 === e.length ? 0 : Math.min(...e.map(e => e.baseCost))
  }, [null == n ? true : n.catalog]);
  return null == n ? null : (0, r.jsxs)(p.aB, {
    label: _.intl.string(x.default["fjt/vr"]),
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
      title: _.intl.string(x.default["fjt/vr"]),
      textColor: E,
      footer: (0, r.jsx)(p.uf, {
        cost: I,
        costDecorator: "+",
        status: o
      }),
      children: (0, r.jsx)(a.xvT, {
        className: b.description,
        color: E,
        variant: "text-sm/medium",
        children: _.intl.string(x.default.P7VSCg)
      })
    }), (0, r.jsx)(p.N4, {
      children: (0, r.jsx)(c.zxk, {
        variant: "primary",
        fullWidth: true,
        text: _.intl.string(x.default.MbdLuL),
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