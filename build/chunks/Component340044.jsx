/** Chunk was on 85362 **/
/** chunk id: 340044, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk393903 = require("./393903.js"),
  Chunk448986 = require("./448986.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk356326 = require("./356326.js");
let p = Chunk647438.memo(function(e) {
  var t, n, {
      children: l,
      isOverlay: p,
      contextGuildId: f
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["children", "isOverlay", "contextGuildId"]);
  let [g, m] = i.useState({
    maskImage: "none"
  }), b = i.useRef(null), _ = (0, s.Z)(() => {
    var e, t, n, r;
    let i = null != (n = null == (e = O.current) ? true : e.getBoundingClientRect()) ? n : null,
      l = null != (r = null == (t = b.current) ? true : t.getBoundingClientRect()) ? r : null;
    if (p || null == i || null == l) return void m({
      maskImage: "none"
    });
    let o = l.right - i.right,
      a = l.width - o;
    if (a > l.width) return void m({
      maskImage: "none"
    });
    m({
      maskImage: "linear-gradient(to right, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 0) ".concat(a, "px)")
    })
  }), O = (0, a.y)(_), y = (0, c.yF)(h.userId, f);
  return (0, r.jsxs)("div", {
    className: o()(d.container, p && d.isOverlayContainer),
    ref: O,
    children: [(0, r.jsx)("div", {
      className: d.usernameContainer,
      children: l
    }), (0, r.jsx)("div", {
      className: d.chipletParent,
      children: (0, r.jsx)("span", {
        className: o()(d.chipletContainer, !y && p && d.noPadding),
        ref: b,
        style: g,
        children: (0, r.jsx)(u.ZP, (t = function(e) {
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
        }({}, h), n = n = {
          contextGuildId: f,
          className: o()(h.className, p && d.isOverlayTag),
          disableGuildProfile: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      })
    })]
  })
})