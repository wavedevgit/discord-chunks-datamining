/** Chunk was on 79312 **/
/** chunk id: 753194, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk297700 = require("./297700.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t, {
      color: r,
      size: d,
      forcedIconColor: p,
      className: f,
      iconClassName: y,
      tooltipText: m
    } = e,
    [b, S] = (0, l.Wu)([s.Z], () => [s.Z.desaturateUserColors, s.Z.saturation]),
    O = (0, o.dQu)(i.Z.unsafe_rawColors.PRIMARY_300).hex(),
    h = (0, a._i)(null != r ? r : O),
    v = (0, a.ho)(h, false, b ? S : null);
  return t = null != p ? p : .3 > (0, a.Bd)(h) ? i.Z.unsafe_rawColors.PRIMARY_630.css : i.Z.unsafe_rawColors.WHITE_500.css, (0, n.jsx)(o.ua7, {
    text: null != m ? m : u.intl.string(u.t.T3PvV1),
    children: e => {
      var r, a;
      return (0, n.jsx)(c.Z, (r = function(e) {
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
      }({}, e), a = a = {
        className: f,
        color: v,
        size: d,
        children: (0, n.jsx)(o.kmB, {
          size: "custom",
          color: t,
          height: d,
          width: d,
          className: y
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
      }), r))
    }
  })
}