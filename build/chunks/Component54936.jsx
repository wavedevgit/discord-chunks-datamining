/** Chunk was on web.js **/
/** chunk id: 54936, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => b
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk910111 = require("./910111.jsx"),
  Chunk732559 = require("./732559.jsx"),
  Chunk723851 = require("./723851.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk84637 = require("./84637.js");

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
let g = {
  [Chunk981631.TaA.WINDOWS]: {
    icon: Chunk723851.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t["0/xHFB"])
  },
  [Chunk981631.TaA.MACOS]: {
    icon: Chunk732559.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t.E4u4n5)
  },
  [Chunk981631.TaA.LINUX]: {
    icon: Chunk910111.Z,
    getLabel: () => Chunk388032.intl.string(Chunk388032.t.tcawo6)
  }
};

function E(e) {
  let {
    operatingSystem: t,
    className: n
  } = e, i = g[t];
  if (null == i) throw Error("Unexpected operating system: ".concat(t));
  let a = i.icon;
  return (0, r.jsx)(o.ua7, {
    text: i.getLabel(),
    children: e => (0, r.jsx)(a, m(p({}, e), {
      className: n
    }))
  })
}
let b = e => {
  let {
    systems: t,
    className: n,
    iconClassName: i
  } = e;
  return (0, r.jsx)("div", {
    className: a()(f.OSSection, n),
    children: t.map(e => (0, r.jsx)(E, {
      operatingSystem: e,
      className: a()(f.purchaseUnitOperatingSystem, i)
    }, e))
  })
}