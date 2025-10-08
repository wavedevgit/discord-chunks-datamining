/** Chunk was on 24920 **/
/** chunk id: 333451, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk697485 = require("./697485.js");

function M(e) {
  let {
    shouldUpsellFromNoneTier: n
  } = e, t = (0, a.e7)([S.default], () => S.default.locale);
  return (0, i.jsxs)("div", {
    className: x.perksList,
    children: [(0, i.jsx)(h.Z, {
      icon: u.$Eu,
      iconClassName: x.perkIconGuild,
      description: b.intl.formatToPlainString(b.t.sQBgs7, {
        numFreeGuildSubscriptions: O.cb
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), (0, i.jsx)(h.Z, {
      icon: u.$Eu,
      iconClassName: x.perkIconGuild,
      description: b.intl.formatToPlainString(b.t["1A6vXl"], {
        percent: (0, y.T3)(t, O.Rr / 100)
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), n ? (0, i.jsx)(h.Z, {
      icon: u.EO4,
      iconClassName: x.perkIconChatPerks,
      description: b.intl.string(b.t.Z9b2x8)
    }) : null, (0, i.jsx)(h.Z, {
      icon: u.hGI,
      iconClassName: x.perkIconStream,
      description: b.intl.string(b.t["8dqG5O"])
    }), (0, i.jsx)(h.Z, {
      icon: u.rG2,
      iconClassName: x.perkIconUpload,
      description: b.intl.string(b.t.cBorIy)
    })]
  })
}

function T(e) {
  var n;
  let {
    premiumSubscriptionPlan: t,
    onClose: r,
    onBack: a,
    onSkip: h,
    onSubscriptionConfirmation: S,
    analyticsLocation: y,
    analyticsSourceLocation: T,
    priceOptions: L
  } = e, {
    analyticsLocations: j,
    sourceAnalyticsLocations: C
  } = (0, p.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: A
  } = (0, u.TCT)(), k = (0, o.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE, R = null == t || null == t.premiumSubscriptionType, v = f.ZP.getPrice(O.Xh.PREMIUM_MONTH_TIER_2, false, false, L), D = (0, I.T4)(v.amount, v.currency), Z = (0, P.N)(), w = null == Z ? true : Z.trial_id, U = (null == Z || null == (n = Z.subscription_trial) ? true : n.sku_id) === O.Si.TIER_2;
  return l.useEffect(() => {
    g.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
      type: O.cd.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: C
    })
  }, [C]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(u.hzk, {
      "data-migration-pending": true,
      className: x.content,
      children: [(0, i.jsx)(u.olH, {
        "data-migration-pending": true,
        onClick: r,
        className: x.closeButton
      }), U && (0, i.jsx)(_.dz, {
        className: x.premiumTrialBadge
      }), (0, i.jsx)("div", {
        className: s()(x.upsellImage, {
          [x.upsellImageWithTrialOffer]: U
        })
      }), (0, i.jsx)("div", {
        className: x.bodyText,
        children: null != w ? b.intl.string(b.t.AoSzEh) : b.intl.format(b.t["7vePZW"], {
          monthlyPrice: D
        })
      }), (0, i.jsx)(M, {
        shouldUpsellFromNoneTier: R
      })]
    }), (0, i.jsxs)(u.mzw, {
      "data-migration-pending": true,
      align: m.Z.Align.CENTER,
      justify: m.Z.Justify.END,
      children: [(0, i.jsxs)("div", {
        className: x.footerRight,
        children: [(0, i.jsx)(c.zx, {
          "data-migration-pending": true,
          look: c.zx.Looks.LINK,
          color: k,
          onClick: h,
          children: b.intl.string(b.t["SI/adn"])
        }), (0, i.jsx)(u.zxk, {
          variant: "active",
          text: null != w ? b.intl.string(b.t["Gd/XHB"]) : b.intl.string(b.t.p2moio),
          type: "submit",
          onClick: () => {
            var e, n;
            r(), (0, E.Z)({
              initialPlanId: null,
              subscriptionTier: O.Si.TIER_2,
              analyticsLocations: j,
              analyticsObject: (e = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    i = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), i.forEach(function(n) {
                    var i;
                    i = t[n], n in e ? Object.defineProperty(e, n, {
                      value: i,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[n] = i
                  })
                }
                return e
              }({}, y), n = n = {
                section: N.jXE.PREMIUM_GUILD_PURCHASE_MODAL
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var i = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, i)
                }
                return t
              })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }), e),
              analyticsSourceLocation: T,
              onSubscriptionConfirmation: S,
              trialId: w
            })
          }
        })]
      }), (0, i.jsx)("div", {
        className: x.backStep,
        children: (0, i.jsx)(c.zx, {
          "data-migration-pending": true,
          color: k,
          look: c.zx.Looks.LINK,
          size: c.zx.Sizes.NONE,
          onClick: () => a(),
          children: b.intl.string(b.t["13/7kZ"])
        })
      })]
    })]
  })
}