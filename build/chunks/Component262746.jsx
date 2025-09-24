/** Chunk was on 88806 **/
/** chunk id: 262746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493773 = require("./493773.js"),
  Chunk946273 = require("./946273.js"),
  Chunk496675 = require("./496675.js"),
  Chunk993706 = require("./993706.js"),
  Chunk796263 = require("./796263.jsx"),
  Chunk764295 = require("./764295.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  let {
    channel: t,
    user: g,
    guild: b
  } = e, y = (0, l.e7)([p.Z], () => null != g && p.Z.isUserBanned(g.id)), C = null != g && null == y, [_, v] = i.useState(C), x = (0, l.e7)([d.Z], () => null != g && null != b && (0, u.lD)(g, b, [d.Z]));
  if ((0, c.ZP)(() => {
      C && s.Z.searchGuildBans(t.guild_id, true, [null == g ? true : g.id]).finally(() => v(false))
    }), !x) return null;
  let O = true === y ? m.intl.string(f.default.dpfwQ0) : m.intl.string(f.default.ASv23d),
    j = "ban-user-".concat(null == g ? true : g.id);
  return (0, r.jsx)(h.Z, {
    text: O,
    icon: o.pgN,
    onClick: () => {
      null != g && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("9125").then(n.bind(n, 98746));
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
            user: g,
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
    disabled: true === y || _,
    submitting: _,
    color: a.zx.Colors.RED
  }, j)
}