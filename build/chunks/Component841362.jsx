/** Chunk was on 61344 **/
/** chunk id: 841362, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    channel: t,
    user: h,
    guild: p
  } = e, f = (0, r.bG)([o.A], () => null != h && null != p && (0, a.KX)(h, p, [o.A])), m = (0, r.bG)([s.Ay], () => null == h || null == s.Ay.getMember(t.guild_id, h.id));
  if (!f) return null;
  let g = m ? d.intl.string(u.default.Ux67nW) : d.intl.string(u.default["snp/lJ"]),
    A = "kick-user-".concat(null == h ? true : h.id);
  return (0, l.jsx)(c.A, {
    text: g,
    icon: i.Nxw,
    onClick: () => {
      null != h && (0, i.mMO)(async () => {
        let {
          default: e
        } = await n.e("17862").then(n.bind(n, 324785));
        return n => {
          var r, i;
          return (0, l.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, n), i = i = {
            guildId: t.guild_id,
            user: h,
            modReportId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      })
    },
    disabled: m
  }, A)
}