/** Chunk was on 45620 **/
/** chunk id: 406667, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk979554 = require("./979554.js"),
  Chunk866442 = require("./866442.js"),
  Chunk793030 = require("./793030.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk209613 = require("./209613.js"),
  Chunk44315 = require("./44315.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk922948 = require("./922948.js");

function x(e) {
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
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}
let S = e => {
    var t, n;
    let {
      product: i,
      onVariantEnter: c,
      onVariantExit: u,
      isCollapsed: d
    } = e, g = (0, m.o)(i), f = null != (n = null == (t = i.variants) ? true : t.length) ? n : 0, h = l.useCallback((e, t) => {
      e.stopPropagation(), (0, m.$)(i, t)
    }, [i]), C = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), o.hy.HORIZONTAL);
    return 0 === f ? null : (0, r.jsx)(s.bG, {
      navigator: C,
      children: (0, r.jsx)(s.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            l = O(e, ["ref"]);
          return (0, r.jsx)("div", E(x({
            className: a()({
              [v.collapsed]: d,
              [v.expanded]: !d
            }, v.productVariantsContainer),
            ref: n
          }, l), {
            children: null == (t = i.variants) ? true : t.map((e, t) => (0, r.jsx)(y, {
              variant: e,
              isSelected: t === g,
              onVariantEnter: () => c(t),
              onVariantExit: u,
              zIndex: f - Math.abs(g - t),
              onClick: e => h(e, t)
            }, e.variantValue))
          }))
        }
      })
    })
  },
  y = e => {
    let {
      variant: t,
      isSelected: n,
      onClick: l,
      onVariantEnter: i,
      onVariantExit: o,
      zIndex: c
    } = e, u = (0, s.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)), {
      onFocus: p
    } = u, f = O(u, ["onFocus"]), {
      isPurchased: m
    } = (0, h.L)(t);
    return (0, r.jsx)(g.u, {
      text: b.intl.string(b.t["6cfuDj"]),
      shouldShow: m,
      children: (0, r.jsx)(d.P3F, E(x({
        "aria-label": t.variantLabel,
        onClick: e => {
          l(e), p()
        },
        onMouseEnter: i,
        onMouseLeave: o,
        onFocus: i,
        onBlur: o,
        className: a()(v.productVariant, {
          [v.selected]: n
        }),
        style: {
          backgroundColor: t.variantValue,
          zIndex: c
        }
      }, f), {
        children: m && (0, r.jsx)(j, {
          variant: t
        })
      }))
    })
  },
  j = e => {
    let {
      variant: t
    } = e, n = l.useMemo(() => {
      let e = (0, u.FX)(t.variantValue) && .3 > (0, u.Bd)((0, u._i)(t.variantValue));
      return (0, f.Lq)(e ? _.Ilk.BLACK_500 : _.Ilk.WHITE_500)
    }, [t.variantValue]);
    return (0, r.jsx)(d.kSu, {
      className: v.productVariantCheckmark,
      color: n
    })
  },
  k = e => {
    let {
      skuId: t,
      isCollapsed: n = false,
      showLabel: l = false,
      onVariantEnter: i,
      onVariantExit: s,
      className: o
    } = e, u = (0, C.LJ)(t), g = (0, m.o)(u);
    return null == u || u.type !== c.Z.VARIANTS_GROUP || null == u.variants || 0 === u.variants.length ? null : (0, r.jsxs)("div", {
      className: a()(v.productVariantsOuterContainer, o),
      children: [(0, r.jsx)(S, {
        product: u,
        onVariantEnter: i,
        onVariantExit: s,
        isCollapsed: n
      }), l && (0, r.jsx)(d.xvT, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: u.variants[g].variantLabel
      })]
    })
  }