/** Chunk was on 21724 **/
/** chunk id: 364616, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk741918 = require("./741918.js"),
  Chunk317097 = require("./317097.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk260762 = require("./260762.js"),
  Chunk298072 = require("./298072.js"),
  Chunk466459 = require("./466459.js"),
  Chunk623373 = require("./623373.js"),
  Chunk561769 = require("./561769.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk219974 = require("./219974.js");

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

function j(e, t) {
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

function x(e, t) {
  if (null == e) return {};
  var n, r, l, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        a = Object.getOwnPropertyNames(e);
      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}
let P = e => {
    var t, n;
    let {
      product: a,
      onVariantEnter: c,
      onVariantExit: u,
      isCollapsed: d
    } = e, p = (0, b.Q)(a), m = null != (t = null == (n = a.variants) ? true : n.length) ? t : 0, y = l.useCallback((e, t) => {
      e.stopPropagation(), (0, b.n)(a, t)
    }, [a]), f = (0, v.A)("shop-variants-group-".concat(a.storeListingId), s.Gl.HORIZONTAL);
    return 0 === m ? null : (0, r.jsx)(o.hD, {
      navigator: f,
      children: (0, r.jsx)(o.PR, {
        children: e => {
          var t;
          let {
            ref: n
          } = e, l = x(e, ["ref"]);
          return (0, r.jsx)("div", j(O({
            className: i()({
              [h.yZ]: d,
              [h.sz]: !d
            }, h.lO),
            ref: n
          }, l), {
            children: null == (t = a.variants) ? true : t.map((e, t) => (0, r.jsx)(A, {
              variant: e,
              isSelected: t === p,
              onVariantEnter: () => c(t),
              onVariantExit: u,
              zIndex: m - Math.abs(p - t),
              onClick: e => y(e, t)
            }, e.variantValue))
          }))
        }
      })
    })
  },
  A = e => {
    let {
      variant: t,
      isSelected: n,
      onClick: l,
      onVariantEnter: a,
      onVariantExit: s,
      zIndex: c
    } = e, d = (0, o.rm)("shop-variants-group-".concat(t.storeListingId, "-").concat(t.variantLabel)), {
      onFocus: v
    } = d, b = x(d, ["onFocus"]), {
      isPurchased: y
    } = (0, m.h)(t);
    return (0, r.jsx)(p.m, {
      text: g.intl.string(g.t["6cfuDj"]),
      shouldShow: y,
      children: (0, r.jsx)(u.DUT, j(O({
        "aria-label": t.variantLabel,
        onClick: e => {
          l(e), v()
        },
        onMouseEnter: a,
        onMouseLeave: s,
        onFocus: a,
        onBlur: s,
        className: i()(h.bP, {
          [h.wH]: n
        }),
        style: {
          backgroundColor: t.variantValue,
          zIndex: c
        }
      }, b), {
        children: y && (0, r.jsx)(C, {
          variant: t
        })
      }))
    })
  },
  C = e => {
    let {
      variant: t
    } = e, n = l.useMemo(() => (0, c.qt)(t.variantValue) && .3 > (0, c.OK)((0, c.LX)(t.variantValue)) ? d.A.colors.BLACK.css : d.A.colors.WHITE.css, [t.variantValue]);
    return (0, r.jsx)(u.BNr, {
      className: h.U,
      color: n
    })
  },
  k = e => {
    let {
      skuId: t,
      isCollapsed: n = false,
      onVariantEnter: l,
      onVariantExit: a
    } = e, i = (0, f.Vm)(t);
    return null != i && (0, y.B1)(i) ? (0, r.jsx)(P, {
      product: i,
      onVariantEnter: l,
      onVariantExit: a,
      isCollapsed: n
    }) : null
  }