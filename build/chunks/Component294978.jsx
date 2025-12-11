/** Chunk was on 97368 **/
/** chunk id: 294978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk344185 = require("./344185.js"),
  Chunk665906 = require("./665906.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, s.Xb)(e),
    r = (0, l.e7)([c.Z], () => !a().isEmpty(c.Z.getThreadsForGuild(e.id)));
  return t && r ? (0, i.jsx)(o.sNh, {
    id: "active-threads",
    label: d.intl.string(d.t.TM6err),
    icon: o.kBi,
    action: () => {
      (0, o.ZDy)(async () => {
        let {
          default: t
        } = await n.e("22482").then(n.bind(n, 157743));
        return n => (0, i.jsx)(t, function(e) {
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
          guildId: e.id
        }, n))
      })
    }
  }) : null
}