/** Chunk was on 98335 **/
/** chunk id: 683609, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk58642 = require("./58642.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  return null == t ? null : (0, r.jsx)(l.S89, {
    id: "on-overlay",
    label: u.intl.string(u.t.rgZKg2),
    action: function() {
      if (null == t) return;
      let e = (0, i.x9)(t.getFlags(), o.eHb.OVERLAY_DISABLED);
      a.h(t.id, t.branchId, e), c.default.track(o.rMx.APPLICATION_SETTINGS_UPDATED, function(t) {
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
        overlay_disabled: (0, i.yE)(e, o.eHb.OVERLAY_DISABLED)
      }, t.getAnalyticsData()))
    },
    checked: t.hasFlag(o.eHb.OVERLAY_DISABLED)
  })
}