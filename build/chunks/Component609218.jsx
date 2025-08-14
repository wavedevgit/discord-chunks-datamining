/** Chunk was on web.js **/
/** chunk id: 609218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k,
  p: () => j
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk446673 = require("./446673.jsx"),
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
  j = function(e) {
    return e[e.NONE = 0] = "NONE", e[e.PARENT_CONTAINER = 1] = "PARENT_CONTAINER", e[e.TAB_PARENT_CONTAINER = 2] = "TAB_PARENT_CONTAINER", e
  }({});

function k(e) {
  let {
    containerContext: t,
    image: n,
    title: o,
    description: j,
    enableSocialProof: k,
    analyticsLocationSection: U,
    upsellViewedTrackingData: G,
    onClose: B,
    onDisplay: Z,
    onLearnMore: F,
    isEmojiPickerOverlay: V = false
  } = e, H = (0, s.e7)([b.Z], () => b.Z.affinities), Y = (0, s.e7)([b.Z], () => b.Z.hasFetched);
  i.useEffect(() => {
    !Y && k && f.MH()
  }, [Y, k]), i.useEffect(() => {
    m.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, G), null == Z || Z()
  }, [Z, G]);
  let W = H.length > 1 && k,
    K = () => 2 === t ? P.hasTabParentContainer : 1 === t ? P.hasParentContainer : P.noParentContainer,
    z = () => {
      m.default.track(N.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: U,
        location_object: N.qAy.NAVIGATION_LINK
      }), null == F || F(), (0, p.Z)(), B(), (0, _.xf)(), (0, h.uL)(N.Z5c.APPLICATION_STORE)
    },
    q = (0, O.N)(),
    X = i.useCallback(() => {
      var e;
      return null != (e = (0, E.fr)(q)) ? e : C.intl.string(C.t.pj0XBA)
    }, [q]),
    Q = (0, y.Z)({
      location: "PremiumUpsellPickerOverlay"
    }),
    J = (0, T.Z)(A.Si.TIER_2);
  if (Q) {
    let e;
    e = V ? (0, g.rO)() ? D.Z : L.Z : (0, g.rO)() ? x.Z : M.Z;
    let t = V ? "nitro-pink" : "green";
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ZMr, {
        onClick: B,
        isVisible: true
      }), (0, r.jsxs)(c.$, {
        color: t,
        className: R.container,
        children: [(0, r.jsxs)("div", {
          className: R.content,
          children: [(0, r.jsx)(d.olH, {
            "data-migration-pending": true,
            onClick: B,
            className: R.closeButton
          }), (0, r.jsxs)("div", {
            className: R.contentContainer,
            children: [(0, r.jsx)("div", {
              className: w.headerGraphic,
              children: (0, r.jsx)(d.zsu, {
                type: "video",
                src: e,
                loop: true,
                loopAt: 5
              })
            }), null != J && (0, r.jsx)(l.C, {
              badge: {
                text: J
              }
            }), (0, r.jsx)(d.X6q, {
              className: a()(R.title, {
                [R.withBadge]: null != J
              }),
              variant: "heading-xl/bold",
              color: "header-primary",
              children: o
            }), (0, r.jsx)(d.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              className: R.body,
              children: j
            })]
          })]
        }), (0, r.jsx)("div", {
          className: R.footer,
          children: (0, r.jsxs)("div", {
            className: R.buttonContainer,
            children: [(0, r.jsx)(d.zxk, {
              variant: "secondary",
              onClick: z,
              text: C.intl.string(C.t.ZnqyZ2),
              fullWidth: true
            }), (0, r.jsx)(v.Z, {
              premiumModalAnalyticsLocation: {
                section: U,
                object: N.qAy.BUTTON_CTA
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
    children: [(0, r.jsx)(d.ZMr, {
      onClick: B,
      isVisible: true
    }), (0, r.jsxs)("div", {
      className: a()(P.container, K()),
      children: [(0, r.jsx)(d.olH, {
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
        }), (0, r.jsx)(d.X6q, {
          className: a()(P.title, {
            [P.titleNoSocialProof]: !W
          }),
          variant: "heading-xl/bold",
          children: o
        }), W && (0, r.jsx)(S.Z, {
          affinities: H
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          className: P.body,
          children: j
        })]
      }), (0, r.jsxs)("div", {
        className: P.ctaContainer,
        children: [(0, r.jsx)(u.zx, {
          "data-migration-pending": true,
          className: P.secondaryCTA,
          size: u.zx.Sizes.SMALL,
          color: u.zx.Colors.CUSTOM,
          look: u.zx.Looks.LINK,
          onClick: z,
          children: C.intl.string(C.t.ZnqyZ2)
        }), (0, r.jsx)(I.Z, {
          showGradient: true,
          premiumModalAnalyticsLocation: {
            section: U,
            object: N.qAy.BUTTON_CTA
          },
          subscriptionTier: A.Si.TIER_2,
          size: u.zx.Sizes.SMALL,
          color: u.zx.Colors.CUSTOM,
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