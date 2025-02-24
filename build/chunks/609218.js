/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => I,
  p: () => S
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(355467),
  u = n(37234),
  d = n(174609),
  f = n(703656),
  p = n(626135),
  _ = n(74538),
  h = n(357355),
  m = n(639119),
  g = n(197115),
  E = n(302945),
  v = n(474936),
  b = n(981631),
  y = n(388032),
  O = n(487825),
  S = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.PARENT_CONTAINER = 1] = "PARENT_CONTAINER", e[e.TAB_PARENT_CONTAINER = 2] = "TAB_PARENT_CONTAINER", e
  }({});

function I(e) {
  let {
    containerContext: t,
    image: n,
    title: o,
    description: S,
    enableSocialProof: I,
    analyticsLocationSection: T,
    upsellViewedTrackingData: N,
    onClose: A,
    onDisplay: C,
    onLearnMore: R
  } = e, P = (0, s.e7)([h.Z], () => h.Z.affinities), w = (0, s.e7)([h.Z], () => h.Z.hasFetched);
  i.useEffect(() => {
    !w && I && c.MH()
  }, [w, I]), i.useEffect(() => {
    p.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, N), null == C || C()
  }, [C, N]);
  let D = P.length > 1 && I,
    x = () => 2 === t ? O.hasTabParentContainer : 1 === t ? O.hasParentContainer : O.noParentContainer,
    L = () => {
      p.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: T,
        location_object: b.qAy.NAVIGATION_LINK
      }), null == R || R(), (0, d.Z)(), A(), (0, u.xf)(), (0, f.uL)(b.Z5c.APPLICATION_STORE)
    },
    M = (0, m.N)(),
    k = i.useCallback(() => {
      var e;
      return null !== (e = (0, _.fr)(M)) && void 0 !== e ? e : y.NW.string(y.t.pj0XBA)
    }, [M]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.YMn, {
      backdropStyle: l.fCB.DARK,
      onClose: A,
      "aria-label": y.NW.string(y.t.cpT0Cg),
      isVisible: !0
    }), (0, r.jsxs)("div", {
      className: a()(O.container, x()),
      children: [(0, r.jsx)(l.olH, {
        onClick: A,
        className: O.closeButton
      }), (0, r.jsxs)("div", {
        className: O.contentContainer,
        children: [(0, r.jsx)("img", {
          className: O.image,
          width: n.width,
          height: n.height,
          src: n.url,
          alt: "Nitro Perk"
        }), (0, r.jsx)(l.X6q, {
          className: a()(O.title, {
            [O.titleNoSocialProof]: !D
          }),
          variant: "heading-xl/bold",
          children: o
        }), D && (0, r.jsx)(E.Z, {
          affinities: P
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: O.body,
          children: S
        })]
      }), (0, r.jsxs)("div", {
        className: O.ctaContainer,
        children: [(0, r.jsx)(l.zxk, {
          className: O.secondaryCTA,
          size: l.zxk.Sizes.SMALL,
          color: l.zxk.Colors.CUSTOM,
          look: l.zxk.Looks.LINK,
          onClick: L,
          children: y.NW.string(y.t.ZnqyZ2)
        }), (0, r.jsx)(g.Z, {
          showGradient: !0,
          premiumModalAnalyticsLocation: {
            section: T,
            object: b.qAy.BUTTON_CTA
          },
          subscriptionTier: v.Si.TIER_2,
          size: l.zxk.Sizes.SMALL,
          color: l.zxk.Colors.CUSTOM,
          onClick: () => {
            A()
          },
          buttonText: k()
        })]
      })]
    })]
  })
}