/** Chunk was on web.js **/
/** chunk id: 468208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var r, Chunk599582 = require("./599582.js"),
  Chunk995638 = require("./995638.js"),
  Chunk197084 = require("./197084.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk26842 = require("./26842.js"),
  Chunk375527 = require("./375527.js"),
  Chunk168232 = require("./168232.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk111361 = require("./111361.js"),
  Chunk165299 = require("./165299.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let g = 864e5,
  E = 3e4,
  b = 36e5,
  y = new Chunk26842.j({
    ttlMs: g
  });

function O() {
  let e = y.getValue();
  if (null == e) returnfalse;
  let t = new Date;
  for (let n of e.values()) {
    let e = new Date(n.next_reward_date),
      r = (0, i.default)(e, 1);
    if ((0, o.default)(t, {
        start: e,
        end: r
      })) returntrue
  }
  returnfalse
}

function v() {
  (0, d.QI)(f.default.getCurrentUser()) ? y.setTtl(E): O() ? y.setTtl(b) : y.setTtl(g)
}

function S() {
  y.setLoading()
}

function I(e) {
  let {
    programRewards: t
  } = e;
  if (!y.isLoading()) returnfalse;
  let n = new Map;
  t.forEach(e => {
    n.set(e.reward_program, e)
  }), y.setValue(n), v()
}

function T() {
  if (!y.isLoading()) returnfalse;
  y.setError()
}

function C() {
  y.clear()
}
class A extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(f.default), (null == e ? true : e.cache) != null) {
      let t = new Map(e.cache.value);
      y.restore({
        value: t,
        fetchedAt: e.cache.fetchedAt
      })
    }
    v()
  }
  getState() {
    let e = y.serialize();
    return {
      cache: null != e ? {
        value: Array.from(e.value.entries()),
        fetchedAt: e.fetchedAt
      } : null
    }
  }
  passesGeneralUIInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === h.f.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.next_reward_date,
        r = t.program_current_state;
      if (null == r) returnfalse;
      if (null == n || "" === n) {
        if (![h.g.PAYMENT_PROCESSING, h.g.PAYMENT_ERROR].includes(r)) returnfalse
      } else {
        let e = new Date(n).getTime();
        if (Number.isNaN(e) || e < Date.now()) returnfalse
      }
    }
    returntrue
  }
  passesProgressBarInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === h.f.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.total_countdown_duration_ms;
      if (null == n || n <= 0) returnfalse;
      let r = t.next_reward_date;
      if (null == r || "" === r) returnfalse;
      let i = new Date(r).getTime();
      if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date) > n / p.Z.Millis.DAY) returnfalse
    }
    returntrue
  }
  isInProperTreatments() {
    let {
      isInTreatment: e
    } = (0, u.f3)("ProgramRewardsStore");
    return e
  }
  isFetching() {
    return y.isLoading()
  }
  isFetched() {
    return y.isValid()
  }
  hasCachedValue() {
    return null != y.getValue()
  }
  isReady() {
    return !this.isFetching() && (this.hasCachedValue() || !this.isInProperTreatments() || this.isError() || !(0, _.I5)(f.default.getCurrentUser()))
  }
  shouldFetch() {
    return !!this.isInProperTreatments() && !!(0, _.I5)(f.default.getCurrentUser()) && y.shouldFetch()
  }
  isError() {
    return y.isError()
  }
  getStatus() {
    return y.getStatus()
  }
  getRewardForProgram(e) {
    var t;
    return null == (t = y.getValue()) ? true : t.get(e)
  }
  forceExpire() {
    y.forceExpire()
  }
}
m(A, "displayName", "ProgramRewardsStore"), m(A, "persistKey", "ProgramRewardsStore");
let N = new A(Chunk570140.Z, {
  LOGOUT: C,
  PROGRAM_REWARDS_FETCH: S,
  PROGRAM_REWARDS_FETCH_SUCCESS: I,
  PROGRAM_REWARDS_FETCH_FAILURE: T,
  CURRENT_USER_UPDATE: v,
  CONNECTION_OPEN: v
})