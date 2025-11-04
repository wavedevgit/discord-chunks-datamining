/** Chunk was on 84259 **/
/** chunk id: 597409, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk496675 = require("./496675.js"),
  Chunk572004 = require("./572004.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let b = function(e) {
  var t;
  let {
    guild: b,
    user: p,
    onSelect: d
  } = e, y = null != (t = null == b ? true : b.id) ? t : s.lds, O = (0, c.e7)([a.Z], () => null != b && a.Z.canManageUser(s.Plq.BAN_MEMBERS, p, b), [b, p]);
  return (0, n.jsx)(o.v2r, {
    navId: "member-application-context-menu",
    onClose: i.Zy,
    "aria-label": u.intl.string(u.t.liqwPJ),
    onSelect: d,
    children: (0, n.jsxs)(o.kSQ, {
      children: [O && (0, n.jsx)(o.sNh, {
        id: "ban",
        label: u.intl.string(u.t["I+Cbum"]),
        icon: o.pgN,
        color: "danger",
        action: () => (0, o.ZDy)(async () => {
          let {
            default: e
          } = await r.e("18910").then(r.bind(r, 497880));
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
              guildId: y,
              user: p
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
      }, "ban"), (0, n.jsx)(o.sNh, {
        id: "copyUserId",
        label: "Copy User ID",
        icon: o.VuL,
        action: () => (0, l.JG)(p.id)
      }, "copyUserId")]
    })
  })
}