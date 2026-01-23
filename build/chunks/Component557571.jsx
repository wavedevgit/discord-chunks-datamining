/** Chunk was on web.js **/
/** chunk id: 557571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YQ: () => g,
  lV: () => O,
  xq: () => y,
  y0: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk870844 = require("./870844.js"),
  Chunk353640 = require("./353640.js"),
  Chunk574381 = require("./574381.js"),
  Chunk689194 = require("./689194.js"),
  Chunk858013 = require("./858013.js"),
  Chunk602450 = require("./602450.js"),
  Chunk411683 = require("./411683.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = {
    perkAvailableToUser: false,
    installationStatus: Chunk602450.Lk.UNKNOWN,
    connectionStatus: Chunk602450.l7.INITIALIZING,
    isWeb: (0, Chunk574381.HZ)(),
    isSupportedPrivateBrowsingPerkPlatform: (0, Chunk574381.uF)() || (0, Chunk574381.cX)(),
    installTimeout: 6e5
  },
  g = e => (0, a.y)()(t => p(h(p({}, m), {
    setRegistration: e => t(t => h(p({}, t), {
      registration: e
    })),
    setInstallationStatus: e => t(t => h(p({}, t), {
      installationStatus: e
    })),
    setConnectionStatus: e => t(t => h(p({}, t), {
      connectionStatus: e
    })),
    setPerkAvailableToUser: e => t(() => ({
      perkAvailableToUser: e
    })),
    setIsWeb: e => t(() => ({
      isWeb: e
    })),
    setIsSupportedPrivateBrowsingPerkPlatform: e => t(() => ({
      isSupportedPrivateBrowsingPerkPlatform: e
    })),
    getWarpInstallationStatus: c.t,
    finishSetup: async () => await l.A.finishSetup(),
    connect: async () => false,
    disconnect: async () => false,
    install: async () => {},
    uninstall: async () => {},
    setConnect: e => t(() => ({
      connect: e
    })),
    setDisconnect: e => t(() => ({
      disconnect: e
    })),
    setInstall: e => t(() => ({
      install: e
    })),
    setUninstall: e => t(() => ({
      uninstall: e
    })),
    doInstall: false,
    setDoInstall: e => t(() => ({
      doInstall: e
    })),
    setGetWarpInstallationStatus: e => t(() => ({
      getWarpInstallationStatus: e
    }))
  }), e)),
  E = Chunk64700.createContext(null),
  y = e => {
    let {
      children: t
    } = e, n = b();
    return (0, r.jsx)(E.Provider, {
      value: n,
      children: t
    })
  },
  b = () => {
    let e = (0, d.L)(),
      [t] = (0, i.useState)(() => g({
        install: c.u,
        connect: async () => await l.A.connect(),
        disconnect: async () => await l.A.disconnect(),
        perkAvailableToUser: e
      })),
      n = (0, s.P)(t, e => e.setPerkAvailableToUser);
    return (0, i.useEffect)(() => {
      n(e)
    }, [e, n]), t
  };

function O(e) {
  let t = (0, i.useContext)(E),
    n = b(),
    r = null != t ? t : n;
  return null != e ? (0, s.P)(r, e) : (0, s.P)(r)
}