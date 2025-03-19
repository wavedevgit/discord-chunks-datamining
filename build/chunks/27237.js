/** Chunk was on 44799 **/
t.d(n, {
  ZP: () => h
}), t(47120);
var i = t(200651),
  r = t(192379),
  s = t(120356),
  o = t.n(s),
  a = t(793030),
  l = t(481060),
  c = t(808189),
  d = t(413335),
  u = t(690786),
  x = t(838968),
  m = t(969867),
  v = t(279604),
  _ = t(610881),
  p = t(709435);

function b(e) {
  let n, {
    active: t,
    nextActive: r,
    position: s
  } = e;
  return n = t && !1 !== r ? "full" : t && !1 === r ? "half" : "none", (0, i.jsxs)("div", {
    className: _.progressContainer,
    children: [(0, i.jsx)("div", {
      className: o()(_.progress, _[s], _[n])
    }), (0, i.jsx)("div", {
      className: o()(_.boostContainer, {
        [_.boostContainerActive]: t
      }),
      children: (0, i.jsx)(d.Z, {
        size: "sm",
        className: _.boost,
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
    className: _.perkRowContainer,
    children: null === (t = c.C[r]) || void 0 === t ? void 0 : null === (n = t.perks) || void 0 === n ? void 0 : n.map((e, n) => (0, i.jsxs)("div", {
      className: _.perkRow,
      children: [(0, i.jsx)(e.icon, {
        color: l.TVs.colors.TEXT_MUTED,
        size: "sm"
      }), (0, i.jsx)(a.xv, {
        className: _.perkText,
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
    c = null != (0, u.Z)(t, o),
    d = null != (0, u.Z)(t, l),
    [h, g] = r.useState(void 0);
  return (0, v.KT)(h), n = 0 === s ? "start" : null == l ? "end" : "middle", (0, i.jsxs)(x.Z, {
    guildId: t,
    powerup: o,
    className: _.card,
    children: [(0, i.jsx)(b, {
      position: n,
      active: c,
      nextActive: d
    }), (0, i.jsxs)("div", {
      className: p.contentContainer,
      children: [(0, i.jsx)(a.X6, {
        variant: "heading-md/bold",
        children: o.title
      }), (0, i.jsx)(j, {
        index: s
      }), (0, i.jsx)(x.Y, {
        className: _.footer,
        guildId: t,
        powerup: o
      })]
    }), (0, i.jsx)("div", {
      className: p.buttonContainer,
      children: (0, i.jsx)(m.Z, {
        guildId: t,
        powerup: o,
        onError: g
      })
    })]
  })
}