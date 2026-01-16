/** Chunk was on web.js **/
/** chunk id: 417153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CF: () => d,
  Es: () => u,
  z5: () => f
}), require("./388685.js");
var Chunk121168 = require("./121168.js"),
  Chunk731965 = require("./731965.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = (0, Chunk121168.U)(() => ({
  currentToastMap: new Map,
  queuedToastsMap: new Map
}));

function d(e) {
  var t, n;
  let r = null != (n = null == (t = e.options) ? true : t.appContext) ? n : a.IlC.APP;
  (0, i.j)(() => {
    u.setState(t => {
      if (t.currentToastMap.has(r)) {
        var n;
        let i = new Map(t.queuedToastsMap),
          a = null != (n = i.get(r)) ? n : [];
        return i.set(r, [...a, e]), c(s({}, t), {
          queuedToastsMap: i
        })
      } {
        let n = new Map(t.currentToastMap);
        return n.set(r, e), c(s({}, t), {
          currentToastMap: n
        })
      }
    })
  })
}

function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : a.IlC.APP;
  (0, i.j)(() => {
    u.setState(t => {
      var n, r;
      if (0 === (null != (n = t.queuedToastsMap.get(e)) ? n : []).length) {
        let n = new Map(t.currentToastMap);
        return n.delete(e), c(s({}, t), {
          currentToastMap: n
        })
      }
      let i = new Map(t.currentToastMap),
        a = new Map(t.queuedToastsMap),
        o = null != (r = a.get(e)) ? r : [],
        l = o[0];
      return i.set(e, l), a.set(e, o.slice(1)), c(s({}, t), {
        currentToastMap: i,
        queuedToastsMap: a
      })
    })
  })
}