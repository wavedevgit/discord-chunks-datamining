/** Chunk was on 99534 **/
/** chunk id: 214906, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk777861 = require("./777861.jsx"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk388032 = require("./388032.jsx");

function Z(t) {
  let [n, i, l] = (0, a.Wu)([s.Z], () => [s.Z.isMuted(t.id), s.Z.getMuteConfig(t.id), s.Z.hasJoined(t.id)]), Z = (0, o.U)(i);

  function v(n) {
    u.Z.setNotificationSettings(t, {
      muted: n
    })
  }
  return l ? n ? (0, e.jsx)(d.sNh, {
    id: "unmute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["0JQfsL"]) : h.intl.string(h.t["Cq/TzM"]),
    subtext: Z,
    action: () => v(false)
  }) : (0, e.jsx)(d.sNh, {
    id: "mute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["nP+YkZ"]) : h.intl.string(h.t.bUUd8v),
    action: () => v(true),
    children: (0, c.k)().map(n => {
      let {
        value: i,
        label: l
      } = n;
      return (0, e.jsx)(d.sNh, {
        id: "".concat(i),
        label: l,
        action: () => (function(n) {
          let i = n > 0 ? r()().add(n, "second").toISOString() : null;
          u.Z.setNotificationSettings(t, {
            muted: true,
            mute_config: {
              selected_time_window: n,
              end_time: i
            }
          })
        })(i)
      }, i)
    })
  }) : (0, e.jsx)(d.sNh, {
    id: "mute-disabled",
    label: t.isForumPost() ? h.intl.string(h.t["nP+YkZ"]) : h.intl.string(h.t.bUUd8v),
    disabled: true
  })
}