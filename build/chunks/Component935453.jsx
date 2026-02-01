/** Chunk was on 9753 **/
/** chunk id: 935453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk391048 = require("./391048.js"),
  Chunk636099 = require("./636099.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function u(e) {
  let {
    guildProductListing: t,
    guildId: u,
    sourceAnalyticsLocations: d
  } = e, p = false, m = (0, i.A)(), f = t.id, g = () => {
    p = true
  };
  (0, l.mMO)(async () => {
    let {
      default: e
    } = await n.e("41469").then(n.bind(n, 35052));
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
        onComplete: g
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
      p || o.default.track(c.HAw.PAYMENT_FLOW_CANCELED, {
        load_id: m,
        payment_type: c.frM[c.VVm.ONE_TIME],
        is_gift: false,
        sku_id: f,
        location_stack: Array.isArray(d) ? d : [d]
      }), (0, a.ET)(), (0, s.z)()
    },
    onCloseRequest: c.tEg
  })
}