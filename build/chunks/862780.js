/** Chunk was on web.js **/
/** chunk id: 862780, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A2: () => p,
  d$: () => f,
  xt: () => _
}), require("./896048.js");
var Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk52133 = require("./52133.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
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
require("./661191.js");
let u = {},
  d = (0, Chunk265690.h)(e => ({
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(t, n, r) {
      (0, i.r)(() => {
        e(e => {
          var i;
          let a = r(null == (i = e.pollsByChannelId[t]) ? true : i[n]);
          return {
            pollsByChannelId: c(o({}, e.pollsByChannelId), {
              [t]: c(o({}, e.pollsByChannelId[t]), {
                [n]: a
              })
            }),
            pollsByMessageId: c(o({}, e.pollsByMessageId), {
              [n]: a
            })
          }
        })
      })
    }
  }));

function f(e) {
  return d(t => {
    var n;
    return null != (n = t.pollsByChannelId[e]) ? n : u
  }, a.A)
}

function p(e, t, n) {
  d.getState().updatePollState(e, t, n)
}

function _(e, t) {
  var n;
  return null == (n = d.getState().pollsByChannelId[e]) ? true : n[t]
}