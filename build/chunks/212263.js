/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
n.d(t, {
  Z: () => k
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(442837),
  l = n(481060),
  c = n(355467),
  u = n(100527),
  d = n(906732),
  f = n(28546),
  p = n(357355),
  _ = n(98278),
  h = n(104494),
  m = n(639119),
  g = n(165583),
  E = n(197115),
  v = n(631771),
  b = n(609218),
  y = n(210887),
  O = n(626135),
  S = n(176354),
  I = n(74538),
  T = n(543241),
  N = n(149203),
  A = n(981631),
  C = n(185923),
  R = n(474936),
  P = n(388032),
  w = n(93047);

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = e => {
  let t, {
      onLearnMore: o,
      onClose: D,
      channel: L,
      emojiDescriptor: k,
      pickerIntention: j,
      analyticsLocation: U,
      containerContext: G
    } = e,
    B = (0, s.e7)([y.Z], () => y.Z.theme) === A.BRd.LIGHT ? "light" : "dark",
    [Z, F] = i.useState(!1),
    V = () => {
      (0, T.A3)(L), (0, _.z)(), o()
    },
    H = n(577391)("./img_premium_emoji_".concat(B, ".svg")),
    W = "https://cdn.discordapp.com/assets/premium/roadblocks/emoji_".concat(B, ".png"),
    Y = (0, m.N)(),
    K = (0, h.Ng)(),
    z = null != Y || null != K,
    q = (0, f.Iu)(e => e.searchQuery),
    {
      analyticsLocations: Q
    } = (0, d.ZP)(u.Z.EMOJI_PICKER),
    X = v.G.useExperiment({
      location: "Premium Emoji Roadblock"
    }, {
      autoTrackExposure: !z,
      disable: z
    }),
    J = X.enabled || null != Y,
    $ = X.addSocialProof;
  t = j === C.Hz.REACTION ? R.cd.EMOJI_PICKER_REACTION_EMOJI_CLICKED : null == k ? R.cd.EMOJI_PICKER_FLOATING_UPSELL : k.subCategory === N.t0.TOP_GUILD_EMOJI ? R.cd.EMOJI_PICKER_TOP_SERVER_EMOJI_CLICKED : k.subCategory === N.t0.NEWLY_ADDED_EMOJI ? R.cd.EMOJI_PICKER_NEWLY_ADDED_EMOJI_CLICKED : R.cd.EMOJI_PICKER_EMOJI_CLICKED;
  let ee = null != k ? k.emoji : void 0,
    et = null != ee && ee.animated,
    en = null != ee && !S.ZP.isInternalEmojiForGuildId(ee, null == L ? void 0 : L.getGuildId()),
    er = null != ee ? A.qAy.EMOJI : A.qAy.EMOJI_PICKER_FLOATING_UPSELL;
  i.useEffect(() => {
    J || O.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
      type: t,
      is_animated: et,
      is_external: en,
      has_search_query: null != q && "" !== q,
      location: M(x({}, U), {
        object: er
      }),
      location_stack: Q,
      sku_id: (0, I.Wz)(I.ZP.getSkuIdForPremiumType(R.p9.TIER_2))
    })
  }, [U, Q, q, et, en, t, er, J]);
  let ei = () => z ? P.NW.string(P.t["Gd/XHB"]) : P.NW.string(P.t.P3etAg),
    eo = (0, s.e7)([p.Z], () => p.Z.affinities),
    ea = (0, s.e7)([p.Z], () => p.Z.hasFetched);
  i.useEffect(() => {
    ea || c.MH()
  }, [ea]);
  let es = eo.length > 1 && $,
    el = () => (0, r.jsx)(b.Z, {
      containerContext: G,
      image: {
        url: W,
        width: 220,
        height: 132
      },
      title: P.NW.string(P.t["0+11FB"]),
      description: P.NW.string(P.t.dURIzc),
      enableSocialProof: es,
      analyticsLocationSection: A.jXE.EMOJI_UPSELL_POPOUT,
      onClose: D,
      upsellViewedTrackingData: {
        type: t,
        is_external: en,
        location: M(x({}, U), {
          object: er
        }),
        location_stack: Q,
        sku_id: (0, I.Wz)(I.ZP.getSkuIdForPremiumType(R.p9.TIER_2)),
        has_search_query: null != q && "" !== q,
        is_animated: et
      }
    });
  return J ? el() : (0, r.jsxs)("div", {
    className: a()(w.premiumPromo, {
      [w.unifyTrialUpsell]: z
    }),
    children: [(0, r.jsx)(l.P3F, {
      className: w.premiumPromoClose,
      onClick: D,
      children: P.NW.string(P.t.cpT0Cg)
    }), z ? (0, r.jsx)(g.ZP, {
      type: R.cd.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI,
      subscriptionTier: R.Si.TIER_2,
      onClose: D,
      trialOffer: Y,
      discountOffer: K,
      children: P.NW.format(P.t.se13Fh, {
        onClick: V
      })
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        alt: "",
        className: w.premiumPromoImage,
        src: H
      }), (0, r.jsx)("div", {
        className: w.premiumPromoTitle,
        children: P.NW.string(P.t["1SsvhY"])
      }), (0, r.jsx)("div", {
        className: w.premiumPromoDescription,
        children: P.NW.format(P.t.se13Fh, {
          onClick: V
        })
      })]
    }), !z && (0, r.jsx)(E.Z, {
      subscriptionTier: R.Si.TIER_2,
      submitting: Z,
      premiumModalAnalyticsLocation: {
        section: A.jXE.EMOJI_PICKER_POPOUT,
        object: A.qAy.BUTTON_CTA
      },
      size: l.zxk.Sizes.SMALL,
      color: l.zxk.Colors.GREEN,
      onClick: () => {
        F(!0)
      },
      onSubscribeModalClose: e => {
        F(!1), e && D()
      },
      buttonText: ei()
    })]
  })
}