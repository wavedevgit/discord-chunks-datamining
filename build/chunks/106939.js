/** Chunk was on 624 (6327fcf0ec798877.js) **/
n.d(t, {
  M: () => z,
  Z: () => Y
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(873546),
  o = n(286379),
  c = n(399606),
  d = n(704215),
  u = n(481060),
  m = n(150063),
  g = n(493773),
  p = n(758119),
  h = n(100527),
  f = n(906732),
  b = n(252618),
  N = n(313201),
  x = n(605236),
  _ = n(984370),
  E = n(797614),
  j = n(108427),
  C = n(210887),
  O = n(695346),
  v = n(594174),
  S = n(626135),
  T = n(260722),
  I = n(914788),
  y = n(841409),
  A = n(652262),
  P = n(880257),
  R = n(631885),
  D = n(830746),
  Z = n(731934),
  w = n(521450),
  k = n(292352),
  W = n(981631),
  L = n(723359),
  B = n(921944),
  M = n(388032),
  U = n(591802);
let V = {
    [k.dG.REQUESTS]: () => (0, r.jsx)(Z.Z, {}),
    [k.dG.ACTIVITY]: () => (0, r.jsx)(D.Z, {}),
    [k.dG.SETTINGS]: () => (0, r.jsx)(w.Z, {})
  },
  G = {
    [k.dG.REQUESTS]: () => (0, r.jsx)(Z.Z, {}),
    [k.dG.ACTIVITY]: () => (0, r.jsx)(D.Z, {})
  };

function F(e) {
  let {
    section: t,
    handleItemSelect: n
  } = e, i = (0, R.gU)(), s = (0, P.Z)();
  return (0, r.jsxs)(u.njP, {
    className: U.settingsTabBar,
    "aria-label": M.NW.string(M.t.RZqaJi),
    selectedItem: t,
    type: "top",
    look: "brand",
    onItemSelect: n,
    children: [(0, r.jsx)(u.njP.Item, {
      className: U.settingsTabBarItem,
      id: k.dG.ACTIVITY,
      children: M.NW.string(M.t.bdBmq6)
    }), (0, r.jsxs)(u.njP.Item, {
      className: U.settingsTabBarItem,
      id: k.dG.REQUESTS,
      "aria-label": M.NW.string(M.t["gVWG+/"]),
      children: [M.NW.string(M.t["gVWG+/"]), i > 0 ? (0, r.jsx)(u.mAB, {
        className: U.badge,
        count: i
      }) : null]
    }), s ? (0, r.jsx)(u.njP.Item, {
      className: U.settingsTabBarItem,
      id: k.dG.SETTINGS,
      children: M.NW.string(M.t["3D5yo6"])
    }) : null]
  })
}

function H(e) {
  let {
    theme: t,
    section: n,
    handleItemSelect: i
  } = e, s = (0, N.Dt)(), o = (0, R.gU)();
  return (0, r.jsx)(u.f6W, {
    theme: t,
    children: e => (0, r.jsxs)(_.Z, {
      className: a()(e, U.sidebarTabBar),
      scrollable: l.tq,
      role: "navigation",
      "aria-labelledby": s,
      toolbar: !0,
      children: [(0, r.jsx)(_.Z.Icon, {
        icon: u.BFJ,
        "aria-hidden": !0
      }), (0, r.jsx)(_.Z.Title, {
        id: s,
        children: M.NW.string(M.t.RZqaJi)
      }), (0, r.jsx)(_.Z.Divider, {}), (0, r.jsxs)(u.njP, {
        "aria-label": M.NW.string(M.t.RZqaJi),
        selectedItem: n,
        type: "top-pill",
        onItemSelect: i,
        className: U.__invalid_tabBar,
        children: [(0, r.jsx)(u.njP.Item, {
          id: k.dG.ACTIVITY,
          className: U.item,
          children: M.NW.string(M.t.bdBmq6)
        }), (0, r.jsxs)(u.njP.Item, {
          id: k.dG.REQUESTS,
          className: U.item,
          "aria-label": M.NW.string(M.t["gVWG+/"]),
          children: [M.NW.string(M.t["gVWG+/"]), o > 0 ? (0, r.jsx)(u.mAB, {
            className: U.badge,
            count: o
          }) : null]
        })]
      })]
    })
  })
}

function z() {
  let e = (0, P.Z)(),
    t = (0, R.M8)(),
    n = (0, x.wE)(d.z.FAMILY_CENTER_NEW_BADGE),
    s = (0, c.e7)([I.Z], () => I.Z.getIsInitialized()),
    l = (0, A.M)(),
    {
      selectedTab: m,
      handleTabChange: h
    } = (0, y.Z)(),
    f = (0, N.Dt)(),
    _ = v.default.getCurrentUser(),
    C = null != e,
    O = s && null != _ && !C;
  (0, g.ZP)(() => {
    (0, j.e)("family-center"), T.ZP.initialPageLoad(), n || (0, x.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: B.L.AUTO,
      forceTrack: !0
    })
  });
  let D = {
      isConsideredAdult: e,
      numOfAcceptedRequests: t,
      selectedTab: m,
      selectedTeenId: l
    },
    Z = i.useRef(D);
  return (i.useEffect(() => {
    Z.current = D
  }), i.useEffect(() => {
    if (s && C) {
      let {
        isConsideredAdult: e,
        numOfAcceptedRequests: t,
        selectedTab: n,
        selectedTeenId: r
      } = Z.current;
      S.default.track(W.rMx.FAMILY_CENTER_VIEWED, {
        is_considered_adult: e,
        num_of_accepted_links: t,
        selected_teen_id: r,
        initial_page: k.QH[n],
        source: k._6[k.Mu.SIDENAV]
      }), E.Z.increment({
        name: o.V.FAMILY_CENTER_VIEW
      })
    }
  }, [s, C]), i.useEffect(() => {
    O && (0, p.mN)(L.L0.FAMILY_CENTER)
  }, [O]), O) ? null : (0, r.jsxs)("main", {
    className: a()(U.container),
    "aria-label": M.NW.string(M.t.RZqaJi),
    children: [(0, r.jsx)(b.yY, {
      location: M.NW.string(M.t.RZqaJi)
    }), (0, r.jsx)(F, {
      section: m,
      handleItemSelect: e => {
        h(e)
      }
    }), (0, r.jsx)(u.njP.Panel, {
      id: m,
      "aria-labelledby": f,
      className: U.contentPanel,
      children: (0, r.jsx)("div", {
        children: V[m]()
      })
    })]
  })
}

function Y() {
  let {
    analyticsLocations: e
  } = (0, f.ZP)(h.Z.FAMILY_CENTER), t = (0, P.Z)(), n = (0, R.M8)(), s = (0, x.wE)(d.z.FAMILY_CENTER_NEW_BADGE), l = (0, c.e7)([I.Z], () => I.Z.getIsInitialized()), _ = (0, A.M)(), D = (0, c.e7)([C.Z], () => C.Z.theme), {
    selectedTab: Z,
    handleTabChange: w
  } = (0, y.Z)(), V = (0, N.Dt)(), F = v.default.getCurrentUser(), z = null != t, Y = l && null != F && !z;
  (0, g.ZP)(() => {
    m.Y(W.Z5c.FAMILY_CENTER), (0, j.e)("family-center"), !I.Z.isLoading() && I.Z.canRefetch() && T.ZP.initialPageLoad(), s || (0, x.EW)(d.z.FAMILY_CENTER_NEW_BADGE, {
      dismissAction: B.L.AUTO,
      forceTrack: !0
    })
  });
  let K = {
      isConsideredAdult: t,
      numOfAcceptedRequests: n,
      selectedTab: Z,
      selectedTeenId: _
    },
    q = i.useRef(K);
  if (i.useEffect(() => {
      q.current = K
    }), i.useEffect(() => {
      if (l && z) {
        let {
          isConsideredAdult: e,
          numOfAcceptedRequests: t,
          selectedTab: n,
          selectedTeenId: r
        } = q.current;
        S.default.track(W.rMx.FAMILY_CENTER_VIEWED, {
          is_considered_adult: e,
          num_of_accepted_links: t,
          selected_teen_id: r,
          initial_page: k.QH[n],
          source: k._6[k.Mu.SIDENAV]
        }), E.Z.increment({
          name: o.V.FAMILY_CENTER_VIEW
        })
      }
    }, [l, z]), i.useEffect(() => {
      let e = O.Ex.getSetting();
      l && t && void 0 === e && O.Ex.updateSetting(!0)
    }, [l, t]), i.useEffect(() => {
      Y && (0, p.mN)(L.L0.FAMILY_CENTER)
    }, [Y]), Y) return null;
  let X = Z !== k.dG.SETTINGS ? Z : k.dG.ACTIVITY,
    J = G[X];
  return (0, r.jsx)(f.Gt, {
    value: e,
    children: (0, r.jsxs)("main", {
      className: a()(U.container, U.containerSidenav),
      "aria-label": M.NW.string(M.t.RZqaJi),
      children: [(0, r.jsx)(b.yY, {
        location: M.NW.string(M.t.RZqaJi)
      }), (0, r.jsx)(H, {
        theme: D,
        section: X,
        handleItemSelect: e => {
          w(e)
        }
      }), (0, r.jsx)(u.njP.Panel, {
        id: X,
        "aria-labelledby": V,
        className: U.contentPanel,
        children: (0, r.jsx)(u.Ttm, {
          children: (0, r.jsx)("div", {
            className: U.sideNavContent,
            children: J()
          })
        })
      })]
    })
  })
}