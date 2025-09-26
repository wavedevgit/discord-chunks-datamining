/** Chunk was on 74560 **/
/** chunk id: 479766, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var a, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[n] = t, e
}
class s extends(a = Chunk442837.ZP.Store) {
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
      balance: n
    } = e;
    this._isFetchingBalance = false, this._balance = n
  }
  handleBalanceFetchFail(e) {
    let {
      error: n
    } = e;
    this._isFetchingBalance = false, this._fetchBalanceError = n
  }
  handleBalanceUpdate(e) {
    let {
      balance: n
    } = e;
    this._balance = n
  }
  handleRedeemVirtualCurrencyStart(e) {
    let {
      skuId: n
    } = e;
    this._entitlements = null, this._redeemingSkuId = n, this._redeemVirtualCurrencyError = null, this._isRedeemingVirtualCurrency = true
  }
  handleRedeemVirtualCurrencySuccess(e) {
    let {
      entitlements: n
    } = e;
    this._entitlements = n, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = false
  }
  handleRedeemVirtualCurrencyFail(e) {
    let {
      error: n
    } = e;
    this._entitlements = null, this._redeemVirtualCurrencyError = n, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = false
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
    }), l(this, "_entitlements", null), l(this, "_redeemingSkuId", null), l(this, "_isRedeemingVirtualCurrency", false), l(this, "_redeemVirtualCurrencyError", null), l(this, "_balance", null), l(this, "_fetchBalanceError", null), l(this, "_isFetchingBalance", false), l(this, "_onboardingModalOpenedPrior", false), l(this, "_balancePillOverlay", false)
  }
}
l(s, "displayName", "VirtualCurrencyStore");
let c = new s