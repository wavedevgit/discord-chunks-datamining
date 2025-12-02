/** Chunk was on web.js **/
/** chunk id: 964268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => p,
  X: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk762853 = require("./762853.js"),
  Chunk409813 = require("./409813.js"),
  Chunk126982 = require("./126982.jsx"),
  Chunk336079 = require("./336079.jsx"),
  Chunk922987 = require("./922987.jsx"),
  Chunk748714 = require("./748714.jsx"),
  Chunk388032 = require("./388032.jsx");
let d = e => {
    let {
      handleClose: t
    } = e;
    return (0, l.PR)({
      handleClose: t
    }), null
  },
  f = e => {
    let {
      skuId: t,
      analyticsSourceLocation: n,
      analyticsLocations: i,
      orbProductContext: a,
      isRedeeming: o,
      orbRedemptionError: s,
      onRedeemVirtualCurrency: f,
      isRental: p
    } = e, {
      isStepLoading: _,
      orbPriceAmount: m,
      orbBalanceToDisplay: h,
      onClickCheckout: g,
      showCollectiblesDiscountWarning: E,
      errorMessage: b
    } = (0, l.sF)({
      skuId: t,
      analyticsSourceLocation: n,
      analyticsLocations: i,
      orbProductContext: a,
      orbRedemptionError: s,
      onRedeemVirtualCurrency: f
    }), {
      disabled: y,
      tooltipText: O,
      text: v
    } = (0, c.Do)({
      orbBalance: h,
      orbPriceAmount: m,
      isRental: p
    });
    return {
      isStepLoading: _,
      skuId: t,
      reviewBodyContent: (0, r.jsx)(c.A3, {
        skuId: t,
        orbPriceAmount: m,
        orbBalance: h,
        renderWithoutContainer: true
      }),
      reviewBodyLegalContent: null,
      SideEffectComponent: d,
      primaryCTAButtonProps: {
        onClick: g,
        loading: o,
        text: v,
        disabled: y,
        tooltipText: O
      },
      warningMessage: E ? u.intl.format(u.t.fsOXXO, {}) : null,
      errorMessage: b
    }
  },
  p = e => {
    let {
      onClose: t,
      step: n
    } = e;
    return (0, r.jsx)(o.Z, {
      isOrbCheckout: true,
      step: n,
      onClose: () => t(false)
    })
  },
  _ = e => {
    var t;
    let {
      skuId: n,
      loadId: o,
      onCheckoutSuccess: c,
      analyticsLocations: u,
      analyticsSourceLocation: d,
      renderModalProps: p,
      flowSpecificOptions: _,
      children: m
    } = e, h = null != (t = _.isRental) && t, {
      orbProductContext: g,
      isRedeeming: E,
      orbRedemptionError: b,
      onRedeemVirtualCurrency: y
    } = (0, s.Gw)({
      skuId: n,
      loadId: o,
      onCheckoutSuccess: c,
      analyticsLocations: u,
      isRental: h
    }), O = (0, l.HR)({
      onClose: p.onClose,
      skuId: n,
      analyticsLocations: u,
      analyticsSourceLocation: d,
      orbProductContext: g
    }), v = f({
      skuId: n,
      analyticsLocations: u,
      analyticsSourceLocation: d,
      orbProductContext: g,
      isRedeeming: E,
      orbRedemptionError: b,
      onRedeemVirtualCurrency: y,
      isRental: h
    });
    return (0, r.jsx)(i.QX.Provider, {
      value: {
        unifiedCheckoutStepProps: {
          [a.h8.REVIEW]: v
        },
        paymentModalProps: O
      },
      children: m
    })
  }