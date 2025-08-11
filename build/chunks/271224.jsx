/** Chunk was on 99014 **/
/** chunk id: 271224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk870246 = require("./870246.js"),
  Chunk604857 = require("./604857.js"),
  Chunk17622 = require("./17622.jsx"),
  Chunk418630 = require("./418630.js"),
  Chunk942570 = require("./942570.js");

function d(e) {
  var t, n, {
      guildId: d,
      powerup: p,
      onClose: f
    } = e,
    b = function(e, t) {
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
    }(e, ["guildId", "powerup", "onClose"]);
  let [m, O] = o.useState(true);
  return (0, a.$)(d, p, a.w.DETAIL), <i.Y0X{...t = function(e) {
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
    className: l.modal,
    size: i.CgR.DYNAMIC
  }, b), n = n = {
    parentComponent: "GuildPowerupLevelModal",
    children: [(0, r.jsxs)(i.hzk, {
      className: l.modalContentContainer,
      scrollbarType: "none",
      children: [(0, r.jsx)("img", {
        alt: "",
        src: u,
        className: l.boostImage
      }), (0, r.jsxs)("div", {
        className: l.contentContainer,
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-xl/extrabold",
          children: p.title
        }), (0, r.jsx)(c.Z, {
          powerup: p
        }), null != m && (0, r.jsx)(i.Text, {
          color: "status-danger",
          variant: "text-sm/semibold",
          children: m
        }), (0, r.jsx)(s.Z, {
          className: l.footer,
          guildId: d,
          powerup: p,
          onError: O,
          onClose: f
        })]
      })]
    }), (0, r.jsx)(i.olH, {
      className: l.close,
      onClick: f
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
  }), t} />
}