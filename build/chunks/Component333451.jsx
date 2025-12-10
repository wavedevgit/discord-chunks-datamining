/** Chunk was on web.js **/
/** chunk id: 333451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk639119 = require("./639119.js"),
  Chunk165583 = require("./165583.jsx"),
  Chunk263954 = require("./263954.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22706 = require("./22706.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function P(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function w(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, s.e7)([E.default], () => E.default.locale);
  return (0, r.jsxs)("div", {
    className: C.perksList,
    children: [(0, r.jsx)(g.Z, {
      icon: u.Ucv,
      iconClassName: C.perkIconGuild,
      description: T.intl.formatToPlainString(T.t.sQBgs2, {
        numFreeGuildSubscriptions: I.cb
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), (0, r.jsx)(g.Z, {
      icon: u.Ucv,
      iconClassName: C.perkIconGuild,
      description: T.intl.formatToPlainString(T.t["1A6vXi"], {
        percent: (0, y.T3)(n, I.Rr / 100)
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), t ? (0, r.jsx)(g.Z, {
      icon: u.EO4,
      iconClassName: C.perkIconChatPerks,
      description: T.intl.string(T.t.Z9b2x2)
    }) : null, (0, r.jsx)(g.Z, {
      icon: u.hGI,
      iconClassName: C.perkIconStream,
      description: T.intl.string(T.t["8dqG5E"])
    }), (0, r.jsx)(g.Z, {
      icon: u.rG2,
      iconClassName: C.perkIconUpload,
      description: T.intl.string(T.t.cBorIy)
    })]
  })
}

function D(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: a,
    onBack: s,
    onSkip: g,
    onSubscriptionConfirmation: E,
    analyticsLocation: y,
    analyticsSourceLocation: A,
    priceOptions: P
  } = e, {
    analyticsLocations: D,
    sourceAnalyticsLocations: x
  } = (0, f.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: L
  } = (0, u.TCT)(), j = (0, l.ap)(L) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE, M = null == n || null == n.premiumSubscriptionType, k = O.ZP.getPrice(I.Xh.PREMIUM_MONTH_TIER_2, false, false, P), U = (0, v.T4)(k.amount, k.currency), G = (0, m.N)(), Z = null == G ? true : G.trial_id, B = (null == G || null == (t = G.subscription_trial) ? true : t.sku_id) === I.Si.TIER_2;
  return i.useEffect(() => {
    b.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
      type: I.cd.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: x
    })
  }, [x]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(u.hzk, {
      "data-migration-pending": true,
      className: C.content,
      children: [(0, r.jsx)(u.olH, {
        "data-migration-pending": true,
        onClick: a,
        className: C.closeButton
      }), B && (0, r.jsx)(h.dz, {
        className: C.premiumTrialBadge
      }), (0, r.jsx)("div", {
        className: o()(C.upsellImage, {
          [C.upsellImageWithTrialOffer]: B
        })
      }), (0, r.jsx)("div", {
        className: C.bodyText,
        children: null != Z ? T.intl.string(T.t.AoSzEr) : T.intl.format(T.t["7vePZb"], {
          monthlyPrice: U
        })
      }), (0, r.jsx)(w, {
        shouldUpsellFromNoneTier: M
      })]
    }), (0, r.jsxs)(u.mzw, {
      "data-migration-pending": true,
      align: p.Z.Align.CENTER,
      justify: p.Z.Justify.END,
      children: [(0, r.jsxs)("div", {
        className: C.footerRight,
        children: [(0, r.jsx)(c.zx, {
          "data-migration-pending": true,
          look: c.zx.Looks.LINK,
          color: j,
          onClick: g,
          children: T.intl.string(T.t["SI/adm"])
        }), (0, r.jsx)(u.Button, {
          variant: "active",
          text: null != Z ? T.intl.string(T.t["Gd/XHF"]) : T.intl.string(T.t.p2moip),
          type: "submit",
          onClick: () => {
            a(), (0, _.Z)({
              initialPlanId: null,
              subscriptionTier: I.Si.TIER_2,
              analyticsLocations: D,
              analyticsObject: R(N({}, y), {
                section: S.jXE.PREMIUM_GUILD_PURCHASE_MODAL
              }),
              analyticsSourceLocation: A,
              onSubscriptionConfirmation: E,
              trialId: Z
            })
          }
        })]
      }), (0, r.jsx)("div", {
        className: C.backStep,
        children: (0, r.jsx)(c.zx, {
          "data-migration-pending": true,
          color: j,
          look: c.zx.Looks.LINK,
          size: c.zx.Sizes.NONE,
          onClick: () => s(),
          children: T.intl.string(T.t["13/7kX"])
        })
      })]
    })]
  })
}