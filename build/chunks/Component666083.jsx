/** Chunk was on 13965 **/
/** chunk id: 666083, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => m
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

function m(e) {
  var t, n, {
      guildId: m,
      powerup: j
    } = e,
    g = function(e, t) {
      if (null == e) return {};
      var n, r, o = function(e, t) {
        if (null == e) return {};
        var n, r, o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
      }
      return o
    }(e, ["guildId", "powerup"]);
  let v = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
    x = o.useRef(null),
    P = o.useRef(new i.qA),
    [w, _] = o.useState(null),
    h = f.uc.has(j.skuId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.O_, {
      ref: _,
      className: y.confettiCanvas,
      environment: P.current
    }), (0, r.jsxs)(a.Y0X, (t = function(e) {
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
      className: y.modal,
      size: a.CgR.DYNAMIC
    }, g), n = n = {
      parentComponent: "GuildPowerupActivateModal",
      children: [(0, r.jsx)(a.hzk, {
        className: y.modalContentContainer,
        scrollbarType: "none",
        children: (0, r.jsxs)("div", {
          className: y.container,
          ref: x,
          children: [(0, r.jsx)(d.m, {
            className: y.image,
            powerup: j
          }), (0, r.jsxs)("div", {
            className: y.contentContainer,
            children: [(0, r.jsx)(a.X6q, {
              variant: "heading-xl/extrabold",
              children: O.intl.formatToPlainString(b.default.lFuOFB, {
                perkName: j.title
              })
            }), (0, r.jsx)(a.Text, {
              tag: "span",
              className: y.description,
              variant: "text-sm/normal",
              children: O.intl.formatToPlainString(b.default.y3wHoq, {
                perkName: j.title
              })
            }), h ? (0, r.jsx)(p.ms, {
              className: y.button,
              guildId: m,
              powerup: j,
              onClick: g.onClose
            }) : (0, r.jsx)("div", {
              "data-button-hoisted-classname-wrapper": true,
              className: y.button,
              children: (0, r.jsx)(a.zxk, {
                variant: "primary",
                text: O.intl.string(O.t.cpT0Cg),
                onClick: g.onClose
              })
            })]
          })]
        })
      }), (0, r.jsx)(a.olH, {
        className: y.close,
        onClick: g.onClose
      }), !v && (0, r.jsx)(s.Z, {
        confettiTarget: x.current,
        confettiCanvas: w,
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