/** Chunk was on 74891 **/
/** chunk id: 87484, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk159351 = require("./159351.js"),
  Chunk667 = require("./667.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function c(t) {
  let {
    applicationId: e,
    skuId: c,
    onClose: d,
    onComplete: p,
    analyticsLocations: f,
    analyticsLocationObject: S,
    contextKey: O,
    isGift: I = false
  } = t, b = false, g = (0, r.Z)();
  (0, l.ZDy)(async () => {
    let {
      default: t
    } = await n.e("61670").then(n.bind(n, 409600));
    return n => {
      var r, l, {
          onClose: o
        } = n,
        a = function(t, e) {
          if (null == t) return {};
          var n, i, r = function(t, e) {
            if (null == t) return {};
            var n, i, r = {},
              l = Object.keys(t);
            for (i = 0; i < l.length; i++) n = l[i], e.indexOf(n) >= 0 || (r[n] = t[n]);
            return r
          }(t, e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(t);
            for (i = 0; i < l.length; i++) n = l[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
          }
          return r
        }(n, ["onClose"]);
      return (0, i.jsx)(t, (r = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, a), l = l = {
        loadId: g,
        applicationId: e,
        skuId: c,
        analyticsLocations: f,
        analyticsLocationObject: S,
        isGift: I,
        onClose: t => {
          o(), null == d || d(t)
        },
        onComplete: t => {
          b = true, null == p || p(t)
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(l, t))
      }), r))
    }
  }, {
    contextKey: O,
    onCloseCallback: () => {
      b || u.default.track(s.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: g,
        payment_type: s.Zuq[s.GZQ.ONE_TIME],
        location: S,
        is_gift: I,
        sku_id: c,
        application_id: e,
        location_stack: f
      }), (0, o.fw)(), (0, a.p)(), null == d || d(b)
    },
    onCloseRequest: s.dG4
  })
}