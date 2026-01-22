/** Chunk was on 71447 **/
/** chunk id: 761661, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CZ: () => h,
  Qp: () => p,
  XG: () => f,
  dh: () => d,
  f4: () => u
});
var Chunk812729 = require("./812729.js"),
  r = require.n(Chunk812729),
  Chunk839214 = require("./839214.js"),
  Chunk652896 = require("./652896.js");

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
let c = (0, Chunk839214.D)(() => ({
  streams: {}
}));

function u(e) {
  var t, n;
  let i = (0, a._z)(e);
  return null != (t = null == (n = c.useState(e => e.streams, r())[i]) ? true : n.zoom) ? t : 100
}

function d(e) {
  return u(e) / 100
}

function p(e, t) {
  let n = (0, a._z)(e);
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
  let n = (0, a._z)(e);
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

function f(e) {
  var t;
  let n = (0, a._z)(e);
  return null == (t = c.useState(e => e.streams, r())[n]) ? true : t.fitOverride
}