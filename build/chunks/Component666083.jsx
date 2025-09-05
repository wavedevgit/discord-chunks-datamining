/** Chunk was on 13965 **/
/** chunk id: 666083, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk500254 = require("./500254.js");

function f(e) {
  var t, r, {
      title: f,
      description: b,
      image: O,
      button: d
    } = e,
    j = function(e, t) {
      if (null == e) return {};
      var r, n, o = function(e, t) {
        if (null == e) return {};
        var r, n, o = {},
          c = Object.keys(e);
        for (n = 0; n < c.length; n++) r = c[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(e);
        for (n = 0; n < c.length; n++) r = c[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
      }
      return o
    }(e, ["title", "description", "image", "button"]);
  let y = (0, s.e7)([i.Z], () => i.Z.useReducedMotion),
    m = o.useRef(null),
    g = o.useRef(new c.qA),
    [h, v] = o.useState(null);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.O_, {
      ref: v,
      className: p.confettiCanvas,
      environment: g.current
    }), (0, n.jsxs)(a.Y0X, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      className: p.modal,
      size: a.CgR.DYNAMIC
    }, j), r = r = {
      parentComponent: "GuildPowerupActivateModal",
      children: [(0, n.jsx)(a.hzk, {
        className: p.modalContentContainer,
        scrollbarType: "none",
        children: (0, n.jsxs)("div", {
          className: p.container,
          ref: m,
          children: [O, (0, n.jsxs)("div", {
            className: p.contentContainer,
            children: [(0, n.jsx)(a.X6q, {
              variant: "heading-xl/extrabold",
              children: f
            }), (0, n.jsx)(a.Text, {
              tag: "span",
              className: p.description,
              variant: "text-sm/normal",
              children: b
            }), d]
          })]
        })
      }), (0, n.jsx)(a.olH, {
        className: p.close,
        onClick: j.onClose
      }), !y && (0, n.jsx)(l.Z, {
        confettiTarget: m.current,
        confettiCanvas: h,
        sprites: (0, u.vK)()
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r.push.apply(r, n)
      }
      return r
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
    }), t))]
  })
}