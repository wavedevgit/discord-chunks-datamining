/** Chunk was on 204 **/
/** chunk id: 409116, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  F: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239051 = require("./239051.js");

function d() {
  return (d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  }).apply(this, arguments)
}
let p = e => {
  let {
    price: {
      amount: t,
      currency: r
    },
    nitroIconType: l,
    nitroIconSize: p = "md",
    className: f,
    discountOfferAmount: h,
    discount: b = s.f_,
    variant: g = "heading-md/semibold"
  } = e, m = null != h, y = (0, o.qr)(t, r), v = b !== s.f_ && b.discountPercentage >= 5 && !m ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.nn4, {
      children: c.intl.format(c.t.niC6DA, {
        price: y,
        discountPercentage: b.discountPercentage
      })
    }), (0, n.jsx)("span", {
      "aria-hidden": true,
      children: y
    }), (0, n.jsxs)(a.Text, {
      variant: g,
      color: "text-feedback-positive",
      className: u.discount,
      "aria-hidden": true,
      children: ["(-", b.discountPercentage, "%)"]
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(a.nn4, {
      children: c.intl.format(c.t["6C36MD"], {
        price: y
      })
    }), (0, n.jsx)("span", {
      "aria-hidden": true,
      className: i()({
        [u.priceStrikethrough]: m
      }, f),
      children: y
    })]
  });
  return (0, n.jsxs)(a.Text, {
    variant: g,
    className: i()({
      [u.discountBackgroundColor]: m
    }, u.container, f),
    children: ["tooltip" === l ? (0, n.jsx)(a.ua7, {
      text: c.intl.string(c.t.MPFyJy),
      "aria-label": c.intl.string(c.t.X3Ekj4),
      children: e => {
        var t, r, l = d({}, function(e) {
          if (null == e) throw TypeError("Cannot destructure " + e);
          return e
        }(e));
        return (0, n.jsx)(a.SrA, (t = function(e) {
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
        }({
          size: p,
          color: "currentColor"
        }, l), r = r = {
          className: u.nitroIcon
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r.push.apply(r, n)
          }
          return r
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      }
    }) : "default" === l ? (0, n.jsx)(a.SrA, {
      size: p,
      color: "currentColor",
      className: u.nitroIcon
    }) : null, v, m && (0, n.jsxs)(a.X6q, {
      variant: "heading-md/semibold",
      className: u.discountPill,
      children: [(0, n.jsx)(a.nn4, {
        children: c.intl.format(c.t.rItDb2, {
          discountOfferAmount: h
        })
      }), (0, n.jsx)("span", {
        "aria-hidden": true,
        children: c.intl.formatToPlainString(c.t.AYcXGR, {
          discountOfferAmount: h
        })
      })]
    })]
  })
}