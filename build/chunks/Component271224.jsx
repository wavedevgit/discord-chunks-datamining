/** Chunk was on 99014 **/
/** chunk id: 271224, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk870246 = require("./870246.js"),
  Chunk639777 = require("./639777.js"),
  Chunk973772 = require("./973772.js"),
  Chunk17622 = require("./17622.jsx"),
  Chunk880419 = require("./880419.jsx"),
  Chunk535396 = require("./535396.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237963 = require("./237963.js"),
  Chunk942570 = require("./942570.js");

function _(e) {
  var t, o, {
      guildId: a,
      powerup: _,
      onClose: O
    } = e,
    k = function(e, t) {
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
  let [j, g] = r.useState(true), v = (0, d.ZP)(a, _), x = v.type === b.A3.TIER_OVERRIDE_ACTIVATED, y = (0, l.Z)(a), C = null == v.sourceEntitlement || !y;
  return (0, i.$)(a, _, i.w.DETAIL), (0, n.jsxs)(s.Y0X, (t = function(e) {
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
    "data-migration-pending": true,
    className: f.modal,
    size: s.CgR.DYNAMIC
  }, k), o = o = {
    parentComponent: "GuildPowerupLevelModal",
    children: [(0, n.jsxs)(s.hzk, {
      "data-migration-pending": true,
      className: f.modalContentContainer,
      scrollbarType: "none",
      children: [(0, n.jsx)("img", {
        alt: "",
        src: I,
        className: f.boostImage
      }), (0, n.jsxs)("div", {
        className: f.contentContainer,
        children: [(0, n.jsx)(s.Heading, {
          variant: "heading-xl/extrabold",
          children: _.title
        }), (0, n.jsx)(u.Z, {
          powerup: _
        }), null != j && (0, n.jsx)(s.Text, {
          color: "status-danger",
          variant: "text-sm/semibold",
          children: j
        }), (0, n.jsxs)("div", {
          className: c()(f.footer, {
            [f.disabled]: C
          }),
          children: [!x && y && (0, n.jsx)(p.Z, {
            guildId: a,
            powerup: _,
            onError: g,
            grow: false,
            compact: !C
          }), (0, n.jsx)(s.Button, {
            variant: C ? "secondary" : "primary",
            onClick: O,
            text: m.intl.string(m.t.cpT0Cq)
          })]
        })]
      })]
    }), (0, n.jsx)(s.olH, {
      "data-migration-pending": true,
      className: f.close,
      onClick: O
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