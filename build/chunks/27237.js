/** Chunk was on 44799 **/
t.d(n, {
  ZP: () => Z
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
  p = t(838968),
  m = t(262212),
  x = t(279604),
  v = t(981631),
  _ = t(296260),
  f = t(388032),
  g = t(713234),
  b = t(728214);

function j(e) {
  let n, {
    active: t,
    nextActive: i,
    position: o
  } = e;
  return n = t && !1 !== i ? "full" : t && !1 === i ? "half" : "none", (0, r.jsxs)("div", {
    className: g.progressContainer,
    children: [(0, r.jsx)("div", {
      className: s()(g.progress, g[o], g[n])
    }), (0, r.jsx)("div", {
      className: s()(g.boostContainer, {
        [g.boostContainerActive]: t
      }),
      children: (0, r.jsx)(d.Z, {
        size: "sm",
        className: g.boost,
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
      className: g.perkRow,
      children: [(0, r.jsx)(e.icon, {
        color: l.TVs.colors.TEXT_MUTED,
        size: "sm"
      }), (0, r.jsx)(a.xv, {
        className: g.perkText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: e.getCopy()
      })]
    }, "perk-".concat(n, "-").concat(t)))
  }, [n]);
  return (0, r.jsxs)("div", {
    className: g.perkRowContainer,
    children: [t, (0, r.jsx)("div", {
      className: g.perkRow,
      children: (0, r.jsx)(a.xv, {
        color: "text-muted",
        variant: "text-sm/medium",
        children: f.NW.string(_.Z.nIj3LS)
      })
    })]
  })
}

function Z(e) {
  let n, {
      guildId: t,
      index: o,
      powerup: s,
      nextPowerup: l
    } = e,
    c = null != (0, u.Z)(t, s),
    d = null != (0, u.Z)(t, l),
    [v, _] = i.useState(void 0);
  return (0, x.KT)(v), n = 0 === o ? "start" : null == l ? "end" : "middle", (0, r.jsxs)(p.Z, {
    guildId: t,
    powerup: s,
    className: g.card,
    children: [(0, r.jsx)(j, {
      position: n,
      active: c,
      nextActive: d
    }), (0, r.jsxs)("div", {
      className: b.contentContainer,
      children: [(0, r.jsx)(a.X6, {
        variant: "heading-md/bold",
        children: s.title
      }), (0, r.jsx)(h, {
        index: o
      }), (0, r.jsx)(p.u, {
        className: g.footer,
        guildId: t,
        powerup: s
      })]
    }), (0, r.jsx)("div", {
      className: b.buttonContainer,
      children: (0, r.jsx)(m.ZP, {
        guildId: t,
        powerup: s,
        onError: _
      })
    })]
  })
}