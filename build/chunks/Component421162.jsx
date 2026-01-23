/** Chunk was on web.js **/
/** chunk id: 421162, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M,
  N: () => j
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk508770 = require("./508770.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk398590 = require("./398590.js"),
  Chunk523527 = require("./523527.js"),
  Chunk976860 = require("./976860.js"),
  Chunk954571 = require("./954571.js"),
  Chunk676279 = require("./676279.js"),
  Chunk927578 = require("./927578.js"),
  Chunk560138 = require("./560138.js"),
  Chunk170887 = require("./170887.js"),
  Chunk234419 = require("./234419.js"),
  Chunk792656 = require("./792656.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk818415 = require("./818415.js"),
  Chunk841252 = require("./841252.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk734920 = require("./734920.js"),
  Chunk164884 = require("./164884.js"),
  Chunk22789 = require("./22789.js"),
  Chunk417294 = require("./417294.js"),
  Chunk947639 = require("./947639.js"),
  Chunk644242 = require("./644242.js"),
  Chunk309427 = require("./309427.js"),
  j = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.PARENT_CONTAINER = 1] = "PARENT_CONTAINER", e[e.TAB_PARENT_CONTAINER = 2] = "TAB_PARENT_CONTAINER", e
  }({});

function M(e) {
  let {
    containerContext: t,
    image: n,
    title: a,
    description: j,
    enableSocialProof: M,
    analyticsLocationSection: k,
    upsellViewedTrackingData: U,
    onClose: G,
    onDisplay: V,
    onLearnMore: F,
    isEmojiPickerOverlay: B = false
  } = e, H = (0, l.bG)([E.A], () => E.A.affinities), Y = (0, l.bG)([E.A], () => E.A.hasFetched);
  i.useEffect(() => {
    !Y && M && d.xG()
  }, [Y, M]), i.useEffect(() => {
    h.default.track(T.HAw.PREMIUM_UPSELL_VIEWED, U), null == V || V()
  }, [V, U]);
  let W = H.length > 1 && M,
    K = () => 2 === t ? R.vf : 1 === t ? R.oU : R.RK,
    z = () => {
      h.default.track(T.HAw.PREMIUM_PROMOTION_OPENED, {
        location_section: k,
        location_object: T.ZSU.NAVIGATION_LINK
      }), null == F || F(), (0, p.A)(), G(), (0, f.jH)(), (0, _.pX)(T.BVt.APPLICATION_STORE)
    },
    q = (0, b.V)(),
    X = i.useCallback(() => {
      var e;
      return null != (e = (0, g.LE)(q, S.pe.TIER_2)) ? e : C.intl.string(C.t.pj0XBN)
    }, [q]),
    Z = (0, y.A)({
      location: "PremiumUpsellPickerOverlay"
    }),
    Q = (0, A.A)(S.pe.TIER_2);
  if (Z) {
    let e;
    e = B ? (0, m.TM)() ? P.A : D.A : (0, m.TM)() ? x.A : L.A;
    let t = B ? "nitro-pink" : "green";
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.pkL, {
        onClick: G,
        isVisible: true
      }), (0, r.jsxs)(u.hLv, {
        color: t,
        className: N.kL,
        children: [(0, r.jsxs)("div", {
          className: N.Qs,
          children: [(0, r.jsx)(u.s_y, {
            "data-migration-pending": true,
            onClick: G,
            className: N.b
          }), (0, r.jsxs)("div", {
            className: N.hQ,
            children: [(0, r.jsx)("div", {
              className: w.headerGraphic,
              children: (0, r.jsx)(u.vYh, {
                type: "video",
                src: e,
                loop: true,
                loopAt: 5
              })
            }), null != Q && (0, r.jsx)(o.E, {
              type: {
                text: Q
              }
            }), (0, r.jsx)(u.Heading, {
              className: s()(N.DD, {
                [N.GU]: null != Q
              }),
              variant: "heading-xl/bold",
              color: "text-strong",
              children: a
            }), (0, r.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "text-subtle",
              className: N.rf,
              children: j
            })]
          })]
        }), (0, r.jsx)("div", {
          className: N.qr,
          children: (0, r.jsxs)("div", {
            className: N.UD,
            children: [(0, r.jsx)(u.Button, {
              variant: "secondary",
              onClick: z,
              text: C.intl.string(C.t.ZnqyZ2),
              fullWidth: true
            }), (0, r.jsx)(O.A, {
              premiumModalAnalyticsLocation: {
                section: k,
                object: T.ZSU.BUTTON_CTA
              },
              subscriptionTier: S.pe.TIER_2,
              onClick: () => {
                G()
              },
              defaultTextOverride: X(),
              fullWidth: true
            })]
          })
        })]
      })]
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.pkL, {
      onClick: G,
      isVisible: true
    }), (0, r.jsxs)("div", {
      className: s()(R.kL, K()),
      children: [(0, r.jsx)(u.s_y, {
        "data-migration-pending": true,
        onClick: G,
        className: R.b
      }), (0, r.jsxs)("div", {
        className: R.hQ,
        children: [(0, r.jsx)("img", {
          className: R.Sl,
          width: n.width,
          height: n.height,
          src: n.url,
          alt: "Nitro Perk"
        }), (0, r.jsx)(u.Heading, {
          className: s()(R.DD, {
            [R.$z]: !W
          }),
          variant: "heading-xl/bold",
          children: a
        }), W && (0, r.jsx)(I.A, {
          affinities: H
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          className: R.rf,
          children: j
        })]
      }), (0, r.jsxs)("div", {
        className: R.OQ,
        children: [(0, r.jsx)(c.$n, {
          "data-migration-pending": true,
          className: R.vh,
          size: c.$n.Sizes.SMALL,
          color: c.$n.Colors.CUSTOM,
          look: c.$n.Looks.LINK,
          onClick: z,
          children: C.intl.string(C.t.ZnqyZ2)
        }), (0, r.jsx)(v.A, {
          showGradient: true,
          premiumModalAnalyticsLocation: {
            section: k,
            object: T.ZSU.BUTTON_CTA
          },
          subscriptionTier: S.pe.TIER_2,
          size: c.$n.Sizes.SMALL,
          color: c.$n.Colors.CUSTOM,
          onClick: () => {
            G()
          },
          textOptions: {
            textOverride: X()
          }
        })]
      })]
    })]
  })
}