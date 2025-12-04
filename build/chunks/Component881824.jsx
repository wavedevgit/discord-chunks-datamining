/** Chunk was on web.js **/
/** chunk id: 881824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Q: () => E,
  Ev: () => g,
  Gy: () => I,
  R5: () => S,
  T: () => h,
  Us: () => O,
  Zl: () => v,
  vu: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk952265 = require("./952265.js"),
  Chunk359110 = require("./359110.js"),
  Chunk314897 = require("./314897.js"),
  Chunk88751 = require("./88751.js"),
  Chunk513449 = require("./513449.js"),
  Chunk930180 = require("./930180.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js");

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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e("24753").then(n.bind(n, 581355));
    return n => (0, r.jsx)(t, m(p({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === u.IlC.POPOUT ? d.u1 : d.z1
  })
}

function g(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e("2634").then(n.bind(n, 548841));
    return n => (0, r.jsx)(t, m(p({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === u.IlC.POPOUT ? d.u1 : d.z1
  })
}

function E(e) {}

function b(e) {
  (0, a.Kh)(e.id)
}

function y(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e("1906").then(n.bind(n, 854510));
    return n => (0, r.jsx)(i, m(p({}, n), {
      channel: e,
      onAccept: t
    }))
  })
}

function O(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await n.e("85885").then(n.bind(n, 124779));
    return n => (0, r.jsx)(t, m(p({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === u.IlC.POPOUT ? d.u1 : d.z1
  })
}

function v(e) {
  let t = o.default.getId(),
    n = (0, c.Z7)(e),
    r = (0, c.wK)(e);
  return !s.ZP.isModerator(t, e) && (n > 0 || r > 0)
}

function S(e, t) {
  t !== e.id && (0, l.Ku)(true), b(e)
}

function I(e, t) {
  return (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e("65045").then(n.bind(n, 143782));
    return n => (0, r.jsx)(i, p({
      channel: e,
      onConfirm: t
    }, n))
  }), true
}