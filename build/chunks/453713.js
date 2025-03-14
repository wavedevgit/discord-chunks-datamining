/** Chunk was on 95617 **/
n.d(t, {
  P: () => C
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  s = n(404759),
  a = n.n(s),
  c = n(91192),
  u = n(536895),
  d = n(866442),
  h = n(481060),
  b = n(209613),
  p = n(429368),
  f = n(724994),
  g = n(388032),
  O = n(307587);

function v(e) {
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

function m(e, t) {
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

function E(e, t) {
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
let y = a()(e => {
    let t = !1;
    if (null != e && (0, d.FX)(e)) {
      let n = (0, d._i)(e);
      null != n && (t = .3 >= (0, d.Bd)(n))
    }
    return t ? h.TVs.unsafe_rawColors.PRIMARY_700.css : h.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  _ = e => {
    let {
      variantGroupProduct: t,
      variant: n,
      variantIndex: o,
      totalVariants: s,
      selectedVariantIndex: a,
      onEnter: d,
      onLeave: b,
      minimal: _
    } = e, {
      isPurchased: C
    } = (0, f.L)(n), P = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(o)), {
      onFocus: j
    } = P, x = E(P, ["onFocus"]), N = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, p.$)(t, o), j()
    }, [j, t, o]);
    return (0, r.jsx)(h.ua7, {
      text: g.NW.string(g.t["/bUsx8"]),
      "aria-label": !1,
      shouldShow: !_ && C,
      children: e => (0, r.jsx)(h.P3F, m(v({}, x), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          b(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onFocus: () => {
          var t;
          d(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onBlur: () => {
          var t;
          b(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onClick: N,
        onKeyDown: e => {
          e.key === u.R8.ENTER && N(e)
        },
        className: O.colorVariant,
        children: (0, r.jsx)("div", {
          className: l()(O.colorSwatch, {
            [O.open]: !_,
            [O.selected]: o === a
          }),
          style: {
            backgroundColor: n.variantValue,
            zIndex: s - o
          },
          children: C ? (0, r.jsx)(h.kSu, {
            className: O.purchasedIndicator,
            color: y(n.variantValue)
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
      previewingVariantIndexProps: s,
      setIsHoveringOnSwitch: a,
      minimal: d,
      purchases: f,
      alternativeBackgroundColor: y
    } = e, C = (0, p.o)(i, f), P = s.previewingVariantIndex, j = null === (t = i.variants) || void 0 === t ? void 0 : t[C], x = null !== P ? null === (n = i.variants) || void 0 === n ? void 0 : n[P] : void 0, N = (0, b.Z)("shop-variants-group-".concat(i.storeListingId), u.hy.HORIZONTAL);
    if (null == j) return null;
    let L = null != x ? x.variantLabel : null == j ? void 0 : j.variantLabel;
    return (0, r.jsx)(c.bG, {
      navigator: N,
      children: (0, r.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: n
            } = e,
            c = E(e, ["ref"]);
          return (0, r.jsxs)("div", m(v({
            ref: n
          }, c), {
            className: l()(O.variantsPanel, o, {
              [O.minimalState]: d,
              [O.alternativeColor]: y
            }),
            onMouseEnter: () => null == a ? void 0 : a(!0),
            onMouseLeave: () => null == a ? void 0 : a(!1),
            children: [(0, r.jsx)("ol", {
              className: O.variantsList,
              children: null === (t = i.variants) || void 0 === t ? void 0 : t.map((e, t) => {
                var n, o;
                return (0, r.jsx)(_, {
                  variantGroupProduct: i,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: C,
                  totalVariants: null !== (o = null === (n = i.variants) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0,
                  onEnter: () => s.handleEntering(t),
                  onLeave: s.handleLeaving,
                  minimal: d
                }, t)
              })
            }), (0, r.jsx)(h.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: O.variantLabel,
              children: d ? g.NW.string(g.t.wbgaj4) : L
            })]
          }))
        }
      })
    })
  }