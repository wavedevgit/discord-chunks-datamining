/** Chunk was on 91042 **/
/** chunk id: 198229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk157559 = require("./157559.js"),
  Chunk827343 = require("./827343.js"),
  Chunk209932 = require("./209932.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk946818 = require("./946818.js");

function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : f.x.DEFAULT,
    n = (0, i.bG)([A.default], () => {
      var t;
      return (null == (t = A.default.getCurrentUser()) ? true : t.id) === e
    }),
    O = (0, i.bG)([s.A], () => s.A.isLocalSoundboardMuted(e)),
    {
      muted: y,
      deafened: v = false,
      localVideoDisabled: E = false,
      localVideoAutoDisabled: h = false
    } = (0, i.cf)([d.A], () => n ? {
      muted: d.A.isSelfMute(t),
      deafened: d.A.isSelfDeaf(t)
    } : {
      muted: d.A.isLocalMute(e, t),
      localVideoDisabled: d.A.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: d.A.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    j = d.A.supports(f.O5.DISABLE_VIDEO) && !n ? (0, l.jsx)(r.sLh, {
      id: "disable-video",
      label: m.intl.string(m.t["4MMsWF"]),
      action: () => {
        if (h) return void a.A.show({
          title: m.intl.string(m.t.m2Hyj0),
          body: m.intl.string(m.t.EhaK6B),
          confirmText: m.intl.string(m.t.ND1my3),
          cancelText: m.intl.string(m.t.jEqEhy),
          onConfirm: () => o.A.setDisableLocalVideo(e, g.bb8.MANUAL_ENABLED)
        });
        let n = E ? g.bb8.MANUAL_ENABLED : g.bb8.DISABLED;
        o.A.setDisableLocalVideo(e, n, t)
      },
      checked: E,
      subtext: h ? (0, l.jsxs)("div", {
        className: p.Y,
        children: [(0, l.jsx)(r.EpV, {
          size: "custom",
          color: "currentColor",
          width: 12,
          className: p.p
        }), m.intl.string(m.t.m2Hyj0)]
      }) : null
    }, "disable-video") : null,
    x = n ? null : (0, l.jsx)(r.sLh, {
      id: "soundboard-sound-mute",
      label: m.intl.string(m.t.LxhEuG),
      action: () => {
        let n = u.A.getRTCConnection();
        b.default.track(g.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.A.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? true : n.getMediaSessionId(),
          parent_media_session_id: null == n ? true : n.parentMediaSessionId,
          mute_soundboard: !O
        }), o.A.toggleLocalSoundboardMute(e, t)
      },
      checked: O
    }, "soundboard-sound-mute");
  return n ? [(0, l.jsx)(r.sLh, {
    id: "mute",
    label: m.intl.string(m.t.sWmtI6),
    action: () => o.A.toggleSelfMute({
      context: t,
      location: "User Context Menu"
    }),
    checked: y
  }, "self-mute"), (0, l.jsx)(r.sLh, {
    id: "deafen",
    label: m.intl.string(m.t.wjcRFX),
    action: () => o.A.toggleSelfDeaf({
      context: t,
      location: "User Context Menu"
    }),
    checked: v
  }, "self-deafen"), j] : [(0, l.jsx)(r.sLh, {
    id: "mute",
    label: m.intl.string(m.t.sWmtI6),
    action: () => o.A.toggleLocalMute(e, t),
    checked: y
  }, "self-mute"), x, j]
}