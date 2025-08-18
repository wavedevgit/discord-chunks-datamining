/** Chunk was on 91173 **/
/** chunk id: 798628, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  cE: () => u,
  eu: () => d,
  fU: () => p
});
var Chunk131193 = require("./131193.js"),
  Chunk731965 = require("./731965.js"),
  Chunk902704 = require("./902704.js");

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

function a(e, t) {
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
let s = {},
  c = (0, Chunk131193.F)(e => ({
    polls: {},
    updatePollState(t, n, r) {
      (0, i.j)(() => {
        e(e => {
          var i;
          return {
            polls: a(o({}, e.polls), {
              [t]: a(o({}, e.polls[t]), {
                [n]: r(null == (i = e.polls[t]) ? true : i[n])
              })
            })
          }
        })
      })
    }
  }));

function u(e) {
  return c(t => {
    var n;
    return null != (n = t.polls[e]) ? n : s
  }, l.Z)
}

function d(e, t, n) {
  c.getState().updatePollState(e, t, n)
}

function p(e, t) {
  var n;
  return null == (n = c.getState().polls[e]) ? true : n[t]
}