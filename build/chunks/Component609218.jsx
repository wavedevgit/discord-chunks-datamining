/** Chunk was on web.js **/
/** chunk id: 609218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U,
  p: () => k
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk313666 = require("./313666.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk304789 = require("./304789.jsx"),
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
  Chunk124527 = require("./124527.js"),
  Chunk591867 = require("./591867.js"),
  Chunk525751 = require("./525751.js"),
  Chunk428946 = require("./428946.js"),
  Chunk42948 = require("./42948.js"),
  Chunk109194 = require("./109194.js"),
  Chunk352812 = require("./352812.js"),
  k = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.PARENT_CONTAINER = 1] = "PARENT_CONTAINER", e[e.TAB_PARENT_CONTAINER = 2] = "TAB_PARENT_CONTAINER", e
  }({});

function U(e) {
  let {
    containerContext: t,
    image: n,
    title: a,
    description: k,
    enableSocialProof: U,
    analyticsLocationSection: G,
    upsellViewedTrackingData: B,
    onClose: Z,
    onDisplay: F,
    onLearnMore: V,
    isEmojiPickerOverlay: H = false
  } = e, Y = (0, l.e7)([b.Z], () => b.Z.affinities), W = (0, l.e7)([b.Z], () => b.Z.hasFetched);
  i.useEffect(() => {
    !W && U && f.MH()
  }, [W, U]), i.useEffect(() => {
    m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, B), null == F || F()
  }, [F, B]);
  let K = Y.length > 1 && U,
    z = () => 2 === t ? w.hasTabParentContainer : 1 === t ? w.hasParentContainer : w.noParentContainer,
    q = () => {
      m.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: G,
        location_object: N.qAy.NAVIGATION_LINK
      }), null == V || V(), (0, p.Z)(), Z(), (0, _.xf)(), (0, h.uL)(N.Z5c.APPLICATION_STORE)
    },
    X = (0, v.N)(),
    Q = i.useCallback(() => {
      var e;
      return null != (e = (0, E.fr)(X, C.Si.TIER_2)) ? e : R.intl.string(R.t.pj0XBA)
    }, [X]),
    J = (0, y.ZP)({
      location: "PremiumUpsellPickerOverlay"
    }),
    $ = (0, O.Z)({
      location: "PremiumUpsellPickerOverlay"
    }),
    ee = J || $,
    et = (0, S.Z)(C.Si.TIER_2);
  if (ee) {
    let e;
    e = H ? (0, g.rO)() ? x.Z : L.Z : (0, g.rO)() ? j.Z : M.Z;
    let t = H ? "nitro-pink" : "green";
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ZMr, {
        onClick: Z,
        isVisible: true
      }), (0, r.jsxs)(c.$, {
        color: t,
        className: P.container,
        children: [(0, r.jsxs)("div", {
          className: P.content,
          children: [(0, r.jsx)(d.olH, {
            "data-migration-pending": true,
            onClick: Z,
            className: P.closeButton
          }), (0, r.jsxs)("div", {
            className: P.contentContainer,
            children: [(0, r.jsx)("div", {
              className: D.headerGraphic,
              children: (0, r.jsx)(d.zsu, {
                type: "video",
                src: e,
                loop: true,
                loopAt: 5
              })
            }), null != et && (0, r.jsx)(s.C, {
              type: {
                text: et
              }
            }), (0, r.jsx)(d.X6q, {
              className: o()(P.title, {
                [P.withBadge]: null != et
              }),
              variant: "heading-xl/bold",
              color: "header-primary",
              children: a
            }), (0, r.jsx)(d.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              className: P.body,
              children: k
            })]
          })]
        }), (0, r.jsx)("div", {
          className: P.footer,
          children: (0, r.jsxs)("div", {
            className: P.buttonContainer,
            children: [(0, r.jsx)(d.zxk, {
              variant: "secondary",
              onClick: q,
              text: R.intl.string(R.t.ZnqyZ2),
              fullWidth: true
            }), (0, r.jsx)(I.Z, {
              premiumModalAnalyticsLocation: {
                section: G,
                object: N.qAy.BUTTON_CTA
              },
              subscriptionTier: C.Si.TIER_2,
              onClick: () => {
                Z()
              },
              defaultTextOverride: Q(),
              fullWidth: true
            })]
          })
        })]
      })]
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.ZMr, {
      onClick: Z,
      isVisible: true
    }), (0, r.jsxs)("div", {
      className: o()(w.container, z()),
      children: [(0, r.jsx)(d.olH, {
        "data-migration-pending": true,
        onClick: Z,
        className: w.closeButton
      }), (0, r.jsxs)("div", {
        className: w.contentContainer,
        children: [(0, r.jsx)("img", {
          className: w.image,
          width: n.width,
          height: n.height,
          src: n.url,
          alt: "Nitro Perk"
        }), (0, r.jsx)(d.X6q, {
          className: o()(w.title, {
            [w.titleNoSocialProof]: !K
          }),
          variant: "heading-xl/bold",
          children: a
        }), K && (0, r.jsx)(A.Z, {
          affinities: Y
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          className: w.body,
          children: k
        })]
      }), (0, r.jsxs)("div", {
        className: w.ctaContainer,
        children: [(0, r.jsx)(u.zx, {
          "data-migration-pending": true,
          className: w.secondaryCTA,
          size: u.zx.Sizes.SMALL,
          color: u.zx.Colors.CUSTOM,
          look: u.zx.Looks.LINK,
          onClick: q,
          children: R.intl.string(R.t.ZnqyZ2)
        }), (0, r.jsx)(T.Z, {
          showGradient: true,
          premiumModalAnalyticsLocation: {
            section: G,
            object: N.qAy.BUTTON_CTA
          },
          subscriptionTier: C.Si.TIER_2,
          size: u.zx.Sizes.SMALL,
          color: u.zx.Colors.CUSTOM,
          onClick: () => {
            Z()
          },
          textOptions: {
            textOverride: Q()
          }
        })]
      })]
    })]
  })
}