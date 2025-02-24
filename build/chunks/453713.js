/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  P: () => y
});
var n = r(200651),
  i = r(192379),
  l = r(120356),
  o = r.n(l),
  a = r(404759),
  s = r.n(a),
  c = r(91192),
  d = r(536895),
  u = r(866442),
  p = r(481060),
  f = r(209613),
  h = r(429368),
  b = r(724994),
  C = r(388032),
  m = r(726179);

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n
    })
  }
  return e
}

function v(e, t) {
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

function x(e, t) {
  if (null == e) return {};
  var r, n, i = function(e, t) {
    if (null == e) return {};
    var r, n, i = {},
      l = Object.keys(e);
    for (n = 0; n < l.length; n++) r = l[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (n = 0; n < l.length; n++) r = l[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
  }
  return i
}
let _ = s()(e => {
    let t = !1;
    if (null != e && (0, u.FX)(e)) {
      let r = (0, u._i)(e);
      null != r && (t = .3 >= (0, u.Bd)(r))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  j = e => {
    let {
      variantGroupProduct: t,
      variant: r,
      variantIndex: l,
      totalVariants: a,
      selectedVariantIndex: s,
      onEnter: u,
      onLeave: f,
      minimal: j
    } = e, {
      isPurchased: y
    } = (0, b.L)(r), O = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(l)), {
      onFocus: k
    } = O, P = x(O, ["onFocus"]), S = i.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, h.$)(t, l), k()
    }, [k, t, l]);
    return (0, n.jsx)(p.ua7, {
      text: C.NW.string(C.t["/bUsx8"]),
      "aria-label": !1,
      shouldShow: !j && y,
      children: e => (0, n.jsx)(p.P3F, v(g({}, P), {
        tag: "li",
        onMouseEnter: () => {
          var t;
          u(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onMouseLeave: () => {
          var t;
          f(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onFocus: () => {
          var t;
          u(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e)
        },
        onBlur: () => {
          var t;
          f(), null === (t = e.onMouseLeave) || void 0 === t || t.call(e)
        },
        onClick: S,
        onKeyDown: e => {
          e.key === d.R8.ENTER && S(e)
        },
        className: m.colorVariant,
        children: (0, n.jsx)("div", {
          className: o()(m.colorSwatch, {
            [m.open]: !j,
            [m.selected]: l === s
          }),
          style: {
            backgroundColor: r.variantValue,
            zIndex: a - l
          },
          children: y ? (0, n.jsx)(p.kSu, {
            className: m.purchasedIndicator,
            color: _(r.variantValue)
          }) : null
        })
      }))
    })
  },
  y = e => {
    var t, r;
    let {
      variantGroupProduct: i,
      className: l,
      previewingVariantIndexProps: a,
      setIsHoveringOnSwitch: s,
      minimal: u,
      purchases: b,
      alternativeBackgroundColor: _
    } = e, y = (0, h.o)(i, b), O = a.previewingVariantIndex, k = null === (t = i.variants) || void 0 === t ? void 0 : t[y], P = null !== O ? null === (r = i.variants) || void 0 === r ? void 0 : r[O] : void 0, S = (0, f.Z)("shop-variants-group-".concat(i.storeListingId), d.hy.HORIZONTAL);
    if (null == k) return null;
    let E = null != P ? P.variantLabel : null == k ? void 0 : k.variantLabel;
    return (0, n.jsx)(c.bG, {
      navigator: S,
      children: (0, n.jsx)(c.SJ, {
        children: e => {
          var t, {
              ref: r
            } = e,
            c = x(e, ["ref"]);
          return (0, n.jsxs)("div", v(g({
            ref: r
          }, c), {
            className: o()(m.variantsPanel, l, {
              [m.minimalState]: u,
              [m.alternativeColor]: _
            }),
            onMouseEnter: () => null == s ? void 0 : s(!0),
            onMouseLeave: () => null == s ? void 0 : s(!1),
            children: [(0, n.jsx)("ol", {
              className: m.variantsList,
              children: null === (t = i.variants) || void 0 === t ? void 0 : t.map((e, t) => {
                var r, l;
                return (0, n.jsx)(j, {
                  variantGroupProduct: i,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: y,
                  totalVariants: null !== (l = null === (r = i.variants) || void 0 === r ? void 0 : r.length) && void 0 !== l ? l : 0,
                  onEnter: () => a.handleEntering(t),
                  onLeave: a.handleLeaving,
                  minimal: u
                }, t)
              })
            }), (0, n.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: m.variantLabel,
              children: u ? C.NW.string(C.t.wbgaj4) : E
            })]
          }))
        }
      })
    })
  }