/** Chunk was on 44799 **/
t.d(n, {
  ZP: () => f
}), t(47120);
var r = t(200651),
  i = t(192379),
  o = t(120356),
  s = t.n(o),
  a = t(793030),
  l = t(481060),
  c = t(808189),
  d = t(413335),
  u = t(690786),
  m = t(838968),
  x = t(660397),
  p = t(279604),
  v = t(981631),
  _ = t(296260),
  b = t(388032),
  j = t(610881),
  g = t(709435);

function Z(e) {
  let n, {
    active: t,
    nextActive: i,
    position: o
  } = e;
  return n = t && !1 !== i ? "full" : t && !1 === i ? "half" : "none", (0, r.jsxs)("div", {
    className: j.progressContainer,
    children: [(0, r.jsx)("div", {
      className: s()(j.progress, j[o], j[n])
    }), (0, r.jsx)("div", {
      className: s()(j.boostContainer, {
        [j.boostContainerActive]: t
      }),
      children: (0, r.jsx)(d.Z, {
        size: "sm",
        className: j.boost,
        fill: "white"
      })
    })]
  })
}

function h(e) {
  let {
    index: n
  } = e, t = i.useMemo(() => {
    let e = c.C[n];
    if (null == e) return [];
    let t = e.tier === v.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
    return null == t ? void 0 : t.map((e, t) => (0, r.jsxs)("div", {
      className: j.perkRow,
      children: [(0, r.jsx)(e.icon, {
        color: l.TVs.colors.TEXT_MUTED,
        size: "sm"
      }), (0, r.jsx)(a.xv, {
        className: j.perkText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, "perk-".concat(n, "-").concat(t)))
  }, [n]);
  return (0, r.jsxs)("div", {
    className: j.perkRowContainer,
    children: [t, (0, r.jsx)("div", {
      className: j.perkRow,
      children: (0, r.jsx)(a.xv, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: b.NW.string(_.Z.nIj3LS)
      })
    })]
  })
}

function f(e) {
  let n, {
      guildId: t,
      index: o,
      powerup: s,
      nextPowerup: l
    } = e,
    c = null != (0, u.Z)(t, s),
    d = null != (0, u.Z)(t, l),
    [v, _] = i.useState(void 0);
  return (0, p.KT)(v), n = 0 === o ? "start" : null == l ? "end" : "middle", (0, r.jsxs)(m.Z, {
    guildId: t,
    powerup: s,
    className: j.card,
    children: [(0, r.jsx)(Z, {
      position: n,
      active: c,
      nextActive: d
    }), (0, r.jsxs)("div", {
      className: g.contentContainer,
      children: [(0, r.jsx)(a.X6, {
        variant: "heading-md/bold",
        children: s.title
      }), (0, r.jsx)(h, {
        index: o
      }), (0, r.jsx)(m.Y, {
        className: j.footer,
        guildId: t,
        powerup: s
      })]
    }), (0, r.jsx)("div", {
      className: g.buttonContainer,
      children: (0, r.jsx)(x.ZP, {
        guildId: t,
        powerup: s,
        onError: _
      })
    })]
  })
}