/** Chunk was on 98335 **/
/** chunk id: 679879, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk58642 = require("./58642.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  return null == t ? null : (0, r.jsx)(i.S89, {
    id: "private",
    label: u.intl.string(u.t.fHDNJv),
    action: function() {
      if (null == t) return;
      let e = (0, c.x9)(t.getFlags(), o.eHb.PRIVATE);
      l.h(t.id, t.branchId, e), a.default.track(o.rMx.APPLICATION_SETTINGS_UPDATED, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = r
          })
        }
        return t
      }({
        private_enabled: (0, c.yE)(e, o.eHb.PRIVATE)
      }, t.getAnalyticsData()))
    },
    checked: t.hasFlag(o.eHb.PRIVATE)
  })
}