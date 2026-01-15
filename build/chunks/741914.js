/** Chunk was on web.js **/
/** chunk id: 741914, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk723454 = require("./723454.js"),
  Chunk428595 = require("./428595.js"),
  Chunk454585 = require("./454585.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = i().omit(Chunk428595.Z.RULES, ["codeBlock", "heading"]),
  p = d(c({}, Chunk723454.Z), {
    parse: function(e, t, n) {
      var r;
      let i = a.Z.parse(e, t, n),
        o = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
      return d(c({}, i), {
        level: o
      })
    }
  }),
  _ = Chunk454585.Z.combineAndInjectMentionRule(f, [Chunk454585.Z.createReactRules(Chunk454585.Z.defaultReactRuleOptions), {
    header: p
  }]),
  h = Chunk454585.Z.reactParserFor(_)