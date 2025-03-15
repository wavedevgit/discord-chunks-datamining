/** Chunk was on 89839 **/
a.d(t, {
  default: () => R
});
var n = a(200651);
a(192379);
var r = a(120356),
  i = a.n(r),
  s = a(793030),
  l = a(481060),
  d = a(100527),
  o = a(906732),
  c = a(313201),
  u = a(703656),
  N = a(594174),
  _ = a(111361),
  m = a(409100),
  T = a(943180),
  b = a(553896),
  E = a(848572),
  v = a(787528),
  g = a(474936),
  x = a(981631),
  M = a(388032),
  h = a(779239);
let R = e => {
  var t, a;
  let {
    transitionState: r,
    onClose: R,
    displayProfile: f
  } = e, {
    analyticsLocations: I
  } = (0, o.ZP)(d.Z.TIERED_TENURE_BADGES_MODAL), O = (0, c.Dt)(), S = (0, E.j_)(), p = (0, E.SI)(null == f ? void 0 : f.userId), P = (0, E.Rw)(), j = N.default.getCurrentUser(), U = null !== (a = (0, E.a1)(null !== (t = null == f ? void 0 : f.userId) && void 0 !== t ? t : null == j ? void 0 : j.id)) && void 0 !== a ? a : new Date, y = (0, _.yd)(null == j ? void 0 : j.premiumType, g.p9.TIER_2), {
    isBadgeVersion2: B
  } = (0, T.D)(), H = S.map(e => {
    let {
      id: t,
      nameUnformatted: a,
      tenureReqNumMonths: r
    } = e, l = M.NW.string(a), d = (0, v.J)(t), o = (0, b.q)(t, r), c = null == f, u = c && (null == P ? void 0 : P.id) === t, N = !c && (null == p ? void 0 : p.id) === t, _ = u && (null == P ? void 0 : P.status) === E.Vq.EARNED, m = u && (null == P ? void 0 : P.status) === E.Vq.UPCOMING, T = (N || _) && B, g = m && B;
    return (0, n.jsxs)("div", {
      className: i()(h.badge, {
        [h.badgeV2]: B,
        [h.earnedBadge]: T || g
      }),
      children: [(0, n.jsx)("img", {
        src: d,
        alt: l,
        className: h.badgeImage
      }), (0, n.jsxs)("div", {
        className: i()(h.badgeText, {
          [h.badgeTextV2]: B
        }),
        children: [(0, n.jsx)(s.xv, {
          variant: "text-md/semibold",
          className: h.badgeName,
          children: l
        }), (0, n.jsx)(s.xv, {
          variant: "text-xs/normal",
          children: o
        }), T && (0, n.jsx)(s.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: h.earnedBadgeSubSince,
          children: M.NW.formatToPlainString(M.t.Hu4jfn, {
            date: U
          })
        }), g && (0, n.jsx)(s.xv, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: h.earnedBadgeSubSince,
          children: M.NW.formatToPlainString(M.t.PPL1Ii, {
            days: null == P ? void 0 : P.daysLeft
          })
        })]
      })]
    }, t)
  }), w = () => {
    (0, u.uL)(x.Z5c.APPLICATION_STORE, {
      source: d.Z.TIERED_TENURE_BADGES_MODAL,
      sourceLocationStack: I
    }), null == R || R()
  }, W = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.xv, {
      variant: "display-md",
      className: h.header,
      children: M.NW.string(M.t["rmUN7+"])
    }), (0, n.jsx)(s.xv, {
      variant: "text-md/medium",
      className: h.subHeader,
      children: M.NW.string(M.t.OI50am)
    }), (0, n.jsx)("div", {
      className: h.badgeList,
      children: H
    })]
  }), A = y ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.xv, {
      variant: "display-md",
      className: h.header,
      children: M.NW.string(M.t.Og62j4)
    }), (0, n.jsx)(s.xv, {
      variant: "text-md/medium",
      className: h.subHeader,
      children: M.NW.string(M.t["IdAP9/"])
    }), (0, n.jsx)("div", {
      className: h.badgeList,
      children: H
    }), null != f && f.userId !== (null == j ? void 0 : j.id) && (0, n.jsx)(l.gtL, {
      className: h.learnMoreButton,
      onClick: w,
      children: M.NW.string(M.t.hvVgAQ)
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.xv, {
      variant: "display-md",
      className: h.header,
      children: M.NW.string(M.t.RtGeFR)
    }), (0, n.jsx)(s.xv, {
      variant: "text-md/medium",
      className: h.subHeader,
      children: M.NW.format(M.t.ffatnZ, {
        onClick: w
      })
    }), (0, n.jsx)("div", {
      className: h.badgeList,
      children: H
    }), (0, n.jsx)(m.Z, {
      className: h.subscribeButton,
      premiumModalAnalyticsLocation: {
        page: x.ZY5.TIERED_TENURE_BADGES_MODAL
      },
      subscribeButtonText: M.NW.string(M.t.JST6jo),
      subscriptionTier: g.Si.TIER_2,
      showGradient: !0
    })]
  });
  return (0, n.jsxs)(l.Y0X, {
    transitionState: r,
    "aria-labelledby": O,
    className: i()(h.container, "theme-dark"),
    children: [(0, n.jsx)(l.olH, {
      onClick: R,
      className: h.closeButton
    }), (0, n.jsx)(l.hzk, {
      className: h.content,
      children: B ? A : W
    })]
  })
}