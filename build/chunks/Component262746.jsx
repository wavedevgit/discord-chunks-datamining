/** Chunk was on 40184 **/
/** chunk id: 262746, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    channel: t,
    user: g,
    guild: b
  } = e, C = (0, l.e7)([p.Z], () => null != g && p.Z.isUserBanned(g.id)), y = null != g && null == C, [v, x] = r.useState(y), O = (0, l.e7)([d.Z], () => null != g && null != b && (0, u.lD)(g, b, [d.Z]));
  if ((0, c.ZP)(() => {
      y && s.Z.searchGuildBans(t.guild_id, true, [null == g ? true : g.id]).finally(() => x(false))
    }), !O) return null;
  let E = true === C ? m.intl.string(h.default.dpfwQ1) : m.intl.string(h.default.ASv23S),
    j = "ban-user-".concat(null == g ? true : g.id);
  return (0, i.jsx)(f.Z, {
    text: E,
    icon: o.pgN,
    onClick: () => {
      null != g && (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("48192").then(n.bind(n, 497880));
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
            user: g,
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
    disabled: true === C || v,
    submitting: v,
    color: a.zx.Colors.RED
  }, j)
}