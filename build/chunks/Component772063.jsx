/** Chunk was on 32660 **/
/** chunk id: 772063, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk576705 = require("./576705.js"),
  Chunk957565 = require("./957565.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let p = function(e) {
  var t;
  let {
    guild: p,
    user: u,
    onSelect: d
  } = e, O = null != (t = null == p ? true : p.id) ? t : s.dJq, y = (0, c.bG)([a.A], () => null != p && a.A.canManageUser(s.xBc.BAN_MEMBERS, u, p), [p, u]);
  return (0, n.jsx)(o.W1t, {
    navId: "member-application-context-menu",
    onClose: i.Z_,
    "aria-label": b.intl.string(b.t.liqwPJ),
    onSelect: d,
    children: (0, n.jsxs)(o.rXV, {
      children: [y && (0, n.jsx)(o.Drp, {
        id: "ban",
        label: b.intl.string(b.t["I+Cbum"]),
        icon: o.wI0,
        color: "danger",
        action: () => (0, o.mMO)(async () => {
          let {
            default: e
          } = await r.e("80123").then(r.bind(r, 333179));
          return t => {
            var r, c;
            return (0, n.jsx)(e, (r = function(e) {
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
            }({}, t), c = c = {
              guildId: O,
              user: u
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
              }
              return r
            })(Object(c)).forEach(function(e) {
              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e))
            }), r))
          }
        })
      }, "ban"), (0, n.jsx)(o.Drp, {
        id: "copyUserId",
        label: "Copy User ID",
        icon: o.L9S,
        action: () => (0, l.C)(u.id)
      }, "copyUserId")]
    })
  })
}