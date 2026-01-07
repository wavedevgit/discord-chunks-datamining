/** Chunk was on web.js **/
/** chunk id: 773275, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o8: () => g,
  ov: () => b,
  xf: () => O,
  xz: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk343203 = require("./343203.js"),
  Chunk663042 = require("./663042.js"),
  Chunk818710 = require("./818710.js"),
  Chunk646834 = require("./646834.js"),
  Chunk998054 = require("./998054.js"),
  Chunk5900 = require("./5900.js"),
  Chunk848984 = require("./848984.js");

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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let h = {
    perkAvailableToUser: false,
    installationStatus: Chunk5900._n.UNKNOWN,
    connectionStatus: Chunk5900.Ij.INITIALIZING,
    isWeb: (0, Chunk818710.$L)(),
    isSupportedPrivateBrowsingPerkPlatform: (0, Chunk818710.ED)() || (0, Chunk818710.V5)(),
    installTimeout: 6e5
  },
  g = e => (0, a.M)()(t => p(m(p({}, h), {
    setRegistration: e => t(t => m(p({}, t), {
      registration: e
    })),
    setInstallationStatus: e => t(t => m(p({}, t), {
      installationStatus: e
    })),
    setConnectionStatus: e => t(t => m(p({}, t), {
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
    getWarpInstallationStatus: c.Y,
    finishSetup: async () => await l.Z.finishSetup(),
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
  E = Chunk473749.createContext(null),
  b = e => {
    let {
      children: t
    } = e, n = y();
    return (0, r.jsx)(E.Provider, {
      value: n,
      children: t
    })
  },
  y = () => {
    let e = (0, d.u)(),
      [t] = (0, i.useState)(() => g({
        install: c.f,
        connect: async () => await l.Z.connect(),
        disconnect: async () => await l.Z.disconnect(),
        perkAvailableToUser: e
      })),
      n = (0, o.o)(t, e => e.setPerkAvailableToUser);
    return (0, i.useEffect)(() => {
      n(e)
    }, [e, n]), t
  };

function O(e) {
  let t = (0, i.useContext)(E),
    n = y(),
    r = null != t ? t : n;
  return null != e ? (0, o.o)(r, e) : (0, o.o)(r)
}