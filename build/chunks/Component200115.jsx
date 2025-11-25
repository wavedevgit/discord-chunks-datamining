/** Chunk was on 15076 **/
/** chunk id: 200115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk430824 = require("./430824.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk423589 = require("./423589.js"),
  Chunk969943 = require("./969943.js"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
  var t, n;
  let {
    guildId: s
  } = e, x = (0, r.e7)([d.Z], () => d.Z.getGuild(s)), p = (0, r.e7)([c.ZP], () => c.ZP.isMuted(s)), j = (0, r.e7)([c.ZP], () => c.ZP.getMuteConfig(s));
  return null == x ? null : (0, i.jsxs)(a.C3N, {
    children: [(0, i.jsx)(a.rsf, {
      label: m.intl.format(m.t["J+7D9E"], {
        name: x.name
      }),
      description: m.intl.string(m.t.IngcUv),
      checked: p,
      onChange: e => {
        o.Z.updateGuildNotificationSettings(s, {
          muted: e
        }, u.UE.muted(e))
      }
    }), p && (0, i.jsx)(a.q4e, {
      label: m.intl.string(m.t.Ztu2Yo),
      description: null == (n = j) || null == n.end_time ? null : m.intl.formatToPlainString(m.t.j7h4AJ, {
        endTime: new Date(n.end_time).toLocaleString(m.intl.currentLocale, {
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        })
      }),
      onChange: e => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        o.Z.updateGuildNotificationSettings(s, {
          mute_config: {
            selected_time_window: e,
            end_time: t
          },
          muted: true
        }, u.ZB.Muted)
      },
      options: (0, h.W9)(),
      value: null != (t = null == j ? true : j.selected_time_window) ? t : g.Oe.ALWAYS
    })]
  })
}