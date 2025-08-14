/** Chunk was on 86031 **/
/** chunk id: 409116, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  F: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    nitroIconType: a,
    nitroIconSize: p = "md",
    className: b,
    discountOfferAmount: h,
    discount: f = s.f_,
    variant: v = "heading-md/semibold"
  } = e, m = null != h, _ = (0, o.qr)(t, r), g = f !== s.f_ && f.discountPercentage >= 5 && !m ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.nn4, {
      children: c.intl.format(c.t.niC6DA, {
        price: _,
        discountPercentage: f.discountPercentage
      })
    }), (0, n.jsx)("span", {
      "aria-hidden": true,
      children: _
    }), (0, n.jsxs)(l.Text, {
      variant: v,
      color: "text-feedback-positive",
      className: u.discount,
      "aria-hidden": true,
      children: ["(-", f.discountPercentage, "%)"]
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(l.nn4, {
      children: c.intl.format(c.t["6C36MD"], {
        price: _
      })
    }), (0, n.jsx)("span", {
      "aria-hidden": true,
      className: i()({
        [u.priceStrikethrough]: m
      }, b),
      children: _
    })]
  });
  return (0, n.jsxs)(l.Text, {
    variant: v,
    className: i()({
      [u.discountBackgroundColor]: m
    }, u.container, b),
    children: ["tooltip" === a ? (0, n.jsx)(l.ua7, {
      text: c.intl.string(c.t.MPFyJy),
      "aria-label": c.intl.string(c.t.X3Ekj4),
      children: e => {
        var t, r, a = d({}, function(e) {
          if (null == e) throw TypeError("Cannot destructure " + e);
          return e
        }(e));
        return (0, n.jsx)(l.SrA, (t = function(e) {
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
        }, a), r = r = {
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
    }) : "default" === a ? (0, n.jsx)(l.SrA, {
      size: p,
      color: "currentColor",
      className: u.nitroIcon
    }) : null, g, m && (0, n.jsxs)(l.X6q, {
      variant: "heading-md/semibold",
      className: u.discountPill,
      children: [(0, n.jsx)(l.nn4, {
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