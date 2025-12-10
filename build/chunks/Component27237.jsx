/** Chunk was on 44799 **/
/** chunk id: 27237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk297159 = require("./297159.js"),
  Chunk238343 = require("./238343.jsx"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk262212 = require("./262212.jsx"),
  Chunk226278 = require("./226278.jsx"),
  Chunk707541 = require("./707541.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk132748 = require("./132748.js"),
  Chunk810878 = require("./810878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk259913 = require("./259913.js");

function Z(e) {
  let t, {
    active: n,
    nextActive: i,
    position: l
  } = e;
  return t = n && false !== i ? "full" : n && false === i ? "half" : "none", (0, r.jsxs)("div", {
    className: C.progressContainer,
    children: [(0, r.jsx)("div", {
      className: o()(C.progress, C[l], C[t])
    }), (0, r.jsx)("div", {
      className: o()(C.boostContainer, j.boostProgressBackground, {
        [C.boostContainerActive]: n,
        [j.active]: n
      }),
      children: (0, r.jsx)(s.Ucv, {
        size: "sm",
        color: "white"
      })
    })]
  })
}

function w(e) {
  let {
    isActive: t,
    index: n
  } = e, {
    textColor: l,
    iconColor: o
  } = (0, g.Z)(t), s = i.useMemo(() => {
    let e = _.C[n];
    if (null == e) return [];
    let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => {
      let i = (0, u.P)(e.perkIcon);
      return (0, r.jsxs)("div", {
        className: C.perkRow,
        children: [(0, r.jsx)(i, {
          color: o,
          size: "sm"
        }), (0, r.jsx)(a.xvT, {
          className: C.perkText,
          color: l,
          variant: "text-sm/medium",
          children: e.getCopy()
        })]
      }, "perk-".concat(n, "-").concat(t))
    })
  }, [n, o, l]);
  return (0, r.jsxs)("div", {
    className: C.perkRowContainer,
    children: [s, (0, r.jsx)("div", {
      className: C.perkRow,
      children: (0, r.jsx)(a.xvT, {
        color: l,
        variant: "text-sm/medium",
        children: h.intl.string(b.default.nIj3LZ)
      })
    })]
  })
}

function I(e) {
  let {
    guildId: t,
    index: n,
    powerup: l,
    nextPowerup: o
  } = e, a = (0, d.ZP)(t, l), s = (0, d.ZP)(t, o), u = a.type !== v.A3.INACTIVE, x = s.type !== v.A3.INACTIVE, _ = a.type === v.A3.TIER_OVERRIDE_ACTIVATED, [b, h] = i.useState(true);
  (0, c.KT)(b);
  let {
    textColor: j
  } = (0, g.Z)(u);
  return (0, r.jsxs)(m.Z, {
    guildId: t,
    powerup: l,
    className: C.card,
    children: [(0, r.jsx)(Z, {
      position: 0 === n ? "start" : null == o ? "end" : "middle",
      active: u,
      nextActive: null != o ? x : true
    }), (0, r.jsx)(p.Q9, {
      title: l.title,
      textColor: j,
      footer: !_ && (0, r.jsx)(m.g, {
        className: C.footer,
        guildId: t,
        powerup: l
      }),
      children: (0, r.jsx)(w, {
        isActive: u,
        index: n
      })
    }), !_ && (0, r.jsx)(p.N4, {
      children: (0, r.jsx)(f.ZP, {
        guildId: t,
        powerup: l,
        onError: h
      })
    })]
  })
}