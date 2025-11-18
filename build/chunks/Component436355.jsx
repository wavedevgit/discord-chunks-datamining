/** Chunk was on 71264 **/
/** chunk id: 436355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk946273 = require("./946273.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk826688 = require("./826688.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    channel: t,
    user: p,
    guild: h
  } = e, f = (0, r.e7)([s.Z], () => null != p && null != h && (0, a.nX)(p, h, [s.Z])), m = (0, r.e7)([o.ZP], () => null == p || null == o.ZP.getMember(t.guild_id, p.id));
  if (!f) return null;
  let g = m ? d.intl.string(u.default.Ux67nW) : d.intl.string(u.default["snp/lJ"]),
    b = "kick-user-".concat(null == p ? true : p.id);
  return (0, i.jsx)(c.Z, {
    text: g,
    icon: l.I9k,
    onClick: () => {
      null != p && (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("39298").then(n.bind(n, 495494));
        return n => {
          var r, l;
          return (0, i.jsx)(e, (r = function(e) {
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
          }({}, n), l = l = {
            guildId: t.guild_id,
            user: p,
            modReportId: t.id
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))
        }
      })
    },
    disabled: m
  }, b)
}