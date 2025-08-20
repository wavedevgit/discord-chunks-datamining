/** Chunk was on 91499 **/
/** chunk id: 858822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk777861 = require("./777861.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: l,
      muteConfig: _
    } = (0, r.cj)([s.ZP], () => ({
      muted: null != n ? s.ZP.isMuted(n) : true,
      muteConfig: null != n ? s.ZP.getMuteConfig(n) : true
    }), [n]),
    g = (0, d.U)(_);
  return null == n ? null : l ? (0, i.jsx)(o.sNh, {
    id: "unmute-guild",
    label: b.intl.string(b.t.De0BTE),
    subtext: g,
    action: () => c.Z.updateGuildNotificationSettings(n, {
      muted: false
    }, f.ZB.Unmuted)
  }) : (0, i.jsx)(o.sNh, {
    id: "mute-guild",
    label: b.intl.string(b.t.vRzp7O),
    action: () => c.Z.updateGuildNotificationSettings(n, {
      muted: true
    }, f.ZB.Muted),
    children: (0, u.k)().map(e => {
      let {
        value: l,
        label: r
      } = e;
      return (0, i.jsx)(o.sNh, {
        id: "".concat(l),
        label: r,
        action: () => (function(e) {
          if (null == n) return;
          let i = e > 0 ? a()().add(e, "second").toISOString() : null;
          c.Z.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, f.ZB.Muted, t)
        })(l)
      }, l)
    })
  })
}