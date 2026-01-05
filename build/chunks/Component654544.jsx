/** Chunk was on 60646 **/
/** chunk id: 654544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk835473 = require("./835473.js"),
  Chunk768581 = require("./768581.js"),
  Chunk582113 = require("./582113.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk274156 = require("./274156.js");

function d(e) {
  let {
    title: t,
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: d,
    socialLayerStorefrontApplicationId: f
  } = e, g = i.useRef(null), [p, b] = i.useState(false), m = (0, l.q)(f), h = i.useMemo(() => {
    let e = null == m || m.id !== c.t9 ? s.intl.string(s.t.apFNLU) : s.intl.string(s.t["kq/75v"]);
    if (null == m) return e;
    let t = o.ZP.getApplicationIconURL({
      id: m.id,
      icon: m.icon,
      size: 20
    });
    return (0, r.jsxs)("div", {
      className: u.gameShopLabelContainer,
      children: [(0, r.jsx)("img", {
        className: u.applicationIcon,
        src: t,
        alt: e
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: e
      })]
    })
  }, [m]), y = i.useMemo(() => (0, r.jsxs)(a.kSQ, {
    children: [(0, r.jsx)(a.sNh, {
      id: "browse-collectibles-shop",
      label: s.intl.string(s.t["5upuqx"]),
      iconLeft: a.EOn,
      action: n
    }), (0, r.jsx)(a.sNh, {
      id: "browse-social-layer-storefront",
      label: h,
      iconLeft: null != m ? true : a.EOn,
      action: d
    })]
  }), [n, d, h, m]);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: g,
    position: "bottom",
    onRequestOpen: () => b(true),
    onRequestClose: () => b(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(a.v2r, {
        navId: "wishlist-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": s.intl.string(s.t.GdNkvG),
        children: y
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
      icon: p ? a.Dio : a.CJ0,
      iconPosition: "end",
      text: t
    }, e))
  })
}