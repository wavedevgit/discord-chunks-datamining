/** Chunk was on web.js **/
/** chunk id: 260866, original params: e,t,n (module,exports,re quire) **/
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
  $o: () => p,
  NE: () => d,
  P1: () => c,
  P2: () => f,
  ie: () => i,
  jb: () => s,
  kn: () => o,
  qR: () => u,
  x3: () => l
}), require("./35282.js"), require("./388685.js");
let i = "data-list-item-id",
  o = "data-list-id",
  a = "___";

function s(e, t) {
  return "".concat(e).concat(a).concat(t)
}

function l(e) {
  return e.split(a)[1]
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
    for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
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