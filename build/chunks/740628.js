/** Chunk was on 88235 **/
n.d(t, {
  Z: () => x
}), n(388685);
var r = n(200651),
  l = n(192379),
  i = n(442837),
  o = n(706898),
  s = n(481060),
  a = n(246946),
  c = n(785717),
  d = n(786366),
  u = n(323090),
  f = n(116906),
  p = n(384816),
  h = n(389190),
  j = n(428927),
  g = n(228168),
  m = n(388032),
  v = n(301150),
  b = n(923243);

function O(e) {
  let {
    section: t,
    subsection: n,
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: s,
    channelId: a,
    onClose: c
  } = e;
  return t === g.oh.ACTIVITY ? (0, r.jsx)(f.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: s,
    onClose: c
  }) : t === g.oh.MUTUAL_FRIENDS ? (0, r.jsx)(h.Z, {
    user: l,
    guildId: s,
    channelId: a,
    onClose: c
  }) : t === g.oh.MUTUAL_GUILDS ? (0, r.jsx)(j.Z, {
    user: l,
    onClose: c
  }) : t === g.oh.BOT_DATA_ACCESS ? (0, r.jsx)(d.Z, {
    user: l
  }) : t === g.oh.BOT_INFO ? (0, r.jsx)(u.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    guildId: s,
    subsection: n,
    onClose: c
  }) : (0, r.jsx)(p.Z, {
    user: l,
    currentUser: i,
    displayProfile: o,
    subsection: n,
    onClose: c
  })
}

function x(e) {
  var t, n, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: h,
    items: j,
    initialSection: x = g.oh.USER_INFO,
    initialSubsection: Z,
    onClose: y
  } = e, {
    trackUserProfileAction: I
  } = (0, c.KZ)(), P = (0, i.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: E,
    subsection: T
  }, N] = l.useState({
    section: null != (d = null == (t = j.find(e => {
      let {
        section: t
      } = e;
      return t === x
    })) ? void 0 : t.section) ? d : null == (n = j[0]) ? void 0 : n.section,
    subsection: Z
  });
  l.useEffect(() => {
    null == j.find(e => e.section === E) && N({
      section: j[0].section,
      subsection: void 0
    })
  }, [j, E]);
  let S = l.useCallback(e => {
    I({
      action: "PRESS_SECTION",
      section: e
    }), N({
      section: e,
      subsection: void 0
    })
  }, [I, N]);
  return P ? (0, r.jsx)("div", {
    className: b.container,
    children: (0, r.jsxs)("div", {
      className: v.empty,
      children: [(0, r.jsx)("div", {
        className: v.emptyIconStreamerMode
      }), (0, r.jsx)("div", {
        className: v.emptyText,
        children: m.intl.string(m.t.Br1ls7)
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: b.container,
    children: [(0, r.jsx)(o.n, {
      className: b.tabBar,
      type: "top",
      selectedItem: E,
      onItemSelect: S,
      children: j.map(e => {
        let {
          section: t,
          text: n
        } = e;
        return (0, r.jsx)(o.n.Item, {
          className: b.tabBarItem,
          id: t,
          "aria-label": n,
          children: (0, r.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: n
          })
        }, t)
      })
    }), (0, r.jsx)(O, {
      items: j,
      section: E,
      subsection: T,
      user: u,
      currentUser: f,
      displayProfile: p,
      guildId: h,
      onClose: y
    })]
  })
}