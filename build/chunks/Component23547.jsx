/** Chunk was on web.js **/
/** chunk id: 23547, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mm: () => m,
  jj: () => _,
  wH: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk751648 = require("./751648.js"),
  Chunk479766 = require("./479766.js");

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
let d = "balance-widget-menu-coachmark-modal",
  f = () => (0, Chunk481060.nfh)(d),
  _ = () => (0, Chunk481060.Mr3)(d),
  p = {
    modalKey: d,
    onCloseCallback: Chunk751648.j2,
    onCloseRequest: async () => {
      await (0, Chunk751648.j2)()
    }
  };

function h(e) {
  e.isCoachmarkEnabled && (0, a.ZDy)(async () => {
    let {
      WrappedBalanceWidgetEarnedOrbsCoachmarkModal: t
    } = await Promise.resolve().then(n.bind(n, 720463));
    return n => (0, r.jsx)(t, u({}, e, n))
  }, p)
}

function m(e) {
  let t = (0, o.cj)([l.Z], () => l.Z.earnedOrbsCoachmark),
    {
      shouldOpen: n
    } = t;
  return (0, i.useEffect)(() => {
    let t = f();
    n && !t ? h(u({}, e)) : !n && t && _()
  }, [n, e]), u({}, t)
}