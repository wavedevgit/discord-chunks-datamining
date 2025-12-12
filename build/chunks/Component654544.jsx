/** Chunk was on 49941 **/
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
  Chunk369929 = require("./369929.js");

function d(e) {
  let {
    title: t,
    handleOpenCollectiblesShop: n,
    handleOpenGameShop: d,
    socialLayerStorefrontApplicationId: f
  } = e, g = i.useRef(null), [p, m] = i.useState(false), b = (0, a.q)(f), h = i.useMemo(() => {
    let e = null == b || b.id !== s.t9 ? c.intl.string(c.t.apFNLU) : c.intl.string(c.t["kq/75v"]);
    if (null == b) return e;
    let t = o.ZP.getApplicationIconURL({
      id: b.id,
      icon: b.icon,
      size: 20
    });
    return (0, r.jsxs)("div", {
      className: u.gameShopLabelContainer,
      children: [(0, r.jsx)("img", {
        className: u.applicationIcon,
        src: t,
        alt: e
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: e
      })]
    })
  }, [b]), y = i.useMemo(() => (0, r.jsxs)(l.kSQ, {
    children: [(0, r.jsx)(l.sNh, {
      id: "browse-collectibles-shop",
      label: c.intl.string(c.t["5upuqx"]),
      iconLeft: l.EOn,
      action: n
    }), (0, r.jsx)(l.sNh, {
      id: "browse-social-layer-storefront",
      label: h,
      iconLeft: null != b ? true : l.EOn,
      action: d
    })]
  }), [n, d, h, b]);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: g,
    position: "bottom",
    onRequestOpen: () => m(true),
    onRequestClose: () => m(false),
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(l.v2r, {
        navId: "wishlist-overflow-menu",
        onSelect: true,
        onClose: t,
        "aria-label": c.intl.string(c.t.GdNkvG),
        children: y
      })
    },
    children: e => (0, r.jsx)(l.Button, function(e) {
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
      icon: p ? l.Dio : l.CJ0,
      iconPosition: "end",
      text: t
    }, e))
  })
}