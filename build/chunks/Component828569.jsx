/** Chunk was on 76157 **/
/** chunk id: 828569, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => M
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk355467 = require("./355467.js"),
  Chunk821849 = require("./821849.js"),
  Chunk15640 = require("./15640.js"),
  Chunk563132 = require("./563132.jsx"),
  Chunk409813 = require("./409813.js"),
  Chunk622909 = require("./622909.js"),
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
  Chunk773491 = require("./773491.js");
let T = e => {
    let {
      locale: r
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(y.Z, {
        icon: a.SlE,
        iconClassName: I.iconColorPurple,
        description: v.intl.string(v.t.uAfKTe)
      }), (0, n.jsx)(y.Z, {
        icon: a.$zw,
        iconClassName: I.iconColorPink,
        description: v.intl.formatToPlainString(v.t.sWnv5M, {
          numGuildSubscriptions: k.cb,
          discountPercent: (0, C.T3)(r, k.Rr / 100)
        })
      }), (0, n.jsx)(y.Z, {
        icon: a.EO4,
        iconClassName: I.iconColorYellow,
        description: v.intl.string(v.t.pqHIf7)
      })]
    })
  },
  N = e => {
    let {
      trialOffer: r,
      discountOffer: o,
      isLoading: i,
      price: c,
      onClose: u
    } = e, f = (0, s.e7)([x.default], () => x.default.locale), p = null != r || null != o;
    return (0, n.jsxs)("div", {
      className: I.wrapper,
      children: [(0, n.jsx)(a.olH, {
        "data-migration-pending": true,
        onClick: u,
        className: I.closeButton
      }), p && (0, n.jsx)(h.dz, {
        className: I.premiumTrialBadge
      }), (0, n.jsx)("img", {
        className: l()(I.heroImage, {
          [I.heroImageWithTrialOffer]: p
        }),
        src: t(178632),
        alt: ""
      }), i ? (0, n.jsx)(a.$jN, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/normal",
          className: I.heading,
          children: null == c ? (0, n.jsx)(a.$jN, {
            type: a.$jN.Type.PULSING_ELLIPSIS
          }) : v.intl.format(v.t.TBsJfQ, {
            monthlyPrice: (0, w.T4)(c.amount, c.currency)
          })
        }), (0, n.jsx)("div", {
          className: I.perks,
          children: (0, n.jsx)(T, {
            locale: f
          })
        })]
      })]
    })
  },
  L = e => {
    let {
      trialOffer: r,
      discountOffer: t,
      onClose: o
    } = e, i = {
      section: E.jXE.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, n.jsxs)(a.mzw, {
      "data-migration-pending": true,
      className: I.footer,
      children: [(0, n.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: v.intl.string(v.t.cpT0Cq),
        onClick: o
      }), (0, n.jsx)(b.Z, {
        textOptions: {
          textOverride: null != r || null != t ? v.intl.string(v.t["Gd/XHF"]) : true
        },
        premiumModalAnalyticsLocation: i,
        subscriptionTier: k.Si.TIER_2,
        size: c.zx.Sizes.SMALL,
        color: c.zx.Colors.GREEN,
        onClick: () => {
          o()
        }
      })]
    })
  };

function M(e) {
  var r, t, {
      onClose: i
    } = e,
    l = function(e, r) {
      if (null == e) return {};
      var t, n, o = function(e, r) {
        if (null == e) return {};
        var t, n, o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++) t = i[n], r.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }(e, r);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (n = 0; n < i.length; n++) t = i[n], !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
      }
      return o
    }(e, ["onClose"]);
  let c = (0, d.V)(),
    b = (0, s.e7)([_.Z], () => _.Z.hasFetchedPaymentSources),
    h = c && b,
    y = (0, O.N)(),
    x = (0, g.N)();
  o.useEffect(() => {
    u.Z.wait(() => {
      (0, f.tZ)(), (0, p.Y2)(null, null, E.JjL.DISCOVERY)
    })
  }, []);
  let C = h ? S.ZP.getDefaultPrice(k.Xh.PREMIUM_MONTH_TIER_2) : null;
  return (0, n.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(a.Y0X, (r = function(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
          n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.forEach(function(r) {
          var n;
          n = t[r], r in e ? Object.defineProperty(e, r, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[r] = n
        })
      }
      return e
    }({
      "data-migration-pending": true
    }, l), t = t = {
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      parentComponent: "StickerPackPremiumUpsellModal",
      children: (0, n.jsx)(P.Z, {
        hideBreadcrumbs: true,
        body: (0, n.jsx)(N, {
          trialOffer: y,
          discountOffer: x,
          isLoading: !h,
          price: C,
          onClose: i
        }),
        footer: (0, n.jsx)(L, {
          trialOffer: y,
          discountOffer: x,
          onClose: i
        }),
        steps: [j.h8.PREMIUM_UPSELL],
        currentStep: j.h8.PREMIUM_UPSELL
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : (function(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t.push.apply(t, n)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e))
    }), r))
  })
}