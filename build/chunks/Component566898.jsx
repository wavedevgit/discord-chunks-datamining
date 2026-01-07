/** Chunk was on web.js **/
/** chunk id: 566898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M9: () => O,
  Pb: () => y,
  XX: () => E,
  ZP: () => v,
  ZT: () => m,
  iv: () => b,
  pk: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk471038 = require("./471038.js");

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
  return Array(s().random(3, 8)).fill(null).map(() => s().random(30, 80))
}

function _() {
  return (0, r.jsx)("div", {
    className: c.avatar,
    style: {
      opacity: .08
    }
  })
}

function m(e) {
  let {
    width: t,
    height: n,
    opacity: i,
    className: o
  } = e, l = {
    width: f(t),
    opacity: null != i ? i : s().random(.02, .08)
  };
  return null != n && (l.height = f(n)), (0, r.jsx)("div", {
    className: a()(o, {
      [c.blob]: true
    }),
    style: l
  })
}

function h(e) {
  let t, {
      groupStart: n = false,
      compact: i = false,
      attachmentSpecs: o,
      usernameWidth: u,
      usernameOpacity: f,
      className: h,
      style: g
    } = e,
    E = i ? 50 : s().random(40, 50);
  return !i && n ? t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_, {}), (0, r.jsx)(l.H, {
      className: c.header,
      children: (0, r.jsx)(m, {
        width: u,
        opacity: f,
        className: c.__invalid_username
      })
    })]
  }) : i && (t = (0, r.jsxs)(r.Fragment, {
    children: [i && (0, r.jsx)(m, {
      width: E,
      className: a()({
        [c.compactTimestamp]: true,
        [c.hidden]: !n
      })
    }), (0, r.jsx)(l.H, {
      className: c.header,
      children: (0, r.jsx)(m, {
        width: u,
        opacity: f
      })
    })]
  })), (0, r.jsxs)("div", {
    "aria-hidden": true,
    className: a()(h, {
      [c.wrapper]: true,
      [c.compact]: i,
      [c.cozy]: !i
    }),
    style: g,
    children: [(0, r.jsxs)("div", {
      className: c.contents,
      children: [t, (0, r.jsx)("div", {
        className: c.content,
        children: p().map((e, t) => (0, r.jsx)(m, {
          width: e,
          opacity: .06
        }, t))
      })]
    }), null != o && (0, r.jsx)("div", {
      className: c.attachmentContainer,
      children: (0, r.jsx)("div", {
        className: c.attachment,
        style: d({
          opacity: .03
        }, o)
      })
    })]
  })
}
let g = 44,
  E = 22,
  b = 26,
  y = 26,
  O = 6;

function v(e) {
  let {
    messages: t,
    groupSpacing: n = 0,
    compact: i = false,
    attachmentSpecs: a,
    className: o
  } = e, l = null != a ? a.last ? t - 1 : s().random(0, t - 1) : false, c = s().random(80, 120), u = s().random(.1, .2);
  return (0, r.jsx)(r.Fragment, {
    children: Array(t).fill(null).map((e, t) => (0, r.jsx)(h, {
      compact: i,
      className: o,
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