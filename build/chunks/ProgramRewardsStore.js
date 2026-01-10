/** Chunk was on web.js **/
/** chunk id: 468208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var r, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk26842 = require("./26842.js"),
  Chunk375527 = require("./375527.js"),
  Chunk168232 = require("./168232.js"),
  Chunk594174 = require("./594174.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = 864e5,
  f = 3e4,
  p = 864e5,
  _ = new Chunk26842.j({
    ttlMs: d
  });

function m() {
  (0, l.QI)(c.default.getCurrentUser()) ? _.setTtl(f): _.setTtl(d)
}

function h() {
  _.setLoading()
}

function g(e) {
  let {
    programRewards: t
  } = e;
  if (!_.isLoading()) returnfalse;
  let n = new Map;
  t.forEach(e => {
    n.set(e.reward_program, e)
  }), _.setValue(n)
}

function E() {
  if (!_.isLoading()) returnfalse;
  _.setError()
}

function b() {
  _.clear()
}
class y extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(c.default), m(), (null == e ? true : e.cache) != null) {
      let t = new Map(e.cache.value);
      _.restore({
        value: t,
        fetchedAt: e.cache.fetchedAt
      })
    }
  }
  getState() {
    let e = _.serialize();
    return {
      cache: null != e ? {
        value: Array.from(e.value.entries()),
        fetchedAt: e.fetchedAt
      } : null
    }
  }
  isInProperTreatments() {
    let {
      isInTreatment: e
    } = (0, s.f3)("ProgramRewardsStore");
    return e
  }
  isFetching() {
    return _.isLoading()
  }
  isFetched() {
    return _.isValid()
  }
  isReady() {
    return this.isFetched() || !this.isInProperTreatments()
  }
  isWithinRewardProximity() {
    let e = _.getValue();
    if (null == e) returnfalse;
    let t = Date.now();
    for (let n of e.values())
      if (new Date(n.next_reward_date).getTime() - t < p) returntrue;
    returnfalse
  }
  shouldFetch() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    if (!this.isInProperTreatments()) returnfalse;
    let t = e || this.isWithinRewardProximity();
    return _.shouldFetch(t)
  }
  isError() {
    return _.isError()
  }
  getForProgram(e) {
    let {
      value: t,
      status: n
    } = _.getValueWithStatus();
    return {
      value: null == t ? true : t.get(e),
      status: n
    }
  }
  forceExpire() {
    _.forceExpire()
  }
}
u(y, "displayName", "ProgramRewardsStore"), u(y, "persistKey", "ProgramRewardsStore");
let O = new y(Chunk570140.Z, {
  LOGOUT: b,
  PROGRAM_REWARDS_FETCH: h,
  PROGRAM_REWARDS_FETCH_SUCCESS: g,
  PROGRAM_REWARDS_FETCH_FAILURE: E,
  CURRENT_USER_UPDATE: m
})