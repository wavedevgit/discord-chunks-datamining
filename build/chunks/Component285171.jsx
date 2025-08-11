/** Chunk was on 30720 **/
/** chunk id: 285171, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk237997 = require("./237997.js"),
  Chunk451478 = require("./451478.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk145597 = require("./145597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  var t, r, {
      transitionState: O,
      onClose: y,
      contextKey: j
    } = e,
    h = function(e, t) {
      if (null == e) return {};
      var r, n, i = function(e, t) {
        if (null == e) return {};
        var r, n, i = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
      }
      return i
    }(e, ["transitionState", "onClose", "contextKey"]);
  let g = (0, l.Dt)(),
    x = (0, o.e7)([a.Z], () => a.Z.isFocused()),
    P = j === f.IlC.APP,
    m = (0, d.getPID)(),
    v = (0, o.e7)([s.default], () => s.default.isLocked(m));
  return (i.useEffect(() => {
    (x || P || v) && (null == y || y())
  }, [x, y, P, v]), x || v) ? null : (0, n.jsxs)(c.Y0X, (t = function(e) {
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
    transitionState: O,
    "aria-labelledby": g
  }, h), r = r = {
    size: c.CgR.SMALL,
    parentComponent: "FocusMainAppModal",
    children: [(0, n.jsx)(c.xBx, {
      children: (0, n.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        children: b.intl.string(b.t.DJ8ojI)
      })
    }), (0, n.jsx)(c.hzk, {
      children: (0, n.jsx)(c.Text, {
        color: "text-default",
        variant: "text-md/medium",
        children: b.intl.string(b.t["E+Ph7O"])
      })
    }), (0, n.jsx)(c.mzw, {
      children: (0, n.jsxs)(c.hE2, {
        direction: "horizontal-reverse",
        children: [(0, n.jsx)(c.zxk, {
          variant: "primary",
          text: b.intl.string(b.t.ELRJQk),
          onClick: () => {
            u.isPlatformEmbedded ? p.ZP.focus() : window.focus(), y()
          }
        }), (0, n.jsx)(c.zxk, {
          variant: "secondary",
          text: b.intl.string(b.t.FgK5QE),
          onClick: () => null == y ? true : y()
        })]
      })
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
  }), t))
}