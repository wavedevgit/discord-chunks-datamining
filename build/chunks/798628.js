/** Chunk was on web.js **/
/** chunk id: 798628, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  cE: () => f,
  eu: () => _,
  fU: () => p
});
var Chunk748521 = require("./748521.js"),
  Chunk731965 = require("./731965.js"),
  Chunk902704 = require("./902704.js");

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

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {},
  d = (0, Chunk748521.F)(e => ({
    polls: {},
    updatePollState(t, n, r) {
      (0, i.j)(() => {
        e(e => {
          var i;
          return {
            polls: c(s({}, e.polls), {
              [t]: c(s({}, e.polls[t]), {
                [n]: r(null == (i = e.polls[t]) ? true : i[n])
              })
            })
          }
        })
      })
    }
  }));

function f(e) {
  return d(t => {
    var n;
    return null != (n = t.polls[e]) ? n : u
  }, a.Z)
}

function _(e, t, n) {
  d.getState().updatePollState(e, t, n)
}

function p(e, t) {
  var n;
  return null == (n = d.getState().polls[e]) ? true : n[t]
}