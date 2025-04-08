/** Chunk was on 44799 **/
t.d(n, {
  ZP: () => Z
}), t(388685);
var r = t(200651),
  o = t(192379),
  s = t(120356),
  i = t.n(s),
  a = t(793030),
  l = t(481060),
  c = t(808189),
  d = t(413335),
  u = t(690786),
  p = t(838968),
  m = t(262212),
  x = t(279604),
  _ = t(981631),
  v = t(680278),
  g = t(388032),
  f = t(568413),
  b = t(117172);

function j(e) {
  let n, {
    active: t,
    nextActive: o,
    position: s
  } = e;
  return n = t && !1 !== o ? "full" : t && !1 === o ? "half" : "none", (0, r.jsxs)("div", {
    className: f.progressContainer,
    children: [(0, r.jsx)("div", {
      className: i()(f.progress, f[s], f[n])
    }), (0, r.jsx)("div", {
      className: i()(f.boostContainer, {
        [f.boostContainerActive]: t
      }),
      children: (0, r.jsx)(d.Z, {
        size: "sm",
        className: f.boost,
        fill: "white"
      })
    })]
  })
}

function h(e) {
  let {
    index: n
  } = e, t = o.useMemo(() => {
    let e = c.C[n];
    if (null == e) return [];
    let t = e.tier === _.Eu4.TIER_3 ? e.perks.slice(0, -1) : e.perks;
    return null == t ? void 0 : t.map((e, t) => (0, r.jsxs)("div", {
      className: f.perkRow,
      children: [(0, r.jsx)(e.icon, {
        color: l.TVs.colors.TEXT_MUTED,
        size: "sm"
      }), (0, r.jsx)(a.xv, {
        className: f.perkText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, "perk-".concat(n, "-").concat(t)))
  }, [n]);
  return (0, r.jsxs)("div", {
    className: f.perkRowContainer,
    children: [t, (0, r.jsx)("div", {
      className: f.perkRow,
      children: (0, r.jsx)(a.xv, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: g.NW.string(v.Z.nIj3LS)
      })
    })]
  })
}

function Z(e) {
  let n, {
      guildId: t,
      index: s,
      powerup: i,
      nextPowerup: l
    } = e,
    c = null != (0, u.Z)(t, i),
    d = null != (0, u.Z)(t, l),
    [_, v] = o.useState(void 0);
  return (0, x.KT)(_), n = 0 === s ? "start" : null == l ? "end" : "middle", (0, r.jsxs)(p.Z, {
    guildId: t,
    powerup: i,
    className: f.card,
    children: [(0, r.jsx)(j, {
      position: n,
      active: c,
      nextActive: d
    }), (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, r.jsx)(a.X6, {
        variant: "heading-md/bold",
        children: i.title
      }), (0, r.jsx)(h, {
        index: s
      }), (0, r.jsx)(p.u, {
        className: f.footer,
        guildId: t,
        powerup: i
      })]
    }), (0, r.jsx)("div", {
      className: b.buttonContainer,
      children: (0, r.jsx)(m.ZP, {
        guildId: t,
        powerup: i,
        onError: v
      })
    })]
  })
}