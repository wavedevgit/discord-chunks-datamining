/** Chunk was on 22002 **/
/** chunk id: 748714, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A3: () => C,
  f4: () => v,
  f9: () => S
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
let g = e => {
    let {
      orbAmount: t
    } = e;
    return (0, r.jsxs)(i.Text, {
      variant: "text-md/semibold",
      className: O.orbAmountTag,
      children: [(0, r.jsx)(f.Z, {
        shouldUseThemeColor: true,
        customSize: 14
      }), null === t ? "--" : t]
    })
  },
  h = e => {
    let {
      orbPriceAmount: t,
      skuId: n
    } = e, {
      skusById: l
    } = (0, p.Z)({
      applicationId: (0, y.Nb)(n),
      skuIDs: [n],
      isGift: false,
      currentPaymentSourceId: null,
      excludeSKUPurchasePreviews: true
    }), s = l[n];
    return true === s ? (0, r.jsx)(x.aO, {
      children: (0, r.jsx)(i.$jN, {
        type: i.$jN.Type.PULSING_ELLIPSIS,
        className: O.purchaseDetailsSpinner
      })
    }) : (0, r.jsx)(b.E, {
      sku: s,
      value: (0, r.jsx)(g, {
        orbAmount: t
      })
    })
  },
  P = e => {
    let {
      orbBalance: t
    } = e;
    return (0, r.jsx)(i.gNt, {
      label: j.intl.string(j.t["mmDvV+"]),
      children: (0, r.jsxs)(i.UPk, {
        className: O.paymentSourceItem,
        children: [(0, r.jsx)(i.Text, {
          className: O.displayFlex,
          variant: "text-md/medium",
          children: j.intl.string(j.t.y0WGqP)
        }), (0, r.jsx)(i.Text, {
          className: O.displayFlex,
          variant: "text-md/medium",
          children: (0, r.jsx)(g, {
            orbAmount: t
          })
        })]
      })
    })
  },
  v = () => (0, Chunk54381.jsx)(Chunk658114.Z, {
    message: Chunk388032.intl.format(Chunk388032.t.fsOXXO, {})
  }),
  C = e => {
    let {
      skuId: t,
      orbPriceAmount: n,
      orbBalance: l,
      renderWithoutContainer: a
    } = e, c = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.gNt, {
        label: j.intl.string(j.t.sail9P),
        children: (0, r.jsx)(h, {
          skuId: t,
          orbPriceAmount: n
        })
      }), (0, r.jsx)(P, {
        orbBalance: l
      }), (0, r.jsx)(o.Z, {
        forceShow: true,
        onChange: m.dG4,
        finePrint: (0, r.jsx)(s.Z, {
          isOrbCheckout: true,
          skuId: t,
          purchaseType: m.GZQ.ONE_TIME
        })
      })]
    });
    return a ? c : (0, r.jsx)("div", {
      className: O.stepBody,
      children: c
    })
  },
  S = e => {
    let {
      orbPriceAmount: t,
      orbBalance: n,
      isSubmitting: s,
      onClickCheckout: o,
      isRental: d
    } = e, {
      disabled: p,
      tooltipText: b,
      text: x
    } = (e => {
      let {
        orbBalance: t,
        orbPriceAmount: n,
        isRental: r
      } = e, i = r ? j.intl.string(j.t["2n5l8j"]) : j.intl.string(j.t.wmcDyu), {
        disabled: s,
        tooltipText: o
      } = (0, l.useMemo)(() => null == n ? {
        disabled: true,
        tooltipText: j.intl.string(j.t["c/rcUu"])
      } : null == t || n > t ? {
        disabled: true,
        tooltipText: j.intl.string(j.t.keFvXM)
      } : {
        disabled: false,
        tooltipText: null
      }, [n, t]);
      return {
        disabled: s,
        tooltipText: o,
        text: i
      }
    })({
      orbBalance: n,
      orbPriceAmount: t,
      isRental: d
    });
    return (0, r.jsxs)(i.mzw, {
      align: c.Z.Align.CENTER,
      "data-migration-pending": true,
      children: [(0, r.jsx)(a.Ko, {
        onClick: o,
        loading: s,
        disabled: p,
        tooltipText: b,
        text: x
      }), (0, r.jsx)(u.Z, {})]
    })
  }