/** Chunk was on 74329 **/
n.d(t, {
  P: () => C
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(404759),
  s = n.n(a),
  c = n(91192),
  u = n(536895),
  d = n(866442),
  _ = n(481060),
  p = n(209613),
  E = n(429368),
  f = n(724994),
  m = n(388032),
  h = n(307587);

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
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

function O(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      o = Object.keys(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let N = s()(e => {
    let t = !1;
    if (null != e && (0, d.FX)(e)) {
      let n = (0, d._i)(e);
      null != n && (t = .3 >= (0, d.Bd)(n))
    }
    return t ? _.TVs.unsafe_rawColors.PRIMARY_700.css : _.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  I = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: o,
      totalVariants: a,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: p,
      minimal: I
    } = e, {
      isPurchased: C
    } = (0, f.L)(n), T = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(o)), {
      onFocus: S
    } = T, y = O(T, ["onFocus"]), v = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, E.$)(t, o), S()
    }, [S, t, o]);
    return (0, r.jsx)(_.ua7, {
      text: m.NW.string(m.t["/bUsx8"]),
      "aria-label": !1,
      shouldShow: !I && C,
      children: e => (0, r.jsx)(_.P3F, g(b({}, y), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          p(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onBlur: () => {
          var t;
          p(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onClick: v,
        onKeyDown: e => {
          e.key === u.R8.ENTER && v(e)
        },
        className: h.colorVariant,
        children: (0, r.jsx)("div", {
          className: l()(h.colorSwatch, {
            [h.open]: !I,
            [h.selected]: o === s
          }),
          style: {
            backgroundColor: n.variantValue,
            zIndex: a - o
          },
          children: C ? (0, r.jsx)(_.kSu, {
            className: h.purchasedIndicator,
            color: N(n.variantValue)
          }) : null
        })
      }))
    })
  },
  C = e => {
    var t, n;
    let {
      variantGroupProduct: i,
      className: o,
      previewingVariantIndexProps: a,
      setIsHoveringOnSwitch: s,
      minimal: d,
      purchases: f,
      alternativeBackgroundColor: N
    } = e, C = (0, E.o)(i, f), T = a.previewingVariantIndex, S = null === (t = i.variants) || void 0 === t ? void 0 : t[C], y = null !== T ? null === (n = i.variants) || void 0 === n ? void 0 : n[T] : void 0, v = (0, p.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
    if (null == S) return null;
    let P = null != y ? y.variantLabel : null == S ? void 0 : S.variantLabel;
    return (0, r.jsx)(c.bG, {
      navigator: v,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            c = O(e, ["ref"]);
          return (0, r.jsxs)("div", g(b({
            ref: n
          }, c), {
            className: l()(h.variantsPanel, o, {
              [h.minimalState]: d,
              [h.alternativeColor]: N
            }),
            onMouseEnter: () => null == s ? void 0 : s(!0),
            onMouseLeave: () => null == s ? void 0 : s(!1),
            children: [(0, r.jsx)("ol", {
              className: h.variantsList,
              children: null === (t = i.variants) || void 0 === t ? void 0 : t.map((e, t) => {
                var n, o;
                return (0, r.jsx)(I, {
                  variantGroupProduct: i,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: C,
                  totalVariants: null !== (o = null === (n = i.variants) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0,
                  onEnter: () => a.handleEntering(t),
                  onLeave: a.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, r.jsx)(_.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: h.variantLabel,
              children: d ? m.NW.string(m.t.wbgaj4) : P
            })]
          }))
        }
      })
    })
  }