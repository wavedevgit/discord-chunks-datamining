/** Chunk was on 91173 **/
/** chunk id: 568836, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $G: () => d,
  OR: () => p,
  aL: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk345898 = require("./345898.jsx"),
  Chunk812331 = require("./812331.js");

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = 660,
  d = e => (0, r.jsx)(o.Z, c(s({}, e), {
    className: l()(e.className, {
      [a.embedVertical]: !e.isHorizontal,
      [a.embedHorizontal]: e.isHorizontal
    })
  })),
  p = e => {
    let {
      isHorizontal: t
    } = e;
    return (0, r.jsx)(d, c(s({}, e), {
      media: () => (0, r.jsx)("div", {
        className: a.loadingDescription,
        children: (0, r.jsx)("div", {
          className: l()(a.loadingBackgroundWrapper, {
            [a.loadingBackgroundWrapperHorizontal]: t
          }),
          children: (0, r.jsx)("div", {
            className: a.loadingBackground
          })
        })
      }),
      title: () => (0, r.jsx)("div", {
        className: l()(a.loadingImage, {
          [a.loadingImageHorizontal]: t
        })
      })
    }))
  }