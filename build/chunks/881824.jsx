/** Chunk was on web.js **/
/** chunk id: 881824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $Q: () => O,
  Ev: () => y,
  Gy: () => N,
  R5: () => A,
  T: () => E,
  Us: () => T,
  Zl: () => S,
  vu: () => I
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk952265 = require("./952265.js"),
  Chunk359110 = require("./359110.js"),
  Chunk314897 = require("./314897.js"),
  Chunk88751 = require("./88751.js"),
  Chunk427679 = require("./427679.js"),
  Chunk513449 = require("./513449.js"),
  Chunk930180 = require("./930180.js"),
  Chunk981631 = require("./981631.js"),
  Chunk602091 = require("./602091.js");

function _(e, t, n) {
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
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let t = a.default.getId(),
    n = s.ZP.isModerator(t, e.id),
    r = l.Z.isLive(e.id);
  n && !r ? E(e) : n && r && b(e)
}

function E(e, t) {
  (0, i.ZD)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("82758"), n.e("24231")]).then(n.bind(n, 581355));
    return n => <t{...m(p({}, n), {
      channel: e
    })} />
  }, {
    contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1
  })
}

function b(e) {
  (0, i.ZD)(async () => {
    let {
      default: t
    } = await n.e("84686").then(n.bind(n, 665111));
    return n => <t{...m(p({}, n), {
      channel: e
    })} />
  })
}

function y(e, t) {
  (0, i.ZD)(async () => {
    let {
      default: t
    } = await n.e("2634").then(n.bind(n, 548841));
    return n => <t{...m(p({}, n), {
      channel: e
    })} />
  }, {
    contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1
  })
}

function O(e) {}

function v(e) {
  (0, o.Kh)(e.id)
}

function I(e, t) {
  (0, i.ZD)(async () => {
    let {
      default: i
    } = await n.e("1906").then(n.bind(n, 854510));
    return n => <i{...m(p({}, n), {
      channel: e,
      onAccept: t
    })} />
  })
}

function T(e, t) {
  (0, i.ZD)(async () => {
    let {
      default: t
    } = await n.e("85885").then(n.bind(n, 124779));
    return n => <t{...m(p({}, n), {
      channel: e
    })} />
  }, {
    contextKey: t === d.IlC.POPOUT ? f.u1 : f.z1
  })
}

function S(e) {
  let t = a.default.getId(),
    n = (0, u.Z7)(e),
    r = (0, u.wK)(e);
  return !s.ZP.isModerator(t, e) && (n > 0 || r > 0)
}

function A(e, t) {
  let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
  t !== e.id && (0, c.Ku)(true), v(e), t !== e.id && n && g(e)
}

function N(e, t) {
  return (0, i.ZD)(async () => {
    let {
      default: i
    } = await n.e("65045").then(n.bind(n, 143782));
    return n => <i{...p({
      channel: e,
      onConfirm: t
    }, n)} />
  }), true
}