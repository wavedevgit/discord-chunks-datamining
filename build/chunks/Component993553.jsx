/** Chunk was on 30202 **/
/** chunk id: 993553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270782 = require("./270782.js");

function c(e) {
  var t, n, {
      children: c,
      lineClamp: d = 2
    } = e,
    u = function(e, t) {
      if (null == e) return {};
      var n, i, r = function(e, t) {
        if (null == e) return {};
        var n, i, r = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["children", "lineClamp"]);
  let [m, p] = r.useState(false), [g, h] = r.useState(null), f = null != g && (0, i.jsx)("button", {
    className: o.button,
    onClick: () => p(e => !e),
    children: (0, i.jsxs)(a.Text, {
      className: o.seeMore,
      variant: "text-sm/medium",
      color: "text-brand",
      children: [m ? l.intl.string(l.t["JQX/PT"]) : l.intl.string(l.t.Fbrd8P), m ? (0, i.jsx)(a.u04, {
        color: s.Z.colors.TEXT_BRAND,
        size: "xs"
      }) : (0, i.jsx)(a.CJ0, {
        color: s.Z.colors.TEXT_BRAND,
        size: "xs"
      })]
    })
  }), [b, x] = r.useState(null), _ = r.useCallback(() => {
    if (null == b) return;
    let {
      scrollHeight: e,
      clientHeight: t
    } = b;
    e > t && h({
      truncatedHeight: t,
      expandedHeight: e
    })
  }, [b]);
  r.useEffect(() => {
    requestAnimationFrame(_)
  }, [_, c, d]);
  let j = "auto";
  return null != g && (j = m ? "".concat(g.expandedHeight, "px") : "".concat(g.truncatedHeight, "px")), (0, i.jsxs)("div", {
    children: [(0, i.jsx)(a.Text, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({}, u), n = n = {
      className: o.content,
      lineClamp: m ? true : d,
      ref: x,
      style: {
        height: j
      },
      children: c
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t)), f]
  })
}