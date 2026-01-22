/** Chunk was on web.js **/
/** chunk id: 415350, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk223637 = require("./223637.js"),
  Chunk542664 = require("./542664.js"),
  Chunk46054 = require("./46054.js");

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
let f = i().omit(Chunk542664.A.RULES, ["codeBlock", "heading"]),
  p = d(c({}, Chunk223637.A), {
    parse: function(e, t, n) {
      var r;
      let i = a.A.parse(e, t, n),
        s = Math.min(6, (null != (r = n.initialHeaderLevel) ? r : 3) + i.level);
      return d(c({}, i), {
        level: s
      })
    }
  }),
  _ = Chunk46054.A.combineAndInjectMentionRule(f, [Chunk46054.A.createReactRules(Chunk46054.A.defaultReactRuleOptions), {
    header: p
  }]),
  h = Chunk46054.A.reactParserFor(_)