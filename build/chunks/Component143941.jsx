/** Chunk was on 8850 **/
/** chunk id: 143941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  s: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727637 = require("./727637.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk602733 = require("./602733.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk820657 = require("./820657.js"),
  Chunk74866 = require("./74866.js");
let O = e => {
    let {
      message: t
    } = e;
    return (0, n.jsxs)("div", {
      className: g.toast,
      children: [(0, n.jsx)(s.kSu, {
        size: "refresh_sm",
        className: h.toastIcon,
        color: s.TVs.colors.STATUS_POSITIVE
      }), (0, n.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/semibold",
        children: t
      })]
    })
  },
  v = e => {
    let {
      skuId: t,
      iconSize: r = 20,
      className: i,
      enableHoverEffect: g = false
    } = e, [v, y] = (0, u.US)([o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL], true, true), m = v === o.z.WISHLIST_NUX_TOOLTIP_AND_MODAL, j = (0, p.n)("123", t), P = l.useRef(null), _ = (0, c.Z)(P), E = j ? s.h_8 : s.Pzh, x = j || _ ? h.wishlistedOrHoveredIconColor : h.normalIconColor, C = l.useCallback(e => {
      e.stopPropagation(), j ? (d.Z.removeSkuFromWishlist("123", t), (0, s.showToast)((0, s.createToast)("", s.ToastType.CUSTOM, {
        component: (0, n.jsx)(O, {
          message: b.intl.string(b.t.DSXOiI)
        })
      }))) : (d.Z.addSkuToWishlist("123", t), (0, s.showToast)((0, s.createToast)("", s.ToastType.CUSTOM, {
        component: (0, n.jsx)(O, {
          message: b.intl.string(b.t["3T2jbW"])
        })
      })), m && y(f.L.USER_DISMISS))
    }, [j, t, m, y]), S = j ? b.intl.string(b.t.yr9TTU) : b.intl.string(b.t["8DkMER"]), I = m ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: b.intl.string(b.t["47Rhc3"])
      }), (0, n.jsx)(s.Text, {
        variant: "text-sm/medium",
        children: b.intl.string(b.t.PXjA0d)
      })]
    }) : S;
    return (0, n.jsx)(s.ua7, {
      text: I,
      "aria-label": S,
      children: e => {
        var t, l;
        return (0, n.jsx)(s.P3F, (t = function(e) {
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
        }({}, e), l = l = {
          className: a()(h.wishlistButton, g && h.withHover, i),
          innerRef: P,
          onClick: C,
          "aria-label": S,
          children: (0, n.jsx)(E, {
            colorClass: x,
            size: "custom",
            height: r,
            width: r
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
        }), t))
      }
    })
  }