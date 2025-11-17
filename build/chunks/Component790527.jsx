/** Chunk was on web.js **/
/** chunk id: 790527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk678558 = require("./678558.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk357355 = require("./357355.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk230916 = require("./230916.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk302945 = require("./302945.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk144867 = require("./144867.js"),
  Chunk769860 = require("./769860.js");

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function D(e) {
  switch (e) {
    case T.cd.ANIMATED_AVATAR_MODAL_UPSELL:
    case T.cd.ANIMATED_BANNER_MODAL_UPSELL:
    case T.cd.PROFILE_EFFECT_MODAL_UPSELL:
    case T.cd.AVATAR_DECORATION_MODAL_UPSELL:
    case T.cd.FOR_LATER_MODAL_UPSELL:
    case T.cd.VOICE_FILTERS_UPSELL:
    case T.cd.RECENT_AVATARS_ROADBLOCK_UPSELL:
      returntrue;
    default:
      returnfalse
  }
}

function w(e) {
  var t, n, a, {
      title: P,
      type: w,
      guildBoostProps: x,
      analyticsSource: L,
      analyticsLocation: M,
      body: k,
      context: j,
      glowUp: U,
      modalClassName: G,
      modalContentClassName: B,
      artContainerClassName: Z,
      artClassName: F,
      headerClassName: V,
      bodyClassName: H,
      transitionState: Y,
      onClose: W,
      onSubscribeClick: K,
      onSubscribeFinish: z,
      onSecondaryClick: q,
      secondaryCTA: X,
      secondaryCTAClassName: Q,
      subscribeButtonText: J,
      showNewBadge: $ = false,
      showBetaBadge: ee = false,
      enableArtBoxShadow: et = true,
      subscriptionTier: en = T.Si.TIER_2,
      isLoading: er = false,
      hideBackButton: ei,
      backButtonText: ea,
      showEnhancedUpsell: eo,
      useSubscribeButtonGradient: es,
      subscribeButtonClassname: el,
      hidePremiumOfferUpsell: ec,
      children: eu,
      LeadingComponent: ed,
      backgroundElements: ef,
      smallText: e_ = false,
      footerClassName: ep
    } = e,
    eh = R(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "modalContentClassName", "artContainerClassName", "artClassName", "headerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSubscribeFinish", "onSecondaryClick", "secondaryCTA", "secondaryCTAClassName", "subscribeButtonText", "showNewBadge", "showBetaBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText", "showEnhancedUpsell", "useSubscribeButtonGradient", "subscribeButtonClassname", "hidePremiumOfferUpsell", "children", "LeadingComponent", "backgroundElements", "smallText", "footerClassName"]);
  let em = null != x,
    eg = (0, b.N)(),
    eE = (0, E.N)(),
    eb = !ec && ((null == eg || null == (t = eg.subscription_trial) ? true : t.sku_id) === en || (0, O.Wp)(eE, en)) && !em,
    {
      analyticsLocations: ey
    } = (0, f.ZP)(d.Z.PREMIUM_UPSELL_MODAL),
    eO = {
      analyticsLocation: M,
      analyticsLocations: ey,
      analyticsSource: L,
      guildBoostProps: x,
      type: w
    },
    ev = i.useRef(eO);
  i.useEffect(() => {
    ev.current = eO
  }), i.useEffect(() => {
    if (er) return;
    let {
      analyticsLocation: e,
      analyticsLocations: t,
      analyticsSource: n,
      guildBoostProps: r,
      type: i
    } = ev.current;
    em ? h.default.track(S.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(i, " - Tier ").concat(null == r ? true : r.boostedGuildTier),
      guild_id: null == r ? true : r.guild.id,
      channel_id: null == r ? true : r.channelId,
      location: e,
      location_stack: t
    }) : h.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
      type: i,
      source: n,
      location: e,
      location_stack: t,
      sku_id: (0, m.Wz)(en)
    })
  }, [em, en, er]);
  let eI = (0, s.e7)([g.Z], () => g.Z.affinities),
    eT = eI.length > 1 && D(w),
    eS = (0, s.e7)([g.Z], () => g.Z.hasFetched);
  i.useEffect(() => {
    eS || u.MH()
  }, [eS]);
  let eA = () => {
      if (em) return (0, r.jsx)(p.Z, {
        analyticsLocation: M,
        guild: x.guild,
        onClose: W
      });
      let e = eo ? A.intl.string(A.t.pj0XBN) : true;
      if (eb)
        if (null != eg) {
          var t, n;
          e = (0, m.Rt)({
            intervalType: null == eg || null == (t = eg.subscription_trial) ? true : t.interval,
            intervalCount: null == eg || null == (n = eg.subscription_trial) ? true : n.interval_count
          })
        } else null != eE && (e = A.intl.formatToPlainString(A.t.bkQ4bH, {
          percent: eE.discount.amount
        }));
      return (0, r.jsx)(y.Z, {
        className: el,
        showGradient: eo || es,
        premiumModalAnalyticsLocation: M,
        subscriptionTier: en,
        size: l.zx.Sizes.SMALL,
        color: eo || es ? l.zx.Colors.CUSTOM : l.zx.Colors.GREEN,
        onClick: () => {
          null == K || K(), W()
        },
        onSubscribeModalClose: z,
        textOptions: {
          textOverride: null != J ? J : e
        }
      })
    },
    eC = et ? o()(C.artContainer, C.artContainerBoxShadow, Z) : o()(C.artContainer, Z),
    eN = null;
  return null != eh.artURL ? eN = (0, r.jsx)("img", {
    className: o()(F, C.art),
    alt: "",
    src: eh.artURL
  }) : null != eh.artElement && (eN = eh.artElement), (0, r.jsxs)(c.Y0X, {
    "data-migration-pending": true,
    className: o()(C.root, !eb && G),
    "aria-label": P,
    transitionState: Y,
    parentComponent: "PremiumUpsellModal",
    children: [null != eN && (0, r.jsxs)("div", {
      className: eC,
      children: [eN, $ ? (0, r.jsx)("img", {
        className: C.sparkleBadge,
        alt: "",
        src: N
      }) : null]
    }), (0, r.jsx)(c.hzk, {
      "data-migration-pending": true,
      scrollbarType: "none",
      className: o()(eo ? C.enhancedContent : C.content, !eb && B),
      children: er ? (0, r.jsx)(c.$jN, {}) : eb ? (0, r.jsx)(v.ZP, {
        onClose: W,
        type: w,
        subscriptionTier: null != (a = null == eg || null == (n = eg.subscription_trial) ? true : n.sku_id) ? a : T.Si.TIER_2,
        headingText: P,
        context: j,
        analyticsLocationObject: M,
        discountOffer: eE,
        trialOffer: eg,
        children: U
      }) : (0, r.jsxs)("div", {
        className: C.contentContainer,
        children: [ed, (0, r.jsxs)("div", {
          className: C.bodyContent,
          children: [(0, r.jsxs)(c.Heading, {
            className: o()(C.header, {
              [C.enhancedHeader]: eo
            }, V),
            variant: "heading-xl/bold",
            children: [P, ee ? (0, r.jsx)(_.Z, {
              className: C.betaTag
            }) : null]
          }), eT ? (0, r.jsx)(I.Z, {
            affinities: eI
          }) : true, eu, (0, r.jsx)(c.Text, {
            variant: e_ ? "text-sm/normal" : "text-md/normal",
            className: o()(H, C.subHeader),
            children: k
          })]
        })]
      })
    }), (0, r.jsxs)(c.mzw, {
      "data-migration-pending": true,
      className: o()(C.footer, ep, {
        [C.enhancedFooter]: eo
      }),
      children: [(0, r.jsxs)("div", {
        className: o()(C.primaryActions, {
          [C.enhancedPrimaryActions]: eo
        }),
        children: [null != X ? (0, r.jsx)(l.zx, {
          "data-migration-pending": true,
          className: o()(C.secondaryAction, Q, {
            [C.enhancedSecondaryAction]: eo
          }),
          onClick: q,
          size: l.zx.Sizes.SMALL,
          color: eo ? l.zx.Colors.CUSTOM : l.zx.Colors.PRIMARY,
          look: l.zx.Looks.LINK,
          children: X
        }) : null, eA()]
      }), !ei && !eo && (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        text: null != ea ? ea : A.intl.string(A.t["13/7kX"]),
        onClick: W
      })]
    }), eo ? (0, r.jsx)(c.olH, {
      "data-migration-pending": true,
      onClick: W,
      className: C.closeButton
    }) : null, ef]
  })
}