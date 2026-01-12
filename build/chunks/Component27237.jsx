/** Chunk was on 44799 **/
/** chunk id: 27237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk707541 = require("./707541.js"),
  Chunk192958 = require("./192958.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk132748 = require("./132748.js"),
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk138545 = require("./138545.js"),
  Chunk919600 = require("./919600.js");

function _(e) {
  let t, {
    active: n,
    nextActive: i,
    position: o
  } = e;
  return t = n && false !== i ? g.vW.FULL : n && false === i ? g.vW.HALF : g.vW.NONE, (0, r.jsxs)("div", {
    className: w.progressContainer,
    children: [(0, r.jsx)("div", {
      className: l()(w.progress, w[o], w[t])
    }), (0, r.jsx)("div", {
      className: l()(w.boostContainer, Z.boostProgressBackground, {
        [w.boostContainerActive]: n,
        [Z.active]: n
      }),
      children: (0, r.jsx)(s.Ucv, {
        size: "sm",
        color: "white"
      })
    })]
  })
}

function C(e) {
  let {
    isActive: t,
    index: n
  } = e, {
    textColor: o,
    iconColor: l
  } = (0, m.Z)(t), s = i.useMemo(() => {
    let e = b.C[n];
    if (null == e) return [];
    let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => {
      let i = (0, u.P)(e.perkIcon);
      return (0, r.jsxs)("div", {
        className: w.perkRow,
        children: [(0, r.jsx)(i, {
          color: l,
          size: "sm"
        }), (0, r.jsx)(a.xvT, {
          className: w.perkText,
          color: o,
          variant: "text-sm/medium",
          children: e.getCopy()
        })]
      }, "perk-".concat(n, "-").concat(t))
    })
  }, [n, l, o]);
  return (0, r.jsxs)("div", {
    className: w.perkRowContainer,
    children: [s, (0, r.jsx)("div", {
      className: w.perkRow,
      children: (0, r.jsx)(a.xvT, {
        color: o,
        variant: "text-sm/medium",
        children: j.intl.string(h.default.nIj3LZ)
      })
    })]
  })
}

function I(e) {
  let t, {
      guildId: n,
      index: o,
      powerup: l,
      nextPowerup: a
    } = e,
    s = (0, c.ZP)(n, l),
    u = (0, c.ZP)(n, a),
    x = s.type !== g.A3.INACTIVE,
    b = u.type !== g.A3.INACTIVE,
    h = s.type === g.A3.TIER_OVERRIDE_ACTIVATED,
    [j, Z] = i.useState(true);
  (0, v.Z)(j), t = 0 === o ? g.m.START : null == a ? g.m.END : g.m.MIDDLE;
  let {
    textColor: I
  } = (0, m.Z)(x);
  return (0, r.jsxs)(p.Z, {
    guildId: n,
    powerup: l,
    className: w.card,
    children: [(0, r.jsx)(_, {
      position: t,
      active: x,
      nextActive: null != a ? b : true
    }), (0, r.jsx)(d.Q9, {
      title: l.title,
      textColor: I,
      footer: !h && (0, r.jsx)(p.g, {
        className: w.footer,
        guildId: n,
        powerup: l
      }),
      children: (0, r.jsx)(C, {
        isActive: x,
        index: o
      })
    }), !h && (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(f.ZP, {
        guildId: n,
        powerup: l,
        onError: Z
      })
    })]
  })
}