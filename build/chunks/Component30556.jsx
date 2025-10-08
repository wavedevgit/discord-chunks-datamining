/** Chunk was on 31553 **/
/** chunk id: 30556, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk475413 = require("./475413.jsx"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  var {
    type: n,
    userId: t,
    onClose: a
  } = e, c = function(e, n) {
    if (null == e) return {};
    var t, l, i = function(e, n) {
      if (null == e) return {};
      var t, l, i = {},
        r = Object.keys(e);
      for (l = 0; l < r.length; l++) t = r[l], n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      for (l = 0; l < r.length; l++) t = r[l], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
    }
    return i
  }(e, ["type", "userId", "onClose"]);
  let d = n === o.j8.TEXT ? o.tG : o.ef;
  return (0, l.jsx)(d, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        l = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), l.forEach(function(n) {
        var l;
        l = t[n], n in e ? Object.defineProperty(e, n, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = l
      })
    }
    return e
  }({
    action: "SEND_MESSAGE",
    icon: i.kBi,
    text: s.intl.string(s.t.zROXER),
    tooltipText: s.intl.string(s.t.zROXER),
    onClick: () => {
      r.Z.openPrivateChannel({
        recipientIds: t
      }), null == a || a(), (0, i.pTH)()
    }
  }, c))
}