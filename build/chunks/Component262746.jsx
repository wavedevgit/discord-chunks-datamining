/** Chunk was on 81985 **/
/** chunk id: 262746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk946273 = require("./946273.js"),
  Chunk496675 = require("./496675.js"),
  Chunk993706 = require("./993706.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk792389 = require("./792389.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    channel: t,
    user: m,
    guild: b
  } = e, y = (0, l.e7)([p.Z], () => null != m && p.Z.isUserBanned(m.id)), v = null != m && null == y, [O, j] = i.useState(v), x = (0, l.e7)([d.Z], () => null != m && null != b && (0, u.lD)(m, b, [d.Z]));
  if ((0, c.ZP)(() => {
      v && s.Z.searchGuildBans(t.guild_id, true, [null == m ? true : m.id]).finally(() => j(false))
    }), !x) return null;
  let C = true === y ? g.intl.string(h.default.dpfwQ1) : g.intl.string(h.default.ASv23S),
    E = "ban-user-".concat(null == m ? true : m.id);
  return (0, r.jsx)(f.Z, {
    text: C,
    icon: o.pgN,
    onClick: () => {
      null != m && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("48192").then(n.bind(n, 497880));
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
            user: m,
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
    disabled: true === y || O,
    submitting: O,
    color: a.zx.Colors.RED
  }, E)
}