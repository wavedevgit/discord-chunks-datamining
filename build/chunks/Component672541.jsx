/** Chunk was on web.js **/
/** chunk id: 672541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G4: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk736843 = require("./736843.js"),
  Chunk166532 = require("./166532.js"),
  Chunk685944 = require("./685944.jsx"),
  Chunk775420 = require("./775420.jsx"),
  Chunk440612 = require("./440612.jsx"),
  Chunk324384 = require("./324384.jsx"),
  Chunk985018 = require("./985018.jsx");
let f = e => {
    let {
      skuId: t,
      analyticsSourceLocation: n,
      analyticsLocations: i,
      orbProductContext: a,
      isRedeeming: s,
      orbRedemptionError: o,
      onRedeemVirtualCurrency: l,
      rentalDuration: f
    } = e, {
      isStepLoading: p,
      orbPriceAmount: _,
      orbBalanceToDisplay: h,
      onClickCheckout: m,
      showCollectiblesDiscountWarning: g,
      errorMessage: E
    } = (0, c.HG)({
      skuId: t,
      analyticsSourceLocation: n,
      analyticsLocations: i,
      orbProductContext: a,
      orbRedemptionError: o,
      onRedeemVirtualCurrency: l
    }), {
      disabled: b,
      tooltipText: y,
      text: O
    } = (0, u.J6)({
      orbBalance: h,
      orbPriceAmount: _,
      rentalDuration: f
    });
    return {
      isStepLoading: p,
      skuId: t,
      reviewBodyContent: (0, r.jsx)(u.cL, {
        skuId: t,
        orbPriceAmount: _,
        orbBalance: h,
        renderWithoutContainer: true,
        rentalDuration: f
      }),
      reviewBodyLegalContent: null,
      primaryCTAButtonProps: {
        onClick: m,
        loading: s,
        text: O,
        disabled: b,
        tooltipText: y
      },
      warningMessage: g ? d.intl.format(d.t.fsOXXO, {}) : null,
      errorMessage: E
    }
  },
  p = e => {
    var t;
    let {
      renderStep: n,
      paymentModalStepProps: r,
      sharedCheckoutContext: {
        skuId: i,
        analyticsLocations: a,
        analyticsSourceLocation: s,
        flowSpecificOptions: o
      }
    } = e, l = null != (t = o.rentalDuration) ? t : true, {
      handleClose: u
    } = r;
    (0, c.e1)({
      handleClose: u
    });
    let {
      orbProductContext: d,
      isRedeeming: p,
      orbRedemptionError: _,
      onRedeemVirtualCurrency: h
    } = g(), m = f({
      skuId: i,
      analyticsLocations: a,
      analyticsSourceLocation: s,
      orbProductContext: d,
      isRedeeming: p,
      orbRedemptionError: _,
      onRedeemVirtualCurrency: h,
      rentalDuration: l
    });
    return n({
      paymentModalStepProps: r,
      unifiedStepProps: m
    })
  },
  _ = e => {
    let {
      onClose: t,
      step: n
    } = e;
    return (0, r.jsx)(o.A, {
      isOrbCheckout: true,
      step: n,
      onClose: () => t(false)
    })
  },
  h = (0, Chunk736843.Mz)(),
  m = (0, Chunk64700.createContext)({
    isRedeeming: false,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {}
  }),
  g = () => (0, i.useContext)(m),
  E = {
    UnifiedCheckoutContextProvider: e => {
      let {
        skuId: t,
        loadId: n,
        analyticsLocations: i,
        analyticsSourceLocation: a,
        renderModalProps: s,
        flowSpecificOptions: o,
        children: u
      } = e, {
        onCheckoutSuccess: d,
        rentalDuration: f
      } = o, {
        orbProductContext: p,
        isRedeeming: _,
        orbRedemptionError: g,
        onRedeemVirtualCurrency: E
      } = (0, l.e6)({
        skuId: t,
        loadId: n,
        onCheckoutSuccess: d,
        analyticsLocations: i,
        rentalDuration: f
      }), b = (0, c.My)({
        onClose: s.onClose,
        skuId: t,
        analyticsLocations: i,
        analyticsSourceLocation: a,
        orbProductContext: p
      });
      return (0, r.jsx)(h.Provider, {
        value: {
          sharedCheckoutContext: {
            loadId: n,
            skuId: t,
            analyticsLocations: i,
            analyticsSourceLocation: a,
            flowSpecificOptions: o
          },
          paymentModalProps: b,
          renderModalProps: s
        },
        children: (0, r.jsx)(m.Provider, {
          value: {
            orbProductContext: p,
            isRedeeming: _,
            orbRedemptionError: g,
            onRedeemVirtualCurrency: E
          },
          children: u
        })
      })
    },
    UnifiedCheckoutCustomHeader: _,
    UnifiedCheckoutStepDefinitions: {
      [Chunk166532.pn.REVIEW]: {
        StepController: p
      }
    }
  }