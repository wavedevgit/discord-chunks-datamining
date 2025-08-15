/** Chunk was on 66866 **/
/** chunk id: 57949, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk159351 = require("./159351.js"),
  Chunk667 = require("./667.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function u(e) {
  let {
    guildProductListing: t,
    guildId: u,
    sourceAnalyticsLocations: d
  } = e, p = false, m = (0, i.Z)(), f = t.id, _ = () => {
    p = true
  };
  (0, l.ZDy)(async () => {
    let {
      default: e
    } = await n.e("88806").then(n.bind(n, 578780));
    return n => {
      var i, l;
      return (0, r.jsx)(e, (i = function(e) {
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
      }({}, n), l = l = {
        applicationId: t.application_id,
        skuId: f,
        sourceAnalyticsLocations: d,
        guildProductContext: {
          guildProductListingId: t.id,
          guildId: u
        },
        loadId: m,
        onComplete: _
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  }, {
    onCloseCallback: () => {
      p || s.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: m,
        payment_type: c.Zuq[c.GZQ.ONE_TIME],
        is_gift: false,
        sku_id: f,
        location_stack: Array.isArray(d) ? d : [d]
      }), (0, a.fw)(), (0, o.p)()
    },
    onCloseRequest: c.dG4
  })
}