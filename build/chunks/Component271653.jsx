/** Chunk was on 47841 **/
/** chunk id: 271653, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk319664 = require("./319664.jsx"),
  Chunk465932 = require("./465932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk912702 = require("./912702.js"),
  Chunk250627 = require("./250627.js"),
  Chunk253141 = require("./253141.js"),
  Chunk579970 = require("./579970.jsx"),
  Chunk960427 = require("./960427.jsx"),
  Chunk482711 = require("./482711.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk296217 = require("./296217.js");

function x(e) {
  let {
    guildId: t,
    handleCreateOrEditProduct: i
  } = e, f = (0, d.fZ)(t, {
    publishedOnly: false
  }), {
    shouldRestrictUpdatingCreatorMonetizationSettings: x
  } = (0, a.nq)(t), h = f.length > 0;
  return (0, r.jsx)("div", {
    className: p.aW,
    children: (0, r.jsx)(l.D0$, {
      label: h ? m.intl.string(m.t.RwuStQ) : m.intl.string(m.t.WKMcMW),
      children: e => h ? (0, r.jsx)("ul", {
        className: p.Hn,
        id: e.controlId,
        children: f.map(e => (0, r.jsx)("li", {
          children: (0, r.jsx)(b.A, {
            guildId: t,
            product: e,
            onEditProduct: () => i(e.id),
            onUnpublishProduct: () => {
              var n;
              return n = e.id, void(0, o.Qm)(t, n, {
                published: false
              })
            },
            onDeleteProduct: () => {
              var i, s;
              return i = e.id, s = e.name, void(0, l.mMO)(async () => {
                let {
                  default: e
                } = await n.e("37214").then(n.bind(n, 100909));
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
                  productName: s
                }, n))
              })
            },
            onCopyProductLink: () => {
              var n;
              return n = e.id, void(0, c.C)((0, u.KW)(t, n))
            },
            onTestDownload: () => g.A.open({
              guildId: t,
              productId: e.id
            }),
            onReportProduct: () => {},
            disabled: x
          })
        }, e.id))
      }) : (0, r.jsx)(s.A, {
        guildId: t,
        showCTA: false,
        responsive: false
      })
    })
  })
}

function h(e) {
  let {
    guildId: t
  } = e, {
    shouldRestrictUpdatingCreatorMonetizationSettings: n
  } = (0, a.nq)(t), s = e => {
    f.q(t, e)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.$nd, {
      text: m.intl.string(m.t.riG6Da),
      icon: l.j96,
      onClick: () => s(null),
      disabled: n
    }), (0, r.jsx)(l.hKd, {
      size: 24
    }), (0, r.jsx)(x, {
      guildId: t,
      handleCreateOrEditProduct: s
    })]
  })
}