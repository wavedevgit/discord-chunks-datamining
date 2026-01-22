/** Chunk was on 64992 **/
/** chunk id: 931413, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk71393 = require("./71393.js"),
  Chunk543465 = require("./543465.js"),
  Chunk477427 = require("./477427.js"),
  Chunk769591 = require("./769591.js"),
  Chunk815968 = require("./815968.js"),
  Chunk985018 = require("./985018.jsx");

function x(e) {
  var t, n;
  let {
    guildId: l
  } = e, x = (0, r.bG)([o.A], () => o.A.getGuild(l)), j = (0, r.bG)([c.Ay], () => c.Ay.isMuted(l)), p = (0, r.bG)([c.Ay], () => c.Ay.getMuteConfig(l));
  return null == x ? null : (0, i.jsxs)(a.nVY, {
    children: [(0, i.jsx)(a.dOG, {
      label: m.intl.format(m.t["J+7D9E"], {
        name: x.name
      }),
      description: m.intl.string(m.t.IngcUv),
      checked: j,
      onChange: e => {
        d.A.updateGuildNotificationSettings(l, {
          muted: e
        }, u.G_.muted(e))
      }
    }), j && (0, i.jsx)(a.l6P, {
      label: m.intl.string(m.t.Ztu2Yo),
      description: null == (n = p) || null == n.end_time ? null : m.intl.formatToPlainString(m.t.j7h4AJ, {
        endTime: new Date(n.end_time).toLocaleString(m.intl.currentLocale, {
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit"
        })
      }),
      onSelectionChange: e => {
        let t = e > 0 ? s()().add(e, "second").toISOString() : null;
        d.A.updateGuildNotificationSettings(l, {
          mute_config: {
            selected_time_window: e,
            end_time: t
          },
          muted: true
        }, u.fd.Muted)
      },
      options: (0, g.b8)(),
      value: null != (t = null == p ? true : p.selected_time_window) ? t : h.Xx.ALWAYS,
      selectionMode: "single",
      fullWidth: true
    })]
  })
}