/** Chunk was on web.js **/
/** chunk id: 225715, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  CW: () => h,
  G9: () => y,
  K9: () => b,
  q$: () => O,
  r0: () => g,
  s$: () => E
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let h = e => {
    var {
      application: t,
      asset: n,
      className: i
    } = e, o = _(e, ["application", "asset", "className"]);
    return (0, r.jsx)(s.Z, d({
      application: t,
      size: s.H.MEDIUM,
      asset: n,
      className: i
    }, o))
  },
  g = e => {
    var {
      children: t,
      className: n,
      id: i
    } = e, s = _(e, ["children", "className", "id"]);
    return (0, r.jsx)(a.Heading, p(d({
      className: o()(c.header, n),
      variant: "heading-xl/extrabold",
      id: i
    }, s), {
      children: t
    }))
  };

function E() {
  return (0, Chunk54381.jsx)("hr", {
    className: Chunk839763.divider
  })
}
let b = e => {
    var {
      className: t,
      title: n,
      description: i
    } = e, o = _(e, ["className", "title", "description"]);
    return (0, r.jsxs)("div", p(d({
      className: t
    }, o), {
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-md/bold",
        color: "text-strong",
        children: n
      }), (0, r.jsx)(a.Heading, {
        variant: "heading-sm/normal",
        color: "text-default",
        children: i
      })]
    }))
  },
  y = e => {
    var {
      applicationId: t,
      storeListingBenefits: n,
      skuBenefits: i,
      className: a
    } = e, s = _(e, ["applicationId", "storeListingBenefits", "skuBenefits", "className"]);
    return (0, r.jsx)("div", p(d({
      className: o()(c.benefitsContainer, a)
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
    } = e, i = _(e, ["children", "className"]);
    return (0, r.jsx)("div", p(d({
      className: o()(c.container, n)
    }, i), {
      children: t
    }))
  }