/** Chunk was on 35323 **/
/** chunk id: 666083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk262212 = require("./262212.jsx"),
  Chunk795338 = require("./795338.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk93841 = require("./93841.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk726999 = require("./726999.js");

function j(e) {
  var t, n, {
      guildId: j,
      powerup: y
    } = e,
    O = function(e, t) {
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
    }(e, ["guildId", "powerup"]);
  let g = (0, c.e7)([s.Z], () => s.Z.useReducedMotion),
    C = o.useRef(null),
    x = o.useRef(new a.qA),
    [v, h] = o.useState(null),
    w = d.uc.has(y.skuId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.O_, {
      ref: h,
      className: _.confettiCanvas,
      environment: x.current
    }), (0, r.jsxs)(i.Y0X, (t = function(e) {
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
      className: _.modal,
      size: i.CgR.DYNAMIC
    }, O), n = n = {
      parentComponent: "GuildPowerupActivateModal",
      children: [(0, r.jsx)(i.hzk, {
        className: _.modalContentContainer,
        scrollbarType: "none",
        children: (0, r.jsxs)("div", {
          className: _.container,
          ref: C,
          children: [(0, r.jsx)(f.m, {
            className: _.image,
            powerup: y
          }), (0, r.jsxs)("div", {
            className: _.contentContainer,
            children: [(0, r.jsx)(i.X6q, {
              variant: "heading-xl/extrabold",
              children: m.intl.formatToPlainString(b.default.lFuOFB, {
                perkName: y.title
              })
            }), (0, r.jsx)(i.Text, {
              tag: "span",
              className: _.description,
              variant: "text-sm/normal",
              children: m.intl.formatToPlainString(b.default.y3wHoq, {
                perkName: y.title
              })
            }), w ? (0, r.jsx)(p.ms, {
              className: _.button,
              guildId: j,
              powerup: y,
              onClick: O.onClose
            }) : (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: _.button,
              children: (0, r.jsx)(i.zxk, {
                variant: "primary",
                text: m.intl.string(m.t.cpT0Cg),
                onClick: O.onClose
              })
            })]
          })]
        })
      }), (0, r.jsx)(i.olH, {
        className: _.close,
        onClick: O.onClose
      }), !g && (0, r.jsx)(l.Z, {
        confettiTarget: C.current,
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