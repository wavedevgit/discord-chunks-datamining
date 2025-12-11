/** Chunk was on 50751 **/
/** chunk id: 1226, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  BO: () => u,
  cq: () => f,
  gI: () => h,
  xN: () => p,
  yA: () => d
});
var Chunk348327 = require("./348327.js"),
  r = require.n(Chunk348327),
  Chunk972959 = require("./972959.js"),
  Chunk569545 = require("./569545.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let c = (0, Chunk972959.H)(() => ({
  streams: {}
}));

function u(e) {
  var t, n;
  let i = (0, l.V9)(e);
  return null != (n = null == (t = c.useState(e => e.streams, r())[i]) ? true : t.zoom) ? n : 100
}

function d(e) {
  return u(e) / 100
}

function f(e, t) {
  let n = (0, l.V9)(e);
  c.setState(e => {
    var i;
    return s(o({}, e), {
      streams: s(o({}, e.streams), {
        [n]: {
          zoom: t,
          fitOverride: null == (i = e.streams[n]) ? true : i.fitOverride
        }
      })
    })
  }, true)
}

function h(e, t) {
  let n = (0, l.V9)(e);
  c.setState(e => {
    var i;
    return s(o({}, e), {
      streams: s(o({}, e.streams), {
        [n]: {
          zoom: null == (i = e.streams[n]) ? true : i.zoom,
          fitOverride: t
        }
      })
    })
  })
}

function p(e) {
  var t;
  let n = (0, l.V9)(e);
  return null == (t = c.useState(e => e.streams, r())[n]) ? true : t.fitOverride
}