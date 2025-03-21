/** Chunk was on 44799 **/
t.d(n, {
  ZP: () => g
}), t(47120);
var i = t(200651),
  r = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(793030),
  l = t(481060),
  c = t(808189),
  d = t(413335),
  u = t(690786),
  x = t(838968),
  m = t(969867),
  v = t(279604),
  p = t(610881),
  _ = t(709435);

function b(e) {
  let n, {
    active: t,
    nextActive: r,
    position: o
  } = e;
  return n = t && !1 !== r ? "full" : t && !1 === r ? "half" : "none", (0, i.jsxs)("div", {
    className: p.progressContainer,
    children: [(0, i.jsx)("div", {
      className: s()(p.progress, p[o], p[n])
    }), (0, i.jsx)("div", {
      className: s()(p.boostContainer, {
        [p.boostContainerActive]: t
      }),
      children: (0, i.jsx)(d.Z, {
        size: "sm",
        className: p.boost,
        fill: "white"
      })
    })]
  })
}

function j(e) {
  var n, t;
  let {
    index: r
  } = e;
  return (0, i.jsx)("div", {
    className: p.perkRowContainer,
    children: null === (t = c.C[r]) || void 0 === t ? void 0 : null === (n = t.perks) || void 0 === n ? void 0 : n.map((e, n) => (0, i.jsxs)("div", {
      className: p.perkRow,
      children: [(0, i.jsx)(e.icon, {
        color: l.TVs.colors.TEXT_MUTED,
        size: "sm"
      }), (0, i.jsx)(a.xv, {
        className: p.perkText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, n))
  })
}

function g(e) {
  let n, {
      guildId: t,
      index: o,
      powerup: s,
      nextPowerup: l
    } = e,
    c = null != (0, u.Z)(t, s),
    d = null != (0, u.Z)(t, l),
    [g, h] = r.useState(void 0);
  return (0, v.KT)(g), n = 0 === o ? "start" : null == l ? "end" : "middle", (0, i.jsxs)(x.Z, {
    guildId: t,
    powerup: s,
    className: p.card,
    children: [(0, i.jsx)(b, {
      position: n,
      active: c,
      nextActive: d
    }), (0, i.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, i.jsx)(a.X6, {
        variant: "heading-md/bold",
        children: s.title
      }), (0, i.jsx)(j, {
        index: o
      }), (0, i.jsx)(x.Y, {
        className: p.footer,
        guildId: t,
        powerup: s
      })]
    }), (0, i.jsx)("div", {
      className: _.buttonContainer,
      children: (0, i.jsx)(m.Z, {
        guildId: t,
        powerup: s,
        onError: h
      })
    })]
  })
}