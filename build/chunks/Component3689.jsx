/** Chunk was on 40283 **/
/** chunk id: 3689, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  let u = arguments.length > 2 && true !== arguments[2] ? arguments[2] : e.type,
    s = (0, i.e7)([c.Z], () => c.Z.can(o.Plq.MANAGE_CHANNELS, e), [e]);
  if (__OVERLAY__ || !s) return null;
  let b = () => {
    (0, l.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("33285"), n.e("29497"), n.e("75139")]).then(n.bind(n, 241865));
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
          channelType: u,
          guildId: e.guild_id,
          categoryId: e.parent_id
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
  };
  switch (u) {
    case o.d4z.GUILD_TEXT:
      return (0, r.jsx)(l.sNh, {
        id: "create-text-channel",
        label: a.intl.string(a.t.HHkTJP),
        action: b
      });
    case o.d4z.GUILD_VOICE:
      return (0, r.jsx)(l.sNh, {
        id: "create-voice-channel",
        label: a.intl.string(a.t.AlbZaI),
        action: b
      });
    default:
      return null
  }
}