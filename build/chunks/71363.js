/** Chunk was on 51724 **/
n.d(t, {
  Z: () => S
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(622535),
  c = n(481060),
  d = n(607070),
  u = n(100527),
  m = n(906732),
  p = n(975298),
  g = n(410154),
  h = n(626135),
  f = n(695349),
  x = n(103433),
  b = n(166021),
  N = n(32173),
  _ = n(391110),
  E = n(75077),
  C = n(981631),
  j = n(388032),
  O = n(951084),
  v = n(865215);
let S = e => {
  let t, n, {
      isAllPerksVisible: s,
      setIsAllPerksVisible: S,
      previousComponent: T,
      isFullScreen: I
    } = e,
    y = i.useRef(null),
    A = Object.entries((0, N.Z)()).reduce((e, t) => {
      let [n, r] = t;
      return !1 !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
    }, {}),
    {
      analyticsLocations: P
    } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [R, D] = i.useState(!1),
    Z = (0, g.ZP)("perks-discoverability"),
    w = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
    k = (0, E.mN)(),
    {
      fractionalState: W
    } = (0, p.Z)(),
    L = (0, f.W)();
  return k ? (t = j.NW.string(j.t["+vt7w8"]), n = j.NW.string(j.t.LgHbnJ)) : (t = j.NW.string(j.t.LgHbnJ), n = j.NW.string(j.t["+vt7w8"])), (0, r.jsx)(c.yWw, {
    className: a()(O.allPerksScroller, {
      [O.open]: s,
      [O.openCloseReduceMotion]: w
    }),
    ref: y,
    children: (0, r.jsx)("div", {
      className: O.container,
      children: (0, r.jsxs)(m.Gt, {
        value: P,
        children: [(0, r.jsx)(x.Z, {
          className: O.heroHeading,
          onBackClick: () => {
            S(!1), h.default.track(C.rMx.NITRO_HOME_NAVIGATION, {
              current_component: _.MQ.SEE_ALL,
              next_component: T,
              interaction_component: "Back Button"
            })
          }
        }), (0, r.jsxs)("div", {
          className: O.column,
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: O.heading,
            children: t
          }), (0, r.jsx)(b.Z, {
            className: O.cardCarousel,
            cards: (0, E.sP)({
              perksCards: A,
              variant: _.R0.CARD_CAROUSEL_FIRST_ROW,
              shopMarketingVariation: Z,
              isPremiumSubscriber: k,
              isFullScreen: I,
              fractionalState: W,
              isInReverseTrial: L
            }),
            cardType: _.R0.CARD_CAROUSEL_FIRST_ROW
          }), (0, r.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: O.heading,
            children: n
          }), (0, r.jsx)(b.Z, {
            className: O.cardCarousel,
            cards: (0, E.sP)({
              perksCards: A,
              variant: _.R0.CARD_CAROUSEL_SECOND_ROW,
              shopMarketingVariation: Z,
              isPremiumSubscriber: k,
              isFullScreen: I,
              fractionalState: W,
              isInReverseTrial: L
            }),
            cardType: _.R0.CARD_CAROUSEL_SECOND_ROW
          }), (0, r.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: O.heading,
            children: j.NW.string(j.t.LTaxu7)
          }), (0, r.jsx)(b.Z, {
            className: O.cardCarousel,
            cards: (0, E.sP)({
              perksCards: A,
              variant: _.R0.CARD_CAROUSEL_THIRD_ROW,
              shopMarketingVariation: Z,
              isPremiumSubscriber: k,
              isFullScreen: I,
              fractionalState: W,
              isInReverseTrial: L
            }),
            cardType: _.R0.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, r.jsx)("div", {
          className: O.footerSpacing
        }), (0, r.jsx)(o.$, {
          onChange: e => {
            e && !R && (h.default.track(C.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: P
            }), D(!0))
          },
          children: (0, r.jsx)("div", {
            className: O.bottomOfPageVisibilitySensor
          })
        }), (0, r.jsx)("img", {
          src: v,
          className: O.bottomIllustration,
          width: 112,
          height: 85,
          alt: j.NW.string(j.t.X4IxWF)
        })]
      })
    })
  })
}