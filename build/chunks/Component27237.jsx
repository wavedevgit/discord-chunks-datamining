/** Chunk was on 44799 **/
/** chunk id: 27237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk297159 = require("./297159.js"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk262212 = require("./262212.jsx"),
  Chunk226278 = require("./226278.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk707541 = require("./707541.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk132748 = require("./132748.js"),
  Chunk130231 = require("./130231.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk259913 = require("./259913.js");

function w(e) {
  let t, {
    active: n,
    nextActive: i,
    position: o
  } = e;
  return t = n && false !== i ? "full" : n && false === i ? "half" : "none", (0, r.jsxs)("div", {
    className: C.progressContainer,
    children: [(0, r.jsx)("div", {
      className: l()(C.progress, C[o], C[t])
    }), (0, r.jsx)("div", {
      className: l()(C.boostContainer, j.boostProgressBackground, {
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

function Z(e) {
  let {
    isActive: t,
    index: n
  } = e, {
    textColor: o,
    iconColor: l
  } = (0, g.Z)(t), s = i.useMemo(() => {
    let e = _.C[n];
    if (null == e) return [];
    let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => {
      let i = (0, u.P)(e.perkIcon);
      return (0, r.jsxs)("div", {
        className: C.perkRow,
        children: [(0, r.jsx)(i, {
          color: l,
          size: "sm"
        }), (0, r.jsx)(a.xvT, {
          className: C.perkText,
          color: o,
          variant: "text-sm/medium",
          children: e.getCopy()
        })]
      }, "perk-".concat(n, "-").concat(t))
    })
  }, [n, l, o]);
  return (0, r.jsxs)("div", {
    className: C.perkRowContainer,
    children: [s, (0, r.jsx)("div", {
      className: C.perkRow,
      children: (0, r.jsx)(a.xvT, {
        color: o,
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
    powerup: o,
    nextPowerup: l
  } = e, a = (0, c.ZP)(t, o), s = (0, c.ZP)(t, l), u = a.type !== v.A3.INACTIVE, x = s.type !== v.A3.INACTIVE, _ = a.type === v.A3.TIER_OVERRIDE_ACTIVATED, [b, h] = i.useState(true);
  (0, m.KT)(b);
  let {
    textColor: j
  } = (0, g.Z)(u);
  return (0, r.jsxs)(f.Z, {
    guildId: t,
    powerup: o,
    className: C.card,
    children: [(0, r.jsx)(w, {
      position: 0 === n ? "start" : null == l ? "end" : "middle",
      active: u,
      nextActive: null != l ? x : true
    }), (0, r.jsx)(d.Q9, {
      title: o.title,
      textColor: j,
      footer: !_ && (0, r.jsx)(f.g, {
        className: C.footer,
        guildId: t,
        powerup: o
      }),
      children: (0, r.jsx)(Z, {
        isActive: u,
        index: n
      })
    }), !_ && (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(p.ZP, {
        guildId: t,
        powerup: o,
        onError: h
      })
    })]
  })
}