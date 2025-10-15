/** Chunk was on 16859 **/
/** chunk id: 325834, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  r: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk578976 = require("./578976.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk233971 = require("./233971.js");

function O(e) {
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

function g(e, t) {
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

function j(e, t) {
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
let h = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: i,
      totalVariants: d,
      selectedVariantIndex: h,
      onEnter: v,
      onLeave: x
    } = e, {
      isPurchased: E
    } = (0, f.L)(n), P = (0, o.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)), {
      onFocus: _
    } = P, C = j(P, ["onFocus"]), S = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, p.$)(t, i), _()
    }, [_, t, i]), A = (0, b.SQ)(n);
    return (0, r.jsx)(c.u, {
      asContainer: true,
      text: y.intl.string(y.t["6cfuDj"]),
      "aria-label": false,
      shouldShow: E,
      children: (0, r.jsx)(u.P3F, g(O({}, C), {
        tag: "li",
        onMouseEnter: () => {
          v()
        },
        onMouseLeave: () => {
          x()
        },
        onFocus: () => {
          v()
        },
        onBlur: () => {
          x()
        },
        onClick: S,
        onKeyDown: e => {
          e.key === s.R8.ENTER && S(e)
        },
        className: m.thumbnailVariant,
        children: (0, r.jsxs)("div", {
          className: a()(m.thumbnailImage, {
            [m.selected]: i === h
          }),
          style: {
            zIndex: d - i
          },
          children: [null != A && "" !== A && (0, r.jsx)("img", {
            src: A,
            alt: n.variantLabel,
            className: m.thumbnailImg,
            onError: e => {
              e.target.style.display = "none"
            }
          }), E ? (0, r.jsx)("div", {
            className: m.purchasedIndicator,
            children: (0, r.jsx)(u.kSu, {
              color: "var(--text-primary)"
            })
          }) : null]
        })
      }))
    })
  },
  v = e => {
    var t, n;
    let {
      variantGroupProduct: l,
      className: i,
      previewingVariantIndexProps: c,
      setIsHoveringOnSwitch: p,
      selectedVariantIndex: f
    } = e, b = c.previewingVariantIndex, y = null == (t = l.variants) ? true : t[f], v = null !== b ? null == (n = l.variants) ? true : n[b] : true, x = (0, d.Z)("shop-variants-group-".concat(l.storeListingId), s.hy.HORIZONTAL);
    if (null == y) return null;
    let E = null != v ? v.variantLabel : null == y ? true : y.variantLabel;
    return (0, r.jsx)(o.bG, {
      navigator: x,
      children: (0, r.jsx)(o.SJ, {
        children: e => {
          var {
            ref: t
          } = e, n = j(e, ["ref"]);
          return (0, r.jsxs)("div", g(O({
            ref: t
          }, n), {
            className: a()(m.variantsPanel, i, {}),
            onMouseEnter: () => null == p ? true : p(true),
            onMouseLeave: () => null == p ? true : p(false),
            children: [null != l.variants && l.variants.length > 0 && (0, r.jsx)("ol", {
              className: m.variantsList,
              children: l.variants.map((e, t) => (0, r.jsx)(h, {
                variantGroupProduct: l,
                variant: e,
                variantIndex: t,
                selectedVariantIndex: f,
                totalVariants: l.variants.length,
                onEnter: () => c.handleEntering(t),
                onLeave: c.handleLeaving
              }, t))
            }), (0, r.jsx)(u.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: m.variantLabel,
              children: E
            })]
          }))
        }
      })
    })
  }