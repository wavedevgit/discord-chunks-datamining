/** Chunk was on 945 **/
/** chunk id: 478977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607814 = require("./607814.js");

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = function(e) {
  let {
    colorKey: t,
    value: n,
    onChange: d,
    title: u
  } = e, m = r.useRef(null);
  return (0, a.jsx)(l.gNt, {
    label: u,
    children: (0, a.jsx)(l.yRy, {
      targetElementRef: m,
      renderPopout: e => (0, a.jsx)(l.Z$W, c(o({}, e), {
        value: n,
        onChange: e => d(t, (0, i.Rf)(e))
      })),
      children: e => (0, a.jsx)(l.P3F, c(o({}, e), {
        innerRef: m,
        tag: "span",
        "aria-label": "Select a color",
        className: s.swatchContainer,
        style: {
          backgroundColor: n
        },
        children: (0, a.jsx)(l.ilE, {
          size: "xs",
          color: "currentColor",
          className: s.swatchIcon
        })
      }))
    })
  })
}