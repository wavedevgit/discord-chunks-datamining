/** Chunk was on 44799 **/
t.d(n, {
  ZP: () => h
}), t(47120);
var r = t(200651),
  i = t(192379),
  s = t(120356),
  o = t.n(s),
  a = t(793030),
  l = t(481060),
  c = t(808189),
  d = t(413335),
  u = t(157353),
  x = t(838968),
  m = t(969867),
  p = t(279604),
  v = t(610881),
  b = t(709435);

function _(e) {
  let n, {
    active: t,
    nextActive: i,
    position: s
  } = e;
  return n = t && !1 !== i ? "full" : t && !1 === i ? "half" : "none", (0, r.jsxs)("div", {
    className: v.progressContainer,
    children: [(0, r.jsx)("div", {
      className: o()(v.progress, v[s], v[n])
    }), (0, r.jsx)("div", {
      className: o()(v.boostContainer, {
        [v.boostContainerActive]: t
      }),
      children: (0, r.jsx)(d.Z, {
        size: "sm",
        className: v.boost,
        fill: "white"
      })
    })]
  })
}

function j(e) {
  var n, t;
  let {
    index: i
  } = e;
  return (0, r.jsx)("div", {
    className: v.perkRowContainer,
    children: null === (t = c.C[i]) || void 0 === t ? void 0 : null === (n = t.perks) || void 0 === n ? void 0 : n.map((e, n) => (0, r.jsxs)("div", {
      className: v.perkRow,
      children: [(0, r.jsx)(e.icon, {
        color: l.TVs.colors.TEXT_MUTED,
        size: "sm"
      }), (0, r.jsx)(a.xv, {
        className: v.perkText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, n))
  })
}

function h(e) {
  let n, {
      guildId: t,
      index: s,
      powerup: o,
      nextPowerup: l
    } = e,
    {
      onShowMore: c
    } = (0, p.ZP)(t, o),
    d = (0, u.Z)(t, o),
    h = (0, u.Z)(t, l),
    [f, g] = i.useState(void 0);
  return (0, p.KT)(f), n = 0 === s ? "start" : null == l ? "end" : "middle", (0, r.jsxs)(x.Z, {
    label: o.title,
    onClick: c,
    active: d,
    className: v.card,
    children: [(0, r.jsx)(_, {
      position: n,
      active: d,
      nextActive: h
    }), (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, r.jsx)(a.X6, {
        variant: "heading-md/bold",
        children: o.title
      }), (0, r.jsx)(j, {
        index: s
      }), (0, r.jsx)(x.Y, {
        className: v.footer,
        guildId: t,
        powerup: o
      })]
    }), (0, r.jsx)("div", {
      className: b.buttonContainer,
      children: (0, r.jsx)(m.Z, {
        guildId: t,
        powerup: o,
        onError: g
      })
    })]
  })
}