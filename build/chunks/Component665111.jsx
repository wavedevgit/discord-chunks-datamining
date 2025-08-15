/** Chunk was on 84686 **/
/** chunk id: 665111, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk471253 = require("./471253.js"),
  Chunk930180 = require("./930180.js"),
  Chunk320596 = require("./320596.jsx"),
  Chunk939863 = require("./939863.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk376589 = require("./376589.js");

function b(e) {
  var t, n, {
      channel: b,
      transitionState: _,
      onClose: p
    } = e,
    m = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["channel", "transitionState", "onClose"]);
  let g = (0, l.Dt)(),
    f = (0, s._d)(b.id),
    j = (0, s.K3)(b.id),
    x = async () => {
      await (0, c.yi)(b), p()
    }, y = async () => {
      await (0, c.RK)(b, false), p()
    };
  return (0, r.jsx)(o.Y0X, (t = function(e) {
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
    transitionState: _,
    "aria-labelledby": g
  }, m), n = n = {
    size: o.CgR.SMALL,
    parentComponent: "StageChannelModeratorJoinModal",
    children: (0, r.jsxs)(o.hzk, {
      className: h.content,
      children: [(0, r.jsx)(u.Z, {
        children: (0, r.jsx)("div", {
          className: h.stageIconBackground,
          children: (0, r.jsx)(o.ewx, {
            size: "custom",
            color: "currentColor",
            width: 40,
            height: 40,
            className: h.stageIcon
          })
        })
      }), (0, r.jsx)(o.X6q, {
        id: g,
        variant: "heading-xl/semibold",
        color: "header-primary",
        className: h.headerTitle,
        children: d.intl.string(d.t.njetU1)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        className: h.headerSubtitle,
        children: d.intl.string(d.t.LQY4JS)
      }), (f > 0 || j > 0) && (0, r.jsx)(a.mv, {
        channelId: b.id
      }), (0, r.jsxs)("div", {
        className: h.buttonsContainer,
        children: [(0, r.jsxs)(i.zx, {
          color: i.zx.Colors.PRIMARY,
          className: h.button,
          innerClassName: h.innerButton,
          onClick: y,
          children: [(0, r.jsx)("div", {
            className: h.icon,
            children: (0, r.jsx)(o.S6n, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          }), d.intl.string(d.t["Q8o/tb"])]
        }), (0, r.jsxs)(i.zx, {
          color: i.zx.Colors.PRIMARY,
          className: h.button,
          innerClassName: h.innerButton,
          onClick: x,
          children: [(0, r.jsx)("div", {
            className: h.icon,
            children: (0, r.jsx)(o.BFJ, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          }), d.intl.string(d.t["N3/Oyc"])]
        })]
      })]
    })
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
}