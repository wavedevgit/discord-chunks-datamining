/** Chunk was on 19418 **/
/** chunk id: 226958, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk970278 = require("./970278.js"),
  Chunk406704 = require("./406704.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let t = (0, d.H_)(e),
    r = (0, a.bG)([c.A], () => !l().isEmpty(c.A.getThreadsForGuild(e.id)));
  return t && r ? (0, i.jsx)(o.Drp, {
    id: "active-threads",
    label: s.intl.string(s.t.TM6err),
    icon: o.oyn,
    action: () => {
      (0, o.mMO)(async () => {
        let {
          default: t
        } = await n.e("70215").then(n.bind(n, 400954));
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