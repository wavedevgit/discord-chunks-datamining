/** Chunk was on 87791 **/
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
  p = n(481060),
  f = n(209613),
  h = n(429368),
  m = n(724994),
  _ = n(388032),
  b = n(307587);

function g(e) {
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

function v(e, t) {
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
let O = s()(e => {
    let t = !1;
    if (null != e && (0, d.FX)(e)) {
      let n = (0, d._i)(e);
      null != n && (t = .3 >= (0, d.Bd)(n))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  y = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: o,
      totalVariants: a,
      selectedVariantIndex: s,
      onEnter: d,
      onLeave: f,
      minimal: y
    } = e, {
      isPurchased: C
    } = (0, m.L)(n), x = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(o)), {
      onFocus: S
    } = x, N = v(x, ["onFocus"]), I = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, h.$)(t, o), S()
    }, [S, t, o]);
    return (0, r.jsx)(p.ua7, {
      text: _.NW.string(_.t["/bUsx8"]),
      "aria-label": !1,
      shouldShow: !y && C,
      children: e => (0, r.jsx)(p.P3F, E(g({}, N), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          f(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onBlur: () => {
          var t;
          f(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onClick: I,
        onKeyDown: e => {
          e.key === u.R8.ENTER && I(e)
        },
        className: b.colorVariant,
        children: (0, r.jsx)("div", {
          className: l()(b.colorSwatch, {
            [b.open]: !y,
            [b.selected]: o === s
          }),
          style: {
            backgroundColor: n.variantValue,
            zIndex: a - o
          },
          children: C ? (0, r.jsx)(p.kSu, {
            className: b.purchasedIndicator,
            color: O(n.variantValue)
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
      purchases: m,
      alternativeBackgroundColor: O
    } = e, C = (0, h.o)(i, m), x = a.previewingVariantIndex, S = null === (t = i.variants) || void 0 === t ? void 0 : t[C], N = null !== x ? null === (n = i.variants) || void 0 === n ? void 0 : n[x] : void 0, I = (0, f.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
    if (null == S) return null;
    let P = null != N ? N.variantLabel : null == S ? void 0 : S.variantLabel;
    return (0, r.jsx)(c.bG, {
      navigator: I,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            c = v(e, ["ref"]);
          return (0, r.jsxs)("div", E(g({
            ref: n
          }, c), {
            className: l()(b.variantsPanel, o, {
              [b.minimalState]: d,
              [b.alternativeColor]: O
            }),
            onMouseEnter: () => null == s ? void 0 : s(!0),
            onMouseLeave: () => null == s ? void 0 : s(!1),
            children: [(0, r.jsx)("ol", {
              className: b.variantsList,
              children: null === (t = i.variants) || void 0 === t ? void 0 : t.map((e, t) => {
                var n, o;
                return (0, r.jsx)(y, {
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
            }), (0, r.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: b.variantLabel,
              children: d ? _.NW.string(_.t.wbgaj4) : P
            })]
          }))
        }
      })
    })
  }