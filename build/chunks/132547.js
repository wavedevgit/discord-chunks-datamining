/** Chunk was on 624 (c8fedef2e72d2e9e.js) **/
n.d(t, {
  Z: () => I
}), n(47120), n(610138), n(216116), n(78328), n(815648), n(301563);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(622535),
  o = n(481060),
  c = n(100527),
  d = n(906732),
  u = n(433811),
  m = n(214852),
  g = n(626135),
  p = n(533525),
  h = n(314684),
  f = n(794484),
  b = n(536844),
  N = n(342414),
  x = n(938736),
  _ = n(391110),
  E = n(71363),
  j = n(781800),
  C = n(981631),
  O = n(388032),
  v = n(152114),
  S = n(865215);
let T = "SubscriberNitroHome",
  I = () => {
    (0, m.z)(u.X);
    let e = i.useRef(null),
      [t, n] = i.useState(!1),
      {
        analyticsLocations: s
      } = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [I, y] = i.useState(!1);
    (0, h.FM)();
    let A = (0, p.b)(T),
      P = (0, x.TW)(T),
      R = "true" === new URLSearchParams(window.location.search).get("autoScroll");
    return window.history.replaceState({}, "", window.location.pathname), (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.yWw, {
        className: v.mainPageScroller,
        ref: e,
        children: (0, r.jsx)("div", {
          className: v.container,
          children: (0, r.jsxs)(d.Gt, {
            value: s,
            children: [(0, r.jsx)(N.Z, {
              className: v.heroHeading,
              location: _.MQ.HOME
            }), (0, r.jsx)(f.Z, {
              variant: _.R0.WHATS_NEW,
              className: a()(v.whatsNew, {
                [v.whatsNewWithOriginalHeroHeading]: !(A || P)
              }),
              noBackground: !0,
              leftAlignHeaders: !0,
              shouldAutoScroll: R
            }), (0, r.jsx)(f.Z, {
              className: v.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: (0, r.jsx)(j.Z, {
                setIsAllPerksVisible: n,
                previousComponent: _.MQ.HOME
              })
            }), (0, r.jsx)(b.Z, {
              className: v.giftNitro,
              location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
              analyticsLocation: {
                page: C.ZY5.NITRO_HOME,
                section: C.jXE.GIFT_BANNER
              }
            }), (0, r.jsx)("div", {
              className: v.footerSpacing
            }), (0, r.jsx)(l.$, {
              onChange: e => {
                e && !I && (g.default.track(C.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: s
                }), y(!0))
              },
              children: (0, r.jsx)("div", {
                className: v.bottomOfPageVisibilitySensor
              })
            }), (0, r.jsx)("img", {
              src: S,
              className: v.bottomIllustration,
              width: 112,
              height: 85,
              alt: O.NW.string(O.t.X4IxWF)
            })]
          })
        })
      }), (0, r.jsx)(E.Z, {
        isAllPerksVisible: t,
        setIsAllPerksVisible: n,
        previousComponent: _.MQ.HOME
      })]
    })
  }