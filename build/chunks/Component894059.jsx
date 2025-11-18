/** Chunk was on 87154 **/
/** chunk id: 894059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk518756 = require("./518756.js"),
  Chunk576749 = require("./576749.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    c = (0, l.Z)(e),
    u = (0, o.Z)();
  return c ? (0, r.jsx)(i.sNh, {
    id: "create-event",
    label: a.intl.string(a.t["60lJ0C"]),
    icon: t ? i.VZI : true,
    action: () => {
      (0, i.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([n.e("36599"), n.e("61"), n.e("51725")]).then(n.bind(n, 779250));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
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
          }({}, n), l = l = {
            guildId: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      }, u)
    }
  }) : null
}