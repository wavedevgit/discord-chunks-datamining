/** Chunk was on 88974 **/
/** chunk id: 57907, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk392567 = require("./392567.jsx"),
  Chunk152007 = require("./152007.js"),
  Chunk867455 = require("./867455.js"),
  Chunk995102 = require("./995102.jsx"),
  Chunk985018 = require("./985018.jsx");

function A(t) {
  let [n, i, r] = (0, a.yK)([s.A], () => [s.A.isMuted(t.id), s.A.getMuteConfig(t.id), s.A.hasJoined(t.id)]), A = (0, o.M)(i);

  function g(n) {
    u.A.setNotificationSettings(t, {
      muted: n
    })
  }
  return r ? n ? (0, e.jsx)(d.Drp, {
    id: "unmute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["0JQfsP"]) : h.intl.string(h.t["Cq/TzF"]),
    subtext: A,
    action: () => g(false)
  }) : (0, e.jsx)(d.Drp, {
    id: "mute-channel",
    label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
    action: () => g(true),
    children: (0, c.gv)().map(n => {
      let {
        value: i,
        label: r
      } = n;
      return (0, e.jsx)(d.Drp, {
        id: "".concat(i),
        label: r,
        action: () => {
          let n;
          return n = i > 0 ? l()().add(i, "second").toISOString() : null, void u.A.setNotificationSettings(t, {
            muted: true,
            mute_config: {
              selected_time_window: i,
              end_time: n
            }
          })
        }
      }, i)
    })
  }) : (0, e.jsx)(d.Drp, {
    id: "mute-disabled",
    label: t.isForumPost() ? h.intl.string(h.t["nP+Ykd"]) : h.intl.string(h.t.bUUd8q),
    disabled: true
  })
}