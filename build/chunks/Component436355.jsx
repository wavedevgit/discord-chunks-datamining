/** Chunk was on 73726 **/
/** chunk id: 436355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk946273 = require("./946273.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk43617 = require("./43617.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    channel: t,
    user: p,
    guild: f
  } = e, h = (0, i.e7)([s.Z], () => null != p && null != f && (0, a.nX)(p, f, [s.Z])), m = (0, i.e7)([o.ZP], () => null == p || null == o.ZP.getMember(t.guild_id, p.id));
  if (!h) return null;
  let g = m ? d.intl.string(u.default.Ux67nW) : d.intl.string(u.default["snp/lJ"]),
    b = "kick-user-".concat(null == p ? true : p.id);
  return (0, r.jsx)(c.Z, {
    text: g,
    icon: l.I9k,
    onClick: () => {
      null != p && (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("46801").then(n.bind(n, 854360));
        return n => {
          var i, l;
          return (0, r.jsx)(e, (i = function(e) {
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
          }({}, n), l = l = {
            guildId: t.guild_id,
            user: p,
            modReportId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    },
    disabled: m
  }, b)
}