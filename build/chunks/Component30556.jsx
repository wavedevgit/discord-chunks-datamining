/** Chunk was on 12756 **/
/** chunk id: 30556, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var {
    type: t,
    userId: n,
    onClose: c
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["type", "userId", "onClose"]);
  let d = t === o.j8.TEXT ? o.tG : o.ef;
  return (0, r.jsx)(d, function(e) {
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
    action: "SEND_MESSAGE",
    icon: i.kBi,
    text: a.intl.string(a.t.zROXER),
    tooltipText: a.intl.string(a.t.zROXER),
    onClick: () => {
      l.Z.openPrivateChannel({
        recipientIds: n
      }), null == c || c()
    }
  }, s))
}