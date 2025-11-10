/** Chunk was on 77678 **/
/** chunk id: 654544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk768581 = require("./768581.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk123304 = require("./123304.js");

function u(e) {
  let {
    title: t,
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: u,
    socialLayerStorefrontApplicationId: d
  } = e, g = i.useRef(null), [f, p] = i.useState(false), m = (0, l.q)(d), b = i.useMemo(() => {
    if (null == m) return c.intl.string(c.t.apFNLU);
    let e = o.ZP.getApplicationIconURL({
      id: m.id,
      icon: m.icon,
      size: 20
    });
    return (0, r.jsxs)("div", {
      className: s.gameShopLabelContainer,
      children: [(0, r.jsx)("img", {
        className: s.applicationIcon,
        src: e,
        alt: c.intl.string(c.t.apFNLU)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "header-primary",
        children: c.intl.string(c.t.apFNLU)
      })]
    })
  }, [m]), h = i.useMemo(() => (0, r.jsxs)(a.kSQ, {
    children: [(0, r.jsx)(a.sNh, {
      id: "browse-collectibles-shop",
      label: c.intl.string(c.t["5upuqx"]),
      iconLeft: a.EOn,
      action: n
    }), (0, r.jsx)(a.sNh, {
      id: "browse-social-layer-storefront",
      label: b,
      iconLeft: null != m ? true : a.EOn,
      action: u
    })]
  }), [n, u, b, m]);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: g,
    position: "bottom",
    onRequestOpen: () => p(true),
    onRequestClose: () => p(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "wishlist-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": c.intl.string(c.t.GdNkvG),
        children: h
      })
    },
    children: e => (0, r.jsx)(a.Button, function(e) {
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
      buttonRef: g,
      variant: "secondary",
      size: "sm",
      icon: f ? a.Dio : a.CJ0,
      iconPosition: "end",
      text: t
    }, e))
  })
}