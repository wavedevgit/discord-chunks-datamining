/** Chunk was on web.js **/
/** chunk id: 651753, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v,
  e: () => _
});
var r, Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk994369 = require("./994369.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = 20;
var _ = function(e) {
  return e[e.FETCHING = 0] = "FETCHING", e[e.FETCHED = 1] = "FETCHED", e[e.ERROR = 2] = "ERROR", e
}({});

function h(e) {
  let {
    query: t,
    guildId: n,
    page: r,
    pageSize: i,
    categoryId: a,
    integrationType: s,
    minUserInstallCommandCount: l,
    excludeAppsWithCustomInstallUrl: c,
    excludeNonEmbeddedApps: u,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
    source: f = o.V.APP_DIRECTORY
  } = e;
  return "query:'".concat(t, "' guildId:").concat(n, " page:").concat(r, " pageSize:").concat(i, " categoryId:").concat(a, " integrationType:").concat(s, " minUserInstallCommandCount:").concat(l, " excludeAppsWithCustomInstallUrl:").concat(c, " excludeNonEmbeddedApps:").concat(u, " excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand:").concat(d, " source:").concat(f)
}
let m = new(a())({
    max: p
  }),
  g = {};

function E(e) {
  let {
    query: t,
    guildId: n,
    page: r,
    pageSize: i,
    categoryId: a,
    integrationType: o,
    minUserInstallCommandCount: s,
    excludeAppsWithCustomInstallUrl: l,
    excludeNonEmbeddedApps: c,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
    source: p
  } = e, _ = h({
    query: t,
    guildId: n,
    page: r,
    pageSize: i,
    categoryId: a,
    integrationType: o,
    minUserInstallCommandCount: s,
    excludeAppsWithCustomInstallUrl: l,
    excludeNonEmbeddedApps: c,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
    source: p
  });
  g = f(u({}, g), {
    [_]: 0
  })
}

function y(e) {
  let {
    query: t,
    guildId: n,
    page: r,
    pageSize: i,
    categoryId: a,
    result: o,
    integrationType: s,
    minUserInstallCommandCount: l,
    excludeAppsWithCustomInstallUrl: c,
    excludeNonEmbeddedApps: d,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: p,
    source: _
  } = e, E = h({
    query: t,
    guildId: n,
    page: r,
    pageSize: i,
    categoryId: a,
    integrationType: s,
    minUserInstallCommandCount: l,
    excludeAppsWithCustomInstallUrl: c,
    excludeNonEmbeddedApps: d,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: p,
    source: _
  });
  m.set(E, u({
    lastFetchTimeMs: Date.now()
  }, o)), g = f(u({}, g), {
    [E]: 1
  })
}

function b(e) {
  let {
    query: t,
    guildId: n,
    page: r,
    pageSize: i,
    categoryId: a,
    integrationType: o,
    minUserInstallCommandCount: s,
    excludeAppsWithCustomInstallUrl: l,
    excludeNonEmbeddedApps: c,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
    source: p
  } = e, _ = h({
    query: t,
    guildId: n,
    page: r,
    pageSize: i,
    categoryId: a,
    integrationType: o,
    minUserInstallCommandCount: s,
    excludeAppsWithCustomInstallUrl: l,
    excludeNonEmbeddedApps: c,
    excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: d,
    source: p
  });
  g = f(u({}, g), {
    [_]: 2
  })
}
class O extends(r = Chunk311907.Ay.Store) {
  getSearchResults(e) {
    let {
      query: t,
      guildId: n,
      page: r,
      pageSize: i,
      categoryId: a,
      integrationType: o,
      minUserInstallCommandCount: s,
      excludeAppsWithCustomInstallUrl: l,
      excludeNonEmbeddedApps: c,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
      source: d
    } = e, f = h({
      query: t,
      guildId: n,
      page: r,
      pageSize: i,
      categoryId: a,
      integrationType: o,
      minUserInstallCommandCount: s,
      excludeAppsWithCustomInstallUrl: l,
      excludeNonEmbeddedApps: c,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
      source: d
    });
    return m.get(f)
  }
  getFetchState(e) {
    let {
      query: t,
      guildId: n,
      page: r,
      pageSize: i,
      categoryId: a,
      integrationType: o,
      minUserInstallCommandCount: s,
      excludeAppsWithCustomInstallUrl: l,
      excludeNonEmbeddedApps: c,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
      source: d
    } = e;
    return g[h({
      query: t,
      guildId: n,
      page: r,
      pageSize: i,
      categoryId: a,
      integrationType: o,
      minUserInstallCommandCount: s,
      excludeAppsWithCustomInstallUrl: l,
      excludeNonEmbeddedApps: c,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: u,
      source: d
    })]
  }
}
c(O, "displayName", "ApplicationDirectorySearchStore");
let v = new O(Chunk73153.h, {
  APPLICATION_DIRECTORY_FETCH_SEARCH: E,
  APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS: y,
  APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE: b
})