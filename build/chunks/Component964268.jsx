/** Chunk was on web.js **/
/** chunk id: 964268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Pv: () => _,
  XF: () => E
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
      orbProductContext: a,
      isRedeeming: o,
      orbRedemptionError: s,
      onRedeemVirtualCurrency: l,
      isRental: f
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
      orbProductContext: a,
      orbRedemptionError: s,
      onRedeemVirtualCurrency: l
    }), {
      disabled: b,
      tooltipText: y,
      text: O
    } = (0, u.Do)({
      orbBalance: m,
      orbPriceAmount: _,
      isRental: f
    });
    return {
      isStepLoading: p,
      skuId: t,
      reviewBodyContent: (0, r.jsx)(u.A3, {
        skuId: t,
        orbPriceAmount: _,
        orbBalance: m,
        renderWithoutContainer: true
      }),
      reviewBodyLegalContent: null,
      primaryCTAButtonProps: {
        onClick: h,
        loading: o,
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
      checkoutContext: {
        skuId: i,
        analyticsLocations: a,
        analyticsSourceLocation: o,
        flowSpecificOptions: s
      }
    } = e, l = null != (t = s.isRental) && t, {
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
      analyticsLocations: a,
      analyticsSourceLocation: o,
      orbProductContext: d,
      isRedeeming: p,
      orbRedemptionError: _,
      onRedeemVirtualCurrency: m,
      isRental: l
    });
    return n({
      unifiedStepProps: h,
      paymentModalStepProps: r
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
  E = e => {
    var t;
    let {
      skuId: n,
      loadId: i,
      onCheckoutSuccess: a,
      analyticsLocations: s,
      analyticsSourceLocation: u,
      renderModalProps: d,
      flowSpecificOptions: f,
      children: _
    } = e, g = null != (t = f.isRental) && t, {
      orbProductContext: E,
      isRedeeming: b,
      orbRedemptionError: y,
      onRedeemVirtualCurrency: O
    } = (0, l.Gw)({
      skuId: n,
      loadId: i,
      onCheckoutSuccess: a,
      analyticsLocations: s,
      isRental: g
    }), v = (0, c.HR)({
      onClose: d.onClose,
      skuId: n,
      analyticsLocations: s,
      analyticsSourceLocation: u,
      orbProductContext: E
    });
    return (0, r.jsx)(m.Provider, {
      value: {
        enableStepControllers: true,
        unifiedCheckoutStepMappings: {
          [o.h8.REVIEW]: {
            StepController: p
          }
        },
        checkoutContext: {
          loadId: i,
          skuId: n,
          onCheckoutSuccess: a,
          analyticsLocations: s,
          analyticsSourceLocation: u,
          flowSpecificOptions: f
        },
        paymentModalProps: v,
        renderModalProps: d
      },
      children: (0, r.jsx)(h.Provider, {
        value: {
          orbProductContext: E,
          isRedeeming: b,
          orbRedemptionError: y,
          onRedeemVirtualCurrency: O
        },
        children: _
      })
    })
  }