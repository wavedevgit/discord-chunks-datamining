/** Chunk was on web.js **/
/** chunk id: 325834, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  r: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk578976 = require("./578976.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk233971 = require("./233971.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = O(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let v = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: a,
      totalVariants: u,
      selectedVariantIndex: m,
      onEnter: E,
      onLeave: O
    } = e, {
      isPurchased: v
    } = (0, f.L)(n), I = (0, s.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(a)), {
      onFocus: S
    } = I, T = y(I, ["onFocus"]), A = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, d.$)(t, a), S()
    }, [S, t, a]), C = (0, _.SQ)(n);
    return (0, r.jsx)(c.ua7, {
      text: p.intl.string(p.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: v,
      children: e => (0, r.jsx)(c.P3F, b(g({}, T), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          E(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          O(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onFocus: () => {
          var t;
          E(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onBlur: () => {
          var t;
          O(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onClick: A,
        onKeyDown: e => {
          e.key === l.R8.ENTER && A(e)
        },
        className: h.thumbnailVariant,
        children: (0, r.jsxs)("div", {
          className: o()(h.thumbnailImage, {
            [h.selected]: a === m
          }),
          style: {
            zIndex: u - a
          },
          children: [null != C && "" !== C && (0, r.jsx)("img", {
            src: C,
            alt: n.variantLabel,
            className: h.thumbnailImg,
            onError: e => {
              e.target.style.display = "none"
            }
          }), v ? (0, r.jsx)("div", {
            className: h.purchasedIndicator,
            children: (0, r.jsx)(c.kSu, {
              color: "var(--text-primary)"
            })
          }) : null]
        })
      }))
    })
  },
  I = e => {
    var t, n;
    let {
      variantGroupProduct: i,
      className: a,
      previewingVariantIndexProps: d,
      setIsHoveringOnSwitch: f,
      selectedVariantIndex: _
    } = e, p = d.previewingVariantIndex, m = null == (t = i.variants) ? true : t[_], E = null !== p ? null == (n = i.variants) ? true : n[p] : true, O = (0, u.Z)("shop-variants-group-".concat(i.storeListingId), l.hy.HORIZONTAL);
    if (null == m) return null;
    let I = null != E ? E.variantLabel : null == m ? true : m.variantLabel;
    return (0, r.jsx)(s.bG, {
      navigator: O,
      children: (0, r.jsx)(s.SJ, {
        children: e => {
          var {
            ref: t
          } = e, n = y(e, ["ref"]);
          return (0, r.jsxs)("div", b(g({
            ref: t
          }, n), {
            className: o()(h.variantsPanel, a, {}),
            onMouseEnter: () => null == f ? true : f(true),
            onMouseLeave: () => null == f ? true : f(false),
            children: [null != i.variants && i.variants.length > 0 && (0, r.jsx)("ol", {
              className: h.variantsList,
              children: i.variants.map((e, t) => (0, r.jsx)(v, {
                variantGroupProduct: i,
                variant: e,
                variantIndex: t,
                selectedVariantIndex: _,
                totalVariants: i.variants.length,
                onEnter: () => d.handleEntering(t),
                onLeave: d.handleLeaving
              }, t))
            }), (0, r.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: h.variantLabel,
              children: I
            })]
          }))
        }
      })
    })
  }