/** Chunk was on web.js **/
/** chunk id: 748714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A3: () => T,
  Do: () => O,
  f4: () => I,
  f9: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224550 = require("./224550.jsx"),
  Chunk672971 = require("./672971.jsx"),
  Chunk81088 = require("./81088.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk612853 = require("./612853.jsx"),
  Chunk658114 = require("./658114.jsx"),
  Chunk712297 = require("./712297.js"),
  Chunk982204 = require("./982204.jsx"),
  Chunk811334 = require("./811334.jsx"),
  Chunk152521 = require("./152521.js"),
  Chunk960919 = require("./960919.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk66360 = require("./66360.js");
let y = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(o.Text, {
      variant: "text-md/semibold",
      className: b.orbAmountTag,
      children: [(0, r.jsx)(h.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  O = e => {
    let {
      orbBalance: t,
      orbPriceAmount: n,
      rentalDuration: r
    } = e, o = (0, i.useMemo)(() => 3 === r ? E.intl.string(E.t.lpAQT0) : 7 === r ? E.intl.string(E.t["8Nn0ZK"]) : null != r ? E.intl.string(E.t["2n5l8j"]) : E.intl.string(E.t.wmcDyu), [r]), {
      disabled: a,
      tooltipText: s
    } = (0, i.useMemo)(() => null == n ? {
      disabled: true,
      tooltipText: E.intl.string(E.t["c/rcUu"])
    } : null == t || n > t ? {
      disabled: true,
      tooltipText: E.intl.string(E.t.keFvXM)
    } : {
      disabled: false,
      tooltipText: null
    }, [n, t]);
    return {
      disabled: a,
      tooltipText: s,
      text: o
    }
  },
  v = e => {
    let {
      orbPriceAmount: t,
      skuId: n,
      rentalDuration: i
    } = e, {
      skusById: a
    } = (0, f.Z)({
      applicationId: (0, m.Nb)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), s = a[n];
    return true === s ? (0, r.jsx)(_.aO, {
      children: (0, r.jsx)(o.$jN, {
        type: o.$jN.Type.PULSING_ELLIPSIS,
        className: b.purchaseDetailsSpinner
      })
    }) : (0, r.jsx)(p.E, {
      sku: s,
      value: (0, r.jsx)(y, {
        orbAmount: t
      }),
      rentalDuration: i
    })
  },
  S = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsx)(o.gNt, {
      label: E.intl.string(E.t["mmDvV+"]),
      children: (0, r.jsxs)(o.UPk, {
        className: b.paymentSourceItem,
        children: [(0, r.jsx)(o.Text, {
          className: b.displayFlex,
          variant: "text-md/medium",
          children: E.intl.string(E.t.y0WGqP)
        }), (0, r.jsx)(o.Text, {
          className: b.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(y, {
            orbAmount: t
          })
        })]
      })
    })
  },
  I = () => (0, Chunk54381.jsx)(Chunk658114.Z, {
    message: Chunk388032.intl.format(Chunk388032.t.fsOXXO, {})
  }),
  T = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: i,
      renderWithoutContainer: l,
      rentalDuration: c
    } = e, u = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.gNt, {
        label: E.intl.string(E.t.sail9P),
        children: (0, r.jsx)(v, {
          skuId: t,
          orbPriceAmount: n,
          rentalDuration: c
        })
      }), (0, r.jsx)(S, {
        orbBalance: i
      }), (0, r.jsx)(s.Z, {
        forceShow: true,
        onChange: g.dG4,
        finePrint: (0, r.jsx)(a.Z, {
          rentalDuration: c,
          isOrbCheckout: true,
          skuId: t,
          purchaseType: g.GZQ.ONE_TIME
        })
      })]
    });
    return l ? u : (0, r.jsx)("div", {
      className: b.stepBody,
      children: u
    })
  },
  C = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: i,
      onClickCheckout: a,
      rentalDuration: s
    } = e, {
      disabled: d,
      tooltipText: f,
      text: p
    } = O({
      orbBalance: n,
      orbPriceAmount: t,
      rentalDuration: s
    });
    return (0, r.jsxs)(o.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(l.Ko, {
        onClick: a,
        loading: i,
        disabled: d,
        tooltipText: f,
        text: p
      }), (0, r.jsx)(u.Z, {})]
    })
  }