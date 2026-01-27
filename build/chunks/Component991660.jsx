/** Chunk was on 13088 **/
/** chunk id: 991660, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  u = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk48302 = require("./48302.js");

function a(t) {
  var e, n;
  let {
    children: i,
    gradientClassName: a
  } = t, c = function(t, e) {
    if (null == t) return {};
    var n, l, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, n = Reflect.ownKeys(t); r < n.length; r++) l = n[r], !(e.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]);
      return i
    }
    if (i = function(t, e) {
        if (null == t) return {};
        var n, l, r = {},
          i = Object.getOwnPropertyNames(t);
        for (l = 0; l < i.length; l++) n = i[l], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
        return r
      }(t, e), Object.getOwnPropertySymbols)
      for (r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++) l = n[r], !(e.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]);
    return i
  }(t, ["children", "gradientClassName"]), d = r.useRef(null), [p, f] = r.useState(true), S = () => {
    var t;
    (null == (t = d.current) ? true : t.isScrolledToBottom()) === true ? f(false) : f(true)
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.ChK, (e = function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), l.forEach(function(e) {
          var l;
          l = n[e], e in t ? Object.defineProperty(t, e, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = l
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
      children: i
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(t);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e)), (0, l.jsx)("div", {
      className: u()(s.D, a),
      "data-shown": p
    })]
  })
}