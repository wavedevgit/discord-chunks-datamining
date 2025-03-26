/** Chunk was on 81818 **/
t.d(n, {
  Z: () => h
}), t(47120);
var o = t(200651),
  r = t(192379),
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
  y = t(428927),
  v = t(228168),
  g = t(388032),
  m = t(658266),
  I = t(363899);

function j(e) {
  let {
    section: n,
    subsection: t,
    user: r,
    currentUser: i,
    displayProfile: l,
    guildId: s,
    onClose: c
  } = e;
  return n === v.oh.ACTIVITY ? (0, o.jsx)(f.Z, {
    user: r,
    currentUser: i,
    displayProfile: l,
    guildId: s,
    onClose: c
  }) : n === v.oh.MUTUAL_FRIENDS ? (0, o.jsx)(b.Z, {
    user: r,
    onClose: c
  }) : n === v.oh.MUTUAL_GUILDS ? (0, o.jsx)(y.Z, {
    user: r,
    onClose: c
  }) : n === v.oh.BOT_DATA_ACCESS ? (0, o.jsx)(d.Z, {
    user: r
  }) : n === v.oh.BOT_INFO ? (0, o.jsx)(u.Z, {
    user: r,
    currentUser: i,
    displayProfile: l,
    subsection: t,
    onClose: c
  }) : (0, o.jsx)(p.Z, {
    user: r,
    currentUser: i,
    displayProfile: l,
    subsection: t,
    onClose: c
  })
}

function h(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: b,
    items: y,
    initialSection: h = v.oh.USER_INFO,
    initialSubsection: _,
    onClose: x
  } = e, {
    trackUserProfileAction: O
  } = (0, a.KZ)(), Z = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: P,
    subsection: N
  }, E] = r.useState({
    section: null !== (d = null === (n = y.find(e => {
      let {
        section: n
      } = e;
      return n === h
    })) || void 0 === n ? void 0 : n.section) && void 0 !== d ? d : null === (t = y[0]) || void 0 === t ? void 0 : t.section,
    subsection: _
  });
  r.useEffect(() => {
    null == y.find(e => e.section === P) && E({
      section: y[0].section,
      subsection: void 0
    })
  }, [y, P]);
  let S = r.useCallback(e => {
    O({
      action: "PRESS_SECTION",
      section: e
    }), E({
      section: e,
      subsection: void 0
    })
  }, [O, E]);
  return Z ? (0, o.jsx)("div", {
    className: I.container,
    children: (0, o.jsxs)("div", {
      className: m.empty,
      children: [(0, o.jsx)("div", {
        className: m.emptyIconStreamerMode
      }), (0, o.jsx)("div", {
        className: m.emptyText,
        children: g.NW.string(g.t.Br1ls7)
      })]
    })
  }) : (0, o.jsxs)("div", {
    className: I.container,
    children: [(0, o.jsx)(l.n, {
      className: I.tabBar,
      type: "top",
      selectedItem: P,
      onItemSelect: S,
      children: y.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, o.jsx)(l.n.Item, {
          className: I.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, o.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, o.jsx)(j, {
      items: y,
      section: P,
      subsection: N,
      user: u,
      currentUser: f,
      displayProfile: p,
      guildId: b,
      onClose: x
    })]
  })
}