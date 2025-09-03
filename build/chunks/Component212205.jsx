/** Chunk was on 56826 **/
/** chunk id: 212205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk914010 = require("./914010.js"),
  Chunk362658 = require("./362658.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
    u = e.type === s.d4z.GUILD_CATEGORY,
    {
      isFavoritesPerk: d
    } = (0, o.z)("useChannelFavoriteSetNickname");
  return __OVERLAY__ || t !== s.I_8 ? null : (0, r.jsx)(l.sNh, {
    id: "set-channel-nickname",
    label: d && u ? c.intl.string(c.t.xXYKiI) : c.intl.string(c.t.dilOFx),
    action: function() {
      (0, l.ZDy)(async () => {
        let {
          default: t
        } = await n.e("46161").then(n.bind(n, 238716));
        return n => {
          var i, l;
          return (0, r.jsx)(t, (i = function(e) {
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
            channelId: e.id,
            heading: d && u ? c.intl.string(c.t.xXYKiI) : c.intl.string(c.t.dilOFx),
            formTitle: d && u ? c.intl.string(c.t.OCAkGB) : c.intl.string(c.t["621LJC"]),
            allowReset: !(d && u)
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
    }
  })
}