/** Chunk was on 89250 **/
/** chunk id: 214906, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk777861 = require("./777861.jsx"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk776568 = require("./776568.jsx"),
  Chunk388032 = require("./388032.jsx");

function f(t) {
  let [n, e, a] = (0, r.Wu)([d.Z], () => [d.Z.isMuted(t.id), d.Z.getMuteConfig(t.id), d.Z.hasJoined(t.id)]), f = (0, o.U)(e);

  function g(n) {
    u.Z.setNotificationSettings(t, {
      muted: n
    })
  }
  return a ? n ? (0, i.jsx)(s.sNh, {
    id: "unmute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["0JQfsP"]) : h.intl.string(h.t["Cq/TzF"]),
    subtext: f,
    action: () => g(false)
  }) : (0, i.jsx)(s.sNh, {
    id: "mute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
    action: () => g(true),
    children: (0, c.k)().map(n => {
      let {
        value: e,
        label: a
      } = n;
      return (0, i.jsx)(s.sNh, {
        id: "".concat(e),
        label: a,
        action: () => (function(n) {
          let e = n > 0 ? l()().add(n, "second").toISOString() : null;
          u.Z.setNotificationSettings(t, {
            muted: true,
            mute_config: {
              selected_time_window: n,
              end_time: e
            }
          })
        })(e)
      }, e)
    })
  }) : (0, i.jsx)(s.sNh, {
    id: "mute-disabled",
    label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
    disabled: true
  })
}