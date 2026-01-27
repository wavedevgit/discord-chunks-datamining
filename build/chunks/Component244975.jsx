/** Chunk was on web.js **/
/** chunk id: 244975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk611371 = require("./611371.jsx"),
  Chunk721923 = require("./721923.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk560138 = require("./560138.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk511484 = require("./511484.js"),
  Chunk811611 = require("./811611.jsx"),
  Chunk841252 = require("./841252.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk953239 = require("./953239.js"),
  Chunk669149 = require("./669149.js");

function w(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = R(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function P(e) {
  switch (e) {
    case I.e.ANIMATED_AVATAR_MODAL_UPSELL:
    case I.e.ANIMATED_BANNER_MODAL_UPSELL:
    case I.e.PROFILE_EFFECT_MODAL_UPSELL:
    case I.e.AVATAR_DECORATION_MODAL_UPSELL:
    case I.e.FOR_LATER_MODAL_UPSELL:
    case I.e.VOICE_FILTERS_UPSELL:
      returntrue;
    default:
      returnfalse
  }
}

function D(e) {
  var t, n, a;
  let {
    title: R,
    type: D,
    guildBoostProps: L,
    analyticsSource: x,
    analyticsLocation: M,
    body: j,
    context: k,
    glowUp: U,
    modalClassName: G,
    modalContentClassName: F,
    artContainerClassName: V,
    artClassName: B,
    headerClassName: H,
    bodyClassName: Y,
    transitionState: W,
    onClose: K,
    onSubscribeClick: z,
    onSubscribeFinish: q,
    onSecondaryClick: Z,
    secondaryCTA: Q,
    secondaryCTAClassName: X,
    subscribeButtonText: J,
    showNewBadge: $ = false,
    showBetaBadge: ee = false,
    enableArtBoxShadow: et = true,
    subscriptionTier: en = I.pe.TIER_2,
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
    smallText: ep = false,
    footerClassName: e_
  } = e, eh = w(e, ["title", "type", "guildBoostProps", "analyticsSource", "analyticsLocation", "body", "context", "glowUp", "modalClassName", "modalContentClassName", "artContainerClassName", "artClassName", "headerClassName", "bodyClassName", "transitionState", "onClose", "onSubscribeClick", "onSubscribeFinish", "onSecondaryClick", "secondaryCTA", "secondaryCTAClassName", "subscribeButtonText", "showNewBadge", "showBetaBadge", "enableArtBoxShadow", "subscriptionTier", "isLoading", "hideBackButton", "backButtonText", "showEnhancedUpsell", "useSubscribeButtonGradient", "subscribeButtonClassname", "hidePremiumOfferUpsell", "children", "LeadingComponent", "backgroundElements", "smallText", "footerClassName"]), em = null != L, eg = (0, y.V)(), eE = (0, E.O)(), ey = !ec && ((null == eg || null == (n = eg.subscription_trial) ? true : n.sku_id) === en || (0, O.U9)(eE, en)) && !em, {
    analyticsLocations: eb
  } = (0, f.Ay)(d.A.PREMIUM_UPSELL_MODAL), eO = {
    analyticsLocation: M,
    analyticsLocations: eb,
    analyticsSource: x,
    guildBoostProps: L,
    type: D
  }, ev = i.useRef(eO);
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
    em ? h.default.track(S.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
      type: "".concat(i, " - Tier ").concat(null == r ? true : r.boostedGuildTier),
      guild_id: null == r ? true : r.guild.id,
      channel_id: null == r ? true : r.channelId,
      location: e,
      location_stack: t
    }) : h.default.track(S.HAw.PREMIUM_UPSELL_VIEWED, {
      type: i,
      source: n,
      location: e,
      location_stack: t,
      sku_id: (0, m.mH)(en)
    })
  }, [em, en, er]);
  let eA = (0, s.bG)([g.A], () => g.A.affinities),
    eI = eA.length > 1 && P(D),
    eS = (0, s.bG)([g.A], () => g.A.hasFetched);
  i.useEffect(() => {
    eS || u.xG()
  }, [eS]);
  let eT = () => {
      if (em) return (0, r.jsx)(_.A, {
        analyticsLocation: M,
        guild: L.guild,
        onClose: K
      });
      let e = eo ? T.intl.string(T.t.pj0XBN) : true;
      if (ey)
        if (null != eg) {
          var t, n;
          e = (0, m.FY)({
            intervalType: null == eg || null == (t = eg.subscription_trial) ? true : t.interval,
            intervalCount: null == eg || null == (n = eg.subscription_trial) ? true : n.interval_count
          })
        } else null != eE && (e = T.intl.formatToPlainString(T.t.bkQ4bH, {
          percent: eE.discount.amount
        }));
      return (0, r.jsx)(b.A, {
        className: el,
        showGradient: eo || es,
        premiumModalAnalyticsLocation: M,
        subscriptionTier: en,
        size: l.$n.Sizes.SMALL,
        color: eo || es ? l.$n.Colors.CUSTOM : l.$n.Colors.GREEN,
        onClick: () => {
          null == z || z(), K()
        },
        onSubscribeModalClose: q,
        textOptions: {
          textOverride: null != J ? J : e
        }
      })
    },
    eC = et ? o()(C.JS, C.OV, V) : o()(C.JS, V),
    eN = null;
  return null != eh.artURL ? eN = (0, r.jsx)("img", {
    className: o()(B, C.Qw),
    alt: "",
    src: eh.artURL
  }) : null != eh.artElement && (eN = eh.artElement), (0, r.jsxs)(c.EOs, {
    "data-migration-pending": true,
    className: o()(C.zr, !ey && G),
    "aria-label": R,
    transitionState: W,
    parentComponent: "PremiumUpsellModal",
    children: [null != eN && (0, r.jsxs)("div", {
      className: eC,
      children: [eN, $ ? (0, r.jsx)("img", {
        className: C.CI,
        alt: "",
        src: N
      }) : null]
    }), (0, r.jsx)(c.$mQ, {
      "data-migration-pending": true,
      scrollbarType: "none",
      className: o()(eo ? C.es : C.Qs, !ey && F),
      children: er ? (0, r.jsx)(c.y$y, {}) : ey ? (0, r.jsx)(v.Ay, {
        onClose: K,
        type: D,
        subscriptionTier: null != (t = null == eg || null == (a = eg.subscription_trial) ? true : a.sku_id) ? t : I.pe.TIER_2,
        headingText: R,
        context: k,
        analyticsLocationObject: M,
        discountOffer: eE,
        trialOffer: eg,
        children: U
      }) : (0, r.jsxs)("div", {
        className: C.hQ,
        children: [ed, (0, r.jsxs)("div", {
          className: C.kQ,
          children: [(0, r.jsxs)(c.Heading, {
            className: o()(C.wx, {
              [C.k]: eo
            }, H),
            variant: "heading-xl/bold",
            children: [R, ee ? (0, r.jsx)(p.A, {
              className: C.TN
            }) : null]
          }), eI ? (0, r.jsx)(A.A, {
            affinities: eA
          }) : true, eu, (0, r.jsx)(c.Text, {
            variant: ep ? "text-sm/normal" : "text-md/normal",
            className: o()(Y, C.uI),
            children: j
          })]
        })]
      })
    }), (0, r.jsxs)(c.jlY, {
      "data-migration-pending": true,
      className: o()(C.qr, e_, {
        [C.I$]: eo
      }),
      children: [(0, r.jsxs)("div", {
        className: o()(C.E3, {
          [C.Q_]: eo
        }),
        children: [null != Q ? (0, r.jsx)(l.$n, {
          "data-migration-pending": true,
          className: o()(C.Dc, X, {
            [C.HZ]: eo
          }),
          onClick: Z,
          size: l.$n.Sizes.SMALL,
          color: eo ? l.$n.Colors.CUSTOM : l.$n.Colors.PRIMARY,
          look: l.$n.Looks.LINK,
          children: Q
        }) : null, eT()]
      }), !ei && !eo && (0, r.jsx)(c.Button, {
        variant: "secondary",
        size: "sm",
        text: null != ea ? ea : T.intl.string(T.t["13/7kX"]),
        onClick: K
      })]
    }), eo ? (0, r.jsx)(c.s_y, {
      "data-migration-pending": true,
      onClick: K,
      className: C.b
    }) : null, ef]
  })
}