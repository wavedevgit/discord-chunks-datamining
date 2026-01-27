/** Chunk was on 89455 **/
/** chunk id: 114212, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => E,
  B5: () => m,
  BP: () => g,
  FQ: () => d,
  Uj: () => h,
  VF: () => p,
  _G: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk406590 = require("./406590.js");

function u(e) {
  return "".concat(e / 16, "rem")
}

function _() {
  return (0, r.jsx)("div", {
    className: c.my,
    style: {
      opacity: .08
    }
  })
}

function d(e) {
  let {
    width: n,
    height: t,
    opacity: i,
    className: a
  } = e, s = {
    width: u(n),
    opacity: null != i ? i : l().random(.02, .08)
  };
  return null != t && (s.height = u(t)), (0, r.jsx)("div", {
    className: o()(a, {
      [c.av]: true
    }),
    style: s
  })
}

function b(e) {
  let n, {
      groupStart: t = false,
      compact: i = false,
      attachmentSpecs: a,
      usernameWidth: u,
      usernameOpacity: b,
      className: m,
      style: f
    } = e,
    g = i ? 50 : l().random(40, 50);
  return !i && t ? n = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {}), (0, r.jsx)(s.H, {
      className: c.wx,
      children: (0, r.jsx)(d, {
        width: u,
        opacity: b,
        className: c.__invalid_username
      })
    })]
  }) : i && (n = (0, r.jsxs)(r.Fragment, {
    children: [i && (0, r.jsx)(d, {
      width: g,
      className: o()({
        [c.ce]: true,
        [c.R]: !t
      })
    }), (0, r.jsx)(s.H, {
      className: c.wx,
      children: (0, r.jsx)(d, {
        width: u,
        opacity: b
      })
    })]
  })), (0, r.jsxs)("div", {
    "aria-hidden": true,
    className: o()(m, {
      [c.iE]: true,
      [c.oE]: i,
      [c.E]: !i
    }),
    style: f,
    children: [(0, r.jsxs)("div", {
      className: c.PG,
      children: [n, (0, r.jsx)("div", {
        className: c.Qs,
        children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, n) => (0, r.jsx)(d, {
          width: e,
          opacity: .06
        }, n))
      })]
    }), null != a && (0, r.jsx)("div", {
      className: c.Dq,
      children: (0, r.jsx)("div", {
        className: c.oh,
        style: function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(n) {
              var r;
              r = t[n], n in e ? Object.defineProperty(e, n, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = r
            })
          }
          return e
        }({
          opacity: .03
        }, a)
      })
    })]
  })
}
let m = 44,
  f = 22,
  g = 26,
  h = 26,
  p = 6;

function E(e) {
  let {
    messages: n,
    groupSpacing: t = 0,
    compact: i = false,
    attachmentSpecs: o,
    className: a
  } = e, s = null != o ? o.last ? n - 1 : l().random(0, n - 1) : false, c = l().random(80, 120), _ = l().random(.1, .2);
  return (0, r.jsx)(r.Fragment, {
    children: Array(n).fill(null).map((e, n) => (0, r.jsx)(b, {
      compact: i,
      className: a,
      usernameWidth: c,
      usernameOpacity: _,
      groupStart: 0 === n,
      attachmentSpecs: n === s ? o : true,
      style: 0 === n ? {
        marginTop: u(t)
      } : true
    }, n))
  })
}