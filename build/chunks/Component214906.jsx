/** Chunk was on 92091 **/
/** chunk id: 214906, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  let [n, i, l] = (0, a.Wu)([o.Z], () => [o.Z.isMuted(t.id), o.Z.getMuteConfig(t.id), o.Z.hasJoined(t.id)]), Z = (0, d.U)(i);

  function g(n) {
    u.Z.setNotificationSettings(t, {
      muted: n
    })
  }
  return l ? n ? (0, e.jsx)(s.sNh, {
    id: "unmute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["0JQfsP"]) : h.intl.string(h.t["Cq/TzF"]),
    subtext: Z,
    action: () => g(false)
  }) : (0, e.jsx)(s.sNh, {
    id: "mute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
    action: () => g(true),
    children: (0, c.k)().map(n => {
      let {
        value: i,
        label: l
      } = n;
      return (0, e.jsx)(s.sNh, {
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
  }) : (0, e.jsx)(s.sNh, {
    id: "mute-disabled",
    label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
    disabled: true
  })
}