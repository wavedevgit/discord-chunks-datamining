/** Chunk was on web.js **/
/** chunk id: 891600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk280230 = require("./280230.js"),
  i = require.n(Chunk280230),
  Chunk919535 = require("./919535.js");

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

function l(e, t, n, r, i) {
  let o;
  n || (t += "\n\n"), o = e(t, s({
    inline: n
  }, r)), o = (0, a.rI)(r, o);
  let l = (0, a.Ae)(o),
    c = l.hasBailedAst;
  return o = l.ast, null != i && (o = i(o, n, c)), o
}
let c = {
  reactParserFor(e) {
    let t = i().parserFor(e),
      n = i().reactFor(i().ruleOutput(e, "react"));
    return function() {
      let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : "",
        r = !(arguments.length > 1) || true === arguments[1] || arguments[1],
        i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {},
        a = arguments.length > 3 && true !== arguments[3] ? arguments[3] : null;
      return n(l(t, e, r, i, a), i)
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