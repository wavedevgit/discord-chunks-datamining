/** Chunk was on 78870 **/
/** chunk id: 319664, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58149 = require("./58149.js"),
  Chunk289397 = require("./289397.js"),
  Chunk997509 = require("./997509.js"),
  Chunk954571 = require("./954571.js"),
  Chunk634654 = require("./634654.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587106 = require("./587106.js");

function j(e) {
  let {
    pills: t
  } = e;
  return (0, n.jsx)("div", {
    className: C.nM,
    children: t.map(e => (0, n.jsx)("div", {
      className: C.Io,
      children: (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: e
      })
    }, e))
  })
}

function O(e) {
  let {
    guildId: t,
    showCTA: r,
    responsive: i = true
  } = e, O = [
    [b.intl.string(b.t["73h51J"]), b.intl.string(b.t["gbjs/6"])],
    [b.intl.string(b.t.mCoH0V), b.intl.string(b.t["l/BuSI"])],
    [b.intl.string(b.t.psQktv), b.intl.string(b.t.nMhIZQ)],
    [b.intl.string(b.t["0ItLmF"]), b.intl.string(b.t.yQHqsC)]
  ];
  return (0, n.jsx)("div", {
    className: o()({
      [C.no]: i
    }),
    children: (0, n.jsxs)("div", {
      className: C.kL,
      children: [(0, n.jsxs)("div", {
        className: C.Qs,
        children: [(0, n.jsx)("div", {
          className: C.V_,
          children: O.map((e, t) => (0, n.jsx)(j, {
            pills: e
          }, "pill-row-".concat(t)))
        }), (0, n.jsxs)("div", {
          className: C.mv,
          children: [(0, n.jsx)(s.Text, {
            variant: "text-lg/medium",
            color: "text-strong",
            children: b.intl.string(b.t["67arYL"])
          }), r && (0, n.jsx)(l.$nd, {
            text: b.intl.string(b.t.oyzLpD),
            icon: s.EdP,
            iconPosition: "end",
            size: "md",
            onClick: () => {
              var e, r;
              u.default.track(f.HAw.GUILD_SHOP_PREVIEW_CLICK, (e = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({}, (0, c.H$)(t)), r = r = {
                action_taken: p.hN.GET_STARTED_CLICK
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  r.push.apply(r, n)
                }
                return r
              })(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
              }), e)), d.A.open(t, f.BEX.GUILD_PRODUCTS)
            }
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: C.SN,
        children: [(0, n.jsx)("img", {
          src: (0, a.n)("server_products/storefront/preview-mural.png"),
          alt: "",
          className: C.$G
        }), (0, n.jsx)("img", {
          src: (0, a.n)("server_products/storefront/preview-mural-reduced.png"),
          alt: "",
          className: C.rp
        })]
      })]
    })
  })
}