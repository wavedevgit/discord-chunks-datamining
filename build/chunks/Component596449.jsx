/** Chunk was on 89522 **/
/** chunk id: 596449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk576749 = require("./576749.js"),
  Chunk688641 = require("./688641.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    className: t,
    guildId: c
  } = e, d = (0, a.Z)();
  return (0, r.jsx)(s.Z, {
    className: t,
    icon: (0, r.jsx)(l.Que, {
      size: "custom",
      color: "currentColor",
      height: 20,
      width: 20
    }),
    color: i.Z.unsafe_rawColors.BRAND_500.css,
    title: o.intl.string(o.t["60lJ0C"]),
    description: o.intl.string(o.t["EYn7/y"]),
    onClick: function() {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("36599"), n.e("61"), n.e("38793")]).then(n.bind(n, 779250));
        return t => {
          var n, i;
          return (0, r.jsx)(e, (n = function(e) {
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
          }({}, t), i = i = {
            guildId: c
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
          }), n))
        }
      }, d)
    }
  })
}