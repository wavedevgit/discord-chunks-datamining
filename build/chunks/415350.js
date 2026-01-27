/** Chunk was on 92917 **/
/** chunk id: 415350, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk223637 = require("./223637.js"),
  Chunk542664 = require("./542664.js"),
  Chunk46054 = require("./46054.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = i().omit(Chunk542664.A.RULES, ["codeBlock", "heading"]),
  d = c(o({}, Chunk223637.A), {
    parse: function(e, t, n) {
      var r;
      let i = l.A.parse(e, t, n),
        a = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
      return c(o({}, i), {
        level: a
      })
    }
  }),
  p = Chunk46054.A.combineAndInjectMentionRule(u, [Chunk46054.A.createReactRules(Chunk46054.A.defaultReactRuleOptions), {
    header: d
  }]),
  m = Chunk46054.A.reactParserFor(p)