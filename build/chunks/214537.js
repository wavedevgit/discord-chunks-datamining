/** Chunk was on web.js **/
/** chunk id: 214537, original params: e,t (module,exports,re quire) **/
"use strict";

function n(e) {
  return "IntlMessagesProxy" === e[Symbol.toStringTag]
}

function r(e, t) {
  let r = n(e),
    i = n(t),
    a = e;
  return r && i ? (e.$$loader.fallbackWith(t.$$loader), a = e) : r || i ? r && !i ? a = Object.assign(e.$$baseObject, t) : i && !r && (a = Object.assign(t.$$baseObject, e)) : a = Object.assign(Object.assign({}, t), e), a
}

function i(e) {
  function t(t) {
    return n => e.get(t, n)
  }
  let n = {},
    r = new Proxy(n, {
      ownKeys: e => Reflect.ownKeys(e),
      getOwnPropertyDescriptor: (e, n) => (e[n] || (e[n] = t(n)), Reflect.getOwnPropertyDescriptor(e, n)),
      get: (e, n) => "$$typeof" === n ? "object" : n === Symbol.toStringTag ? "IntlMessagesProxy" : (e[n] || (e[n] = t(n)), e[n])
    });
  return Object.defineProperty(r, "$$baseObject", {
    value: n,
    enumerable: false,
    configurable: false,
    writable: false
  }), Object.defineProperty(r, "$$loader", {
    value: e,
    enumerable: false,
    configurable: false,
    writable: false
  }), r
}
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.chainMessagesObjects = r, exports.makeMessagesProxy = i