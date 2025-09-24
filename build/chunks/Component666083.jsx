/** Chunk was on 13965 **/
/** chunk id: 666083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk477487 = require("./477487.js");

function d(e) {
  var t, n, {
      title: d,
      description: f,
      image: b,
      button: O
    } = e,
    j = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["title", "description", "image", "button"]);
  let m = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
    g = o.useRef(null),
    y = o.useRef(new a.qA),
    [h, v] = o.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.O_, {
      ref: v,
      className: p.confettiCanvas,
      environment: y.current
    }), (0, r.jsxs)(c.Y0X, (t = function(e) {
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
    }({
      "data-migration-pending": true,
      className: p.modal,
      size: c.CgR.DYNAMIC
    }, j), n = n = {
      parentComponent: "GuildPowerupActivateModal",
      children: [(0, r.jsx)(c.hzk, {
        "data-migration-pending": true,
        className: p.modalContentContainer,
        scrollbarType: "none",
        children: (0, r.jsxs)("div", {
          className: p.container,
          ref: g,
          children: [b, (0, r.jsxs)("div", {
            className: p.contentContainer,
            children: [(0, r.jsx)(c.X6q, {
              variant: "heading-xl/extrabold",
              children: d
            }), (0, r.jsx)(c.Text, {
              tag: "span",
              className: p.description,
              variant: "text-sm/normal",
              children: f
            }), O]
          })]
        })
      }), (0, r.jsx)(c.olH, {
        "data-migration-pending": true,
        className: p.close,
        onClick: j.onClose
      }), !m && (0, r.jsx)(l.Z, {
        confettiTarget: g.current,
        confettiCanvas: h,
        sprites: (0, u.vK)()
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}