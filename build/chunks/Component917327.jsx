/** Chunk was on 83331 **/
/** chunk id: 917327, original params: n,t,e (module,exports,require) **/
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

function g(n, t) {
  let g = (0, l.e7)([d.Z], () => d.Z.can(Z.Plq.MANAGE_CHANNELS, t)),
    f = (0, c.ZP)(n),
    v = (0, o.W)(n),
    j = (0, l.e7)([u.Z], () => u.Z.getChannelStatus(n)),
    b = null != j && j.length > 0;
  return n.isGuildVoice() && (g || f) ? !v && g && b ? (0, i.jsx)(r.sNh, {
    id: "clear-status",
    label: h.intl.string(h.t["22CYiZ"]),
    action: () => {
      a.ZP.updateVoiceChannelStatus(n.id, "")
    }
  }) : v && f ? (0, i.jsx)(r.sNh, {
    id: "set-status",
    label: h.intl.string(h.t.Mgpxiw),
    action: () => {
      (0, r.ZDy)(async () => {
        let {
          default: t
        } = await Promise.resolve().then(e.bind(e, 339340));
        return e => (0, i.jsx)(t, function(n) {
          for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(e);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = e[t], t in n ? Object.defineProperty(n, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : n[t] = i
            })
          }
          return n
        }({
          channel: n
        }, e))
      }, {
        modalKey: s.a
      })
    }
  }) : null : null
}