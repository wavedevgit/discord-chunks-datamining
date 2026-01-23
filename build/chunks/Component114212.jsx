/** Chunk was on web.js **/
/** chunk id: 114212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => v,
  B5: () => g,
  BP: () => y,
  FQ: () => h,
  Uj: () => b,
  VF: () => O,
  _G: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk406590 = require("./406590.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e) {
  return "".concat(e / 16, "rem")
}

function p() {
  return Array(o().random(3, 8)).fill(null).map(() => o().random(30, 80))
}

function _() {
  return (0, r.jsx)("div", {
    className: c.my,
    style: {
      opacity: .08
    }
  })
}

function h(e) {
  let {
    width: t,
    height: n,
    opacity: i,
    className: s
  } = e, l = {
    width: f(t),
    opacity: null != i ? i : o().random(.02, .08)
  };
  return null != n && (l.height = f(n)), (0, r.jsx)("div", {
    className: a()(s, {
      [c.av]: true
    }),
    style: l
  })
}

function m(e) {
  let t, {
      groupStart: n = false,
      compact: i = false,
      attachmentSpecs: s,
      usernameWidth: u,
      usernameOpacity: f,
      className: m,
      style: g
    } = e,
    E = i ? 50 : o().random(40, 50);
  return !i && n ? t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {}), (0, r.jsx)(l.H, {
      className: c.wx,
      children: (0, r.jsx)(h, {
        width: u,
        opacity: f,
        className: c.__invalid_username
      })
    })]
  }) : i && (t = (0, r.jsxs)(r.Fragment, {
    children: [i && (0, r.jsx)(h, {
      width: E,
      className: a()({
        [c.ce]: true,
        [c.R]: !n
      })
    }), (0, r.jsx)(l.H, {
      className: c.wx,
      children: (0, r.jsx)(h, {
        width: u,
        opacity: f
      })
    })]
  })), (0, r.jsxs)("div", {
    "aria-hidden": true,
    className: a()(m, {
      [c.iE]: true,
      [c.oE]: i,
      [c.E]: !i
    }),
    style: g,
    children: [(0, r.jsxs)("div", {
      className: c.PG,
      children: [t, (0, r.jsx)("div", {
        className: c.Qs,
        children: p().map((e, t) => (0, r.jsx)(h, {
          width: e,
          opacity: .06
        }, t))
      })]
    }), null != s && (0, r.jsx)("div", {
      className: c.Dq,
      children: (0, r.jsx)("div", {
        className: c.oh,
        style: d({
          opacity: .03
        }, s)
      })
    })]
  })
}
let g = 44,
  E = 22,
  y = 26,
  b = 26,
  O = 6;

function v(e) {
  let {
    messages: t,
    groupSpacing: n = 0,
    compact: i = false,
    attachmentSpecs: a,
    className: s
  } = e, l = null != a ? a.last ? t - 1 : o().random(0, t - 1) : false, c = o().random(80, 120), u = o().random(.1, .2);
  return (0, r.jsx)(r.Fragment, {
    children: Array(t).fill(null).map((e, t) => (0, r.jsx)(m, {
      compact: i,
      className: s,
      usernameWidth: c,
      usernameOpacity: u,
      groupStart: 0 === t,
      attachmentSpecs: t === l ? a : true,
      style: 0 === t ? {
        marginTop: f(n)
      } : true
    }, t))
  })
}