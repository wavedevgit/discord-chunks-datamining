/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
});
var r = n(200651);
n(192379);
var i = n(852229),
  s = n(481060),
  a = n(724598),
  l = n(674180),
  o = n(495437),
  c = n(267101),
  A = n(863663),
  d = n(676651),
  u = n(613810),
  g = n(391181),
  f = n(388032),
  m = n(770);
let p = "guild-product-listings-header";

function h(e) {
  let {
    guildId: t,
    handleCreateOrEditProduct: d
  } = e, h = (0, c.ue)(t, {
    publishedOnly: !1
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: C
  } = (0, l.gX)(t), b = e => {
    (0, o.Je)(t, e, {
      published: !1
    })
  }, v = (e, i) => {
    (0, s.ZDy)(async () => {
      let {
        default: s
      } = await n.e("95925").then(n.bind(n, 673078));
      return n => (0, r.jsx)(s, function(e) {
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
      }({
        guildId: t,
        productId: e,
        productName: i
      }, n))
    })
  }, x = (e, t) => {
    (0, i.J)((0, A.ar)(e, t))
  }, N = h.length > 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.vwX, {
      className: m.productListingsHeader,
      id: p,
      children: N ? f.NW.string(f.t.RwuStb) : f.NW.string(f.t.WKMcMT)
    }), N ? (0, r.jsx)("ul", {
      className: m.productListings,
      "aria-labelledby": p,
      children: h.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(g.Z, {
          guildId: t,
          product: e,
          onEditProduct: () => d(e.id),
          onUnpublishProduct: () => b(e.id),
          onDeleteProduct: () => v(e.id, e.name),
          onCopyProductLink: () => x(t, e.id),
          onTestDownload: () => u.Z.open({
            guildId: t,
            productId: e.id
          }),
          onReportProduct: () => {},
          disabled: C
        })
      }, e.id))
    }) : (0, r.jsx)(a.Z, {
      guildId: t,
      showCTA: !1,
      responsive: !1
    })]
  })
}

function C(e) {
  let {
    guildId: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: n
  } = (0, l.gX)(t), i = e => {
    d.h(t, e)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.zxk, {
      className: m.addButton,
      innerClassName: m.addButtonInner,
      onClick: () => i(null),
      disabled: n,
      children: [(0, r.jsx)(s.qJs, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        "aria-hidden": !0
      }), (0, r.jsx)(s.LZC, {
        size: 6,
        horizontal: !0
      }), f.NW.string(f.t.riG6DQ)]
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsx)(h, {
      guildId: t,
      handleCreateOrEditProduct: i
    })]
  })
}