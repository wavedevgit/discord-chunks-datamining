/** Chunk was on 75708 **/
/** chunk id: 213928, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626562 = require("./626562.js"),
  Chunk885110 = require("./885110.js"),
  Chunk51144 = require("./51144.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk596993 = require("./596993.js");

function m() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk885110.Z], () => Chunk885110.Z.getStatus()),
    n = null != (e = (0, Chunk51144.u5)(exports)) ? module : "",
    m = exports === Chunk231338.Sk.INVISIBLE || exports === Chunk231338.Sk.OFFLINE,
    p = (0, Chunk626562.V)({
      location: "UserProfileAccountPopoutMenuItemStatusLabel"
    });
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk596993.container,
    children: [require, require.length > 0 && p && m && (0, Chunk255367.jsx)(Chunk481060.ua7, {
      text: Chunk388032.intl.string(Chunk388032.t.L99HQk),
      children: e => (0, i.jsx)(s.Mgn, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        size: "xs",
        color: s.TVs.colors.STATUS_WARNING
      }, e))
    })]
  })
}