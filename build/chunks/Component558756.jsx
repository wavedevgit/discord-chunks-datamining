/** Chunk was on 86357 **/
/** chunk id: 558756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk9156 = require("./9156.js"),
  Chunk388032 = require("./388032.jsx");
let c = e => {
  let {
    className: t,
    channel: c,
    user: u
  } = e, d = (0, i.e7)([o.ZP], () => o.ZP.isChannelMuted(null, c.id));
  return u.bot ? (0, r.jsx)(l.zx, {
    className: t,
    size: l.Ph.SMALL,
    color: d ? l.zx.Colors.PRIMARY : l.zx.Colors.RED,
    onClick: function() {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("83545").then(n.bind(n, 53149));
        return t => (0, r.jsx)(e, function(e) {
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
          channelId: c.id
        }, t))
      })
    },
    children: d ? s.intl.string(s.t.YqAjX1) : s.intl.string(s.t["w4m94+"])
  }) : null
}