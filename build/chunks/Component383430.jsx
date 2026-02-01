/** Chunk was on 60118 **/
/** chunk id: 383430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk429913 = require("./429913.js"),
  Chunk486020 = require("./486020.js"),
  Chunk188275 = require("./188275.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk416000 = require("./416000.js");

function d(e) {
  let {
    title: t,
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: d,
    socialLayerStorefrontApplicationId: f
  } = e, p = l.useRef(null), [g, m] = l.useState(false), b = (0, a.h)(f), y = l.useMemo(() => null == b || b.id !== s.XR ? c.intl.string(c.t.apFNLU) : c.intl.string(c.t["kq/75v"]), [b]), O = l.useMemo(() => null == b ? null : o.Ay.getApplicationIconURL({
    id: b.id,
    icon: b.icon,
    size: 20
  }), [b]), j = l.useMemo(() => null == O ? i.U1X : () => (0, r.jsx)("img", {
    className: u.I,
    src: O,
    alt: ""
  }), [O]), h = l.useMemo(() => null == O ? {
    type: "icon",
    icon: i.U1X
  } : {
    type: "image",
    src: O
  }, [O]), x = l.useMemo(() => (0, r.jsxs)(i.rXV, {
    children: [(0, r.jsx)(i.Drp, {
      id: "browse-collectibles-shop",
      label: c.intl.string(c.t["5upuqx"]),
      iconLeft: i.U1X,
      leadingAccessory: {
        type: "icon",
        icon: i.U1X
      },
      action: n
    }), (0, r.jsx)(i.Drp, {
      id: "browse-social-layer-storefront",
      label: y,
      iconLeft: j,
      leadingAccessory: h,
      action: d
    })]
  }), [n, d, y, j, h]);
  return (0, r.jsx)(i.YNO, {
    targetElementRef: p,
    position: "bottom",
    onRequestOpen: () => m(true),
    onRequestClose: () => m(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(i.W1t, {
        "data-menu-migrated": true,
        navId: "wishlist-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": c.intl.string(c.t.GdNkvG),
        children: x
      })
    },
    children: e => (0, r.jsx)(i.Button, function(e) {
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
      buttonRef: p,
      variant: "secondary",
      size: "sm",
      icon: g ? i.PGe : i.abt,
      iconPosition: "end",
      text: t
    }, e))
  })
}