/** Chunk was on web.js **/
/** chunk id: 391690, original params: e,t,n (module,exports,re quire) **/
"use strict";
let r;
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var i, Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk579806 = require("./579806.js"),
  Chunk358085 = require("./358085.js"),
  Chunk417363 = require("./417363.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {},
  h = (0, Chunk358085.isWindows)() ? "".concat(Chunk579806.Z.process.env.LOCALAPPDATA, "\\DiscordGames") : (0, Chunk358085.isMac)() ? "/Applications/DiscordGames" : "/tmp";

function g(e, t) {
  var n;
  m = _(f({}, m), {
    [e]: f({}, null != (n = m[e]) ? n : {}, t)
  })
}

function E(e) {
  m = f({}, m), delete m[e]
}

function b(e, t) {
  r.pathLabels = _(f({}, r.pathLabels), {
    [e]: t
  })
}

function y(e) {
  if (null == r.pathLabels[e]) returnfalse;
  r.pathLabels = f({}, r.pathLabels), delete r.pathLabels[e]
}

function O(e) {
  let {
    applicationId: t,
    branchId: n,
    installationPath: i
  } = e;
  null == r.installations[t] && (r.installations[t] = {}), r.installations[t][n] = {
    installationPath: i
  }, r.installationPaths.has(i) || I({
    path: i,
    metadata: {}
  })
}

function v(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, r = c.Z.getState(t, n);
  null != r && null == r.buildId && null == r.manifestIds && S({
    applicationId: t,
    branchId: n
  })
}

function S(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  if (null == r.installations[t]) returnfalse;
  delete r.installations[t][n], 0 === Object.keys(r.installations[t]).length && delete r.installations[t]
}

function I(e) {
  if (r.installationPaths.has(e.path)) returnfalse;
  g(e.path, e.metadata);
  let t = new Set(r.installationPaths);
  t.add(e.path), r.installationPaths = t
}

function T(e) {
  let {
    path: t
  } = e;
  if (!r.installationPaths.has(t) || r.defaultInstallationPath === t) returnfalse;
  let n = new Set(r.installationPaths);
  n.delete(t), r.installationPaths = n, E(t), y(t)
}

function A(e) {
  let {
    path: t,
    label: n,
    isDefault: i
  } = e;
  if (!r.installationPaths.has(t)) returnfalse;
  null != n && "" !== n && r.pathLabels[t] !== n && b(t, n), i && r.defaultInstallationPath !== t && (r.defaultInstallationPath = t)
}

function C(e) {
  let {
    metadataPayload: t
  } = e;
  for (let e in t) g(e, t[e])
}
class N extends(i = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    let t = f({}, e);
    null == t.installations && (t.installations = {}), null == t.defaultInstallationPath && (t.defaultInstallationPath = h), null == t.installationPaths ? t.installationPaths = new Set([t.defaultInstallationPath]) : t.installationPaths = new Set(Array.from(t.installationPaths)), null == t.pathLabels && (t.pathLabels = {}), r = t
  }
  getState() {
    return r
  }
  get defaultInstallationPath() {
    return r.defaultInstallationPath
  }
  get installationPaths() {
    return Array.from(r.installationPaths).map(e => ({
      path: e,
      label: r.pathLabels[e]
    }))
  }
  get installationPathsMetadata() {
    return m
  }
  hasGamesInstalledInPath(e) {
    let {
      installations: t
    } = r;
    for (let n in t)
      for (let r in t[n])
        if (t[n][r].installationPath === e) returntrue;
    returnfalse
  }
  shouldBeInstalled(e, t) {
    return null != r.installations[e] && null != r.installations[e][t]
  }
  getInstallationPath(e, t) {
    return null == r.installations[e] || null == r.installations[e][t] ? null : r.installations[e][t].installationPath
  }
  getLabelFromPath(e) {
    var t, n;
    return e === h ? u.intl.string(u.t.VdDrjm) : null != (n = null != (t = s.Z.fileManager.basename(e)) ? t : e.replace(/[/\\]+$/, "").split(/[/\\]+/g).slice(false)[0]) ? n : "?"
  }
}
d(N, "displayName", "InstallationManagerStore"), d(N, "persistKey", "InstallationManagerStore");
let P = new N(Chunk570140.Z, {
  DISPATCH_APPLICATION_INSTALL: O,
  DISPATCH_APPLICATION_UNINSTALL: S,
  DISPATCH_APPLICATION_CANCEL: v,
  INSTALLATION_LOCATION_ADD: I,
  INSTALLATION_LOCATION_REMOVE: T,
  INSTALLATION_LOCATION_UPDATE: A,
  INSTALLATION_LOCATION_FETCH_METADATA: C,
  DISPATCH_APPLICATION_ADD_TO_INSTALLATIONS: O
})