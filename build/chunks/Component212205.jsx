/** Chunk was on 56826 **/
/** chunk id: 212205, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk914010 = require("./914010.js"),
  Chunk362658 = require("./362658.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let n = (0, r.e7)([a.Z], () => a.Z.getGuildId()),
    c = e.type === o.d4z.GUILD_CATEGORY,
    {
      isFavoritesPerk: u
    } = (0, s.z)("useChannelFavoriteSetNickname");
  return __OVERLAY__ || n !== o.I_8 ? null : (0, i.jsx)(l.sNh, {
    id: "set-channel-nickname",
    label: u && c ? d.intl.string(d.t.xXYKiP) : d.intl.string(d.t.dilOF6),
    action: function() {
      (0, l.ZDy)(async () => {
        let {
          default: n
        } = await t.e("46161").then(t.bind(t, 238716));
        return t => {
          var r, l;
          return (0, i.jsx)(n, (r = function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), i.forEach(function(n) {
                var i;
                i = t[n], n in e ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = i
              })
            }
            return e
          }({}, t), l = l = {
            channelId: e.id,
            heading: u && c ? d.intl.string(d.t.xXYKiP) : d.intl.string(d.t.dilOF6),
            formTitle: u && c ? d.intl.string(d.t.OCAkGP) : d.intl.string(d.t["621LJD"]),
            allowReset: !(u && c)
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              t.push.apply(t, i)
            }
            return t
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))
        }
      })
    }
  })
}