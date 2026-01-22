/** Chunk was on 97492 **/
/** chunk id: 841362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk351001 = require("./351001.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk102817 = require("./102817.jsx"),
  Chunk641131 = require("./641131.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    channel: t,
    user: f,
    guild: p
  } = e, h = (0, l.bG)([o.A], () => null != f && null != p && (0, a.KX)(f, p, [o.A])), b = (0, l.bG)([s.Ay], () => null == f || null == s.Ay.getMember(t.guild_id, f.id));
  if (!h) return null;
  let g = b ? d.intl.string(u.default.Ux67nW) : d.intl.string(u.default["snp/lJ"]),
    m = "kick-user-".concat(null == f ? true : f.id);
  return (0, r.jsx)(c.A, {
    text: g,
    icon: i.Nxw,
    onClick: () => {
      null != f && (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("17862").then(n.bind(n, 324785));
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
            guildId: t.guild_id,
            user: f,
            modReportId: t.id
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
      })
    },
    disabled: b
  }, m)
}