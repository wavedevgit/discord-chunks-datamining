/** Chunk was on 24920 **/
/** chunk id: 333451, original params: e,t,n (module,exports,require) **/
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
  Chunk22706 = require("./22706.js");

function L(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, a.e7)([S.default], () => S.default.locale);
  return (0, i.jsxs)("div", {
    className: M.perksList,
    children: [(0, i.jsx)(_.Z, {
      icon: u.Ucv,
      iconClassName: M.perkIconGuild,
      description: b.intl.formatToPlainString(b.t.sQBgs2, {
        numFreeGuildSubscriptions: O.cb
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), (0, i.jsx)(_.Z, {
      icon: u.Ucv,
      iconClassName: M.perkIconGuild,
      description: b.intl.formatToPlainString(b.t["1A6vXi"], {
        percent: (0, y.T3)(n, O.Rr / 100)
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), t ? (0, i.jsx)(_.Z, {
      icon: u.EO4,
      iconClassName: M.perkIconChatPerks,
      description: b.intl.string(b.t.Z9b2x2)
    }) : null, (0, i.jsx)(_.Z, {
      icon: u.hGI,
      iconClassName: M.perkIconStream,
      description: b.intl.string(b.t["8dqG5E"])
    }), (0, i.jsx)(_.Z, {
      icon: u.rG2,
      iconClassName: M.perkIconUpload,
      description: b.intl.string(b.t.cBorIy)
    })]
  })
}

function T(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: r,
    onBack: a,
    onSkip: _,
    onSubscriptionConfirmation: S,
    analyticsLocation: y,
    analyticsSourceLocation: T,
    priceOptions: x
  } = e, {
    analyticsLocations: j,
    sourceAnalyticsLocations: C
  } = (0, p.ZP)(d.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: A
  } = (0, u.TCT)(), R = (0, o.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE, v = null == n || null == n.premiumSubscriptionType, k = f.ZP.getPrice(O.Xh.PREMIUM_MONTH_TIER_2, false, false, x), D = (0, I.T4)(k.amount, k.currency), Z = (0, P.N)(), w = null == Z ? true : Z.trial_id, U = (null == Z || null == (t = Z.subscription_trial) ? true : t.sku_id) === O.Si.TIER_2;
  return l.useEffect(() => {
    g.default.track(N.rMx.PREMIUM_UPSELL_VIEWED, {
      type: O.cd.GUILD_PREMIUM_UPSELL_MODAL,
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
      }), U && (0, i.jsx)(h.dz, {
        className: M.premiumTrialBadge
      }), (0, i.jsx)("div", {
        className: s()(M.upsellImage, {
          [M.upsellImageWithTrialOffer]: U
        })
      }), (0, i.jsx)("div", {
        className: M.bodyText,
        children: null != w ? b.intl.string(b.t.AoSzEr) : b.intl.format(b.t["7vePZb"], {
          monthlyPrice: D
        })
      }), (0, i.jsx)(L, {
        shouldUpsellFromNoneTier: v
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
          color: R,
          onClick: _,
          children: b.intl.string(b.t["SI/adm"])
        }), (0, i.jsx)(u.Button, {
          variant: "active",
          text: null != w ? b.intl.string(b.t["Gd/XHF"]) : b.intl.string(b.t.p2moip),
          type: "submit",
          onClick: () => {
            var e, t;
            r(), (0, E.Z)({
              initialPlanId: null,
              subscriptionTier: O.Si.TIER_2,
              analyticsLocations: j,
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
              }({}, y), t = t = {
                section: N.jXE.PREMIUM_GUILD_PURCHASE_MODAL
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
              analyticsSourceLocation: T,
              onSubscriptionConfirmation: S,
              trialId: w
            })
          }
        })]
      }), (0, i.jsx)("div", {
        className: M.backStep,
        children: (0, i.jsx)(c.zx, {
          "data-migration-pending": true,
          color: R,
          look: c.zx.Looks.LINK,
          size: c.zx.Sizes.NONE,
          onClick: () => a(),
          children: b.intl.string(b.t["13/7kX"])
        })
      })]
    })]
  })
}