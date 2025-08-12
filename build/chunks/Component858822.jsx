/** Chunk was on 84479 **/
/** chunk id: 858822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk777861 = require("./777861.jsx"),
  Chunk9156 = require("./9156.js"),
  Chunk621600 = require("./621600.js"),
  Chunk388032 = require("./388032.jsx");

function g(e, t) {
  let n = null == e ? true : e.id,
    {
      muted: r,
      muteConfig: g
    } = (0, a.cj)([d.ZP], () => ({
      muted: null != n ? d.ZP.isMuted(n) : true,
      muteConfig: null != n ? d.ZP.getMuteConfig(n) : true
    }), [n]),
    h = (0, u.U)(g);
  return null == n ? null : r ? (0, i.jsx)(l.sNh, {
    id: "unmute-guild",
    label: p.intl.string(p.t.De0BTE),
    subtext: h,
    action: () => c.Z.updateGuildNotificationSettings(n, {
      muted: false
    }, f.ZB.Unmuted)
  }) : (0, i.jsx)(l.sNh, {
    id: "mute-guild",
    label: p.intl.string(p.t.vRzp7O),
    action: () => c.Z.updateGuildNotificationSettings(n, {
      muted: true
    }, f.ZB.Muted),
    children: (0, s.k)().map(e => {
      let {
        value: r,
        label: a
      } = e;
      return (0, i.jsx)(l.sNh, {
        id: "".concat(r),
        label: a,
        action: () => (function(e) {
          if (null == n) return;
          let i = e > 0 ? o()().add(e, "second").toISOString() : null;
          c.Z.updateGuildNotificationSettings(n, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, f.ZB.Muted, t)
        })(r)
      }, r)
    })
  })
}