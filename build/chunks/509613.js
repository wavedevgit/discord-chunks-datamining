/** Chunk was on 9452 **/
/** chunk id: 509613, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $l: () => T,
  CB: () => O,
  Em: () => A,
  J9: () => S,
  ON: () => I,
  Ql: () => function e(t, n) {
    if ("function" == typeof(null == t ? true : t.buildLayout)) {
      let n = t.buildLayout().map(t => e(t)),
        {
          buildLayout: i
        } = t,
        u = l(r({}, function(e, t) {
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
        }(t, ["buildLayout"])), {
          layout: n
        });
      return n.forEach(e => e.parent = u), u
    }
    return t
  },
  ax: () => f,
  k4: () => E,
  m7: () => o,
  qs: () => N,
  so: () => s,
  vB: () => a,
  wf: () => c,
  x1: () => d
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

function u(e, t, n) {
  return l(r({}, n), {
    key: e,
    type: t
  })
}

function s(e) {
  return u("$Root", i.Jq.ROOT, e)
}

function a(e, t) {
  return u(e, i.Jq.SECTION, t)
}

function o(e, t) {
  return l(r({}, t), {
    key: e,
    type: i.Jq.SIDEBAR_ITEM
  })
}

function c(e, t) {
  return u(e, i.Jq.PANEL, t)
}

function d(e, t) {
  return u(e, i.Jq.PANE, t)
}

function E(e, t) {
  return u(e, i.Jq.CATEGORY, t)
}

function O(e, t) {
  return u(e, i.Jq.ACCORDION, t)
}

function T(e, t) {
  return u(e, i.Jq.LIST, t)
}

function y(e, t, n) {
  return l(r({}, n), {
    key: e,
    type: t
  })
}

function f(e, t) {
  return y(e, i.Jq.BUTTON, t)
}

function N(e, t) {
  return y(e, i.Jq.TOGGLE, t)
}

function A(e, t) {
  return y(e, i.Jq.SELECT, t)
}

function S(e, t) {
  return y(e, i.Jq.RADIO, t)
}

function I(e, t) {
  return y(e, i.Jq.CUSTOM, t)
}