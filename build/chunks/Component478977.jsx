/** Chunk was on 10150 **/
/** chunk id: 478977, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk188764 = require("./188764.js");

function l(e) {
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
let d = function(e) {
  let {
    colorKey: t,
    value: n,
    onChange: d,
    title: u
  } = e, p = s.useRef(null);
  return (0, r.jsx)(a.gNt, {
    label: u,
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: p,
      renderPopout: e => (0, r.jsx)(a.Z$W, c(l({}, e), {
        value: n,
        onChange: e => d(t, (0, o.Rf)(e))
      })),
      children: e => (0, r.jsx)(a.P3F, c(l({}, e), {
        innerRef: p,
        tag: "span",
        "aria-label": "Select a color",
        className: i.swatchContainer,
        style: {
          backgroundColor: n
        },
        children: (0, r.jsx)(a.ilE, {
          size: "xs",
          color: "currentColor",
          className: i.swatchIcon
        })
      }))
    })
  })
}