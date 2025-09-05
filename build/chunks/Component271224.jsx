/** Chunk was on 99014 **/
/** chunk id: 271224, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk870246 = require("./870246.js"),
  Chunk604857 = require("./604857.jsx"),
  Chunk17622 = require("./17622.jsx"),
  Chunk893922 = require("./893922.js"),
  Chunk942570 = require("./942570.js");

function d(e) {
  var t, o, {
      guildId: d,
      powerup: p,
      onClose: b
    } = e,
    f = function(e, t) {
      if (null == e) return {};
      var o, n, r = function(e, t) {
        if (null == e) return {};
        var o, n, r = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++) o = a[n], t.indexOf(o) >= 0 || (r[o] = e[o]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++) o = a[n], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o])
      }
      return r
    }(e, ["guildId", "powerup", "onClose"]);
  let [m, I] = r.useState(true);
  return (0, c.$)(d, p, c.w.DETAIL), (0, n.jsxs)(a.Y0X, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(o);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
        return Object.getOwnPropertyDescriptor(o, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = o[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({
    className: l.modal,
    size: a.CgR.DYNAMIC
  }, f), o = o = {
    parentComponent: "GuildPowerupLevelModal",
    children: [(0, n.jsxs)(a.hzk, {
      className: l.modalContentContainer,
      scrollbarType: "none",
      children: [(0, n.jsx)("img", {
        alt: "",
        src: u,
        className: l.boostImage
      }), (0, n.jsxs)("div", {
        className: l.contentContainer,
        children: [(0, n.jsx)(a.X6q, {
          variant: "heading-xl/extrabold",
          children: p.title
        }), (0, n.jsx)(i.Z, {
          powerup: p
        }), null != m && (0, n.jsx)(a.Text, {
          color: "status-danger",
          variant: "text-sm/semibold",
          children: m
        }), (0, n.jsx)(s.Z, {
          className: l.footer,
          guildId: d,
          powerup: p,
          onError: I,
          onClose: b
        })]
      })]
    }), (0, n.jsx)(a.olH, {
      className: l.close,
      onClick: b
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var o = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      o.push.apply(o, n)
    }
    return o
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
  }), t))
}