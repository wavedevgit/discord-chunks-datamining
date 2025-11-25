/** Chunk was on web.js **/
/** chunk id: 609218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k,
  p: () => M
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk283066 = require("./283066.js"),
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
  Chunk325380 = require("./325380.js"),
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
    analyticsLocationSection: j,
    upsellViewedTrackingData: U,
    onClose: G,
    onDisplay: B,
    onLearnMore: Z,
    isEmojiPickerOverlay: F = false
  } = e, V = (0, l.e7)([E.Z], () => E.Z.affinities), H = (0, l.e7)([E.Z], () => E.Z.hasFetched);
  i.useEffect(() => {
    !H && k && d.MH()
  }, [H, k]), i.useEffect(() => {
    h.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, U), null == B || B()
  }, [B, U]);
  let W = V.length > 1 && k,
    Y = () => 2 === t ? R.hasTabParentContainer : 1 === t ? R.hasParentContainer : R.noParentContainer,
    K = () => {
      h.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: j,
        location_object: A.qAy.NAVIGATION_LINK
      }), null == Z || Z(), (0, _.Z)(), G(), (0, f.xf)(), (0, p.uL)(A.Z5c.APPLICATION_STORE)
    },
    z = (0, y.N)(),
    q = i.useCallback(() => {
      var e;
      return null != (e = (0, g.fr)(z, S.Si.TIER_2)) ? e : C.intl.string(C.t.pj0XBN)
    }, [z]),
    X = (0, b.Z)({
      location: "PremiumUpsellPickerOverlay"
    }),
    Q = (0, I.Z)(S.Si.TIER_2);
  if (X) {
    let e;
    e = F ? (0, m.rO)() ? D.Z : w.Z : (0, m.rO)() ? L.Z : x.Z;
    let t = F ? "nitro-pink" : "green";
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(u.ZMr, {
        onClick: G,
        isVisible: true
      }), (0, r.jsxs)(u.$1m, {
        color: t,
        className: N.container,
        children: [(0, r.jsxs)("div", {
          className: N.content,
          children: [(0, r.jsx)(u.olH, {
            "data-migration-pending": true,
            onClick: G,
            className: N.closeButton
          }), (0, r.jsxs)("div", {
            className: N.contentContainer,
            children: [(0, r.jsx)("div", {
              className: P.headerGraphic,
              children: (0, r.jsx)(u.zsu, {
                type: "video",
                src: e,
                loop: true,
                loopAt: 5
              })
            }), null != Q && (0, r.jsx)(s.C, {
              type: {
                text: Q
              }
            }), (0, r.jsx)(u.Heading, {
              className: o()(N.title, {
                [N.withBadge]: null != Q
              }),
              variant: "heading-xl/bold",
              color: "header-primary",
              children: a
            }), (0, r.jsx)(u.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              className: N.body,
              children: M
            })]
          })]
        }), (0, r.jsx)("div", {
          className: N.footer,
          children: (0, r.jsxs)("div", {
            className: N.buttonContainer,
            children: [(0, r.jsx)(u.Button, {
              variant: "secondary",
              onClick: K,
              text: C.intl.string(C.t.ZnqyZ2),
              fullWidth: true
            }), (0, r.jsx)(O.Z, {
              premiumModalAnalyticsLocation: {
                section: j,
                object: A.qAy.BUTTON_CTA
              },
              subscriptionTier: S.Si.TIER_2,
              onClick: () => {
                G()
              },
              defaultTextOverride: q(),
              fullWidth: true
            })]
          })
        })]
      })]
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.ZMr, {
      onClick: G,
      isVisible: true
    }), (0, r.jsxs)("div", {
      className: o()(R.container, Y()),
      children: [(0, r.jsx)(u.olH, {
        "data-migration-pending": true,
        onClick: G,
        className: R.closeButton
      }), (0, r.jsxs)("div", {
        className: R.contentContainer,
        children: [(0, r.jsx)("img", {
          className: R.image,
          width: n.width,
          height: n.height,
          src: n.url,
          alt: "Nitro Perk"
        }), (0, r.jsx)(u.Heading, {
          className: o()(R.title, {
            [R.titleNoSocialProof]: !W
          }),
          variant: "heading-xl/bold",
          children: a
        }), W && (0, r.jsx)(T.Z, {
          affinities: V
        }), (0, r.jsx)(u.Text, {
          variant: "text-sm/medium",
          className: R.body,
          children: M
        })]
      }), (0, r.jsxs)("div", {
        className: R.ctaContainer,
        children: [(0, r.jsx)(c.zx, {
          "data-migration-pending": true,
          className: R.secondaryCTA,
          size: c.zx.Sizes.SMALL,
          color: c.zx.Colors.CUSTOM,
          look: c.zx.Looks.LINK,
          onClick: K,
          children: C.intl.string(C.t.ZnqyZ2)
        }), (0, r.jsx)(v.Z, {
          showGradient: true,
          premiumModalAnalyticsLocation: {
            section: j,
            object: A.qAy.BUTTON_CTA
          },
          subscriptionTier: S.Si.TIER_2,
          size: c.zx.Sizes.SMALL,
          color: c.zx.Colors.CUSTOM,
          onClick: () => {
            G()
          },
          textOptions: {
            textOverride: q()
          }
        })]
      })]
    })]
  })
}