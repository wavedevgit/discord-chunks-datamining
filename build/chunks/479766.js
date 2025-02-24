/** Chunk was on 93886 (c39579f01d1aedae.js) **/
n.d(t, {
  Z: () => s
}), n(653041), n(47120);
var r, a = n(442837),
  i = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class o extends(r = a.ZP.Store) {
  get earnedOrbsCoachmark() {
    return {
      shouldOpen: this._earnedOrbsCoachmarkOpen,
      earnedOrbsQuantity: this._earnedOrbsCoachmarkQuantity
    }
  }
  get onboardingCoachmark() {
    return {
      shouldOpenCoachmarkTypes: this._onboardingCoachmarksOpen,
      shouldSkip: this._onboardingCoachmarkSkip
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
  handleBalanceFetch(e) {
    let {} = e;
    this._isFetchingBalance = !0, this._fetchBalanceError = null
  }
  handleBalanceFetchSuccess(e) {
    let {
      balance: t
    } = e;
    this._isFetchingBalance = !1, this._balance = t
  }
  handleBalanceFetchFail(e) {
    let {
      error: t
    } = e;
    this._isFetchingBalance = !1, this._fetchBalanceError = t
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
    this._entitlements = null, this._redeemingSkuId = t, this._redeemVirtualCurrencyError = null, this._isRedeemingVirtualCurrency = !0
  }
  handleRedeemVirtualCurrencySuccess(e) {
    let {
      entitlements: t
    } = e;
    this._entitlements = t, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = !1
  }
  handleRedeemVirtualCurrencyFail(e) {
    let {
      error: t
    } = e;
    this._entitlements = null, this._redeemVirtualCurrencyError = t, this._redeemingSkuId = null, this._isRedeemingVirtualCurrency = !1
  }
  handleOnboardingModalOpen(e) {
    let {} = e;
    this._onboardingModalOpenedPrior = !0
  }
  handleOnboardingModalReset(e) {
    let {} = e;
    this._onboardingModalOpenedPrior = !1, this._earnedOrbsCoachmarkDedupeKeys = []
  }
  handleEarnedOrbsCoachmarkOpen(e) {
    let {
      earnedOrbsQuantity: t,
      dedupeKey: n
    } = e;
    !(void 0 !== n && this._earnedOrbsCoachmarkDedupeKeys.includes(n)) && (this._earnedOrbsCoachmarkOpen = !0, this._earnedOrbsCoachmarkQuantity = t, void 0 !== n && this._earnedOrbsCoachmarkDedupeKeys.push(n))
  }
  handleEarnedOrbsCoachmarkClose(e) {
    let {} = e;
    this._earnedOrbsCoachmarkOpen = !1, this._earnedOrbsCoachmarkQuantity = 0
  }
  handleOnboardingCoachmarkOpen(e) {
    let {
      onboardingCoachmarkTypes: t
    } = e;
    this._onboardingCoachmarksOpen = [...this._onboardingCoachmarksOpen, ...t]
  }
  handleOnboardingCoachmarkClose(e) {
    let {
      onboardingCoachmarkTypes: t
    } = e;
    this._onboardingCoachmarksOpen = this._onboardingCoachmarksOpen.filter(e => !t.includes(e))
  }
  handleOnboardingCoachmarkSkip(e) {
    let {} = e;
    this._onboardingCoachmarkSkip = !0
  }
  constructor() {
    super(i.Z, {
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
      VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_OPEN: e => this.handleOnboardingCoachmarkOpen(e),
      VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_CLOSE: e => this.handleOnboardingCoachmarkClose(e),
      VIRTUAL_CURRENCY_ONBOARDING_COACHMARK_SKIP: e => this.handleOnboardingCoachmarkSkip(e)
    }), l(this, "_entitlements", null), l(this, "_redeemingSkuId", null), l(this, "_isRedeemingVirtualCurrency", !1), l(this, "_redeemVirtualCurrencyError", null), l(this, "_balance", null), l(this, "_fetchBalanceError", null), l(this, "_isFetchingBalance", !1), l(this, "_earnedOrbsCoachmarkOpen", !1), l(this, "_earnedOrbsCoachmarkDedupeKeys", []), l(this, "_earnedOrbsCoachmarkQuantity", 0), l(this, "_onboardingModalOpenedPrior", !1), l(this, "_onboardingCoachmarksOpen", []), l(this, "_onboardingCoachmarkSkip", !1)
  }
}
l(o, "displayName", "VirtualCurrencyStore");
let s = new o