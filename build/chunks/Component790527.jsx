/** Chunk was on web.js **/
/** chunk id: 790527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk165583 = require("./165583.jsx"),
  Chunk302945 = require("./302945.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418548 = require("./418548.js"),
  Chunk769860 = require("./769860.js");

function N(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function P(e) {
  switch (e) {
    case I.cd.ANIMATED_AVATAR_MODAL_UPSELL:
    case I.cd.ANIMATED_BANNER_MODAL_UPSELL:
    case I.cd.PROFILE_EFFECT_MODAL_UPSELL:
    case I.cd.AVATAR_DECORATION_MODAL_UPSELL:
    case I.cd.FOR_LATER_MODAL_UPSELL:
    case I.cd.VOICE_FILTERS_UPSELL:
    case I.cd.RECENT_AVATARS_ROADBLOCK_UPSELL:
      returntrue;
    default:
      returnfalse
  }
}

function w(e) {
  var t, n, a, {
      title: R,
      type: w,
      guildBoostProps: D,
      analyticsSource: x,
      analyticsLocation: L,
      body: M,
      context: k,
      glowUp: j,
      modalClassName: U,
      modalContentClassName: G,
      artContainerClassName: B,
      artClassName: Z,
      headerClassName: F,
      bodyClassName: V,
      transitionState: H,
      onClose: Y,
      onSubscribeClick: W,
      onSubscribeFinish: K,
      onSecondaryClick: z,
      secondaryCTA: q,
      secondaryCTAClassName: X,
      subscribeButtonText: Q,
      showNewBadge: J = false,
      showBetaBadge: $ = false,
      enableArtBoxShadow: ee = true,
      subscriptionTier: et = I.Si.TIER_2,
      isLoading: en = false,
      hideBackButton: er,
      backButtonText: ei,
      showEnhancedUpsell: ea,
      useSubscribeButtonGradient: eo,
      subscribeButtonClassname: es,
      hidePremiumOfferUpsell: el,
      children: ec,
      LeadingComponent: eu,
      backgroundElements: ed,
      smallText: ef = false,
      footerClassName: e_
    } = e,
    ep = N(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "modalContentClassName", "artContainerClassName", "artClassName", "headerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSubscribeFinish", "onSecondaryClick", "secondaryCTA", "secondaryCTAClassName", "subscribeButtonText", "showNewBadge", "showBetaBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText", "showEnhancedUpsell", "useSubscribeButtonGradient", "subscribeButtonClassname", "hidePremiumOfferUpsell", "children", "LeadingComponent", "backgroundElements", "smallText", "footerClassName"]);
  let eh = null != D,
    em = (0, b.N)(),
    eg = (0, E.Ng)(),
    eE = !el && ((null == em || null == (t = em.subscription_trial) ? true : t.sku_id) === et || (0, E.Wp)(eg, et)) && !eh,
    {
      analyticsLocations: eb
    } = (0, f.ZP)(d.Z.PREMIUM_UPSELL_MODAL),
    ey = {
      analyticsLocation: L,
      analyticsLocations: eb,
      analyticsSource: x,
      guildBoostProps: D,
      type: w
    },
    eO = i.useRef(ey);
  i.useEffect(() => {
    eO.current = ey
  }), i.useEffect(() => {
    if (en) return;
    let {
      analyticsLocation: e,
      analyticsLocations: t,
      analyticsSource: n,
      guildBoostProps: r,
      type: i
    } = eO.current;
    eh ? h.default.track(T.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(i, " - Tier ").concat(null == r ? true : r.boostedGuildTier),
      guild_id: null == r ? true : r.guild.id,
      channel_id: null == r ? true : r.channelId,
      location: e,
      location_stack: t
    }) : h.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
      type: i,
      source: n,
      location: e,
      location_stack: t,
      sku_id: (0, m.Wz)(et)
    })
  }, [eh, et, en]);
  let ev = (0, s.e7)([g.Z], () => g.Z.affinities),
    eI = ev.length > 1 && P(w),
    eT = (0, s.e7)([g.Z], () => g.Z.hasFetched);
  i.useEffect(() => {
    eT || u.MH()
  }, [eT]);
  let eS = () => {
      if (eh) return (0, r.jsx)(p.Z, {
        analyticsLocation: L,
        guild: D.guild,
        onClose: Y
      });
      let e = ea ? S.intl.string(S.t.pj0XBN) : true;
      if (eE)
        if (null != em) {
          var t, n;
          e = (0, m.Rt)({
            intervalType: null == em || null == (t = em.subscription_trial) ? true : t.interval,
            intervalCount: null == em || null == (n = em.subscription_trial) ? true : n.interval_count
          })
        } else null != eg && (e = S.intl.formatToPlainString(S.t.bkQ4bH, {
          percent: eg.discount.amount
        }));
      return (0, r.jsx)(y.Z, {
        className: es,
        showGradient: ea || eo,
        premiumModalAnalyticsLocation: L,
        subscriptionTier: et,
        size: l.zx.Sizes.SMALL,
        color: ea || eo ? l.zx.Colors.CUSTOM : l.zx.Colors.GREEN,
        onClick: () => {
          null == W || W(), Y()
        },
        onSubscribeModalClose: K,
        textOptions: {
          textOverride: null != Q ? Q : e
        }
      })
    },
    eA = ee ? o()(A.artContainer, A.artContainerBoxShadow, B) : o()(A.artContainer, B),
    eC = null;
  return null != ep.artURL ? eC = (0, r.jsx)("img", {
    className: o()(Z, A.art),
    alt: "",
    src: ep.artURL
  }) : null != ep.artElement && (eC = ep.artElement), (0, r.jsxs)(c.Y0X, {
    "data-migration-pending": true,
    className: o()(A.root, !eE && U),
    "aria-label": R,
    transitionState: H,
    parentComponent: "PremiumUpsellModal",
    children: [null != eC && (0, r.jsxs)("div", {
      className: eA,
      children: [eC, J ? (0, r.jsx)("img", {
        className: A.sparkleBadge,
        alt: "",
        src: C
      }) : null]
    }), (0, r.jsx)(c.hzk, {
      "data-migration-pending": true,
      scrollbarType: "none",
      className: o()(ea ? A.enhancedContent : A.content, !eE && G),
      children: en ? (0, r.jsx)(c.$jN, {}) : eE ? (0, r.jsx)(O.ZP, {
        onClose: Y,
        type: w,
        subscriptionTier: null != (a = null == em || null == (n = em.subscription_trial) ? true : n.sku_id) ? a : I.Si.TIER_2,
        headingText: R,
        context: k,
        analyticsLocationObject: L,
        discountOffer: eg,
        trialOffer: em,
        children: j
      }) : (0, r.jsxs)("div", {
        className: A.contentContainer,
        children: [eu, (0, r.jsxs)("div", {
          className: A.bodyContent,
          children: [(0, r.jsxs)(c.Heading, {
            className: o()(A.header, {
              [A.enhancedHeader]: ea
            }, F),
            variant: "heading-xl/bold",
            children: [R, $ ? (0, r.jsx)(_.Z, {
              className: A.betaTag
            }) : null]
          }), eI ? (0, r.jsx)(v.Z, {
            affinities: ev
          }) : true, ec, (0, r.jsx)(c.Text, {
            variant: ef ? "text-sm/normal" : "text-md/normal",
            className: o()(V, A.subHeader),
            children: M
          })]
        })]
      })
    }), (0, r.jsxs)(c.mzw, {
      "data-migration-pending": true,
      className: o()(A.footer, e_, {
        [A.enhancedFooter]: ea
      }),
      children: [(0, r.jsxs)("div", {
        className: o()(A.primaryActions, {
          [A.enhancedPrimaryActions]: ea
        }),
        children: [null != q ? (0, r.jsx)(l.zx, {
          "data-migration-pending": true,
          className: o()(A.secondaryAction, X, {
            [A.enhancedSecondaryAction]: ea
          }),
          onClick: z,
          size: l.zx.Sizes.SMALL,
          color: ea ? l.zx.Colors.CUSTOM : l.zx.Colors.PRIMARY,
          look: l.zx.Looks.LINK,
          children: q
        }) : null, eS()]
      }), !er && !ea && (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        text: null != ei ? ei : S.intl.string(S.t["13/7kX"]),
        onClick: Y
      })]
    }), ea ? (0, r.jsx)(c.olH, {
      "data-migration-pending": true,
      onClick: Y,
      className: A.closeButton
    }) : null, ed]
  })
}