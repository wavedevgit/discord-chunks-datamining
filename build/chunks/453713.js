/** Chunk was on 45620 **/
"use strict";
r.d(t, {
  P: () => y
});
var n = r(200651),
  l = r(192379),
  i = r(120356),
  a = r.n(i),
  o = r(404759),
  s = r.n(o),
  c = r(91192),
  d = r(536895),
  u = r(866442),
  p = r(481060),
  f = r(209613),
  h = r(429368),
  b = r(724994),
  m = r(388032),
  C = r(726179);

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
let j = s()(e => {
    let t = !1;
    if (null != e && (0, u.FX)(e)) {
      let r = (0, u._i)(e);
      null != r && (t = .3 >= (0, u.Bd)(r))
    }
    return t ? p.TVs.unsafe_rawColors.PRIMARY_700.css : p.TVs.unsafe_rawColors.PRIMARY_200.css
  }),
  _ = e => {
    let {
      variantGroupProduct: t,
      variant: r,
      variantIndex: i,
      totalVariants: o,
      selectedVariantIndex: s,
      onEnter: u,
      onLeave: f,
      minimal: _
    } = e, {
      isPurchased: y
    } = (0, b.L)(r), O = (0, c.JA)("shop-variants-group-".concat(t.storeListingId, "-").concat(i)), {
      onFocus: k
    } = O, P = x(O, ["onFocus"]), S = l.useCallback(e => {
      e.preventDefault(), e.stopPropagation(), (0, h.$)(t, i), k()
    }, [k, t, i]);
    return (0, n.jsx)(p.ua7, {
      text: m.NW.string(m.t["/bUsx8"]),
      "aria-label": !1,
      shouldShow: !_ && y,
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
        className: C.colorVariant,
        children: (0, n.jsx)("div", {
          className: a()(C.colorSwatch, {
            [C.open]: !_,
            [C.selected]: i === s
          }),
          style: {
            backgroundColor: r.variantValue,
            zIndex: o - i
          },
          children: y ? (0, n.jsx)(p.kSu, {
            className: C.purchasedIndicator,
            color: j(r.variantValue)
          }) : null
        })
      }))
    })
  },
  y = e => {
    var t, r;
    let {
      variantGroupProduct: l,
      className: i,
      previewingVariantIndexProps: o,
      setIsHoveringOnSwitch: s,
      minimal: u,
      purchases: b,
      alternativeBackgroundColor: j
    } = e, y = (0, h.o)(l, b), O = o.previewingVariantIndex, k = null === (t = l.variants) || void 0 === t ? void 0 : t[y], P = null !== O ? null === (r = l.variants) || void 0 === r ? void 0 : r[O] : void 0, S = (0, f.Z)("shop-variants-group-".concat(l.storeListingId), d.hy.HORIZONTAL);
    if (null == k) return null;
    let w = null != P ? P.variantLabel : null == k ? void 0 : k.variantLabel;
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
            className: a()(C.variantsPanel, i, {
              [C.minimalState]: u,
              [C.alternativeColor]: j
            }),
            onMouseEnter: () => null == s ? void 0 : s(!0),
            onMouseLeave: () => null == s ? void 0 : s(!1),
            children: [(0, n.jsx)("ol", {
              className: C.variantsList,
              children: null === (t = l.variants) || void 0 === t ? void 0 : t.map((e, t) => {
                var r, i;
                return (0, n.jsx)(_, {
                  variantGroupProduct: l,
                  variant: e,
                  variantIndex: t,
                  selectedVariantIndex: y,
                  totalVariants: null !== (i = null === (r = l.variants) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0,
                  onEnter: () => o.handleEntering(t),
                  onLeave: o.handleLeaving,
                  minimal: u
                }, t)
              })
            }), (0, n.jsx)(p.Text, {
              variant: "text-xs/medium",
              color: "text-secondary",
              className: C.variantLabel,
              children: u ? m.NW.string(m.t.wbgaj4) : w
            })]
          }))
        }
      })
    })
  }