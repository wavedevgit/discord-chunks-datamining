/** Chunk was on 44799 **/
/** chunk id: 27237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk808189 = require("./808189.jsx"),
  Chunk973772 = require("./973772.js"),
  Chunk838968 = require("./838968.jsx"),
  Chunk262212 = require("./262212.jsx"),
  Chunk226278 = require("./226278.jsx"),
  Chunk279604 = require("./279604.jsx"),
  Chunk279475 = require("./279475.js"),
  Chunk535396 = require("./535396.js"),
  Chunk981631 = require("./981631.js"),
  Chunk459196 = require("./459196.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk259913 = require("./259913.js");

function C(e) {
  let t, {
    active: n,
    nextActive: i,
    position: l
  } = e;
  return t = n && false !== i ? "full" : n && false === i ? "half" : "none", (0, r.jsxs)("div", {
    className: j.progressContainer,
    children: [(0, r.jsx)("div", {
      className: o()(j.progress, j[l], j[t])
    }), (0, r.jsx)("div", {
      className: o()(j.boostContainer, h.boostProgressBackground, {
        [j.boostContainerActive]: n,
        [h.active]: n
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
  } = e, l = (0, g.d)(t), o = (0, g.u)(t), s = i.useMemo(() => {
    let e = c.C[n];
    if (null == e) return [];
    let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => (0, r.jsxs)("div", {
      className: j.perkRow,
      children: [(0, r.jsx)(e.icon, {
        color: o,
        size: "sm"
      }), (0, r.jsx)(a.xvT, {
        className: j.perkText,
        color: l,
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, "perk-".concat(n, "-").concat(t)))
  }, [n, o, l]);
  return (0, r.jsxs)("div", {
    className: j.perkRowContainer,
    children: [s, (0, r.jsx)("div", {
      className: j.perkRow,
      children: (0, r.jsx)(a.xvT, {
        color: l,
        variant: "text-sm/medium",
        children: b.intl.string(_.default.nIj3LZ)
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
  } = e, a = (0, u.ZP)(t, l), s = (0, u.ZP)(t, o), c = a.type !== v.A3.INACTIVE, x = s.type !== v.A3.INACTIVE, _ = a.type === v.A3.TIER_OVERRIDE_ACTIVATED, [b, h] = i.useState(true);
  (0, m.KT)(b);
  let I = (0, g.d)(c);
  return (0, r.jsxs)(f.Z, {
    guildId: t,
    powerup: l,
    className: j.card,
    children: [(0, r.jsx)(C, {
      position: 0 === n ? "start" : null == o ? "end" : "middle",
      active: c,
      nextActive: null != o ? x : true
    }), (0, r.jsx)(d.Q9, {
      title: l.title,
      textColor: I,
      footer: !_ && (0, r.jsx)(f.g, {
        className: j.footer,
        guildId: t,
        powerup: l
      }),
      children: (0, r.jsx)(w, {
        isActive: c,
        index: n
      })
    }), !_ && (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(p.ZP, {
        guildId: t,
        powerup: l,
        onError: h
      })
    })]
  })
}