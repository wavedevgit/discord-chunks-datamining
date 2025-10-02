/** Chunk was on 56848 **/
/** chunk id: 778567, original params: e,t,n (module,exports,require) **/
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
  } = e, n = i.useRef(null), {
    analyticsLocations: d
  } = (0, s.ZP)(a.Z.USER_PROFILE_WISHLIST), [f, g] = i.useState(true), h = i.useCallback(() => {
    g(!f)
  }, [f]), p = i.useMemo(() => t ? (0, r.jsx)(l.kSQ, {
    children: (0, r.jsx)(l.m76, {
      id: "wishlist-privacy-setting",
      label: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: c.intl.string(c.t.b2nFyM)
        }), (0, r.jsx)(l.Text, {
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
  return null == p ? null : (0, r.jsx)(s.Gt, {
    value: d,
    children: (0, r.jsx)(l.yRy, {
      targetElementRef: n,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(l.v2r, {
          navId: "wishlist-overflow-menu",
          onSelect: true,
          onClose: t,
          "aria-label": c.intl.string(c.t.GdNkvL),
          children: p
        })
      },
      children: e => (0, r.jsx)(o.pt, function(e) {
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
        buttonRef: n,
        icon: l.xhG,
        tooltipText: c.intl.string(c.t.UKOtz8),
        action: "PRESS_OPTIONS"
      }, e))
    })
  })
}