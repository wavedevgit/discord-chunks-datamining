/** Chunk was on 6049 **/
/** chunk id: 310800, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
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
  Chunk82917 = require("./82917.js");
let b = "guild-product-listings-header";

function x(e) {
  let {
    guildId: t,
    handleCreateOrEditProduct: i
  } = e, m = (0, d.ue)(t, {
    publishedOnly: false
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: x
  } = (0, s.gX)(t), j = m.length > 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.vwX, {
      className: f.productListingsHeader,
      id: b,
      children: j ? h.intl.string(h.t.RwuStb) : h.intl.string(h.t.WKMcMT)
    }), j ? (0, r.jsx)("ul", {
      className: f.productListings,
      "aria-labelledby": b,
      children: m.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(p.Z, {
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
          onTestDownload: () => g.Z.open({
            guildId: t,
            productId: e.id
          }),
          onReportProduct: () => {},
          disabled: x
        })
      }, e.id))
    }) : (0, r.jsx)(a.Z, {
      guildId: t,
      showCTA: false,
      responsive: false
    })]
  })
}

function j(e) {
  let {
    guildId: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: n
  } = (0, s.gX)(t), a = e => {
    m.h(t, e)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.zx, {
      className: f.addButton,
      innerClassName: f.addButtonInner,
      onClick: () => a(null),
      disabled: n,
      children: [(0, r.jsx)(l.qJs, {
        size: "custom",
        color: "currentColor",
        width: 20,
        height: 20,
        "aria-hidden": true
      }), (0, r.jsx)(l.LZC, {
        size: 6,
        horizontal: true
      }), h.intl.string(h.t.riG6DQ)]
    }), (0, r.jsx)(l.LZC, {
      size: 24
    }), (0, r.jsx)(x, {
      guildId: t,
      handleCreateOrEditProduct: a
    })]
  })
}