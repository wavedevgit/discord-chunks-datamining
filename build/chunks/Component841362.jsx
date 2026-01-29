/** Chunk was on 1113 **/
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
  } = e, g = (0, l.bG)([o.A], () => null != h && null != p && (0, s.KX)(h, p, [o.A])), f = (0, l.bG)([a.Ay], () => null == h || null == a.Ay.getMember(t.guild_id, h.id));
  if (!g) return null;
  let m = f ? d.intl.string(u.default.Ux67nW) : d.intl.string(u.default["snp/lJ"]),
    b = "kick-user-".concat(null == h ? true : h.id);
  return (0, r.jsx)(c.A, {
    text: m,
    icon: i.Nxw,
    onClick: () => {
      null != h && (0, i.mMO)(async () => {
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
            user: h,
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
    disabled: f
  }, b)
}