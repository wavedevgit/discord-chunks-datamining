/** Chunk was on 94682 **/
/** chunk id: 789290, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk172218 = require("./172218.js"),
  Chunk521741 = require("./521741.js"),
  Chunk633075 = require("./633075.js");

function o(e) {
  let {
    widget: t,
    onAction: n
  } = e, [o, s] = (0, r.useState)(false), c = t instanceof a.R ? t.applicationId : null, {
    fetched: u
  } = (0, i.U)(c), d = (0, r.useCallback)(e => {
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
    }, t.getProfileAnalyticsOptions())), s(true))
  }, [n, t]);
  return (0, l.K)(d, true, !o && (null == c || u))
}