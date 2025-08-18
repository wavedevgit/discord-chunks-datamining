/** Chunk was on 91173 **/
/** chunk id: 741914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk723454 = require("./723454.js"),
  Chunk428595 = require("./428595.js"),
  Chunk454585 = require("./454585.js");

function s(e) {
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
let u = i().omit(Chunk428595.Z.RULES, ["codeBlock", "heading"]),
  d = c(s({}, Chunk723454.Z), {
    parse: function(e, t, n) {
      var r;
      let i = l.Z.parse(e, t, n),
        o = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
      return c(s({}, i), {
        level: o
      })
    }
  }),
  p = Chunk454585.Z.combineAndInjectMentionRule(u, [Chunk454585.Z.createReactRules(Chunk454585.Z.defaultReactRuleOptions), {
    header: d
  }]),
  m = Chunk454585.Z.reactParserFor(p)