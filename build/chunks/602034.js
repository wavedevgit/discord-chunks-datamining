/** Chunk was on web.js **/
/** chunk id: 602034, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
require.d(exports, {
  Aq: () => d,
  HP: () => l,
  KE: () => a,
  Lp: () => p,
  M4: () => u,
  Mz: () => c,
  eM: () => i,
  nF: () => f,
  t$: () => o
}), require("./747238.js"), require("./896048.js");
let i = "data-list-item-id",
  a = "data-list-id",
  s = "___";

function o(e, t) {
  return "".concat(e).concat(s).concat(t)
}

function l(e) {
  return e.split(s)[1]
}

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : i;
  return "[".concat(t, '="').concat(e, '"]')
}

function u(e, t) {
  return "".concat(e, "-").concat(t)
}

function d(e, t, n) {
  return "".concat(e, "-").concat(t, "-").concat(n)
}

function f(e, t) {
  let n = false;
  return function() {
    for (var r = arguments.length, i = Array(r), a = 0; a < r; a++) i[a] = arguments[a];
    n || (e(...i), n = true, setTimeout(() => n = false, t))
  }
}
class p {
  get(e) {
    let t = this.handlers.get(e);
    return null == t && (t = this.makeHandler(e), this.handlers.set(e, t)), t
  }
  clean() {
    delete this.handlers, this.handlers = new Map
  }
  constructor(e) {
    r(this, "makeHandler", true), r(this, "handlers", true), this.makeHandler = e, this.handlers = new Map, this.makeHandler = e
  }
}