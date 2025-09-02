/** Chunk was on 61149 **/
/** chunk id: 232083, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk623132 = require("./623132.jsx"),
  Chunk112794 = require("./112794.js");

function i(e) {
  var {
    games: t,
    widgetType: r,
    isGameFetching: i
  } = e, l = function(e, t) {
    if (null == e) return {};
    var r, n, a = function(e, t) {
      if (null == e) return {};
      var r, n, a = {},
        o = Object.keys(e);
      for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
      return a
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
    }
    return a
  }(e, ["games", "widgetType", "isGameFetching"]);
  return (0, n.jsx)("ul", {
    className: o.cardList,
    children: t.map((e, t) => (0, n.jsx)("li", {
      children: (0, n.jsx)(a.Z, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        game: e,
        widgetType: r,
        loading: i(e.applicationId)
      }, l))
    }, "".concat(e.applicationId, "-").concat(t)))
  })
}