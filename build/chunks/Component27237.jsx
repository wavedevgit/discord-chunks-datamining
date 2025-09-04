/** Chunk was on 44799 **/
/** chunk id: 27237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk989308 = require("./989308.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237522 = require("./237522.js"),
  Chunk259913 = require("./259913.js");

function j(e) {
  let t, {
    active: n,
    nextActive: o,
    position: i
  } = e;
  return t = n && false !== o ? "full" : n && false === o ? "half" : "none", (0, r.jsxs)("div", {
    className: C.progressContainer,
    children: [(0, r.jsx)("div", {
      className: l()(C.progress, C[i], C[t])
    }), (0, r.jsx)("div", {
      className: l()(C.boostContainer, h.boostProgressBackground, {
        [C.boostContainerActive]: n,
        [h.active]: n
      }),
      children: (0, r.jsx)(s.$Eu, {
        size: "sm",
        color: "white"
      })
    })]
  })
}

function P(e) {
  let {
    isActive: t,
    index: n
  } = e, i = (0, g.d)(t), l = (0, g.u)(t), s = o.useMemo(() => {
    let e = c.C[n];
    if (null == e) return [];
    let t = e.tier === x.Eu4.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => (0, r.jsxs)("div", {
      className: C.perkRow,
      children: [(0, r.jsx)(e.icon, {
        color: l,
        size: "sm"
      }), (0, r.jsx)(a.xv, {
        className: C.perkText,
        color: i,
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, "perk-".concat(n, "-").concat(t)))
  }, [n, l, i]);
  return (0, r.jsxs)("div", {
    className: C.perkRowContainer,
    children: [s, (0, r.jsx)("div", {
      className: C.perkRow,
      children: (0, r.jsx)(a.xv, {
        color: i,
        variant: "text-sm/medium",
        children: b.intl.string(_.default.nIj3LS)
      })
    })]
  })
}

function E(e) {
  let {
    guildId: t,
    index: n,
    powerup: i,
    nextPowerup: l
  } = e, a = (0, u.ZP)(t, i), s = (0, u.ZP)(t, l), c = a.type !== v.A3.INACTIVE, x = s.type !== v.A3.INACTIVE, _ = a.type === v.A3.TIER_OVERRIDE_ACTIVATED, [b, h] = o.useState(true);
  (0, f.KT)(b);
  let E = (0, g.d)(c);
  return (0, r.jsxs)(m.Z, {
    guildId: t,
    powerup: i,
    className: C.card,
    children: [(0, r.jsx)(j, {
      position: 0 === n ? "start" : null == l ? "end" : "middle",
      active: c,
      nextActive: null != l ? x : true
    }), (0, r.jsx)(d.Q9, {
      title: i.title,
      textColor: E,
      footer: !_ && (0, r.jsx)(m.g, {
        className: C.footer,
        guildId: t,
        powerup: i
      }),
      children: (0, r.jsx)(P, {
        isActive: c,
        index: n
      })
    }), !_ && (0, r.jsx)(d.N4, {
      children: (0, r.jsx)(p.ZP, {
        guildId: t,
        powerup: i,
        onError: h
      })
    })]
  })
}