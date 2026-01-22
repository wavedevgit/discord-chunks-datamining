/** Chunk was on 77759 **/
/** chunk id: 884790, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
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

function O(e, t) {
  let O = t === b.BRT.POPOUT,
    p = (0, o.bG)([u.A], () => u.A.getGuild(e), [e]),
    f = (0, o.bG)([l.A], () => null != p ? l.A.getGuildIncident(p.id) : null);
  return O ? null : (0, n.jsx)(c.Drp, {
    id: "nav-security-actions",
    label: s.intl.string(s.t.UgXhdn),
    action: () => {
      let t = {
        source: i.Eo.MESSAGE,
        alertType: (0, a.$5)(f)
      };
      (0, c.mMO)(async () => {
        let {
          default: o
        } = await r.e("43233").then(r.bind(r, 671576));
        return r => {
          var c, i;
          return (0, n.jsx)(o, (c = function(e) {
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
          }({}, r), i = i = {
            guildId: e,
            analyticsData: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(i, e))
          }), c))
        }
      })
    }
  })
}