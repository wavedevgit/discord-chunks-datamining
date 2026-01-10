/** Chunk was on 56826 **/
/** chunk id: 212205, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk914010 = require("./914010.js"),
  Chunk362658 = require("./362658.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let t = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
    u = e.type === s.d4z.GUILD_CATEGORY,
    {
      isFavoritesPerk: c
    } = (0, o.z)("useChannelFavoriteSetNickname");
  return __OVERLAY__ || t !== s.I_8 ? null : (0, i.jsx)(l.sNh, {
    id: "set-channel-nickname",
    label: c && u ? d.intl.string(d.t.xXYKiP) : d.intl.string(d.t.dilOF6),
    action: function() {
      (0, l.ZDy)(async () => {
        let {
          default: t
        } = await n.e("46161").then(n.bind(n, 238716));
        return n => {
          var r, l;
          return (0, i.jsx)(t, (r = function(e) {
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
            channelId: e.id,
            heading: c && u ? d.intl.string(d.t.xXYKiP) : d.intl.string(d.t.dilOF6),
            formTitle: c && u ? d.intl.string(d.t.OCAkGP) : d.intl.string(d.t["621LJD"]),
            allowReset: !(c && u)
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
    }
  })
}