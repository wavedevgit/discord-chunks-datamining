/** Chunk was on 47129 **/
/** chunk id: 509613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $l: () => E,
  CB: () => _,
  Em: () => I,
  J9: () => f,
  ON: () => A,
  Ql: () => function e(t, n) {
    if ("function" == typeof(null == t ? true : t.getLayout)) {
      let n = t.getLayout().map(t => e(t)),
        {
          getLayout: i
        } = t,
        o = l(r({}, function(e, t) {
          if (null == e) return {};
          var n, i, r = function(e, t) {
            if (null == e) return {};
            var n, i, r = {},
              l = Object.keys(e);
            for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
          }
          return r
        }(t, ["getLayout"])), {
          layout: n
        });
      return n.forEach(e => e.parent = o), o
    }
    return t
  },
  ax: () => g,
  k4: () => d,
  qs: () => O,
  so: () => a,
  vB: () => s,
  wf: () => u,
  x1: () => c
}), require("./388685.js"), require("./415506.js");
var Chunk28682 = require("./28682.js");

function r(e) {
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

function l(e, t) {
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

function o(e, t, n) {
  return l(r({}, n), {
    key: e,
    type: t
  })
}

function a(e) {
  return o("$Root", i.J.ROOT, e)
}

function s(e, t) {
  return o(e, i.J.SECTION, t)
}

function u(e, t) {
  return o(e, i.J.PANEL, t)
}

function c(e, t) {
  return o(e, i.J.PANE, t)
}

function d(e, t) {
  return o(e, i.J.CATEGORY, t)
}

function _(e, t) {
  return o(e, i.J.ACCORDION, t)
}

function E(e, t) {
  return o(e, i.J.LIST, t)
}

function N(e, t, n) {
  return l(r({}, n), {
    key: e,
    type: t
  })
}

function g(e, t) {
  return N(e, i.J.BUTTON, t)
}

function O(e, t) {
  return N(e, i.J.TOGGLE, t)
}

function I(e, t) {
  return N(e, i.J.SELECT, t)
}

function f(e, t) {
  return N(e, i.J.RADIO, t)
}

function A(e, t) {
  return N(e, i.J.CUSTOM, t)
}