/** Chunk was on 44097 **/
/** chunk id: 982072, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk262937 = require("./262937.js"),
  Chunk931847 = require("./931847.js");

function o(e) {
  let {
    widget: t,
    onAction: n
  } = e, [o, c] = (0, r.useState)(false), s = t instanceof l.q ? t.applicationId : null, {
    fetched: u
  } = (0, a.o)(s), d = (0, r.useCallback)(e => {
    e && (n(function(e) {
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
      action: "VIEW_WIDGET"
    }, t.getProfileAnalyticsOptions())), c(true))
  }, [n, t]);
  return (0, i.O)(d, true, !o && (null == s || u))
}