/** Chunk was on 53274 **/
/** chunk id: 397313, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => L
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk384904 = require("./384904.js"),
  Chunk73825 = require("./73825.js"),
  Chunk160946 = require("./160946.js"),
  Chunk156312 = require("./156312.jsx"),
  Chunk166532 = require("./166532.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk465794 = require("./465794.jsx"),
  Chunk811611 = require("./811611.jsx"),
  Chunk632638 = require("./632638.jsx"),
  Chunk901017 = require("./901017.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk295405 = require("./295405.js"),
  Chunk252424 = require("./252424.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk158057 = require("./158057.js");
let N = e => {
    let {
      locale: t
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(x.A, {
        icon: a.tEP,
        iconClassName: w.xy,
        description: I.intl.string(I.t.uAfKTe)
      }), (0, n.jsx)(x.A, {
        icon: a.vRF,
        iconClassName: w.Jx,
        description: I.intl.formatToPlainString(I.t.sWnv5M, {
          numGuildSubscriptions: S.M4,
          discountPercent: (0, v.l9)(t, S.oX / 100)
        })
      }), (0, n.jsx)(x.A, {
        icon: a.nm2,
        iconClassName: w.Zr,
        description: I.intl.string(I.t.pqHIf7)
      })]
    })
  },
  R = e => {
    let {
      trialOffer: t,
      discountOffer: o,
      isLoading: i,
      price: l,
      onClose: p
    } = e, u = (0, c.bG)([P.default], () => P.default.locale), d = null != t || null != o;
    return (0, n.jsxs)("div", {
      className: w.iE,
      children: [(0, n.jsx)(a.s_y, {
        "data-migration-pending": true,
        onClick: p,
        className: w.b
      }), d && (0, n.jsx)(O.Vq, {
        className: w.Fg
      }), (0, n.jsx)("img", {
        className: s()(w.c8, {
          [w.mk]: d
        }),
        src: r(377191),
        alt: ""
      }), i ? (0, n.jsx)(a.y$y, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.Text, {
          variant: "text-md/normal",
          className: w.R_,
          children: null == l ? (0, n.jsx)(a.y$y, {
            type: a.y$y.Type.PULSING_ELLIPSIS
          }) : I.intl.format(I.t.TBsJfQ, {
            monthlyPrice: (0, E.$g)(l.amount, l.currency)
          })
        }), (0, n.jsx)("div", {
          className: w.md,
          children: (0, n.jsx)(N, {
            locale: u
          })
        })]
      })]
    })
  },
  M = e => {
    let {
      trialOffer: t,
      discountOffer: r,
      onClose: o
    } = e, i = {
      section: C.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, n.jsxs)(a.jlY, {
      "data-migration-pending": true,
      className: w.qr,
      children: [(0, n.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: I.intl.string(I.t.cpT0Cq),
        onClick: o
      }), (0, n.jsx)(j.A, {
        textOptions: {
          textOverride: null != t || null != r ? I.intl.string(I.t["Gd/XHF"]) : true
        },
        premiumModalAnalyticsLocation: i,
        subscriptionTier: S.pe.TIER_2,
        size: l.$n.Sizes.SMALL,
        color: l.$n.Colors.GREEN,
        onClick: () => {
          o()
        }
      })]
    })
  };

function L(e) {
  var t, r;
  let {
    onClose: i
  } = e, s = function(e, t) {
    if (null == e) return {};
    var r, n, o, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
        return o
      }(e, t), Object.getOwnPropertySymbols)
      for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) n = r[o], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["onClose"]), l = (0, f.Y)(), j = (0, c.bG)([h.A], () => h.A.hasFetchedPaymentSources), O = l && j, x = (0, b.V)(), P = (0, _.O)();
  o.useEffect(() => {
    p.h.wait(() => {
      (0, u.$o)(), (0, d.zS)(null, null, C.tF5.DISCOVERY)
    })
  }, []);
  let v = O ? k.Ay.getDefaultPrice(S.gD.PREMIUM_MONTH_TIER_2) : null;
  return (0, n.jsx)(m.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(a.EOs, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      "data-migration-pending": true
    }, s), r = r = {
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      parentComponent: "StickerPackPremiumUpsellModal",
      children: (0, n.jsx)(g.A, {
        hideBreadcrumbs: true,
        body: (0, n.jsx)(R, {
          trialOffer: x,
          discountOffer: P,
          isLoading: !O,
          price: v,
          onClose: i
        }),
        footer: (0, n.jsx)(M, {
          trialOffer: x,
          discountOffer: P,
          onClose: i
        }),
        steps: [y.pn.PREMIUM_UPSELL],
        currentStep: y.pn.PREMIUM_UPSELL
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))
  })
}