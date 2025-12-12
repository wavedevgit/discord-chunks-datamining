/** Chunk was on web.js **/
/** chunk id: 568836, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $G: () => p,
  OR: () => _,
  aL: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk345898 = require("./345898.jsx"),
  Chunk812331 = require("./812331.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = 660,
  p = e => (0, r.jsx)(a.Z, d(c({}, e), {
    className: o()(e.className, {
      [s.embedVertical]: !e.isHorizontal,
      [s.embedHorizontal]: e.isHorizontal
    })
  })),
  _ = e => {
    let {
      isHorizontal: t
    } = e, n = () => (0, r.jsx)("div", {
      className: o()(s.loadingImage, {
        [s.loadingImageHorizontal]: t
      })
    }), i = () => (0, r.jsx)("div", {
      className: s.loadingDescription,
      children: (0, r.jsx)("div", {
        className: o()(s.loadingBackgroundWrapper, {
          [s.loadingBackgroundWrapperHorizontal]: t
        }),
        children: (0, r.jsx)("div", {
          className: s.loadingBackground
        })
      })
    });
    return (0, r.jsx)(p, d(c({}, e), {
      media: i,
      title: n
    }))
  }