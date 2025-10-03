/** Chunk was on 56848 **/
/** chunk id: 778567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk370523 = require("./370523.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk277511 = require("./277511.js"),
  Chunk621853 = require("./621853.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk367155 = require("./367155.js");

function h(e) {
  let {
    isOwner: t,
    userId: n,
    wishlistId: h
  } = e, m = i.useRef(null), {
    analyticsLocations: v
  } = (0, c.ZP)(o.Z.USER_PROFILE_WISHLIST), {
    wishlistSettings: y
  } = (0, a.cj)([d.Z], () => ({
    wishlistSettings: d.Z.getWishlistSettings(n, h)
  })), [j, b] = i.useState(true);
  i.useEffect(() => {
    (null == y ? true : y.visibility) != null && b(y.visibility === l.f.PUBLIC)
  }, [null == y ? true : y.visibility]);
  let O = i.useCallback(() => {
      let e = j ? l.f.PRIVATE : l.f.PUBLIC;
      b(e === l.f.PUBLIC), u.Z.updateWishlistVisibility(h, e)
    }, [j, h, b]),
    x = i.useMemo(() => t ? (0, r.jsx)(s.kSQ, {
      children: (0, r.jsx)(s.m76, {
        id: "wishlist-privacy-setting",
        label: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-primary",
            children: g.intl.string(g.t.b2nFyM)
          }), (0, r.jsx)(s.Text, {
            className: p.menuItemDescription,
            variant: "text-xs/medium",
            color: "text-tertiary",
            children: g.intl.string(g.t.dw58pK)
          })]
        }),
        checked: j,
        action: O
      })
    }) : null, [t, j, O]);
  return null == x ? null : (0, r.jsx)(c.Gt, {
    value: v,
    children: (0, r.jsx)(s.yRy, {
      targetElementRef: m,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(s.v2r, {
          navId: "wishlist-overflow-menu",
          onSelect: true,
          onClose: t,
          "aria-label": g.intl.string(g.t.GdNkvL),
          children: x
        })
      },
      children: e => (0, r.jsx)(f.pt, function(e) {
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
        buttonRef: m,
        icon: s.xhG,
        tooltipText: g.intl.string(g.t.UKOtz8),
        action: "PRESS_OPTIONS"
      }, e))
    })
  })
}