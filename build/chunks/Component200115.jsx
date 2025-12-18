/** Chunk was on 15076 **/
/** chunk id: 200115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk399606 = require("./399606.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk430824 = require("./430824.js"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk423589 = require("./423589.js"),
  Chunk969943 = require("./969943.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  var t, n;
  let {
    guildId: s
  } = e, p = (0, r.e7)([c.Z], () => c.Z.getGuild(s)), j = (0, r.e7)([u.ZP], () => u.ZP.isMuted(s)), f = (0, r.e7)([u.ZP], () => u.ZP.getMuteConfig(s));
  return null == p ? null : (0, i.jsxs)(o.C3N, {
    children: [(0, i.jsx)(o.rsf, {
      label: x.intl.format(x.t["J+7D9E"], {
        name: p.name
      }),
      description: x.intl.string(x.t.IngcUv),
      checked: j,
      onChange: e => {
        d.Z.updateGuildNotificationSettings(s, {
          muted: e
        }, h.UE.muted(e))
      }
    }), j && (0, i.jsx)(a.y6, {
      label: x.intl.string(x.t.Ztu2Yo),
      description: null == (n = f) || null == n.end_time ? null : x.intl.formatToPlainString(x.t.j7h4AJ, {
        endTime: new Date(n.end_time).toLocaleString(x.intl.currentLocale, {
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        })
      }),
      onChange: e => {
        let t = e > 0 ? l()().add(e, "second").toISOString() : null;
        d.Z.updateGuildNotificationSettings(s, {
          mute_config: {
            selected_time_window: e,
            end_time: t
          },
          muted: true
        }, h.ZB.Muted)
      },
      options: (0, g.W9)(),
      value: null != (t = null == f ? true : f.selected_time_window) ? t : m.Oe.ALWAYS
    })]
  })
}