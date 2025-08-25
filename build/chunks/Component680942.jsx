/** Chunk was on web.js **/
/** chunk id: 680942, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk410127 = require("./410127.js"),
  Chunk67409 = require("./67409.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let v = e => {
  let {
    product: t,
    primary: n,
    selectedVariantIndex: E,
    returnRef: y,
    onSuccess: v,
    tooltipDelay: I
  } = e, {
    analyticsLocations: T
  } = (0, l.ZP)(), S = i.useRef(null), A = (0, d.sp)(), C = (0, _.Z)();
  return (0, f.x6)(t) ? null : (0, r.jsx)(s.ua7, {
    text: g.intl.string(g.t["JCFN//"]),
    delay: I,
    children: e => (0, r.jsx)(s.hU, O(b({}, e), {
      "aria-label": g.intl.string(g.t["JCFN//"]),
      buttonRef: S,
      variant: n ? "primary" : "secondary",
      icon: s.OgN,
      size: "md",
      onClick: e => {
        e.stopPropagation(), u.default.track(h.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
          collectibles_shop_session_id: null == A ? true : A.sessionId,
          sku_id: t.skuId,
          page_section: null == A ? true : A.pageSection,
          page_category: null == A ? true : A.pageCategory,
          tile_type: o.Z[t.type],
          tile_position: String(null == A ? true : A.tilePosition),
          cta_name: "gift button",
          page_type: C || "home"
        }), (0, c.Z)({
          skuId: (0, p.S)({
            product: t,
            selectedVariantIndex: E
          }),
          isGift: true,
          giftingOrigin: m.Wt.SHOP_PAGE,
          analyticsLocations: T,
          returnRef: y,
          variantsReturnStyle: a.v.VARIANTS_GROUP,
          onClose: null != v ? e => {
            e && v()
          } : true
        })
      }
    }))
  })
}