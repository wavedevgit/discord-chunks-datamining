/** Chunk was on web.js **/
/** chunk id: 468208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var r, Chunk995638 = require("./995638.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk26842 = require("./26842.js"),
  Chunk375527 = require("./375527.js"),
  Chunk168232 = require("./168232.js"),
  Chunk594174 = require("./594174.js"),
  Chunk70956 = require("./70956.js"),
  Chunk165299 = require("./165299.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = 864e5,
  h = 3e4,
  m = 3e5,
  g = 1,
  E = new Chunk26842.j({
    ttlMs: _
  });

function b() {
  let e = E.getValue();
  if (null == e) returnfalse;
  let t = new Date;
  for (let n of e.values()) {
    let e = new Date(n.next_reward_date);
    if ((0, i.default)(e, t) <= g) returntrue
  }
  returnfalse
}

function y() {
  (0, c.QI)(u.default.getCurrentUser()) ? E.setTtl(h): b() ? E.setTtl(m) : E.setTtl(_)
}

function O() {
  E.setLoading()
}

function v(e) {
  let {
    programRewards: t
  } = e;
  if (!E.isLoading()) returnfalse;
  let n = new Map;
  t.forEach(e => {
    n.set(e.reward_program, e)
  }), E.setValue(n), y()
}

function S() {
  if (!E.isLoading()) returnfalse;
  E.setError()
}

function I() {
  E.clear()
}
class T extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(u.default), (null == e ? true : e.cache) != null) {
      let t = new Map(e.cache.value);
      E.restore({
        value: t,
        fetchedAt: e.cache.fetchedAt
      })
    }
    y()
  }
  getState() {
    let e = E.serialize();
    return {
      cache: null != e ? {
        value: Array.from(e.value.entries()),
        fetchedAt: e.fetchedAt
      } : null
    }
  }
  passesGeneralUIInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === f.f.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.next_reward_date,
        r = t.program_current_state;
      if (null == r) returnfalse;
      if (null == n || "" === n) {
        if (![f.g.PAYMENT_PROCESSING, f.g.PAYMENT_ERROR].includes(r)) returnfalse
      } else {
        let e = new Date(n).getTime();
        if (Number.isNaN(e) || e < Date.now()) returnfalse
      }
    }
    returntrue
  }
  passesProgressBarInvariant(e) {
    if (!this.isInProperTreatments()) returnfalse;
    if (e === f.f.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.total_countdown_duration_ms;
      if (null == n || n <= 0) returnfalse;
      let r = t.next_reward_date;
      if (null == r || "" === r) returnfalse;
      let a = new Date(r).getTime();
      if (Number.isNaN(a) || a <= Date.now() || (0, i.default)(new Date(r), new Date) > n / d.Z.Millis.DAY) returnfalse
    }
    returntrue
  }
  isInProperTreatments() {
    let {
      isInTreatment: e
    } = (0, l.f3)("ProgramRewardsStore");
    return e
  }
  isFetching() {
    return E.isLoading()
  }
  isFetched() {
    return E.isValid()
  }
  hasCachedValue() {
    return null != E.getValue()
  }
  isReady() {
    return !this.isFetching() && (this.hasCachedValue() || !this.isInProperTreatments() || this.isError())
  }
  shouldFetch() {
    return !!this.isInProperTreatments() && E.shouldFetch()
  }
  isError() {
    return E.isError()
  }
  getStatus() {
    return E.getStatus()
  }
  getRewardForProgram(e) {
    var t;
    return null == (t = E.getValue()) ? true : t.get(e)
  }
  forceExpire() {
    E.forceExpire()
  }
}
p(T, "displayName", "ProgramRewardsStore"), p(T, "persistKey", "ProgramRewardsStore");
let C = new T(Chunk570140.Z, {
  LOGOUT: I,
  PROGRAM_REWARDS_FETCH: O,
  PROGRAM_REWARDS_FETCH_SUCCESS: v,
  PROGRAM_REWARDS_FETCH_FAILURE: S,
  CURRENT_USER_UPDATE: y
})