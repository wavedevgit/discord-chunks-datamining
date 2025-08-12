/** Chunk was on 24920 **/
/** chunk id: 333451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk837852 = require("./837852.js");

function M(e) {
  let {
    shouldUpsellFromNoneTier: t
  } = e, n = (0, o.e7)([S.default], () => S.default.locale);
  return (0, l.jsxs)("div", {
    className: x.perksList,
    children: [(0, l.jsx)(h.Z, {
      icon: u.$Eu,
      iconClassName: x.perkIconGuild,
      description: b.intl.formatToPlainString(b.t.sQBgs7, {
        numFreeGuildSubscriptions: g.cb
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), (0, l.jsx)(h.Z, {
      icon: u.$Eu,
      iconClassName: x.perkIconGuild,
      description: b.intl.formatToPlainString(b.t["1A6vXl"], {
        percent: (0, f.T3)(n, g.Rr / 100)
      }),
      color: u.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), t ? (0, l.jsx)(h.Z, {
      icon: u.EO4,
      iconClassName: x.perkIconChatPerks,
      description: b.intl.string(b.t.Z9b2x8)
    }) : null, (0, l.jsx)(h.Z, {
      icon: u.hGI,
      iconClassName: x.perkIconStream,
      description: b.intl.string(b.t["8dqG5O"])
    }), (0, l.jsx)(h.Z, {
      icon: u.rG2,
      iconClassName: x.perkIconUpload,
      description: b.intl.string(b.t.cBorIy)
    })]
  })
}

function L(e) {
  var t;
  let {
    premiumSubscriptionPlan: n,
    onClose: i,
    onBack: o,
    onSkip: h,
    onSubscriptionConfirmation: S,
    analyticsLocation: f,
    analyticsSourceLocation: L,
    priceOptions: T
  } = e, {
    analyticsLocations: j,
    sourceAnalyticsLocations: C
  } = (0, d.ZP)(p.Z.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: A
  } = (0, u.TCT)(), k = (0, a.ap)(A) ? c.zx.Colors.PRIMARY : c.zx.Colors.WHITE, R = null == n || null == n.premiumSubscriptionType, D = I.ZP.getPrice(g.Xh.PREMIUM_MONTH_TIER_2, false, false, T), v = (0, N.T4)(D.amount, D.currency), w = (0, P.N)(), Z = null == w ? true : w.trial_id, U = (null == w || null == (t = w.subscription_trial) ? true : t.sku_id) === g.Si.TIER_2;
  return r.useEffect(() => {
    y.default.track(O.rMx.PREMIUM_UPSELL_VIEWED, {
      type: g.cd.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: C
    })
  }, [C]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.hzk, {
      className: x.content,
      children: [(0, l.jsx)(u.olH, {
        onClick: i,
        className: x.closeButton
      }), U && (0, l.jsx)(_.dz, {
        className: x.premiumTrialBadge
      }), (0, l.jsx)("div", {
        className: s()(x.upsellImage, {
          [x.upsellImageWithTrialOffer]: U
        })
      }), (0, l.jsx)("div", {
        className: x.bodyText,
        children: null != Z ? b.intl.string(b.t.AoSzEh) : b.intl.format(b.t["7vePZW"], {
          monthlyPrice: v
        })
      }), (0, l.jsx)(M, {
        shouldUpsellFromNoneTier: R
      })]
    }), (0, l.jsxs)(u.mzw, {
      align: E.Z.Align.CENTER,
      justify: E.Z.Justify.END,
      children: [(0, l.jsxs)("div", {
        className: x.footerRight,
        children: [(0, l.jsx)(c.zx, {
          look: c.zx.Looks.LINK,
          color: k,
          onClick: h,
          children: b.intl.string(b.t["SI/adn"])
        }), (0, l.jsx)(u.zxk, {
          variant: "active",
          text: null != Z ? b.intl.string(b.t["Gd/XHB"]) : b.intl.string(b.t.p2moio),
          type: "submit",
          onClick: () => {
            var e, t;
            i(), (0, m.Z)({
              initialPlanId: null,
              subscriptionTier: g.Si.TIER_2,
              analyticsLocations: j,
              analyticsObject: (e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
                  })
                }
                return e
              }({}, f), t = t = {
                section: O.jXE.PREMIUM_GUILD_PURCHASE_MODAL
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              }), e),
              analyticsSourceLocation: L,
              onSubscriptionConfirmation: S,
              trialId: Z
            })
          }
        })]
      }), (0, l.jsx)("div", {
        className: x.backStep,
        children: (0, l.jsx)(c.zx, {
          color: k,
          look: c.zx.Looks.LINK,
          size: c.zx.Sizes.NONE,
          onClick: () => o(),
          children: b.intl.string(b.t["13/7kZ"])
        })
      })]
    })]
  })
}