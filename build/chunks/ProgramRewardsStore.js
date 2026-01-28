/** Chunk was on web.js **/
/** chunk id: 895944, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./896048.js");
var r, Chunk410530 = require("./410530.js"),
  Chunk892227 = require("./892227.js"),
  Chunk582972 = require("./582972.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk431560 = require("./431560.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927813 = require("./927813.js"),
  Chunk649032 = require("./649032.js"),
  Chunk26508 = require("./26508.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = 864e5,
  m = new Chunk431560.Z({
    ttlMs: h
  });

function g() {
  let e = m.getValue();
  if (null == e) return {
    state: "MORE_THAN_24H_BEFORE_REWARD"
  };
  let t = new Date;
  for (let n of e.values()) {
    let e = new Date(n.next_reward_date);
    if (!isNaN(e.getTime())) {
      if (t >= e) return {
        state: "PAST_REWARD_DATE"
      };
      if (t >= (0, i.default)(e, false)) return {
        state: "LESS_THAN_24H_BEFORE_REWARD",
        msUntilReward: (0, o.A)(e, t)
      }
    }
  }
  return {
    state: "MORE_THAN_24H_BEFORE_REWARD"
  }
}

function E(e, t) {
  return "LESS_THAN_24H_BEFORE_REWARD" === e && null != t ? t : h
}

function y() {
  let {
    state: e,
    msUntilReward: t
  } = g();
  m.setTtl(E(e, t))
}

function b() {
  m.setLoading()
}

function O(e) {
  let {
    programRewards: t
  } = e;
  if (!m.isLoading()) returnfalse;
  let n = new Map;
  t.forEach(e => {
    n.set(e.reward_program, e)
  }), m.setValue(n), y()
}

function v() {
  if (!m.isLoading()) returnfalse;
  m.setError()
}

function A() {
  m.clear()
}
class I extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (this.waitFor(u.default), (null == e ? true : e.cache) != null) {
      let t = new Map(e.cache.value);
      m.restore({
        value: t,
        fetchedAt: e.cache.fetchedAt
      })
    }
    y()
  }
  getState() {
    let e = m.serialize();
    return {
      cache: null != e ? {
        value: Array.from(e.value.entries()),
        fetchedAt: e.fetchedAt
      } : null
    }
  }
  passesGeneralUIInvariant(e) {
    if (!(0, p.T0)("ProgramRewardsStore")) returnfalse;
    if (e === f.W.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.next_reward_date,
        r = t.program_current_state;
      if (null == r) returnfalse;
      if (null == n || "" === n) {
        if (![f.L.PAYMENT_PROCESSING, f.L.PAYMENT_ERROR].includes(r)) returnfalse
      } else {
        let e = new Date(n).getTime();
        if (Number.isNaN(e) || e < Date.now()) returnfalse
      }
    }
    returntrue
  }
  passesProgressBarInvariant(e) {
    if (!(0, p.T0)("ProgramRewardsStore")) returnfalse;
    if (e === f.W.NITRO) {
      let t = this.getRewardForProgram(e);
      if (null == t) returnfalse;
      let n = t.total_countdown_duration_ms;
      if (null == n || n <= 0) returnfalse;
      let r = t.next_reward_date;
      if (null == r || "" === r) returnfalse;
      let i = new Date(r).getTime();
      if (Number.isNaN(i) || i <= Date.now() || (0, a.default)(new Date(r), new Date) > n / d.A.Millis.DAY) returnfalse
    }
    returntrue
  }
  isFetching() {
    return m.isLoading()
  }
  isFetched() {
    return m.isValid()
  }
  hasCachedValue() {
    return null != m.getValue()
  }
  isReady() {
    return !this.isFetching() && (this.hasCachedValue() || !(0, p.T0)("ProgramRewardsStore") || this.isError() || !(0, p.mY)())
  }
  shouldFetch() {
    return !!(0, p.T0)("ProgramRewardsStore.shouldFetch") && !!(0, p.mY)() && m.shouldFetch()
  }
  isError() {
    return m.isError()
  }
  getStatus() {
    return m.getStatus()
  }
  getRewardForProgram(e) {
    var t;
    return null == (t = m.getValue()) ? true : t.get(e)
  }
  forceExpire() {
    m.forceExpire()
  }
}
_(I, "displayName", "ProgramRewardsStore"), _(I, "persistKey", "ProgramRewardsStore");
let S = new I(Chunk73153.h, {
  LOGOUT: A,
  PROGRAM_REWARDS_FETCH: b,
  PROGRAM_REWARDS_FETCH_SUCCESS: O,
  PROGRAM_REWARDS_FETCH_FAILURE: v,
  CURRENT_USER_UPDATE: y,
  CONNECTION_OPEN: y
})