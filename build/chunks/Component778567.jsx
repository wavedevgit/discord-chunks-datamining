/** Chunk was on 77678 **/
/** chunk id: 778567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk918139 = require("./918139.js");
let f = Chunk63063.Z.getArticleURL(Chunk981631.BhN.CUSTOM_PROFILES_WISHLIST);

function p(e) {
  let {
    isOwner: t,
    isWishlistPublic: n,
    onToggleVisibility: c
  } = e, u = i.useRef(null), {
    analyticsLocations: p
  } = (0, o.ZP)(l.Z.USER_PROFILE_WISHLIST), m = i.useMemo(() => t ? (0, r.jsxs)(a.kSQ, {
    children: [(0, r.jsx)(a.m76, {
      id: "wishlist-privacy-setting",
      label: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: d.intl.string(d.t.b2nFyA)
        }), (0, r.jsx)(a.Text, {
          className: g.menuItemDescription,
          variant: "text-xs/medium",
          color: "text-tertiary",
          children: d.intl.string(d.t.dw58pE)
        })]
      }),
      checked: n,
      action: c
    }), (0, r.jsx)(a.Clw, {}), (0, r.jsx)(a.sNh, {
      id: "wishlist-privacy-setting2",
      label: (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        children: d.intl.string(d.t.hvVgAZ)
      }),
      icon: a.Gr1,
      action: () => window.open(f)
    })]
  }) : null, [t, n, c]);
  return null == m ? null : (0, r.jsx)(o.Gt, {
    value: p,
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: u,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(a.v2r, {
          navId: "wishlist-overflow-menu",
          onSelect: true,
          onClose: t,
          "aria-label": d.intl.string(d.t.GdNkvG),
          children: m
        })
      },
      children: e => (0, r.jsx)(s.pt, function(e) {
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
        buttonRef: u,
        icon: a.xhG,
        tooltipText: d.intl.string(d.t["UKOtz+"]),
        action: "PRESS_OPTIONS"
      }, e))
    })
  })
}