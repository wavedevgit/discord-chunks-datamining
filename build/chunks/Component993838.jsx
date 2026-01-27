/** Chunk was on web.js **/
/** chunk id: 993838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $q: () => g,
  E9: () => I,
  H2: () => E,
  W0: () => b,
  j3: () => O,
  j6: () => v,
  jA: () => A,
  tQ: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk192308 = require("./192308.js"),
  Chunk378570 = require("./378570.js"),
  Chunk961350 = require("./961350.js"),
  Chunk312006 = require("./312006.js"),
  Chunk571909 = require("./571909.js"),
  Chunk366098 = require("./366098.js"),
  Chunk652215 = require("./652215.js"),
  Chunk231723 = require("./231723.js");

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

function m(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("3795"), n.e("86317")]).then(n.bind(n, 467164));
    return n => (0, r.jsx)(t, h(p({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === u.BRT.POPOUT ? d.KX : d.SY
  })
}

function g(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("3795"), n.e("35934")]).then(n.bind(n, 25997));
    return n => (0, r.jsx)(t, h(p({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === u.BRT.POPOUT ? d.KX : d.SY
  })
}

function E(e) {}

function y(e) {
  (0, a.iN)(e.id)
}

function b(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e("34070").then(n.bind(n, 200629));
    return n => (0, r.jsx)(i, h(p({}, n), {
      channel: e,
      onAccept: t
    }))
  })
}

function O(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("3795"), n.e("70102")]).then(n.bind(n, 118101));
    return n => (0, r.jsx)(t, h(p({}, n), {
      channel: e
    }))
  }, {
    contextKey: t === u.BRT.POPOUT ? d.KX : d.SY
  })
}

function v(e) {
  let t = o.default.getId(),
    n = (0, c.G1)(e),
    r = (0, c.Gc)(e);
  return !s.Ay.isModerator(t, e) && (n > 0 || r > 0)
}

function A(e, t) {
  t !== e.id && (0, l.ek)(true), y(e)
}

function I(e, t) {
  return (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await n.e("12963").then(n.bind(n, 24814));
    return n => (0, r.jsx)(i, p({
      channel: e,
      onConfirm: t
    }, n))
  }), true
}