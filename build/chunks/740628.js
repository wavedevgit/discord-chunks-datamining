/** Chunk was on 81818 **/
t.d(n, {
  Z: () => j
}), t(47120);
var r = t(200651),
  o = t(192379),
  i = t(442837),
  l = t(706898),
  s = t(481060),
  c = t(246946),
  a = t(785717),
  d = t(786366),
  u = t(323090),
  f = t(296391),
  p = t(384816),
  b = t(389190),
  m = t(428927),
  v = t(228168),
  g = t(388032),
  y = t(658266),
  I = t(363899);

function h(e) {
  let {
    section: n,
    subsection: t,
    user: o,
    currentUser: i,
    displayProfile: l,
    guildId: s,
    onClose: c
  } = e;
  return n === v.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: o,
    currentUser: i,
    displayProfile: l,
    guildId: s,
    onClose: c
  }) : n === v.oh.MUTUAL_FRIENDS ? (0, r.jsx)(b.Z, {
    user: o,
    onClose: c
  }) : n === v.oh.MUTUAL_GUILDS ? (0, r.jsx)(m.Z, {
    user: o,
    onClose: c
  }) : n === v.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: o
  }) : n === v.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: o,
    currentUser: i,
    displayProfile: l,
    subsection: t,
    onClose: c
  }) : (0, r.jsx)(p.Z, {
    user: o,
    currentUser: i,
    displayProfile: l,
    subsection: t,
    onClose: c
  })
}

function j(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: b,
    items: m,
    initialSection: j = v.oh.USER_INFO,
    initialSubsection: x,
    onClose: _
  } = e, {
    trackUserProfileAction: O
  } = (0, a.KZ)(), Z = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: N,
    subsection: P
  }, E] = o.useState({
    section: null !== (d = null === (n = m.find(e => {
      let {
        section: n
      } = e;
      return n === j
    })) || void 0 === n ? void 0 : n.section) && void 0 !== d ? d : null === (t = m[0]) || void 0 === t ? void 0 : t.section,
    subsection: x
  });
  o.useEffect(() => {
    null == m.find(e => e.section === N) && E({
      section: m[0].section,
      subsection: void 0
    })
  }, [m, N]);
  let S = o.useCallback(e => {
    O({
      action: "PRESS_SECTION",
      section: e
    }), E({
      section: e,
      subsection: void 0
    })
  }, [O, E]);
  return Z ? (0, r.jsx)("div", {
    className: I.container,
    children: (0, r.jsxs)("div", {
      className: y.empty,
      children: [(0, r.jsx)("div", {
        className: y.emptyIconStreamerMode
      }), (0, r.jsx)("div", {
        className: y.emptyText,
        children: g.NW.string(g.t.Br1ls7)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: I.container,
    children: [(0, r.jsx)(l.n, {
      className: I.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: S,
      children: m.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, r.jsx)(l.n.Item, {
          className: I.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, r.jsx)(h, {
      items: m,
      section: N,
      subsection: P,
      user: u,
      currentUser: f,
      displayProfile: p,
      guildId: b,
      onClose: _
    })]
  })
}