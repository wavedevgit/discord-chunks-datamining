/** Chunk was on web.js **/
/** chunk id: 964268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk467368 = require("./467368.js"),
  Chunk409813 = require("./409813.js"),
  Chunk126982 = require("./126982.jsx"),
  Chunk336079 = require("./336079.jsx"),
  Chunk922987 = require("./922987.jsx"),
  Chunk748714 = require("./748714.jsx"),
  Chunk388032 = require("./388032.jsx");
let f = e => {
    let {
      skuId: t,
      analyticsSourceLocation: n,
      analyticsLocations: i,
      orbProductContext: o,
      isRedeeming: a,
      orbRedemptionError: s,
      onRedeemVirtualCurrency: l,
      rentalDuration: f
    } = e, {
      isStepLoading: p,
      orbPriceAmount: _,
      orbBalanceToDisplay: m,
      onClickCheckout: h,
      showCollectiblesDiscountWarning: g,
      errorMessage: E
    } = (0, c.sF)({
      skuId: t,
      analyticsSourceLocation: n,
      analyticsLocations: i,
      orbProductContext: o,
      orbRedemptionError: s,
      onRedeemVirtualCurrency: l
    }), {
      disabled: b,
      tooltipText: y,
      text: O
    } = (0, u.Do)({
      orbBalance: m,
      orbPriceAmount: _,
      rentalDuration: f
    });
    return {
      isStepLoading: p,
      skuId: t,
      reviewBodyContent: (0, r.jsx)(u.A3, {
        skuId: t,
        orbPriceAmount: _,
        orbBalance: m,
        renderWithoutContainer: true,
        rentalDuration: f
      }),
      reviewBodyLegalContent: null,
      primaryCTAButtonProps: {
        onClick: h,
        loading: a,
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
        analyticsLocations: o,
        analyticsSourceLocation: a,
        flowSpecificOptions: s
      }
    } = e, l = null != (t = s.rentalDuration) ? t : true, {
      handleClose: u
    } = r;
    (0, c.PR)({
      handleClose: u
    });
    let {
      orbProductContext: d,
      isRedeeming: p,
      orbRedemptionError: _,
      onRedeemVirtualCurrency: m
    } = g(), h = f({
      skuId: i,
      analyticsLocations: o,
      analyticsSourceLocation: a,
      orbProductContext: d,
      isRedeeming: p,
      orbRedemptionError: _,
      onRedeemVirtualCurrency: m,
      rentalDuration: l
    });
    return n({
      unifiedStepProps: h
    })
  },
  _ = e => {
    let {
      onClose: t,
      step: n
    } = e;
    return (0, r.jsx)(s.Z, {
      isOrbCheckout: true,
      step: n,
      onClose: () => t(false)
    })
  },
  m = (0, Chunk467368.Dz)(),
  h = (0, Chunk473749.createContext)({
    isRedeeming: false,
    orbRedemptionError: null,
    orbProductContext: null,
    onRedeemVirtualCurrency: () => {}
  }),
  g = () => (0, Chunk473749.useContext)(h),
  E = {
    UnifiedCheckoutContextProvider: e => {
      let {
        skuId: t,
        loadId: n,
        analyticsLocations: i,
        analyticsSourceLocation: o,
        renderModalProps: a,
        flowSpecificOptions: s,
        children: u
      } = e, {
        onCheckoutSuccess: d,
        rentalDuration: f
      } = s, {
        orbProductContext: p,
        isRedeeming: _,
        orbRedemptionError: g,
        onRedeemVirtualCurrency: E
      } = (0, l.Gw)({
        skuId: t,
        loadId: n,
        onCheckoutSuccess: d,
        analyticsLocations: i,
        rentalDuration: f
      }), b = (0, c.HR)({
        onClose: a.onClose,
        skuId: t,
        analyticsLocations: i,
        analyticsSourceLocation: o,
        orbProductContext: p
      });
      return (0, r.jsx)(m.Provider, {
        value: {
          sharedCheckoutContext: {
            loadId: n,
            skuId: t,
            analyticsLocations: i,
            analyticsSourceLocation: o,
            flowSpecificOptions: s
          },
          paymentModalProps: b,
          renderModalProps: a
        },
        children: (0, r.jsx)(h.Provider, {
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
      [Chunk409813.h8.REVIEW]: {
        StepController: p
      }
    }
  }