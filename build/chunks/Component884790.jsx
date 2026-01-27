/** Chunk was on 77759 **/
/** chunk id: 884790, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk834409 = require("./834409.js"),
  Chunk903093 = require("./903093.js"),
  Chunk610136 = require("./610136.js"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e, t) {
  let b = t === d.BRT.POPOUT,
    f = (0, i.bG)([c.A], () => c.A.getGuild(e), [e]),
    O = (0, i.bG)([o.A], () => null != f ? o.A.getGuildIncident(f.id) : null);
  return b ? null : (0, r.jsx)(l.Drp, {
    id: "nav-security-actions",
    label: s.intl.string(s.t.UgXhdn),
    action: () => {
      let t = {
        source: a.Eo.MESSAGE,
        alertType: (0, u.$5)(O)
      };
      (0, l.mMO)(async () => {
        let {
          default: i
        } = await n.e("65614").then(n.bind(n, 671576));
        return n => {
          var l, a;
          return (0, r.jsx)(i, (l = function(e) {
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
          }({}, n), a = a = {
            guildId: e,
            analyticsData: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
          }), l))
        }
      })
    }
  })
}