/** Chunk was on web.js **/
/** chunk id: 843200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk418632 = require("./418632.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk104872 = require("./104872.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e) {
  let {
    unclaimedNotice: t,
    unverifiedNotice: i,
    className: o
  } = e, {
    isClaimed: h,
    isVerified: g,
    hasEmail: E
  } = (0, l.cj)([d.default], () => {
    let e = d.default.getCurrentUser();
    return s()(null != e, "EmailNotice: currentUser cannot be undefined"), {
      isClaimed: e.isClaimed(),
      isVerified: e.verified,
      hasEmail: null != e.email
    }
  });

  function b() {
    return h ? null != i ? i : _.intl.string(_.t.WuyBbG) : null != t ? t : _.intl.string(_.t["f+Zaoq"])
  }

  function y() {
    return h ? E ? (0, r.jsx)(f.Z, {}) : (0, r.jsx)(c.zxk, {
      variant: "primary",
      text: _.intl.string(_.t.ydw5nZ),
      onClick: I
    }) : (0, r.jsx)(c.zxk, {
      variant: "primary",
      text: _.intl.string(_.t.fiNVio),
      onClick: v
    })
  }

  function O() {
    return h && E ? (0, r.jsx)(c.zxk, {
      variant: "secondary",
      text: _.intl.string(_.t.Vm8akJ),
      onClick: I
    }) : null
  }

  function v() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("60827").then(n.bind(n, 324239));
      return t => (0, r.jsx)(e, m({}, t))
    })
  }

  function I() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("9343").then(n.bind(n, 642298));
      return t => (0, r.jsx)(e, m({}, t))
    })
  }
  return h && g ? null : (0, r.jsx)(c.Zbd, {
    className: a()(p.wrapper, o),
    children: (0, r.jsxs)(u.Z, {
      align: u.Z.Align.CENTER,
      children: [(0, r.jsx)(u.Z.Child, {
        className: p.image,
        grow: 0,
        shrink: 0
      }), (0, r.jsxs)(u.Z.Child, {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: b()
        }), (0, r.jsxs)("div", {
          className: p.content,
          children: [y(), O()]
        })]
      })]
    })
  })
}