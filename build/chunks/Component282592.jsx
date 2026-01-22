/** Chunk was on 881 **/
/** chunk id: 282592, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk665260 = require("./665260.js"),
  Chunk397927 = require("./397927.js"),
  Chunk59636 = require("./59636.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  return null == t ? null : (0, r.jsx)(l.sLh, {
    id: "on-overlay",
    label: u.intl.string(u.t.rgZKg2),
    action: function() {
      if (null == t) return;
      let e = (0, i.PQ)(t.getFlags(), o.hM6.OVERLAY_DISABLED);
      a.V(t.id, t.branchId, e), c.default.track(o.HAw.APPLICATION_SETTINGS_UPDATED, function(t) {
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
        overlay_disabled: (0, i.Lt)(e, o.hM6.OVERLAY_DISABLED)
      }, t.getAnalyticsData()))
    },
    checked: t.hasFlag(o.hM6.OVERLAY_DISABLED)
  })
}