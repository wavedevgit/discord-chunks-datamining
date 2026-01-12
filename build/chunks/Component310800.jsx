/** Chunk was on 9536 **/
/** chunk id: 310800, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk724598 = require("./724598.jsx"),
  Chunk674180 = require("./674180.js"),
  Chunk572004 = require("./572004.js"),
  Chunk495437 = require("./495437.js"),
  Chunk267101 = require("./267101.js"),
  Chunk863663 = require("./863663.js"),
  Chunk676651 = require("./676651.jsx"),
  Chunk613810 = require("./613810.jsx"),
  Chunk391181 = require("./391181.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk973501 = require("./973501.js");

function h(e) {
  let {
    guildId: t,
    handleCreateOrEditProduct: i
  } = e, g = (0, d.ue)(t, {
    publishedOnly: false
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: h
  } = (0, s.gX)(t), x = g.length > 0;
  return (0, r.jsx)("div", {
    className: p.productListingsHeader,
    children: (0, r.jsx)(l.gNt, {
      label: x ? b.intl.string(b.t.RwuStQ) : b.intl.string(b.t.WKMcMW),
      children: e => x ? (0, r.jsx)("ul", {
        className: p.productListings,
        id: e.controlId,
        children: g.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(f.Z, {
            guildId: t,
            product: e,
            onEditProduct: () => i(e.id),
            onUnpublishProduct: () => {
              var n;
              return n = e.id, void(0, c.Je)(t, n, {
                published: false
              })
            },
            onDeleteProduct: () => {
              var i, a;
              return i = e.id, a = e.name, void(0, l.ZDy)(async () => {
                let {
                  default: e
                } = await n.e("95925").then(n.bind(n, 673078));
                return n => (0, r.jsx)(e, function(e) {
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
                }({
                  guildId: t,
                  productId: i,
                  productName: a
                }, n))
              })
            },
            onCopyProductLink: () => {
              var n;
              return n = e.id, void(0, o.JG)((0, u.ar)(t, n))
            },
            onTestDownload: () => m.Z.open({
              guildId: t,
              productId: e.id
            }),
            onReportProduct: () => {},
            disabled: h
          })
        }, e.id))
      }) : (0, r.jsx)(a.Z, {
        guildId: t,
        showCTA: false,
        responsive: false
      })
    })
  })
}

function x(e) {
  let {
    guildId: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: n
  } = (0, s.gX)(t), a = e => {
    g.h(t, e)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.zxk, {
      text: b.intl.string(b.t.riG6Da),
      icon: l.qJs,
      onClick: () => a(null),
      disabled: n
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(h, {
      guildId: t,
      handleCreateOrEditProduct: a
    })]
  })
}