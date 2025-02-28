/** Chunk was on 1272 **/
n.d(t, {
  Z: () => x
}), n(610138), n(216116), n(78328), n(815648), n(47120), n(301563), n(757143);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(512969),
  s = n(873546),
  c = n(442837),
  u = n(481060),
  d = n(570140),
  p = n(150063),
  h = n(529103),
  f = n(252618),
  g = n(313201),
  m = n(540059),
  b = n(5254),
  _ = n(984370),
  E = n(518311),
  O = n(199104),
  N = n(108427),
  v = n(210887),
  y = n(974042),
  I = n(849862),
  C = n(666286),
  S = n(596957),
  T = n(981631),
  P = n(723359),
  A = n(388032),
  j = n(857391);

function Z() {
  return (0, r.jsx)("div", {
    className: j.inviteToolbar,
    children: (0, r.jsx)(E.Z, {
      tooltip: A.NW.string(A.t.HfOgAw)
    })
  })
}
let x = function(e) {
  let {
    initialSection: t
  } = e, n = (0, a.TH)(), l = (0, a.k6)(), E = (0, m.Q3)("PeoplePage");
  i.useEffect(() => {
    "true" === new URLSearchParams(n.search).get("confirm-age") && d.Z.dispatch({
      type: "AGE_GATE_MODAL_OPEN",
      source: P.L0.DEEP_LINK_PROMPT
    }).then(() => {
      l.replace(T.Z5c.ME)
    })
  }, [l, n]), i.useEffect(() => {
    p.Y(T.Z5c.FRIENDS), (0, N.e)("friends")
  }, []);
  let x = (0, c.e7)([v.Z], () => v.Z.theme),
    L = (0, I.If)(),
    {
      section: w,
      rows: R
    } = (0, c.cj)([y.ZP], () => y.ZP.getState()),
    D = (0, c.e7)([b.Z], () => b.Z.getSuggestionCount()),
    k = i.useMemo(() => R.getRelationshipCounts(), [R]);
  i.useEffect(() => {
    null != t && h.Z.setInitialSection(t), 0 === k[T.OGo.FRIEND] && 0 === k[T.OGo.PENDING_INCOMING] && 0 === k[T.OGo.PENDING_OUTGOING] && 0 === k[T.OGo.BLOCKED] && h.Z.setSection(T.pJs.ADD_FRIEND)
  }, [t, k]);
  let M = e => {
      h.Z.setSection(e)
    },
    U = (0, g.Dt)(),
    G = (0, g.Dt)(),
    W = [{
      id: T.pJs.ONLINE,
      show: !E || R.filter(T.pJs.ONLINE).length > 0,
      content: A.NW.string(A.t.b9w3bG),
      className: j.item
    }, {
      id: T.pJs.ALL,
      show: !E || k[T.OGo.FRIEND] > 0,
      content: A.NW.string(A.t.PfjFjY),
      className: j.item
    }, {
      id: T.pJs.PENDING,
      show: !E || R.filter(T.pJs.PENDING).length > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [A.NW.string(A.t.p6IHGB), L > 0 && (0, r.jsx)(u.mAB, {
          count: L,
          className: j.badge
        })]
      }),
      ariaLabel: A.NW.formatToPlainString(A.t.OAC0Z2, {
        count: L.toString()
      }),
      className: j.item
    }, {
      id: T.pJs.SUGGESTIONS,
      show: D > 0,
      content: (0, r.jsxs)(r.Fragment, {
        children: [A.NW.string(A.t["8rSi19"]), (0, r.jsx)(u.mAB, {
          count: D,
          className: j.badge
        })]
      }),
      ariaLabel: A.NW.formatToPlainString(A.t.AbMQp6, {
        count: D.toString()
      }),
      className: j.item
    }, {
      id: T.pJs.ADD_FRIEND,
      show: !0,
      content: (0, r.jsx)("span", {
        children: A.NW.string(A.t.j0wbEx)
      }),
      ariaLabel: A.NW.string(A.t.j0wbEx),
      className: o()(j.item, j.addFriend)
    }];
  return (0, r.jsxs)("main", {
    className: j.container,
    "aria-label": A.NW.string(A.t.TdEu5e),
    children: [(0, r.jsx)(f.yY, {
      location: A.NW.string(A.t.TdEu5e)
    }), (0, r.jsx)(u.f6W, {
      theme: x,
      children: e => (0, r.jsxs)(_.Z, {
        className: e,
        toolbar: (0, r.jsx)(Z, {}),
        scrollable: s.tq,
        role: "navigation",
        "aria-labelledby": U,
        children: [(0, r.jsx)(_.Z.Icon, {
          icon: u.iFz,
          "aria-hidden": !0
        }), (0, r.jsx)(_.Z.Title, {
          id: U,
          children: A.NW.string(A.t.TdEu5e)
        }), (0, r.jsx)(_.Z.Divider, {}), (0, r.jsx)(u.njP, {
          "aria-label": A.NW.string(A.t.TdEu5e),
          selectedItem: w,
          type: "top-pill",
          onItemSelect: M,
          className: j.tabBar,
          children: W.filter(e => e.show).map(e => (0, r.jsx)(u.njP.Item, {
            id: e.id,
            className: e.className,
            "aria-label": e.ariaLabel,
            children: e.content
          }, e.id))
        })]
      })
    }), (0, r.jsxs)("div", {
      className: j.tabBody,
      children: [(0, r.jsx)(u.njP.Panel, {
        id: w,
        className: j.peopleColumn,
        "aria-labelledby": G,
        children: w === T.pJs.ADD_FRIEND ? (0, r.jsx)(C.Z, {}) : (0, r.jsx)(S.Z, {
          titleId: G
        })
      }), (0, r.jsx)("div", {
        className: j.nowPlayingColumn,
        children: (0, r.jsx)(O.Z, {})
      })]
    })]
  })
}