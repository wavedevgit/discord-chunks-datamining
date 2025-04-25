/** Chunk was on 30514 **/
t.d(n, {
  Z: () => g
}), t(388685);
var i = t(200651),
  o = t(192379),
  l = t(442837),
  r = t(706898),
  s = t(481060),
  a = t(246946),
  c = t(785717),
  d = t(786366),
  u = t(323090),
  f = t(116906),
  p = t(384816),
  m = t(389190),
  h = t(428927),
  I = t(228168),
  x = t(388032),
  _ = t(301150),
  b = t(923243);

function v(e) {
  let {
    section: n,
    subsection: t,
    user: o,
    currentUser: l,
    displayProfile: r,
    guildId: s,
    onClose: a
  } = e;
  return n === I.oh.ACTIVITY ? (0, i.jsx)(f.Z, {
    user: o,
    currentUser: l,
    displayProfile: r,
    guildId: s,
    onClose: a
  }) : n === I.oh.MUTUAL_FRIENDS ? (0, i.jsx)(m.Z, {
    user: o,
    onClose: a
  }) : n === I.oh.MUTUAL_GUILDS ? (0, i.jsx)(h.Z, {
    user: o,
    onClose: a
  }) : n === I.oh.BOT_DATA_ACCESS ? (0, i.jsx)(d.Z, {
    user: o
  }) : n === I.oh.BOT_INFO ? (0, i.jsx)(u.Z, {
    user: o,
    currentUser: l,
    displayProfile: r,
    guildId: s,
    subsection: t,
    onClose: a
  }) : (0, i.jsx)(p.Z, {
    user: o,
    currentUser: l,
    displayProfile: r,
    subsection: t,
    onClose: a
  })
}

function g(e) {
  var n, t, d;
  let {
    user: u,
    currentUser: f,
    displayProfile: p,
    guildId: m,
    items: h,
    initialSection: g = I.oh.USER_INFO,
    initialSubsection: j,
    onClose: Z
  } = e, {
    trackUserProfileAction: y
  } = (0, c.KZ)(), A = (0, l.e7)([a.Z], () => a.Z.hidePersonalInformation), [{
    section: N,
    subsection: T
  }, O] = o.useState({
    section: null != (d = null == (n = h.find(e => {
      let {
        section: n
      } = e;
      return n === g
    })) ? void 0 : n.section) ? d : null == (t = h[0]) ? void 0 : t.section,
    subsection: j
  });
  o.useEffect(() => {
    null == h.find(e => e.section === N) && O({
      section: h[0].section,
      subsection: void 0
    })
  }, [h, N]);
  let E = o.useCallback(e => {
    y({
      action: "PRESS_SECTION",
      section: e
    }), O({
      section: e,
      subsection: void 0
    })
  }, [y, O]);
  return A ? (0, i.jsx)("div", {
    className: b.container,
    children: (0, i.jsxs)("div", {
      className: _.empty,
      children: [(0, i.jsx)("div", {
        className: _.emptyIconStreamerMode
      }), (0, i.jsx)("div", {
        className: _.emptyText,
        children: x.intl.string(x.t.Br1ls7)
      })]
    })
  }) : (0, i.jsxs)("div", {
    className: b.container,
    children: [(0, i.jsx)(r.n, {
      className: b.tabBar,
      type: "top",
      selectedItem: N,
      onItemSelect: E,
      children: h.map(e => {
        let {
          section: n,
          text: t
        } = e;
        return (0, i.jsx)(r.n.Item, {
          className: b.tabBarItem,
          id: n,
          "aria-label": t,
          children: (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: t
          })
        }, n)
      })
    }), (0, i.jsx)(v, {
      items: h,
      section: N,
      subsection: T,
      user: u,
      currentUser: f,
      displayProfile: p,
      guildId: m,
      onClose: Z
    })]
  })
}