/** Chunk was on 28793 **/
/** chunk id: 333451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk421077 = require("./421077.js");

function T(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, a.e7)([f.default], () => f.default.locale);
  return (0, i.jsxs)("div", {
    className: M.perksList,
    children: [(0, i.jsx)(P.Z, {
      icon: u.Ucv,
      iconClassName: M.perkIconGuild,
      description: O.intl.formatToPlainString(O.t.sQBgs2, {
        numFreeGuildSubscriptions: N.cb
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), (0, i.jsx)(P.Z, {
      icon: u.Ucv,
      iconClassName: M.perkIconGuild,
      description: O.intl.formatToPlainString(O.t["1A6vXi"], {
        percent: (0, g.T3)(n, N.Rr / 100)
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), t ? (0, i.jsx)(P.Z, {
      icon: u.EO4,
      iconClassName: M.perkIconChatPerks,
      description: O.intl.string(O.t.Z9b2x2)
    }) : null, (0, i.jsx)(P.Z, {
      icon: u.hGI,
      iconClassName: M.perkIconStream,
      description: O.intl.string(O.t["8dqG5E"])
    }), (0, i.jsx)(P.Z, {
      icon: u.rG2,
      iconClassName: M.perkIconUpload,
      description: O.intl.string(O.t.cBorIy)
    })]
  })
}

function x(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: r,
    onBack: a,
    onSkip: P,
    onSubscriptionConfirmation: f,
    analyticsLocation: g,
    analyticsSourceLocation: x,
    priceOptions: k
  } = e, {
    analyticsLocations: L,
    sourceAnalyticsLocations: C
  } = (0, d.ZP)(p.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: j
  } = (0, u.TCT)(), A = (0, s.ap)(j) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE, R = null == n || null == n.premiumSubscriptionType, v = S.ZP.getPrice(N.Xh.PREMIUM_MONTH_TIER_2, false, false, k), D = (0, y.T4)(v.amount, v.currency), w = (0, _.N)(), Z = null == w ? true : w.trial_id, U = (null == w || null == (t = w.subscription_trial) ? true : t.sku_id) === N.Si.TIER_2;
  return l.useEffect(() => {
    h.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: C
    })
  }, [C]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(u.hzk, {
      "data-migration-pending": true,
      className: M.content,
      children: [(0, i.jsx)(u.olH, {
        "data-migration-pending": true,
        onClick: r,
        className: M.closeButton
      }), U && (0, i.jsx)(E.dz, {
        className: M.premiumTrialBadge
      }), (0, i.jsx)("div", {
        className: o()(M.upsellImage, {
          [M.upsellImageWithTrialOffer]: U
        })
      }), (0, i.jsx)("div", {
        className: M.bodyText,
        children: null != Z ? O.intl.string(O.t.AoSzEr) : O.intl.format(O.t["7vePZb"], {
          monthlyPrice: D
        })
      }), (0, i.jsx)(T, {
        shouldUpsellFromNoneTier: R
      })]
    }), (0, i.jsxs)(u.mzw, {
      "data-migration-pending": true,
      align: m.Z.Align.CENTER,
      justify: m.Z.Justify.END,
      children: [(0, i.jsxs)("div", {
        className: M.footerRight,
        children: [(0, i.jsx)(c.zx, {
          "data-migration-pending": true,
          look: c.zx.Looks.LINK,
          color: A,
          onClick: P,
          children: O.intl.string(O.t["SI/adm"])
        }), (0, i.jsx)(u.Button, {
          variant: "active",
          text: null != Z ? O.intl.string(O.t["Gd/XHF"]) : O.intl.string(O.t.p2moip),
          type: "submit",
          onClick: () => {
            var e, t;
            r(), (0, b.Z)({
              initialPlanId: null,
              subscriptionTier: N.Si.TIER_2,
              analyticsLocations: L,
              analyticsObject: (e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), i.forEach(function(t) {
                    var i;
                    i = n[t], t in e ? Object.defineProperty(e, t, {
                      value: i,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = i
                  })
                }
                return e
              }({}, g), t = t = {
                section: I.jXE.PREMIUM_GUILD_PURCHASE_MODAL
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, i)
                }
                return n
              })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }), e),
              analyticsSourceLocation: x,
              onSubscriptionConfirmation: f,
              trialId: Z
            })
          }
        })]
      }), (0, i.jsx)("div", {
        className: M.backStep,
        children: (0, i.jsx)(c.zx, {
          "data-migration-pending": true,
          color: A,
          look: c.zx.Looks.LINK,
          size: c.zx.Sizes.NONE,
          onClick: () => a(),
          children: O.intl.string(O.t["13/7kX"])
        })
      })]
    })]
  })
}