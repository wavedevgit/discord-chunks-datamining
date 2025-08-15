/** Chunk was on 17768 **/
/** chunk id: 539598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk937615 = require("./937615.js"),
  Chunk884697 = require("./884697.js"),
  Chunk200615 = require("./200615.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk58174 = require("./58174.js");

function d() {
  return (d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function p(e) {
  let {
    product: t
  } = e, n = (0, o.ql)(t, c.tuJ.PREMIUM_TIER_2);
  if (null == n) return null;
  let p = (0, i.qr)(n.amount, n.currency);
  return (0, r.jsxs)("div", {
    className: u.container,
    children: [(0, r.jsx)(a.ua7, {
      text: s.intl.string(s.t.MPFyJy),
      "aria-label": s.intl.string(s.t.X3Ekj4),
      children: e => {
        var t, n, i = d({}, function(e) {
          if (null == e) throw TypeError("Cannot destructure " + e);
          return e
        }(e));
        return (0, r.jsx)(a.SrA, (t = function(e) {
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
          size: "md",
          color: "currentColor"
        }, i), n = n = {
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
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/medium",
      children: s.intl.format(s.t.Sv8iiY, {
        price: p,
        subscribeNowHook: e => (0, r.jsx)(l.F, {
          text: e
        })
      })
    })]
  })
}