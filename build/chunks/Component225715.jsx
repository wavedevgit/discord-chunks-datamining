/** Chunk was on web.js **/
/** chunk id: 225715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CW: () => m,
  G9: () => y,
  K9: () => b,
  q$: () => O,
  r0: () => g,
  s$: () => E
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk41959 = require("./41959.jsx"),
  Chunk245561 = require("./245561.jsx"),
  Chunk839763 = require("./839763.js");

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

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = e => {
    var {
      application: t,
      asset: n,
      className: i
    } = e, a = p(e, ["application", "asset", "className"]);
    return (0, r.jsx)(s.Z, d({
      application: t,
      size: s.H.MEDIUM,
      asset: n,
      className: i
    }, a))
  },
  g = e => {
    var {
      children: t,
      className: n,
      id: i
    } = e, s = p(e, ["children", "className", "id"]);
    return (0, r.jsx)(o.Heading, _(d({
      className: a()(c.header, n),
      variant: "heading-xl/extrabold",
      id: i
    }, s), {
      children: t
    }))
  };

function E() {
  return (0, Chunk951288.jsx)("hr", {
    className: Chunk839763.divider
  })
}
let b = e => {
    var {
      className: t,
      title: n,
      description: i
    } = e, a = p(e, ["className", "title", "description"]);
    return (0, r.jsxs)("div", _(d({
      className: t
    }, a), {
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/bold",
        color: "header-primary",
        children: n
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: i
      })]
    }))
  },
  y = e => {
    var {
      applicationId: t,
      storeListingBenefits: n,
      skuBenefits: i,
      className: o
    } = e, s = p(e, ["applicationId", "storeListingBenefits", "skuBenefits", "className"]);
    return (0, r.jsx)("div", _(d({
      className: a()(c.benefitsContainer, o)
    }, s), {
      children: (0, r.jsx)(l.GU, {
        applicationId: t,
        storeListingBenefits: n,
        skuBenefits: i,
        className: c.benefit
      })
    }))
  },
  O = e => {
    var {
      children: t,
      className: n
    } = e, i = p(e, ["children", "className"]);
    return (0, r.jsx)("div", _(d({
      className: a()(c.container, n)
    }, i), {
      children: t
    }))
  }