/** Chunk was on 96910 **/
/** chunk id: 479766, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./539854.js");
var n, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js");

function l(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class o extends(n = Chunk442837.ZP.Store) {
  get earnedOrbsCoachmark() {
    return {
      shouldOpen: this._earnedOrbsCoachmarkOpen,
      earnedOrbsQuantity: this._earnedOrbsCoachmarkQuantity
    }
  }
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
    this._onboardingModalOpenedPrior = false, this._earnedOrbsCoachmarkOpen = false, this._earnedOrbsCoachmarkDedupeKeys = [], this._earnedOrbsCoachmarkQuantity = 0
  }
  handleEarnedOrbsCoachmarkOpen(e) {
    let {
      earnedOrbsQuantity: t,
      dedupeKey: r
    } = e;
    true !== r && this._earnedOrbsCoachmarkDedupeKeys.includes(r) || (this._earnedOrbsCoachmarkOpen = true, this._earnedOrbsCoachmarkQuantity = t, true !== r && this._earnedOrbsCoachmarkDedupeKeys.push(r))
  }
  handleEarnedOrbsCoachmarkClose(e) {
    let {} = e;
    this._earnedOrbsCoachmarkOpen = false, this._earnedOrbsCoachmarkQuantity = 0
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
      VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_OPEN: e => this.handleEarnedOrbsCoachmarkOpen(e),
      VIRTUAL_CURRENCY_EARNED_ORBS_COACHMARK_CLOSE: e => this.handleEarnedOrbsCoachmarkClose(e),
      LOGIN_SUCCESS: () => this.handleBalanceStateReset(),
      VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY: e => {
        this.setBalancePillOverlay(e.balancePillOverlay)
      }
    }), l(this, "_entitlements", null), l(this, "_redeemingSkuId", null), l(this, "_isRedeemingVirtualCurrency", false), l(this, "_redeemVirtualCurrencyError", null), l(this, "_balance", null), l(this, "_fetchBalanceError", null), l(this, "_isFetchingBalance", false), l(this, "_onboardingModalOpenedPrior", false), l(this, "_earnedOrbsCoachmarkOpen", false), l(this, "_earnedOrbsCoachmarkDedupeKeys", []), l(this, "_earnedOrbsCoachmarkQuantity", 0), l(this, "_balancePillOverlay", false)
  }
}
l(o, "displayName", "VirtualCurrencyStore");
let s = new o