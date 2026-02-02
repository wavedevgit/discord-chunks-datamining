/** Chunk was on 19418 **/
/** chunk id: 226958, original params: e,n,t (module,exports,require) **/
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
  let n = (0, d.H_)(e),
    r = (0, a.bG)([o.A], () => !l().isEmpty(o.A.getThreadsForGuild(e.id)));
  return n && r ? (0, i.jsx)(c.Drp, {
    id: "active-threads",
    label: s.intl.string(s.t.TM6err),
    icon: c.oyn,
    leadingAccessory: {
      type: "icon",
      icon: c.oyn
    },
    action: () => {
      (0, c.mMO)(async () => {
        let {
          default: n
        } = await t.e("70215").then(t.bind(t, 400954));
        return t => (0, i.jsx)(n, function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              i = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), i.forEach(function(n) {
              var i;
              i = t[n], n in e ? Object.defineProperty(e, n, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[n] = i
            })
          }
          return e
        }({
          guildId: e.id
        }, t))
      })
    }
  }) : null
}