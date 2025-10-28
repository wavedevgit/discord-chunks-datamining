/** Chunk was on 45620 **/
/** chunk id: 406667, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk963458 = require("./963458.js");

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
    var t, n, l;
    let {
      product: i
    } = e, o = (0, C.o)(i), s = null != (l = null == (t = i.variants) ? true : t.length) ? l : 0;
    return 0 === s ? null : (0, r.jsx)("div", {
      className: v.productVariantsPreviewContainer,
      children: null == (n = i.variants) ? true : n.map((e, t) => (0, r.jsx)(k, {
        className: v.miniPreview,
        variant: e,
        isSelected: t === o,
        zIndex: s - Math.abs(o - t),
        size: "xxs"
      }, e.variantValue))
    })
  },
  y = e => {
    var t, n;
    let {
      product: i
    } = e, o = (0, C.o)(i), c = null != (n = null == (t = i.variants) ? true : t.length) ? n : 0, u = l.useCallback((e, t) => {
      e.stopPropagation(), (0, C.$)(i, t)
    }, [i]), d = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), a.hy.HORIZONTAL);
    return 0 === c ? null : (0, r.jsx)(s.bG, {
      navigator: d,
      children: (0, r.jsx)(s.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            l = O(e, ["ref"]);
          return (0, r.jsx)("div", x(E({
            className: v.productVariantsInteractiveContainer,
            ref: n
          }, l), {
            children: null == (t = i.variants) ? true : t.map((e, t) => (0, r.jsx)(j, {
              variant: e,
              isSelected: t === o,
              onClick: e => u(e, t)
            }, e.variantValue))
          }))
        }
      })
    })
  },
  j = e => {
    let {
      variant: t,
      isSelected: n,
      onClick: l
    } = e, i = (0, s.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)), {
      onFocus: o
    } = i, a = O(i, ["onFocus"]), {
      isPurchased: c
    } = (0, h.L)(t);
    return (0, r.jsx)(g.u, {
      text: b.intl.string(b.t["6cfuDj"]),
      shouldShow: c,
      asContainer: true,
      children: (0, r.jsx)(d.P3F, x(E({
        "aria-label": t.variantLabel,
        onClick: e => {
          l(e), o()
        },
        className: v.productVariantButton
      }, a), {
        children: (0, r.jsx)(k, {
          variant: t,
          isSelected: n,
          size: "sm"
        })
      }))
    })
  },
  k = e => {
    let {
      variant: t,
      isSelected: n,
      className: l,
      zIndex: i = 1,
      size: s = "sm"
    } = e, {
      isPurchased: a
    } = (0, h.L)(t);
    return (0, r.jsx)("div", {
      className: o()(l, v.productVariant, {
        [v.selected]: n
      }),
      style: {
        backgroundColor: t.variantValue,
        zIndex: i
      },
      children: a && (0, r.jsx)(T, {
        variant: t,
        size: s
      })
    })
  },
  T = e => {
    let {
      variant: t,
      size: n
    } = e, i = l.useMemo(() => {
      let e = (0, u.FX)(t.variantValue) && .3 > (0, u.Bd)((0, u._i)(t.variantValue));
      return (0, f.Lq)(e ? m.Ilk.BLACK_500 : m.Ilk.WHITE_500)
    }, [t.variantValue]);
    return (0, r.jsx)(d.kSu, {
      size: n,
      color: i
    })
  },
  I = e => {
    let {
      skuId: t,
      previewOnly: n,
      showLabel: l = false,
      className: i
    } = e, s = (0, _.LJ)(t), a = (0, C.o)(s);
    return null == s || s.type !== c.Z.VARIANTS_GROUP || null == s.variants || 0 === s.variants.length ? null : (0, r.jsxs)("div", {
      className: o()(v.productVariantsContainer, i),
      children: [n ? (0, r.jsx)(S, {
        product: s
      }) : (0, r.jsx)(y, {
        product: s
      }), l && (0, r.jsx)(d.xvT, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: s.variants[a].variantLabel
      })]
    })
  }