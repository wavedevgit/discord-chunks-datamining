/** Chunk was on 56848 **/
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
  Chunk367155 = require("./367155.js");
let g = Chunk63063.Z.getArticleURL(Chunk981631.BhN.CUSTOM_PROFILES_WISHLIST);

function p(e) {
  let {
    isOwner: t,
    isWishlistPublic: n,
    onToggleVisibility: o
  } = e, u = i.useRef(null), {
    analyticsLocations: p
  } = (0, s.ZP)(a.Z.USER_PROFILE_WISHLIST), h = i.useMemo(() => t ? (0, r.jsxs)(l.kSQ, {
    children: [(0, r.jsx)(l.m76, {
      id: "wishlist-privacy-setting",
      label: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-primary",
          children: d.intl.string(d.t.b2nFyM)
        }), (0, r.jsx)(l.Text, {
          className: f.menuItemDescription,
          variant: "text-xs/medium",
          color: "text-tertiary",
          children: d.intl.string(d.t.dw58pK)
        })]
      }),
      checked: n,
      action: o
    }), (0, r.jsx)(l.Clw, {}), (0, r.jsx)(l.sNh, {
      id: "wishlist-privacy-setting2",
      label: (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-primary",
        children: d.intl.string(d.t.hvVgAQ)
      }),
      icon: l.Gr1,
      action: () => window.open(g)
    })]
  }) : null, [t, n, o]);
  return null == h ? null : (0, r.jsx)(s.Gt, {
    value: p,
    children: (0, r.jsx)(l.yRy, {
      targetElementRef: u,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(l.v2r, {
          navId: "wishlist-overflow-menu",
          onSelect: true,
          onClose: t,
          "aria-label": d.intl.string(d.t.GdNkvL),
          children: h
        })
      },
      children: e => (0, r.jsx)(c.pt, function(e) {
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
        icon: l.xhG,
        tooltipText: d.intl.string(d.t.UKOtz8),
        action: "PRESS_OPTIONS"
      }, e))
    })
  })
}