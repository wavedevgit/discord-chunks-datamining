/** Chunk was on 60118 **/
/** chunk id: 300131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let f = Chunk975571.A.getArticleURL(Chunk652215.MVz.CUSTOM_PROFILES_WISHLIST);

function p(e) {
  let {
    isOwner: t,
    isWishlistPublic: n,
    onToggleVisibility: s
  } = e, u = l.useRef(null), {
    analyticsLocations: p
  } = (0, o.Ay)(a.A.USER_PROFILE_WISHLIST), g = l.useMemo(() => t ? (0, r.jsxs)(i.rXV, {
    children: [(0, r.jsx)(i.fPC, {
      id: "wishlist-privacy-setting",
      label: d.intl.string(d.t.b2nFyA),
      subtext: d.intl.string(d.t.dw58pE),
      checked: n,
      action: s
    }), (0, r.jsx)(i.bXX, {}), (0, r.jsx)(i.Drp, {
      id: "wishlist-privacy-setting2",
      label: d.intl.string(d.t.hvVgAZ),
      icon: i.I9m,
      trailingIndicator: {
        type: "icon",
        icon: i.I9m
      },
      action: () => window.open(f)
    })]
  }) : null, [t, n, s]);
  return null == g ? null : (0, r.jsx)(o.f5, {
    value: p,
    children: (0, r.jsx)(i.YNO, {
      targetElementRef: u,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(i.W1t, {
          "data-menu-migrated": true,
          navId: "wishlist-overflow-menu",
          onSelect: true,
          onClose: t,
          "aria-label": d.intl.string(d.t.GdNkvG),
          children: g
        })
      },
      children: e => (0, r.jsx)(c.q3, function(e) {
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
        icon: i.jNK,
        tooltipText: d.intl.string(d.t["UKOtz+"]),
        action: "PRESS_OPTIONS"
      }, e))
    })
  })
}