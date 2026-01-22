/** Chunk was on web.js **/
/** chunk id: 895944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
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
  Chunk927813 = require("./927813.js"),
  Chunk474090 = require("./474090.js"),
  Chunk649032 = require("./649032.js"),
  Chunk788868 = require("./788868.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = 864e5,
  b = 3e4,
  y = 36e5,
  O = new Chunk431560.Z({
    ttlMs: E
  });

function A() {
  let e = O.getValue();
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

function v() {
  (0, d.I9)(f.default.getCurrentUser()) ? O.setTtl(b): A() ? O.setTtl(y) : O.setTtl(E)
}

function S() {
  O.setLoading()
}

function I(e) {
  let {
    programRewards: t
  } = e;
  if (!O.isLoading()) returnfalse;
  let n = new Map;
  t.forEach(e => {
    n.set(e.reward_program, e)
  }), O.setValue(n), v()
}

function T() {
  if (!O.isLoading()) returnfalse;
  O.setError()
}

function C() {
  O.clear()
}
class N extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(f.default), (null == e ? true : e.cache) != null) {
      let t = new Map(e.cache.value);
      O.restore({
        value: t,
        fetchedAt: e.cache.fetchedAt
      })
    }
    v()
  }
  getState() {
    let e = O.serialize();
    return {
      cache: null != e ? {
        value: Array.from(e.value.entries()),
        fetchedAt: e.fetchedAt
      } : null
    }
  }
  passesGeneralUIInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === h.W.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.next_reward_date,
        r = t.program_current_state;
      if (null == r) returnfalse;
      if (null == n || "" === n) {
        if (![h.L.PAYMENT_PROCESSING, h.L.PAYMENT_ERROR].includes(r)) returnfalse
      } else {
        let e = new Date(n).getTime();
        if (Number.isNaN(e) || e < Date.now()) returnfalse
      }
    }
    returntrue
  }
  passesProgressBarInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === h.W.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.total_countdown_duration_ms;
      if (null == n || n <= 0) returnfalse;
      let r = t.next_reward_date;
      if (null == r || "" === r) returnfalse;
      let i = new Date(r).getTime();
      if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date) > n / p.A.Millis.DAY) returnfalse
    }
    returntrue
  }
  hasNecessaryPremiumSubscriptionStatus() {
    return (0, _.YE)(f.default.getCurrentUser(), m.PremiumTypes.TIER_2)
  }
  isInProperTreatments() {
    let {
      isInTreatment: e
    } = (0, u.v9)("ProgramRewardsStore");
    return e
  }
  isFetching() {
    return O.isLoading()
  }
  isFetched() {
    return O.isValid()
  }
  hasCachedValue() {
    return null != O.getValue()
  }
  isReady() {
    return !this.isFetching() && (this.hasCachedValue() || !this.isInProperTreatments() || this.isError() || !this.hasNecessaryPremiumSubscriptionStatus())
  }
  shouldFetch() {
    return !!this.isInProperTreatments() && !!this.hasNecessaryPremiumSubscriptionStatus() && O.shouldFetch()
  }
  isError() {
    return O.isError()
  }
  getStatus() {
    return O.getStatus()
  }
  getRewardForProgram(e) {
    var t;
    return null == (t = O.getValue()) ? true : t.get(e)
  }
  forceExpire() {
    O.forceExpire()
  }
}
g(N, "displayName", "ProgramRewardsStore"), g(N, "persistKey", "ProgramRewardsStore");
let R = new N(Chunk73153.h, {
  LOGOUT: C,
  PROGRAM_REWARDS_FETCH: S,
  PROGRAM_REWARDS_FETCH_SUCCESS: I,
  PROGRAM_REWARDS_FETCH_FAILURE: T,
  CURRENT_USER_UPDATE: v,
  CONNECTION_OPEN: v
})