/** Chunk was on 56848 **/
/** chunk id: 778567, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk918139 = require("./918139.js");

function d(e) {
  let {
    isOwner: t
  } = e, r = i.useRef(null), {
    analyticsLocations: d
  } = (0, s.ZP)(a.Z.USER_PROFILE_WISHLIST), [f, g] = i.useState(true), h = i.useCallback(() => {
    g(!f)
  }, [f]), p = i.useMemo(() => t ? (0, n.jsx)(l.kSQ, {
    children: (0, n.jsx)(l.m76, {
      id: "wishlist-privacy-setting",
      label: (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: c.intl.string(c.t.b2nFyM)
        }), (0, n.jsx)(l.Text, {
          className: u.menuItemDescription,
          variant: "text-xs/medium",
          color: "text-tertiary",
          children: c.intl.string(c.t.dw58pK)
        })]
      }),
      checked: f,
      action: h
    })
  }) : null, [t, f, h]);
  return null == p ? null : (0, n.jsx)(s.Gt, {
    value: d,
    children: (0, n.jsx)(l.yRy, {
      targetElementRef: r,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, n.jsx)(l.v2r, {
          navId: "wishlist-overflow-menu",
          onSelect: true,
          onClose: t,
          "aria-label": c.intl.string(c.t.GdNkvL),
          children: p
        })
      },
      children: e => (0, n.jsx)(o.pt, function(e) {
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
        buttonRef: r,
        icon: l.xhG,
        tooltipText: c.intl.string(c.t.UKOtz8),
        action: "PRESS_OPTIONS"
      }, e))
    })
  })
}