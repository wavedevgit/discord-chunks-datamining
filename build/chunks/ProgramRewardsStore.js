/** Chunk was on web.js **/
/** chunk id: 895944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var r, Chunk410530 = require("./410530.js"),
  Chunk892227 = require("./892227.js"),
  Chunk571136 = require("./571136.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk431560 = require("./431560.js"),
  Chunk84483 = require("./84483.js"),
  Chunk572009 = require("./572009.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927813 = require("./927813.js"),
  Chunk474090 = require("./474090.js"),
  Chunk649032 = require("./649032.js"),
  Chunk788868 = require("./788868.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 864e5,
  b = 3e4,
  O = 36e5,
  v = new Chunk431560.Z({
    ttlMs: y
  });

function A() {
  let e = v.getValue();
  if (null == e) returnfalse;
  let t = new Date;
  for (let n of e.values()) {
    let e = new Date(n.next_reward_date),
      r = (0, i.default)(e, 1);
    if ((0, s.default)(t, {
        start: e,
        end: r
      })) returntrue
  }
  returnfalse
}

function I() {
  (0, d.I9)(f.default.getCurrentUser()) ? v.setTtl(b): A() ? v.setTtl(O) : v.setTtl(y)
}

function S() {
  v.setLoading()
}

function T(e) {
  let {
    programRewards: t
  } = e;
  if (!v.isLoading()) returnfalse;
  let n = new Map;
  t.forEach(e => {
    n.set(e.reward_program, e)
  }), v.setValue(n), I()
}

function C() {
  if (!v.isLoading()) returnfalse;
  v.setError()
}

function N() {
  v.clear()
}
class R extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(p.A, f.default), this.syncWith([p.A], () => {}), (null == e ? true : e.cache) != null) {
      let t = new Map(e.cache.value);
      v.restore({
        value: t,
        fetchedAt: e.cache.fetchedAt
      })
    }
    I()
  }
  getState() {
    let e = v.serialize();
    return {
      cache: null != e ? {
        value: Array.from(e.value.entries()),
        fetchedAt: e.fetchedAt
      } : null
    }
  }
  passesGeneralUIInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === m.W.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.next_reward_date,
        r = t.program_current_state;
      if (null == r) returnfalse;
      if (null == n || "" === n) {
        if (![m.L.PAYMENT_PROCESSING, m.L.PAYMENT_ERROR].includes(r)) returnfalse
      } else {
        let e = new Date(n).getTime();
        if (Number.isNaN(e) || e < Date.now()) returnfalse
      }
    }
    returntrue
  }
  passesProgressBarInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === m.W.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.total_countdown_duration_ms;
      if (null == n || n <= 0) returnfalse;
      let r = t.next_reward_date;
      if (null == r || "" === r) returnfalse;
      let i = new Date(r).getTime();
      if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date) > n / _.A.Millis.DAY) returnfalse
    }
    returntrue
  }
  hasNecessaryPremiumSubscriptionStatus() {
    let e = p.A.getMostRecentPremiumTypeSubscription();
    return (0, h.YE)(f.default.getCurrentUser(), g.PremiumTypes.TIER_2) && null != e && !e.isPurchasedExternally
  }
  isInProperTreatments() {
    let {
      isInTreatment: e
    } = (0, u.v9)("ProgramRewardsStore");
    return e
  }
  isFetching() {
    return v.isLoading()
  }
  isFetched() {
    return v.isValid()
  }
  hasCachedValue() {
    return null != v.getValue()
  }
  isReady() {
    return !this.isFetching() && (this.hasCachedValue() || !this.isInProperTreatments() || this.isError() || !this.hasNecessaryPremiumSubscriptionStatus())
  }
  shouldFetch() {
    return !!this.isInProperTreatments() && !!this.hasNecessaryPremiumSubscriptionStatus() && v.shouldFetch()
  }
  isError() {
    return v.isError()
  }
  getStatus() {
    return v.getStatus()
  }
  getRewardForProgram(e) {
    var t;
    return null == (t = v.getValue()) ? true : t.get(e)
  }
  forceExpire() {
    v.forceExpire()
  }
}
E(R, "displayName", "ProgramRewardsStore"), E(R, "persistKey", "ProgramRewardsStore");
let w = new R(Chunk73153.h, {
  LOGOUT: N,
  PROGRAM_REWARDS_FETCH: S,
  PROGRAM_REWARDS_FETCH_SUCCESS: T,
  PROGRAM_REWARDS_FETCH_FAILURE: C,
  CURRENT_USER_UPDATE: I,
  CONNECTION_OPEN: I
})