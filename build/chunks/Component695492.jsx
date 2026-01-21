/** Chunk was on 82124 **/
/** chunk id: 695492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk607187 = require("./607187.jsx"),
  Chunk112560 = require("./112560.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk978769 = require("./978769.js"),
  Chunk800350 = require("./800350.js");

function d(e) {
  let {
    channel: t,
    guild: d,
    width: p,
    inPopout: f
  } = e;
  return (0, r.jsx)(l.Z, {
    className: c.root,
    children: (0, r.jsx)(a.Z, {
      artURL: u,
      size: (0, a.L)(p),
      header: s.intl.string(s.t.O4FiWi),
      onCTAClick: () => (0, i.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("7654"), n.e("49049"), n.e("97016")]).then(n.bind(n, 560114));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = function(e) {
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
            guild: d,
            channel: t,
            source: o.t4x.CHANNEL_CALL
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
      }, {
        contextKey: f ? i.u1M : i.z1l
      }),
      callToAction: s.intl.string(s.t.VINpSK)
    })
  })
}