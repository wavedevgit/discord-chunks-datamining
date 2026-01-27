/** Chunk was on 92917 **/
/** chunk id: 862780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A2: () => d,
  d$: () => u,
  xt: () => p
}), require("./896048.js");
var Chunk265690 = require("./265690.js"),
  Chunk121894 = require("./121894.js"),
  Chunk52133 = require("./52133.js");

function a(e) {
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

function s(e, t) {
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
require("./661191.js");
let o = {},
  c = (0, Chunk265690.h)(e => ({
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(t, n, r) {
      (0, i.r)(() => {
        e(e => {
          var i;
          let l = r(null == (i = e.pollsByChannelId[t]) ? true : i[n]);
          return {
            pollsByChannelId: s(a({}, e.pollsByChannelId), {
              [t]: s(a({}, e.pollsByChannelId[t]), {
                [n]: l
              })
            }),
            pollsByMessageId: s(a({}, e.pollsByMessageId), {
              [n]: l
            })
          }
        })
      })
    }
  }));

function u(e) {
  return c(t => {
    var n;
    return null != (n = t.pollsByChannelId[e]) ? n : o
  }, l.A)
}

function d(e, t, n) {
  c.getState().updatePollState(e, t, n)
}

function p(e, t) {
  var n;
  return null == (n = c.getState().pollsByChannelId[e]) ? true : n[t]
}