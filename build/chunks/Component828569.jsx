/** Chunk was on 76157 **/
/** chunk id: 828569, original params: e,r,n (module,exports,require) **/
require.d(exports, {
  default: () => M
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk15640 = require("./15640.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk767714 = require("./767714.jsx"),
  Chunk165583 = require("./165583.jsx"),
  Chunk185139 = require("./185139.jsx"),
  Chunk263954 = require("./263954.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk853872 = require("./853872.js"),
  Chunk930153 = require("./930153.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk803414 = require("./803414.js");
let N = e => {
    let {
      locale: r
    } = e;
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)(x.Z, {
        icon: a.SlE,
        iconClassName: E.iconColorPurple,
        description: S.intl.string(S.t.uAfKTe)
      }), (0, t.jsx)(x.Z, {
        icon: a.$zw,
        iconClassName: E.iconColorPink,
        description: S.intl.formatToPlainString(S.t.sWnv5M, {
          numGuildSubscriptions: w.cb,
          discountPercent: (0, k.T3)(r, w.Rr / 100)
        })
      }), (0, t.jsx)(x.Z, {
        icon: a.EO4,
        iconClassName: E.iconColorYellow,
        description: S.intl.string(S.t.pqHIf7)
      })]
    })
  },
  T = e => {
    let {
      trialOffer: r,
      discountOffer: o,
      isLoading: i,
      price: s,
      onClose: p
    } = e, u = (0, l.e7)([P.default], () => P.default.locale), d = null != r || null != o;
    return (0, t.jsxs)("div", {
      className: E.wrapper,
      children: [(0, t.jsx)(a.olH, {
        "data-migration-pending": true,
        onClick: p,
        className: E.closeButton
      }), d && (0, t.jsx)(h.dz, {
        className: E.premiumTrialBadge
      }), (0, t.jsx)("img", {
        className: c()(E.heroImage, {
          [E.heroImageWithTrialOffer]: d
        }),
        src: n(178632),
        alt: ""
      }), i ? (0, t.jsx)(a.$jN, {}) : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)(a.Text, {
          variant: "text-md/normal",
          className: E.heading,
          children: null == s ? (0, t.jsx)(a.$jN, {
            type: a.$jN.Type.PULSING_ELLIPSIS
          }) : S.intl.format(S.t.TBsJfQ, {
            monthlyPrice: (0, I.T4)(s.amount, s.currency)
          })
        }), (0, t.jsx)("div", {
          className: E.perks,
          children: (0, t.jsx)(N, {
            locale: u
          })
        })]
      })]
    })
  },
  L = e => {
    let {
      trialOffer: r,
      discountOffer: n,
      onClose: o
    } = e, i = {
      section: v.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, t.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: E.footer,
      children: [(0, t.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: S.intl.string(S.t.cpT0Cq),
        onClick: o
      }), (0, t.jsx)(O.Z, {
        textOptions: {
          textOverride: null != r || null != n ? S.intl.string(S.t["Gd/XHF"]) : true
        },
        premiumModalAnalyticsLocation: i,
        subscriptionTier: w.Si.TIER_2,
        size: s.zx.Sizes.SMALL,
        color: s.zx.Colors.GREEN,
        onClick: () => {
          o()
        }
      })]
    })
  };

function M(e) {
  var r, n, {
      onClose: i
    } = e,
    c = function(e, r) {
      if (null == e) return {};
      var n, t, o = function(e, r) {
        if (null == e) return {};
        var n, t, o = {},
          i = Object.keys(e);
        for (t = 0; t < i.length; t++) n = i[t], r.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, r);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (t = 0; t < i.length; t++) n = i[t], !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["onClose"]);
  let s = (0, f.V)(),
    O = (0, l.e7)([y.Z], () => y.Z.hasFetchedPaymentSources),
    h = s && O,
    x = (0, g.N)(),
    P = (0, _.Ng)();
  o.useEffect(() => {
    p.Z.wait(() => {
      (0, u.tZ)(), (0, d.Y2)(null, null, v.JjL.DISCOVERY)
    })
  }, []);
  let k = h ? C.ZP.getDefaultPrice(w.Xh.PREMIUM_MONTH_TIER_2) : null;
  return (0, t.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, t.jsx)(a.Y0X, (r = function(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {},
          t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), t.forEach(function(r) {
          var t;
          t = n[r], r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = t
        })
      }
      return e
    }({
      "data-migration-pending": true
    }, c), n = n = {
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      parentComponent: "StickerPackPremiumUpsellModal",
      children: (0, t.jsx)(b.Z, {
        hideBreadcrumbs: true,
        body: (0, t.jsx)(T, {
          trialOffer: x,
          discountOffer: P,
          isLoading: !h,
          price: k,
          onClose: i
        }),
        footer: (0, t.jsx)(L, {
          trialOffer: x,
          discountOffer: P,
          onClose: i
        }),
        steps: [j.h8.PREMIUM_UPSELL],
        currentStep: j.h8.PREMIUM_UPSELL
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : (function(e, r) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var t = Object.getOwnPropertySymbols(e);
        n.push.apply(n, t)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e))
    }), r))
  })
}