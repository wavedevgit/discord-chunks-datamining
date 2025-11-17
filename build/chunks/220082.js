/** Chunk was on web.js **/
/** chunk id: 220082, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Cf: () => v,
  Dq: () => y,
  SR: () => m,
  ZP: () => O,
  vM: () => E
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk979590 = require("./979590.js"),
  a = require.n(Chunk979590),
  Chunk663042 = require("./663042.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk302221 = require("./302221.js"),
  Chunk956664 = require("./956664.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
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

function p(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = (0, Chunk663042.U)(() => ({
  palette: {},
  fetching: {}
}));

function g(e) {
  return null != m.getState().palette[e]
}
async function E(e) {
  g(e) || await b(e)
}
async function b(e) {
  if (!m.getState().fetching[e]) {
    (0, s.j)(() => m.setState(t => ({
      fetching: h(_({}, t.fetching), {
        [e]: true
      })
    })));
    try {
      let t = await (0, d.OF)(e),
        n = (0, u.WY)(t[0]);
      (0, s.j)(() => {
        m.setState(r => ({
          fetching: h(_({}, r.fetching), {
            [e]: false
          }),
          palette: h(_({}, r.palette), {
            [e]: [...t.slice(0, 2), ...n]
          })
        }))
      })
    } catch (t) {
      (0, s.j)(() => m.setState(t => ({
        fetching: h(_({}, t.fetching), {
          [e]: false
        })
      })))
    }
  }
}

function y(e) {
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
    o = (0, l.e7)([c.Z], () => n && c.Z.desaturateUserColors ? c.Z.saturation : 1);
  r.useEffect(() => {
    null != e && null == i && b(e)
  }, [e, i]);
  let s = r.useMemo(() => null == i ? true : i.map(e => {
    let [t, n, r] = e, {
      h: i,
      s,
      l
    } = a()({
      r: t,
      g: n,
      b: r
    }).toHsl();
    return a()({
      h: i,
      s: s * o,
      l
    }).toHexString()
  }), [i, o]);
  return null != s ? s : [t, t]
}