/** Chunk was on 53274 **/
/** chunk id: 397313, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => L
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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
let I = e => {
    let {
      locale: t
    } = e;
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(P.A, {
        icon: o.tEP,
        iconClassName: w.xy,
        description: N.intl.string(N.t.uAfKTe)
      }), (0, n.jsx)(P.A, {
        icon: o.vRF,
        iconClassName: w.Jx,
        description: N.intl.formatToPlainString(N.t.sWnv5M, {
          numGuildSubscriptions: C.M4,
          discountPercent: (0, v.l9)(t, C.oX / 100)
        })
      }), (0, n.jsx)(P.A, {
        icon: o.nm2,
        iconClassName: w.Zr,
        description: N.intl.string(N.t.pqHIf7)
      })]
    })
  },
  R = e => {
    let {
      trialOffer: t,
      discountOffer: s,
      isLoading: c,
      price: a,
      onClose: d
    } = e, f = (0, l.bG)([_.default], () => _.default.locale), u = null != t || null != s;
    return (0, n.jsxs)("div", {
      className: w.iE,
      children: [(0, n.jsx)(o.s_y, {
        "data-migration-pending": true,
        onClick: d,
        className: w.b
      }), u && (0, n.jsx)(x.Vq, {
        className: w.Fg
      }), (0, n.jsx)("img", {
        className: i()(w.c8, {
          [w.mk]: u
        }),
        src: r(377191),
        alt: ""
      }), c ? (0, n.jsx)(o.y$y, {}) : (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          className: w.R_,
          children: null == a ? (0, n.jsx)(o.y$y, {
            type: o.y$y.Type.PULSING_ELLIPSIS
          }) : N.intl.format(N.t.TBsJfQ, {
            monthlyPrice: (0, S.$g)(a.amount, a.currency)
          })
        }), (0, n.jsx)("div", {
          className: w.md,
          children: (0, n.jsx)(I, {
            locale: f
          })
        })]
      })]
    })
  },
  M = e => {
    let {
      trialOffer: t,
      discountOffer: r,
      onClose: s
    } = e, c = {
      section: k.JJy.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
    };
    return (0, n.jsxs)(o.jlY, {
      "data-migration-pending": true,
      className: w.qr,
      children: [(0, n.jsx)(o.Button, {
        variant: "secondary",
        size: "sm",
        text: N.intl.string(N.t.cpT0Cq),
        onClick: s
      }), (0, n.jsx)(O.A, {
        textOptions: {
          textOverride: null != t || null != r ? N.intl.string(N.t["Gd/XHF"]) : true
        },
        premiumModalAnalyticsLocation: c,
        subscriptionTier: C.pe.TIER_2,
        size: a.$n.Sizes.SMALL,
        color: a.$n.Colors.GREEN,
        onClick: () => {
          s()
        }
      })]
    })
  };

function L(e) {
  var t, r;
  let {
    onClose: c
  } = e, i = function(e, t) {
    if (null == e) return {};
    var r, n, s, c = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (s = 0, r = Reflect.ownKeys(e); s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
      return c
    }
    if (c = function(e, t) {
        if (null == e) return {};
        var r, n, s = {},
          c = Object.getOwnPropertyNames(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r]);
        return s
      }(e, t), Object.getOwnPropertySymbols)
      for (s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
    return c
  }(e, ["onClose"]), a = (0, p.Y)(), O = (0, l.bG)([h.A], () => h.A.hasFetchedPaymentSources), x = a && O, P = (0, j.V)(), _ = (0, y.O)();
  s.useEffect(() => {
    d.h.wait(() => {
      (0, f.$o)(), (0, u.zS)(null, null, k.tF5.DISCOVERY)
    })
  }, []);
  let v = x ? E.Ay.getDefaultPrice(C.gD.PREMIUM_MONTH_TIER_2) : null;
  return (0, n.jsx)(b.PaymentContextProvider, {
    activeSubscription: null,
    stepConfigs: [],
    skuIDs: [],
    children: (0, n.jsx)(o.EOs, (t = function(e) {
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
    }, i), r = r = {
      "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
      parentComponent: "StickerPackPremiumUpsellModal",
      children: (0, n.jsx)(g.A, {
        hideBreadcrumbs: true,
        body: (0, n.jsx)(R, {
          trialOffer: P,
          discountOffer: _,
          isLoading: !x,
          price: v,
          onClose: c
        }),
        footer: (0, n.jsx)(M, {
          trialOffer: P,
          discountOffer: _,
          onClose: c
        }),
        steps: [m.pn.PREMIUM_UPSELL],
        currentStep: m.pn.PREMIUM_UPSELL
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