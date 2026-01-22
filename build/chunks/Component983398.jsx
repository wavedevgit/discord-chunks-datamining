/** Chunk was on 88615 **/
/** chunk id: 983398, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk210273 = require("./210273.js"),
  Chunk998418 = require("./998418.js"),
  Chunk890942 = require("./890942.jsx"),
  Chunk722523 = require("./722523.jsx"),
  Chunk634925 = require("./634925.jsx"),
  Chunk744201 = require("./744201.js"),
  Chunk867060 = require("./867060.js"),
  Chunk568065 = require("./568065.js"),
  Chunk652215 = require("./652215.js"),
  Chunk508155 = require("./508155.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk876380 = require("./876380.js"),
  Chunk206188 = require("./206188.js");

function y(e) {
  let t, {
    active: l,
    nextActive: n,
    position: i
  } = e;
  return t = l && false !== n ? g.z0.FULL : l && false === n ? g.z0.HALF : g.z0.NONE, (0, r.jsxs)("div", {
    className: E.progressContainer,
    children: [(0, r.jsx)("div", {
      className: s()(E.progress, E[i], E[t])
    }), (0, r.jsx)("div", {
      className: s()(E.boostContainer, _.JD, {
        [E.boostContainerActive]: l,
        [_.vu]: l
      }),
      children: (0, r.jsx)(u._Jp, {
        size: "sm",
        color: a.A.colors.ICON_STRONG
      })
    })]
  })
}

function I(e) {
  let {
    isActive: t,
    index: l
  } = e, {
    textColor: i,
    iconColor: s
  } = (0, v.A)(t), a = n.useMemo(() => {
    let e = b.t[l];
    if (null == e) return [];
    let t = e.tier === x.TVA.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => {
      let n = (0, d.X)(e.perkIcon);
      return (0, r.jsxs)("div", {
        className: E.perkRow,
        children: [(0, r.jsx)(n, {
          color: s,
          size: "sm"
        }), (0, r.jsx)(o.EYj, {
          className: E.perkText,
          color: i,
          variant: "text-sm/medium",
          children: e.getCopy()
        })]
      }, "perk-".concat(l, "-").concat(t))
    })
  }, [l, s, i]);
  return (0, r.jsxs)("div", {
    className: E.perkRowContainer,
    children: [a, (0, r.jsx)("div", {
      className: E.perkRow,
      children: (0, r.jsx)(o.EYj, {
        color: i,
        variant: "text-sm/medium",
        children: j.intl.string(h.default.nIj3LZ)
      })
    })]
  })
}

function S(e) {
  let t, {
      guildId: l,
      index: i,
      powerup: s,
      nextPowerup: o
    } = e,
    a = (0, c.Ay)(l, s),
    u = (0, c.Ay)(l, o),
    d = a.type !== g.b_.INACTIVE,
    x = u.type !== g.b_.INACTIVE,
    b = a.type === g.b_.TIER_OVERRIDE_ACTIVATED,
    [h, j] = n.useState(true);
  (0, A.A)(h), t = 0 === i ? g.At.START : null == o ? g.At.END : g.At.MIDDLE;
  let {
    textColor: _
  } = (0, v.A)(d);
  return (0, r.jsxs)(m.h, {
    guildId: l,
    powerup: s,
    className: E.card,
    children: [(0, r.jsx)(y, {
      position: t,
      active: d,
      nextActive: null != o ? x : true
    }), (0, r.jsx)(f.Ft, {
      title: s.title,
      textColor: _,
      footer: !b && (0, r.jsx)(m.A, {
        className: E.footer,
        guildId: l,
        powerup: s
      }),
      children: (0, r.jsx)(I, {
        isActive: d,
        index: i
      })
    }), !b && (0, r.jsx)(f.kd, {
      children: (0, r.jsx)(p.Ay, {
        guildId: l,
        powerup: s,
        onError: j
      })
    })]
  })
}