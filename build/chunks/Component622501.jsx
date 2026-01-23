/** Chunk was on 48982 **/
/** chunk id: 622501, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk234419 = require("./234419.js"),
  Chunk811611 = require("./811611.jsx"),
  Chunk901017 = require("./901017.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk954571 = require("./954571.js"),
  Chunk252424 = require("./252424.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk993605 = require("./993605.js");

function h(e) {
  let {
    shouldUpsellFromNoneTier: n
  } = e, t = (0, o.bG)([y.default], () => y.default.locale);
  return (0, l.jsxs)("div", {
    className: M.mH,
    children: [(0, l.jsx)(A.A, {
      icon: u._Jp,
      iconClassName: M.pl,
      description: O.intl.formatToPlainString(O.t.sQBgs2, {
        numFreeGuildSubscriptions: N.M4
      }),
      color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), (0, l.jsx)(A.A, {
      icon: u._Jp,
      iconClassName: M.pl,
      description: O.intl.formatToPlainString(O.t["1A6vXi"], {
        percent: (0, g.l9)(t, N.oX / 100)
      }),
      color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK.css
    }), n ? (0, l.jsx)(A.A, {
      icon: u.nm2,
      iconClassName: M.zO,
      description: O.intl.string(O.t.Z9b2x2)
    }) : null, (0, l.jsx)(A.A, {
      icon: u.Fzq,
      iconClassName: M.Kg,
      description: O.intl.string(O.t["8dqG5E"])
    }), (0, l.jsx)(A.A, {
      icon: u.JMY,
      iconClassName: M.$z,
      description: O.intl.string(O.t.cBorIy)
    })]
  })
}

function T(e) {
  var n;
  let {
    premiumSubscriptionPlan: t,
    onClose: r,
    onBack: o,
    onSkip: A,
    onSubscriptionConfirmation: y,
    analyticsLocation: g,
    analyticsSourceLocation: T,
    priceOptions: L
  } = e, {
    analyticsLocations: j,
    sourceAnalyticsLocations: C
  } = (0, d.Ay)(p.A.GUILD_BOOSTING_PREMIUM_UPSELL), {
    theme: x
  } = (0, u.wRf)(), D = (0, a.qB)(x) ? c.$n.Colors.PRIMARY : c.$n.Colors.WHITE, R = null == t || null == t.premiumSubscriptionType, k = f.Ay.getPrice(N.gD.PREMIUM_MONTH_TIER_2, false, false, L), w = (0, S.$g)(k.amount, k.currency), v = (0, E.V)(), G = null == v ? true : v.trial_id, U = (null == v || null == (n = v.subscription_trial) ? true : n.sku_id) === N.pe.TIER_2;
  return i.useEffect(() => {
    b.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
      type: N.e.GUILD_PREMIUM_UPSELL_MODAL,
      location_stack: C
    })
  }, [C]), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(u.$mQ, {
      "data-migration-pending": true,
      className: M.Qs,
      children: [(0, l.jsx)(u.s_y, {
        "data-migration-pending": true,
        onClick: r,
        className: M.b
      }), U && (0, l.jsx)(P.Vq, {
        className: M.Fg
      }), (0, l.jsx)("div", {
        className: s()(M.Tn, {
          [M.NH]: U
        })
      }), (0, l.jsx)("div", {
        className: M.G3,
        children: null != G ? O.intl.string(O.t.AoSzEr) : O.intl.format(O.t["7vePZb"], {
          monthlyPrice: w
        })
      }), (0, l.jsx)(h, {
        shouldUpsellFromNoneTier: R
      })]
    }), (0, l.jsxs)(u.jlY, {
      "data-migration-pending": true,
      align: _.A.Align.CENTER,
      justify: _.A.Justify.END,
      children: [(0, l.jsxs)("div", {
        className: M.wV,
        children: [(0, l.jsx)(c.$n, {
          "data-migration-pending": true,
          look: c.$n.Looks.LINK,
          color: D,
          onClick: A,
          children: O.intl.string(O.t["SI/adm"])
        }), (0, l.jsx)(u.Button, {
          variant: "active",
          text: null != G ? O.intl.string(O.t["Gd/XHF"]) : O.intl.string(O.t.p2moip),
          type: "submit",
          onClick: () => {
            var e, n;
            r(), (0, m.A)({
              initialPlanId: null,
              subscriptionTier: N.pe.TIER_2,
              analyticsLocations: j,
              analyticsObject: (e = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), l.forEach(function(n) {
                    var l;
                    l = t[n], n in e ? Object.defineProperty(e, n, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[n] = l
                  })
                }
                return e
              }({}, g), n = n = {
                section: I.JJy.PREMIUM_GUILD_PURCHASE_MODAL
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, l)
                }
                return t
              })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }), e),
              analyticsSourceLocation: T,
              onSubscriptionConfirmation: y,
              trialId: G
            })
          }
        })]
      }), (0, l.jsx)("div", {
        className: M.uA,
        children: (0, l.jsx)(c.$n, {
          "data-migration-pending": true,
          color: D,
          look: c.$n.Looks.LINK,
          size: c.$n.Sizes.NONE,
          onClick: () => o(),
          children: O.intl.string(O.t["13/7kX"])
        })
      })]
    })]
  })
}