/** Chunk was on 83331 **/
/** chunk id: 917327, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk362721 = require("./362721.js"),
  Chunk339340 = require("./339340.jsx"),
  Chunk869768 = require("./869768.js"),
  Chunk496675 = require("./496675.js"),
  Chunk12498 = require("./12498.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t) {
  let g = (0, r.e7)([u.Z], () => u.Z.can(Z.Plq.MANAGE_CHANNELS, t)),
    h = (0, o.ZP)(e),
    b = (0, s.W)(e),
    j = (0, r.e7)([d.Z], () => d.Z.getChannelStatus(e)),
    v = null != j && j.length > 0;
  return e.isGuildVoice() && (g || h) ? !b && g && v ? (0, i.jsx)(l.sNh, {
    id: "clear-status",
    label: f.intl.string(f.t["22CYiZ"]),
    action: () => {
      a.ZP.updateVoiceChannelStatus(e.id, "")
    }
  }) : b && h ? (0, i.jsx)(l.sNh, {
    id: "set-status",
    label: f.intl.string(f.t.Mgpxiw),
    action: () => {
      (0, l.ZDy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(n.bind(n, 339340));
        return n => (0, i.jsx)(t, function(e) {
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
        }({
          channel: e
        }, n))
      }, {
        modalKey: c.a
      })
    }
  }) : null : null
}