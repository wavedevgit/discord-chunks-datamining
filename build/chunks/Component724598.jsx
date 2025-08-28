/** Chunk was on 88479 **/
/** chunk id: 724598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk357352 = require("./357352.js"),
  Chunk434404 = require("./434404.js"),
  Chunk626135 = require("./626135.js"),
  Chunk629481 = require("./629481.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk689409 = require("./689409.js");

function h(e) {
  let {
    pills: t
  } = e;
  return (0, r.jsx)("div", {
    className: f.row,
    children: t.map(e => (0, r.jsx)("div", {
      className: f.pill,
      children: (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function b(e) {
  let {
    guildId: t,
    showCTA: n,
    responsive: i = true
  } = e, b = [
    [p.intl.string(p.t["73h51N"]), p.intl.string(p.t["gbjs//"])],
    [p.intl.string(p.t.mCoH0d), p.intl.string(p.t["l/BuSE"])],
    [p.intl.string(p.t.psQktr), p.intl.string(p.t.nMhIZW)],
    [p.intl.string(p.t["0ItLmJ"]), p.intl.string(p.t.yQHqsL)]
  ];
  return (0, r.jsx)("div", {
    className: l()({
      [f.responsive]: i
    }),
    children: (0, r.jsxs)("div", {
      className: f.container,
      children: [(0, r.jsxs)("div", {
        className: f.content,
        children: [(0, r.jsx)("div", {
          className: f.pillContainer,
          children: b.map((e, t) => (0, r.jsx)(h, {
            pills: e
          }, "pill-row-".concat(t)))
        }), (0, r.jsxs)("div", {
          className: f.ctaContent,
          children: [(0, r.jsx)(s.Text, {
            variant: "text-lg/medium",
            color: "header-primary",
            children: p.intl.string(p.t["67arYG"])
          }), n && (0, r.jsx)(a.zx, {
            text: p.intl.string(p.t.oyzLpK),
            icon: s.ZSh,
            iconPosition: "end",
            size: "md",
            onClick: () => {
              var e, n;
              u.default.track(g.rMx.GUILD_SHOP_PREVIEW_CLICK, (e = function(e) {
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
              }({}, (0, o.hH)(t)), n = n = {
                action_taken: m.mz.GET_STARTED_CLICK
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, r)
                }
                return n
              })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }), e)), d.Z.open(t, g.pNK.GUILD_PRODUCTS)
            }
          })]
        })]
      }), (0, r.jsxs)("div", {
        className: f.muralImageContainer,
        children: [(0, r.jsx)("img", {
          src: (0, c.b)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: f.muralImage
        }), (0, r.jsx)("img", {
          src: (0, c.b)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: f.muralImageReducedWidth
        })]
      })]
    })
  })
}