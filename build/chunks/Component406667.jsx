/** Chunk was on 45620 **/
/** chunk id: 406667, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function E(e) {
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

function x(e, t) {
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
      isCollapsed: c
    } = e, u = (0, h.o)(i), d = null != (n = null == (t = i.variants) ? true : t.length) ? n : 0, g = l.useCallback((e, t) => {
      e.stopPropagation(), (0, h.$)(i, t)
    }, [i]), f = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), o.hy.HORIZONTAL);
    return 0 === d ? null : (0, r.jsx)(a.bG, {
      navigator: f,
      children: (0, r.jsx)(a.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            l = O(e, ["ref"]);
          return (0, r.jsx)("div", x(E({
            className: s()({
              [v.collapsed]: c,
              [v.expanded]: !c
            }, v.productVariantsContainer),
            ref: n
          }, l), {
            children: null == (t = i.variants) ? true : t.map((e, t) => (0, r.jsx)(y, {
              variant: e,
              isSelected: t === u,
              zIndex: d - Math.abs(u - t),
              onClick: e => g(e, t)
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
      zIndex: i
    } = e, o = (0, a.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)), {
      onFocus: c
    } = o, u = O(o, ["onFocus"]), {
      isPurchased: p
    } = (0, C.L)(t);
    return (0, r.jsx)(g.u, {
      text: b.intl.string(b.t["6cfuDj"]),
      shouldShow: p,
      children: (0, r.jsx)(d.P3F, x(E({
        "aria-label": t.variantLabel,
        onClick: e => {
          l(e), c()
        },
        className: s()(v.productVariant, {
          [v.selected]: n
        }),
        style: {
          backgroundColor: t.variantValue,
          zIndex: i
        }
      }, u), {
        children: p && (0, r.jsx)(j, {
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
      return (0, f.Lq)(e ? m.Ilk.BLACK_500 : m.Ilk.WHITE_500)
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
      className: i
    } = e, a = (0, _.LJ)(t), o = (0, h.o)(a);
    return null == a || a.type !== c.Z.VARIANTS_GROUP || null == a.variants || 0 === a.variants.length ? null : (0, r.jsxs)("div", {
      className: s()(v.productVariantsOuterContainer, i),
      children: [(0, r.jsx)(S, {
        product: a,
        isCollapsed: n
      }), l && (0, r.jsx)(d.xvT, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: a.variants[o].variantLabel
      })]
    })
  }