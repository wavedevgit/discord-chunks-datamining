/** Chunk was on web.js **/
/** chunk id: 479766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class s extends(r = Chunk442837.ZP.Store) {
  get redeemError() {
    return this._redeemVirtualCurrencyError
  }
  get isRedeeming() {
    return this._isRedeemingVirtualCurrency
  }
  get redeemingSkuId() {
    return this._redeemingSkuId
  }
  get entitlements() {
    return this._entitlements
  }
  get balance() {
    return this._balance
  }
  get fetchBalanceError() {
    return this._fetchBalanceError
  }
  get isFetchingBalance() {
    return this._isFetchingBalance
  }
  get onboardingModalOpenedPrior() {
    return this._onboardingModalOpenedPrior
  }
  get balancePillOverlay() {
    return this._balancePillOverlay
  }
  setBalancePillOverlay(e) {
    this._balancePillOverlay = e
  }
  getCurrentBalance() {
    return this.balance
  }
  handleBalanceStateReset() {
    this._balance = null, this._fetchBalanceError = null, this._isFetchingBalance = false
  }
  handleBalanceFetch(e) {
    let {} = e;
    this._isFetchingBalance = true, this._fetchBalanceError = null
  }
  handleBalanceFetchSuccess(e) {
    let {
      balance: t
    } = e;
    this._isFetchingBalance = false, this._balance = t
  }
  handleBalanceFetchFail(e) {
    let {
      error: t
    } = e;
    this._isFetchingBalance = false, this._fetchBalanceError = t
  }
  handleBalanceUpdate(e) {
    let {
      balance: t
    } = e;
    this._balance = t
  }
  handleRedeemVirtualCurrencyStart(e) {
    let {
      skuId: t
    } = e;
    this._entitlements = null, this._redeemingSkuId = t, this._redeemVirtualCurrencyError = null, this._isRedeemingVirtualCurrency = true
  }
  handleRedeemVirtualCurrencySuccess(e) {
    let {
      entitlements: t
    } = e;
    this._entitlements = t, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = false
  }
  handleRedeemVirtualCurrencyFail(e) {
    let {
      error: t
    } = e;
    this._entitlements = null, this._redeemVirtualCurrencyError = t, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = false
  }
  handleOnboardingModalOpen(e) {
    let {} = e;
    this._onboardingModalOpenedPrior = true
  }
  handleOnboardingModalReset(e) {
    let {} = e;
    this._onboardingModalOpenedPrior = false
  }
  constructor() {
    super(Chunk570140.Z, {
      VIRTUAL_CURRENCY_REDEEM_START: e => this.handleRedeemVirtualCurrencyStart(e),
      VIRTUAL_CURRENCY_REDEEM_SUCCESS: e => this.handleRedeemVirtualCurrencySuccess(e),
      VIRTUAL_CURRENCY_REDEEM_FAIL: e => this.handleRedeemVirtualCurrencyFail(e),
      VIRTUAL_CURRENCY_BALANCE_FETCH: e => this.handleBalanceFetch(e),
      VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS: e => this.handleBalanceFetchSuccess(e),
      VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL: e => this.handleBalanceFetchFail(e),
      VIRTUAL_CURRENCY_BALANCE_UPDATE: e => this.handleBalanceUpdate(e),
      VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN: e => this.handleOnboardingModalOpen(e),
      VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET: e => this.handleOnboardingModalReset(e),
      LOGIN_SUCCESS: () => this.handleBalanceStateReset(),
      VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY: e => {
        this.setBalancePillOverlay(e.balancePillOverlay)
      }
    }), a(this, "_entitlements", null), a(this, "_redeemingSkuId", null), a(this, "_isRedeemingVirtualCurrency", false), a(this, "_redeemVirtualCurrencyError", null), a(this, "_balance", null), a(this, "_fetchBalanceError", null), a(this, "_isFetchingBalance", false), a(this, "_onboardingModalOpenedPrior", false), a(this, "_balancePillOverlay", false)
  }
}
a(s, "displayName", "VirtualCurrencyStore");
let l = new s