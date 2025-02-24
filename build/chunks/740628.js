/** Chunk was on 73049 (5df71b25786cf661.js) **/
t.d(n, {
  Z: () => v
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
  m = t(389190),
  I = t(428927),
  b = t(228168),
  g = t(388032),
  y = t(865152),
  j = t(410214);

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
  return n === b.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: o,
    currentUser: i,
    displayProfile: l,
    guildId: s,
    onClose: c
  }) : n === b.oh.MUTUAL_FRIENDS ? (0, r.jsx)(m.Z, {
    user: o,
    onClose: c
  }) : n === b.oh.MUTUAL_GUILDS ? (0, r.jsx)(I.Z, {
    user: o,
    onClose: c
  }) : n === b.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: o
  }) : n === b.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
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

function v(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: m,
    items: I,
    initialSection: v = b.oh.USER_INFO,
    initialSubsection: x,
    onClose: O
  } = e, {
    trackUserProfileAction: _
  } = (0, a.KZ)(), Z = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation), [{
    section: N,
    subsection: P
  }, E] = o.useState({
    section: null !== (d = null === (n = I.find(e => {
      let {
        section: n
      } = e;
      return n === v
    })) || void 0 === n ? void 0 : n.section) && void 0 !== d ? d : null === (t = I[0]) || void 0 === t ? void 0 : t.section,
    subsection: x
  });
  o.useEffect(() => {
    null == I.find(e => e.section === N) && E({
      section: I[0].section,
      subsection: void 0
    })
  }, [I, N]);
  let S = o.useCallback(e => {
    _({
      action: "PRESS_SECTION",
      section: e
    }), E({
      section: e,
      subsection: void 0
    })
  }, [_, E]);
  return Z ? (0, r.jsx)("div", {
    className: j.container,
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
    className: j.container,
    children: [(0, r.jsx)(l.n, {
      className: j.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: S,
      children: I.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, r.jsx)(l.n.Item, {
          className: j.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, r.jsx)(h, {
      items: I,
      section: N,
      subsection: P,
      user: u,
      currentUser: f,
      displayProfile: p,
      guildId: m,
      onClose: O
    })]
  })
}