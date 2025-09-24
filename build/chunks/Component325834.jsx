/** Chunk was on 204 **/
/** chunk id: 325834, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  r: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk536895 = require("./536895.js"),
  Chunk481060 = require("./481060.js"),
  Chunk209613 = require("./209613.js"),
  Chunk429368 = require("./429368.js"),
  Chunk724994 = require("./724994.js"),
  Chunk578976 = require("./578976.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk233971 = require("./233971.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      i = Object.keys(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}
let O = e => {
    let {
      variantGroupProduct: t,
      variant: r,
      variantIndex: i,
      totalVariants: u,
      selectedVariantIndex: O,
      onEnter: v,
      onLeave: j
    } = e, {
      isPurchased: P
    } = (0, p.L)(r), _ = (0, o.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)), {
      onFocus: E
    } = _, x = m(_, ["onFocus"]), C = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, d.$)(t, i), E()
    }, [E, t, i]), S = (0, f.SQ)(r);
    return (0, n.jsx)(c.ua7, {
      text: b.intl.string(b.t["6cfuDg"]),
      "aria-label": false,
      shouldShow: P,
      children: e => (0, n.jsx)(c.P3F, y(h({}, x), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          v(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          j(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onFocus: () => {
          var t;
          v(), null == (t = e.onMouseEnter) || t.call(e)
        },
        onBlur: () => {
          var t;
          j(), null == (t = e.onMouseLeave) || t.call(e)
        },
        onClick: C,
        onKeyDown: e => {
          e.key === s.R8.ENTER && C(e)
        },
        className: g.thumbnailVariant,
        children: (0, n.jsxs)("div", {
          className: a()(g.thumbnailImage, {
            [g.selected]: i === O
          }),
          style: {
            zIndex: u - i
          },
          children: [null != S && "" !== S && (0, n.jsx)("img", {
            src: S,
            alt: r.variantLabel,
            className: g.thumbnailImg,
            onError: e => {
              e.target.style.display = "none"
            }
          }), P ? (0, n.jsx)("div", {
            className: g.purchasedIndicator,
            children: (0, n.jsx)(c.kSu, {
              color: "var(--text-primary)"
            })
          }) : null]
        })
      }))
    })
  },
  v = e => {
    var t, r;
    let {
      variantGroupProduct: l,
      className: i,
      previewingVariantIndexProps: d,
      setIsHoveringOnSwitch: p,
      selectedVariantIndex: f
    } = e, b = d.previewingVariantIndex, v = null == (t = l.variants) ? true : t[f], j = null !== b ? null == (r = l.variants) ? true : r[b] : true, P = (0, u.Z)("shop-variants-group-".concat(l.storeListingId), s.hy.HORIZONTAL);
    if (null == v) return null;
    let _ = null != j ? j.variantLabel : null == v ? true : v.variantLabel;
    return (0, n.jsx)(o.bG, {
      navigator: P,
      children: (0, n.jsx)(o.SJ, {
        children: e => {
          var {
            ref: t
          } = e, r = m(e, ["ref"]);
          return (0, n.jsxs)("div", y(h({
            ref: t
          }, r), {
            className: a()(g.variantsPanel, i, {}),
            onMouseEnter: () => null == p ? true : p(true),
            onMouseLeave: () => null == p ? true : p(false),
            children: [null != l.variants && l.variants.length > 0 && (0, n.jsx)("ol", {
              className: g.variantsList,
              children: l.variants.map((e, t) => (0, n.jsx)(O, {
                variantGroupProduct: l,
                variant: e,
                variantIndex: t,
                selectedVariantIndex: f,
                totalVariants: l.variants.length,
                onEnter: () => d.handleEntering(t),
                onLeave: d.handleLeaving
              }, t))
            }), (0, n.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: g.variantLabel,
              children: _
            })]
          }))
        }
      })
    })
  }