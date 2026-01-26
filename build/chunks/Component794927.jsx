/** Chunk was on 67564 **/
/** chunk id: 794927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk272812 = require("./272812.jsx"),
  Chunk200749 = require("./200749.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk492955 = require("./492955.js"),
  Chunk828230 = require("./828230.js");

function d(e) {
  let {
    channel: t,
    guild: d,
    width: p,
    inPopout: h
  } = e;
  return (0, r.jsx)(i.A, {
    className: c.zr,
    children: (0, r.jsx)(s.A, {
      artURL: u,
      size: (0, s.J)(p),
      header: o.intl.string(o.t.O4FiWi),
      onCTAClick: () => (0, l.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42821")]).then(n.bind(n, 234355));
        return n => {
          var l, i;
          return (0, r.jsx)(e, (l = function(e) {
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
          }({}, n), i = i = {
            guild: d,
            channel: t,
            source: a.PE1.CHANNEL_CALL
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
          }), l))
        }
      }, {
        contextKey: h ? l.KX8 : l.SYi
      }),
      callToAction: o.intl.string(o.t.VINpSK)
    })
  })
}