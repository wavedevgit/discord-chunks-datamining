/** Chunk was on web.js **/
/** chunk id: 331065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk81825 = require("./81825.js"),
  Chunk156570 = require("./156570.js");

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function s(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function l(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class c extends Chunk81825.Z {
  static createFromServer(e) {
    return new c({
      subscriptions: e.subscriptions.map(e => i.Z.createFromServer(c.convertStoreListing(e))),
      otps: e.otps.map(e => i.Z.createFromServer(c.convertStoreListing(e)))
    })
  }
  static convertStoreListing(e) {
    var t;
    return l(o({}, e), {
      summary: e.summary.default,
      description: null == (t = e.description) ? true : t.default
    })
  }
  constructor(e) {
    super(), a(this, "subscriptions", true), a(this, "otps", true), this.subscriptions = e.subscriptions, this.otps = e.otps
  }
}