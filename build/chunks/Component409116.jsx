/** Chunk was on 45620 **/
/** chunk id: 409116, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk864356 = require("./864356.js");

function d() {
  return (d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}
let p = e => {
  let {
    price: {
      amount: t,
      currency: n
    },
    nitroIconType: l,
    nitroIconSize: p = "md",
    className: g,
    discountOfferAmount: f,
    discount: b = s.f_,
    variant: h = "heading-md/semibold"
  } = e, m = null != f, _ = (0, o.qr)(t, n), v = b !== s.f_ && b.discountPercentage >= 5 && !m ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.nn4, {
      children: c.intl.format(c.t.niC6DA, {
        price: _,
        discountPercentage: b.discountPercentage
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: _
    }), (0, r.jsxs)(i.Text, {
      variant: h,
      color: "text-feedback-positive",
      className: u.discount,
      "aria-hidden": true,
      children: ["(-", b.discountPercentage, "%)"]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.nn4, {
      children: c.intl.format(c.t["6C36MD"], {
        price: _
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      className: a()({
        [u.priceStrikethrough]: m
      }, g),
      children: _
    })]
  });
  return (0, r.jsxs)(i.Text, {
    variant: h,
    className: a()({
      [u.discountBackgroundColor]: m
    }, u.container, g),
    children: ["tooltip" === l ? (0, r.jsx)(i.ua7, {
      text: c.intl.string(c.t.MPFyJy),
      "aria-label": c.intl.string(c.t.X3Ekj4),
      children: e => {
        var t, n, l = d({}, function(e) {
          if (null == e) throw TypeError("Cannot destructure " + e);
          return e
        }(e));
        return (0, r.jsx)(i.SrA, (t = function(e) {
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
          size: p,
          color: "currentColor"
        }, l), n = n = {
          className: u.nitroIcon
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    }) : "default" === l ? (0, r.jsx)(i.SrA, {
      size: p,
      color: "currentColor",
      className: u.nitroIcon
    }) : null, v, m && (0, r.jsxs)(i.X6q, {
      variant: "heading-md/semibold",
      className: u.discountPill,
      children: [(0, r.jsx)(i.nn4, {
        children: c.intl.format(c.t.rItDb2, {
          discountOfferAmount: f
        })
      }), (0, r.jsx)("span", {
        "aria-hidden": true,
        children: c.intl.formatToPlainString(c.t.AYcXGR, {
          discountOfferAmount: f
        })
      })]
    })]
  })
}