/** Chunk was on web.js **/
/** chunk id: 680646, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y,
  e: () => l
}), require("./896048.js");
var r, Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk927813 = require("./927813.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var l = function(e) {
  return e[e.NOT_FETCHED = 0] = "NOT_FETCHED", e[e.FETCHING = 1] = "FETCHING", e[e.FETCHED = 2] = "FETCHED", e[e.ERROR = 3] = "ERROR", e
}({});
let c = {
  applicationIdToGuildIds: {},
  lastFetchTimeMs: null,
  nextFetchRetryTimeMs: null,
  fetchState: 0
};

function u() {
  c.applicationIdToGuildIds = {}, c.lastFetchTimeMs = null, c.nextFetchRetryTimeMs = null, c.fetchState = 0
}

function d() {
  c.fetchState = 1
}

function f(e) {
  let {
    applicationId: t,
    guildId: n
  } = e;
  null == c.applicationIdToGuildIds[t] && (c.applicationIdToGuildIds[t] = new Set), c.applicationIdToGuildIds[t].add(n), c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t])
}

function p(e) {
  let {
    applicationId: t,
    guildId: n
  } = e;
  null != c.applicationIdToGuildIds[t] && (c.applicationIdToGuildIds[t].delete(n), c.applicationIdToGuildIds[t] = new Set(c.applicationIdToGuildIds[t]))
}

function _(e) {
  let {
    guildIdToApplicationIds: t
  } = e;
  for (let e in c.fetchState = 2, c.lastFetchTimeMs = Date.now(), c.applicationIdToGuildIds = {}, c.nextFetchRetryTimeMs = null, t)
    for (let n of t[e]) f({
      applicationId: n,
      guildId: e
    })
}

function h(e) {
  let {
    retryAfterSeconds: t
  } = e;
  if (c.fetchState = 3, null != t) {
    let e = t * s.A.Millis.SECOND;
    c.nextFetchRetryTimeMs = Date.now() + e
  }
}

function m(e) {
  let {
    application: t,
    guildId: n
  } = e;
  null != t && f({
    applicationId: t.id,
    guildId: n
  })
}

function g(e) {
  let {
    applicationId: t,
    guildId: n
  } = e;
  null != t && p({
    applicationId: t,
    guildId: n
  })
}
class E extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    if (null != e)
      for (let t in c.lastFetchTimeMs = e.lastFetchTimeMs, c.nextFetchRetryTimeMs = e.nextFetchRetryTimeMs, c.fetchState = e.fetchState, e.applicationIdToGuildIds) c.applicationIdToGuildIds[t] = new Set(e.applicationIdToGuildIds[t])
  }
  getState() {
    return c
  }
  getGuildIdsForApplication(e) {
    if (null != e) return c.applicationIdToGuildIds[e]
  }
  getLastFetchTimeMs() {
    return c.lastFetchTimeMs
  }
  getNextFetchRetryTimeMs() {
    return c.nextFetchRetryTimeMs
  }
  getFetchState() {
    return c.fetchState
  }
}
o(E, "displayName", "MyGuildApplicationsStore"), o(E, "persistKey", "MyGuildApplicationsStore");
let y = new E(Chunk73153.h, {
  LOGOUT: u,
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: d,
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: _,
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: h,
  INTEGRATION_CREATE: m,
  INTEGRATION_DELETE: g
})