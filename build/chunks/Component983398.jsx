/** Chunk was on 88615 **/
/** chunk id: 983398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
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

function w(e) {
  let t, {
    active: n,
    nextActive: l,
    position: i
  } = e;
  return t = n && false !== l ? A.z0.FULL : n && false === l ? A.z0.HALF : A.z0.NONE, (0, r.jsxs)("div", {
    className: E.progressContainer,
    children: [(0, r.jsx)("div", {
      className: o()(E.progress, E[i], E[t])
    }), (0, r.jsx)("div", {
      className: o()(E.boostContainer, j.JD, {
        [E.boostContainerActive]: n,
        [j.vu]: n
      }),
      children: (0, r.jsx)(u._Jp, {
        size: "sm",
        color: a.A.colors.ICON_STRONG
      })
    })]
  })
}

function y(e) {
  let {
    isActive: t,
    index: n
  } = e, {
    textColor: i,
    iconColor: o
  } = (0, v.A)(t), a = l.useMemo(() => {
    let e = x.t[n];
    if (null == e) return [];
    let t = e.tier === _.TVA.TIER_3 ? e.perks.slice(0, false) : e.perks;
    return null == t ? true : t.map((e, t) => {
      let l = (0, d.X)(e.perkIcon);
      return (0, r.jsxs)("div", {
        className: E.perkRow,
        children: [(0, r.jsx)(l, {
          color: o,
          size: "sm"
        }), (0, r.jsx)(s.EYj, {
          className: E.perkText,
          color: i,
          variant: "text-sm/medium",
          children: e.getCopy()
        })]
      }, "perk-".concat(n, "-").concat(t))
    })
  }, [n, o, i]);
  return (0, r.jsxs)("div", {
    className: E.perkRowContainer,
    children: [a, (0, r.jsx)("div", {
      className: E.perkRow,
      children: (0, r.jsx)(s.EYj, {
        color: i,
        variant: "text-sm/medium",
        children: b.intl.string(h.default.nIj3LZ)
      })
    })]
  })
}

function I(e) {
  let t, {
      guildId: n,
      index: i,
      powerup: o,
      nextPowerup: s
    } = e,
    a = (0, c.Ay)(n, o),
    u = (0, c.Ay)(n, s),
    d = a.type !== A.b_.INACTIVE,
    _ = u.type !== A.b_.INACTIVE,
    x = a.type === A.b_.TIER_OVERRIDE_ACTIVATED,
    [h, b] = l.useState(true);
  (0, g.A)(h), t = 0 === i ? A.At.START : null == s ? A.At.END : A.At.MIDDLE;
  let {
    textColor: j
  } = (0, v.A)(d);
  return (0, r.jsxs)(f.h, {
    guildId: n,
    powerup: o,
    className: E.card,
    children: [(0, r.jsx)(w, {
      position: t,
      active: d,
      nextActive: null != s ? _ : true
    }), (0, r.jsx)(p.Ft, {
      title: o.title,
      textColor: j,
      footer: !x && (0, r.jsx)(f.A, {
        className: E.footer,
        guildId: n,
        powerup: o
      }),
      children: (0, r.jsx)(y, {
        isActive: d,
        index: i
      })
    }), !x && (0, r.jsx)(p.kd, {
      children: (0, r.jsx)(m.Ay, {
        guildId: n,
        powerup: o,
        onError: b
      })
    })]
  })
}