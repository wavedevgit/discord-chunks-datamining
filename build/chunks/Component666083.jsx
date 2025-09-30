/** Chunk was on 61268 **/
/** chunk id: 666083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
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

function p(e) {
  var t, n, {
      title: p,
      description: d,
      image: b,
      button: m
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var n, r, a = function(e, t) {
        if (null == e) return {};
        var n, r, a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["title", "description", "image", "button"]);
  let O = (0, i.e7)([l.Z], () => l.Z.useReducedMotion),
    y = a.useRef(null),
    j = a.useRef(new o.qA),
    [v, h] = a.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.O_, {
      ref: h,
      className: f.confettiCanvas,
      environment: j.current
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
      className: f.modal,
      size: c.CgR.DYNAMIC
    }, g), n = n = {
      parentComponent: "GuildPowerupActivateModal",
      children: [(0, r.jsx)(c.hzk, {
        "data-migration-pending": true,
        className: f.modalContentContainer,
        scrollbarType: "none",
        children: (0, r.jsxs)("div", {
          className: f.container,
          ref: y,
          children: [b, (0, r.jsxs)("div", {
            className: f.contentContainer,
            children: [(0, r.jsx)(c.X6q, {
              variant: "heading-xl/extrabold",
              children: p
            }), (0, r.jsx)(c.Text, {
              tag: "span",
              className: f.description,
              variant: "text-sm/normal",
              children: d
            }), m]
          })]
        })
      }), (0, r.jsx)(c.olH, {
        "data-migration-pending": true,
        className: f.close,
        onClick: g.onClose
      }), !O && (0, r.jsx)(s.Z, {
        confettiTarget: y.current,
        confettiCanvas: v,
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