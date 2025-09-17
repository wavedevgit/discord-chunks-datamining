/** Chunk was on 72164 **/
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
  } = e, s = function(e, n) {
    if (null == e) return {};
    var t, o, r = function(e, n) {
      if (null == e) return {};
      var t, o, r = {},
        l = Object.keys(e);
      for (o = 0; o < l.length; o++) t = l[o], n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r
    }(e, n);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (o = 0; o < l.length; o++) t = l[o], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
    }
    return r
  }(e, ["type", "userId", "onClose"]);
  let d = n === i.j8.TEXT ? i.tG : i.ef;
  return (0, o.jsx)(d, function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = null != arguments[n] ? arguments[n] : {},
        o = Object.keys(t);
      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      }))), o.forEach(function(n) {
        var o;
        o = t[n], n in e ? Object.defineProperty(e, n, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[n] = o
      })
    }
    return e
  }({
    action: "SEND_MESSAGE",
    icon: r.kBi,
    text: c.intl.string(c.t.zROXER),
    tooltipText: c.intl.string(c.t.zROXER),
    onClick: () => {
      l.Z.openPrivateChannel({
        recipientIds: t
      }), null == a || a()
    }
  }, s))
}