/** Chunk was on web.js **/
/** chunk id: 468208, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var r, Chunk995638 = require("./995638.js"),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk26842 = require("./26842.js"),
  Chunk375527 = require("./375527.js"),
  Chunk168232 = require("./168232.js"),
  Chunk594174 = require("./594174.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 864e5,
  p = 3e4,
  _ = 3e5,
  m = 1,
  h = new Chunk26842.j({
    ttlMs: f
  });

function g() {
  let e = h.getValue();
  if (null == e) returnfalse;
  let t = new Date;
  for (let n of e.values()) {
    let e = new Date(n.next_reward_date);
    if ((0, i.default)(e, t) <= m) returntrue
  }
  returnfalse
}

function E() {
  (0, c.QI)(u.default.getCurrentUser()) ? h.setTtl(p): g() ? h.setTtl(_) : h.setTtl(f)
}

function b() {
  h.setLoading()
}

function y(e) {
  let {
    programRewards: t
  } = e;
  if (!h.isLoading()) returnfalse;
  let n = new Map;
  t.forEach(e => {
    n.set(e.reward_program, e)
  }), h.setValue(n), E()
}

function O() {
  if (!h.isLoading()) returnfalse;
  h.setError()
}

function v() {
  h.clear()
}
class S extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    if (this.waitFor(u.default), (null == e ? true : e.cache) != null) {
      let t = new Map(e.cache.value);
      h.restore({
        value: t,
        fetchedAt: e.cache.fetchedAt
      })
    }
    E()
  }
  getState() {
    let e = h.serialize();
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
    } = (0, l.f3)("ProgramRewardsStore");
    return e
  }
  isFetching() {
    return h.isLoading()
  }
  isFetched() {
    return h.isValid()
  }
  hasCachedValue() {
    return null != h.getValue()
  }
  isReady() {
    return !this.isFetching() && (this.hasCachedValue() || !this.isInProperTreatments() || this.isError())
  }
  shouldFetch() {
    return !!this.isInProperTreatments() && h.shouldFetch()
  }
  isError() {
    return h.isError()
  }
  getStatus() {
    return h.getStatus()
  }
  getRewardForProgram(e) {
    var t;
    return null == (t = h.getValue()) ? true : t.get(e)
  }
  forceExpire() {
    h.forceExpire()
  }
}
d(S, "displayName", "ProgramRewardsStore"), d(S, "persistKey", "ProgramRewardsStore");
let I = new S(Chunk570140.Z, {
  LOGOUT: v,
  PROGRAM_REWARDS_FETCH: b,
  PROGRAM_REWARDS_FETCH_SUCCESS: y,
  PROGRAM_REWARDS_FETCH_FAILURE: O,
  CURRENT_USER_UPDATE: E
})