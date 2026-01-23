/** Chunk was on web.js **/
/** chunk id: 654107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => O,
  D1: () => b,
  Ip: () => m,
  l0: () => E,
  rh: () => v
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk440745 = require("./440745.js"),
  a = require.n(Chunk440745),
  Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk311907 = require("./311907.js"),
  Chunk775602 = require("./775602.js"),
  Chunk998304 = require("./998304.js"),
  Chunk515718 = require("./515718.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = (0, Chunk353640.v)(() => ({
  palette: {},
  fetching: {}
}));

function g(e) {
  return null != m.getState().palette[e]
}
async function E(e) {
  g(e) || await y(e)
}
async function y(e) {
  if (!m.getState().fetching[e]) {
    (0, o.r)(() => m.setState(t => ({
      fetching: h(p({}, t.fetching), {
        [e]: true
      })
    })));
    try {
      let t = await (0, d.S4)(e),
        n = (0, u.Q7)(t[0]);
      (0, o.r)(() => {
        m.setState(r => ({
          fetching: h(p({}, r.fetching), {
            [e]: false
          }),
          palette: h(p({}, r.palette), {
            [e]: [...t.slice(0, 2), ...n]
          })
        }))
      })
    } catch (t) {
      (0, o.r)(() => m.setState(t => ({
        fetching: h(p({}, t.fetching), {
          [e]: false
        })
      })))
    }
  }
}

function b(e) {
  return !m(t => null != e && t.fetching[e])
}

function O(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    [r] = v(e, t, n);
  return r
}

function v(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
    i = m(t => null == e ? true : t.palette[e]),
    s = (0, l.bG)([c.A], () => n && c.A.desaturateUserColors ? c.A.saturation : 1);
  r.useEffect(() => {
    null != e && null == i && y(e)
  }, [e, i]);
  let o = r.useMemo(() => null == i ? true : i.map(e => {
    let [t, n, r] = e, {
      h: i,
      s: o,
      l
    } = a()({
      r: t,
      g: n,
      b: r
    }).toHsl();
    return a()({
      h: i,
      s: o * s,
      l
    }).toHexString()
  }), [i, s]);
  return null != o ? o : [t, t]
}