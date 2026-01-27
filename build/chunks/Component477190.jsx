/** Chunk was on 75149 **/
/** chunk id: 477190, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function s(e, t) {
  let s = arguments.length > 2 && true !== arguments[2] ? arguments[2] : e.type,
    u = (0, i.bG)([a.A], () => a.A.can(c.xBc.MANAGE_CHANNELS, e), [e]);
  if (__OVERLAY__ || !u) return null;
  let d = () => {
    (0, l.mMO)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("72271"), n.e("64233"), n.e("29592")]).then(n.bind(n, 409200));
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
          channelType: s,
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
  switch (s) {
    case c.rbe.GUILD_TEXT:
      return (0, r.jsx)(l.Drp, {
        id: "create-text-channel",
        label: o.intl.string(o.t.HHkTJP),
        action: d
      });
    case c.rbe.GUILD_VOICE:
      return (0, r.jsx)(l.Drp, {
        id: "create-voice-channel",
        label: o.intl.string(o.t.AlbZaI),
        action: d
      });
    default:
      return null
  }
}