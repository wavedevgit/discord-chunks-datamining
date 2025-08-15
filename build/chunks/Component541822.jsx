/** Chunk was on 74891 **/
/** chunk id: 541822, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk349361 = require("./349361.js"),
  Chunk891727 = require("./891727.js");

function s(t) {
  var e, n, {
      children: l,
      gradientClassName: s
    } = t,
    c = function(t, e) {
      if (null == t) return {};
      var n, i, r = function(t, e) {
        if (null == t) return {};
        var n, i, r = {},
          l = Object.keys(t);
        for (i = 0; i < l.length; i++) n = l[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
        return r
      }(t, e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(t);
        for (i = 0; i < l.length; i++) n = l[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
      }
      return r
    }(t, ["children", "gradientClassName"]);
  let d = r.useRef(null),
    [p, f] = r.useState(true),
    S = () => {
      var t;
      (null == (t = d.current) ? true : t.isScrolledToBottom()) === true ? f(false) : f(true)
    };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.h2, (e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), i.forEach(function(e) {
          var i;
          i = n[e], e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = i
        })
      }
      return t
    }({
      fade: true
    }, c), n = n = {
      ref: t => {
        null != t && (d.current = t, S())
      },
      onScroll: S,
      children: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e)), (0, i.jsx)("div", {
      className: o()(u.containerScrollGradient, s),
      "data-shown": p
    })]
  })
}