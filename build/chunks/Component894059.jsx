/** Chunk was on 87154 **/
/** chunk id: 894059, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk518756 = require("./518756.js"),
  Chunk576749 = require("./576749.js"),
  Chunk388032 = require("./388032.jsx");

function a(e) {
  let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
    a = (0, l.Z)(e),
    u = (0, o.Z)();
  return a ? (0, n.jsx)(i.sNh, {
    id: "create-event",
    label: c.intl.string(c.t["60lJ0C"]),
    icon: t ? i.VZI : true,
    action: () => {
      (0, i.ZDy)(async () => {
        let {
          default: t
        } = await Promise.all([r.e("36599"), r.e("61"), r.e("98878")]).then(r.bind(r, 779250));
        return r => {
          var i, l;
          return (0, n.jsx)(t, (i = function(e) {
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
          }({}, r), l = l = {
            guildId: e
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      }, u)
    }
  }) : null
}