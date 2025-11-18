/** Chunk was on 10023 **/
/** chunk id: 843343, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk486472 = require("./486472.js"),
  Chunk430824 = require("./430824.js"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk725924 = require("./725924.js");

function h() {
  var e, t;
  let n = (0, Chunk442837.e7)([Chunk486472.Z, Chunk430824.Z], () => Chunk486472.Z.unavailableGuilds.filter(e => null == s.Z.getGuild(e)).length),
    h = (0, Chunk91192.Ie)("unavailable-guilds-button");
  return require <= 0 ? null : (0, Chunk54381.jsx)(Chunk682662.H, {
    children: (0, Chunk54381.jsx)(Chunk662146.Z, {
      text: Chunk388032.intl.format(Chunk388032.t["TnH05/"], {
        count: require
      }),
      color: Chunk481060.aML.Colors.RED,
      children: (0, Chunk54381.jsx)(Chunk481060.Anchor, (e = function(e) {
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
        href: Chunk231338.yX.STATUS,
        target: "_blank",
        className: Chunk725924.guildsError,
        "aria-label": Chunk388032.intl.formatToPlainString(Chunk388032.t["MEpX+2"], {
          count: require
        })
      }, h), t = t = {
        children: (0, Chunk54381.jsx)(Chunk481060.Mgn, {
          color: "currentColor",
          "aria-hidden": true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(exports)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), module))
    })
  })
}