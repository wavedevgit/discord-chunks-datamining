/** Chunk was on 44799 **/
/** chunk id: 27237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk556970 = require("./556970.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk138545 = require("./138545.js"),
  Chunk919600 = require("./919600.js");

function Z(e) {
  let t, {
    active: n,
    nextActive: i,
    position: l
  } = e;
  return t = n && false !== i ? v.vW.FULL : n && false === i ? v.vW.HALF : v.vW.NONE, (0, r.jsxs)("div", {
    className: C.progressContainer,
    children: [(0, r.jsx)("div", {
      className: o()(C.progress, C[l], C[t])
    }), (0, r.jsx)("div", {
      className: o()(C.boostContainer, _.boostProgressBackground, {
        [C.boostContainerActive]: n,
        [_.active]: n
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
    let e = b.C[n];
    if (null == e) return [];
    let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => {
      let i = (0, c.P)(e.perkIcon);
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
        children: j.intl.string(h.default.nIj3LZ)
      })
    })]
  })
}

function I(e) {
  let t, {
      guildId: n,
      index: l,
      powerup: o,
      nextPowerup: a
    } = e,
    s = (0, d.ZP)(n, o),
    c = (0, d.ZP)(n, a),
    x = s.type !== v.A3.INACTIVE,
    b = c.type !== v.A3.INACTIVE,
    h = s.type === v.A3.TIER_OVERRIDE_ACTIVATED,
    [j, _] = i.useState(true);
  (0, u.KT)(j), t = 0 === l ? v.m.START : null == a ? v.m.END : v.m.MIDDLE;
  let {
    textColor: I
  } = (0, g.Z)(x);
  return (0, r.jsxs)(m.Z, {
    guildId: n,
    powerup: o,
    className: C.card,
    children: [(0, r.jsx)(Z, {
      position: t,
      active: x,
      nextActive: null != a ? b : true
    }), (0, r.jsx)(f.Q9, {
      title: o.title,
      textColor: I,
      footer: !h && (0, r.jsx)(m.g, {
        className: C.footer,
        guildId: n,
        powerup: o
      }),
      children: (0, r.jsx)(w, {
        isActive: x,
        index: l
      })
    }), !h && (0, r.jsx)(f.N4, {
      children: (0, r.jsx)(p.ZP, {
        guildId: n,
        powerup: o,
        onError: _
      })
    })]
  })
}