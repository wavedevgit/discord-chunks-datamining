/** Chunk was on web.js **/
/** chunk id: 842091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk159635 = require("./159635.js"),
  i = require.n(Chunk159635),
  Chunk840498 = require("./840498.js");

function a(e, t, n) {
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
      a(e, t, n[t])
    })
  }
  return e
}

function l(e, t, n, r, i) {
  let a;
  return n || (t += "\n\n"), a = e(t, s({
    inline: n
  }, r)), a = (0, o.ge)(r, a), a = (0, o.RA)(a), null != i && (a = i(a, n)), a
}
let c = {
  reactParserFor(e) {
    let t = i().parserFor(e),
      n = i().reactFor(i().ruleOutput(e, "react"));
    return function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
        r = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
        o = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
      return n(l(t, e, r, i, o), i)
    }
  },
  astParserFor(e) {
    let t = i().parserFor(e);
    return function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
        n = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
      return l(t, e, n, r, i)
    }
  }
}