/** Chunk was on web.js **/
/** chunk id: 609218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k,
  p: () => M
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk313666 = require("./313666.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk37234 = require("./37234.js"),
  Chunk174609 = require("./174609.js"),
  Chunk703656 = require("./703656.js"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk74538 = require("./74538.js"),
  Chunk357355 = require("./357355.js"),
  Chunk47280 = require("./47280.js"),
  Chunk998076 = require("./998076.js"),
  Chunk639119 = require("./639119.js"),
  Chunk638212 = require("./638212.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk717975 = require("./717975.js"),
  Chunk302945 = require("./302945.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk398068 = require("./398068.js"),
  Chunk885807 = require("./885807.js"),
  Chunk456208 = require("./456208.js"),
  Chunk428946 = require("./428946.js"),
  Chunk42948 = require("./42948.js"),
  Chunk109194 = require("./109194.js"),
  Chunk352812 = require("./352812.js"),
  M = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.PARENT_CONTAINER = 1] = "PARENT_CONTAINER", e[e.TAB_PARENT_CONTAINER = 2] = "TAB_PARENT_CONTAINER", e
  }({});

function k(e) {
  let {
    containerContext: t,
    image: n,
    title: a,
    description: M,
    enableSocialProof: k,
    analyticsLocationSection: U,
    upsellViewedTrackingData: G,
    onClose: B,
    onDisplay: Z,
    onLearnMore: F,
    isEmojiPickerOverlay: V = false
  } = e, H = (0, l.e7)([E.Z], () => E.Z.affinities), Y = (0, l.e7)([E.Z], () => E.Z.hasFetched);
  i.useEffect(() => {
    !Y && k && d.MH()
  }, [Y, k]), i.useEffect(() => {
    h.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, G), null == Z || Z()
  }, [Z, G]);
  let W = H.length > 1 && k,
    K = () => 2 === t ? P.hasTabParentContainer : 1 === t ? P.hasParentContainer : P.noParentContainer,
    z = () => {
      h.default.track(C.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: U,
        location_object: C.qAy.NAVIGATION_LINK
      }), null == F || F(), (0, _.Z)(), B(), (0, f.xf)(), (0, p.uL)(C.Z5c.APPLICATION_STORE)
    },
    q = (0, O.N)(),
    X = i.useCallback(() => {
      var e;
      return null != (e = (0, g.fr)(q, A.Si.TIER_2)) ? e : N.intl.string(N.t.pj0XBA)
    }, [q]),
    Q = (0, b.ZP)({
      location: "PremiumUpsellPickerOverlay"
    }),
    J = (0, y.Z)({
      location: "PremiumUpsellPickerOverlay"
    }),
    $ = Q || J,
    ee = (0, T.Z)(A.Si.TIER_2);
  if ($) {
    let e;
    e = V ? (0, m.rO)() ? D.Z : L.Z : (0, m.rO)() ? x.Z : j.Z;
    let t = V ? "nitro-pink" : "green";
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.ZMr, {
        onClick: B,
        isVisible: true
      }), (0, r.jsxs)(u.$1m, {
        color: t,
        className: R.container,
        children: [(0, r.jsxs)("div", {
          className: R.content,
          children: [(0, r.jsx)(u.olH, {
            "data-migration-pending": true,
            onClick: B,
            className: R.closeButton
          }), (0, r.jsxs)("div", {
            className: R.contentContainer,
            children: [(0, r.jsx)("div", {
              className: w.headerGraphic,
              children: (0, r.jsx)(u.zsu, {
                type: "video",
                src: e,
                loop: true,
                loopAt: 5
              })
            }), null != ee && (0, r.jsx)(s.C, {
              type: {
                text: ee
              }
            }), (0, r.jsx)(u.X6q, {
              className: o()(R.title, {
                [R.withBadge]: null != ee
              }),
              variant: "heading-xl/bold",
              color: "header-primary",
              children: a
            }), (0, r.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              className: R.body,
              children: M
            })]
          })]
        }), (0, r.jsx)("div", {
          className: R.footer,
          children: (0, r.jsxs)("div", {
            className: R.buttonContainer,
            children: [(0, r.jsx)(u.zxk, {
              variant: "secondary",
              onClick: z,
              text: N.intl.string(N.t.ZnqyZ2),
              fullWidth: true
            }), (0, r.jsx)(v.Z, {
              premiumModalAnalyticsLocation: {
                section: U,
                object: C.qAy.BUTTON_CTA
              },
              subscriptionTier: A.Si.TIER_2,
              onClick: () => {
                B()
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
    children: [(0, r.jsx)(u.ZMr, {
      onClick: B,
      isVisible: true
    }), (0, r.jsxs)("div", {
      className: o()(P.container, K()),
      children: [(0, r.jsx)(u.olH, {
        "data-migration-pending": true,
        onClick: B,
        className: P.closeButton
      }), (0, r.jsxs)("div", {
        className: P.contentContainer,
        children: [(0, r.jsx)("img", {
          className: P.image,
          width: n.width,
          height: n.height,
          src: n.url,
          alt: "Nitro Perk"
        }), (0, r.jsx)(u.X6q, {
          className: o()(P.title, {
            [P.titleNoSocialProof]: !W
          }),
          variant: "heading-xl/bold",
          children: a
        }), W && (0, r.jsx)(S.Z, {
          affinities: H
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          className: P.body,
          children: M
        })]
      }), (0, r.jsxs)("div", {
        className: P.ctaContainer,
        children: [(0, r.jsx)(c.zx, {
          "data-migration-pending": true,
          className: P.secondaryCTA,
          size: c.zx.Sizes.SMALL,
          color: c.zx.Colors.CUSTOM,
          look: c.zx.Looks.LINK,
          onClick: z,
          children: N.intl.string(N.t.ZnqyZ2)
        }), (0, r.jsx)(I.Z, {
          showGradient: true,
          premiumModalAnalyticsLocation: {
            section: U,
            object: C.qAy.BUTTON_CTA
          },
          subscriptionTier: A.Si.TIER_2,
          size: c.zx.Sizes.SMALL,
          color: c.zx.Colors.CUSTOM,
          onClick: () => {
            B()
          },
          textOptions: {
            textOverride: X()
          }
        })]
      })]
    })]
  })
}