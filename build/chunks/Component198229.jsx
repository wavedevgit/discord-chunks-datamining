/** Chunk was on 93169 **/
/** chunk id: 198229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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

function _(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : b.x.DEFAULT,
    n = (0, r.bG)([A.default], () => {
      var t;
      return (null == (t = A.default.getCurrentUser()) ? true : t.id) === e
    }),
    _ = (0, r.bG)([o.A], () => o.A.isLocalSoundboardMuted(e)),
    {
      muted: m,
      deafened: h = false,
      localVideoDisabled: y = false,
      localVideoAutoDisabled: j = false
    } = (0, r.cf)([d.A], () => n ? {
      muted: d.A.isSelfMute(t),
      deafened: d.A.isSelfDeaf(t)
    } : {
      muted: d.A.isLocalMute(e, t),
      localVideoDisabled: d.A.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: d.A.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    E = d.A.supports(b.O5.DISABLE_VIDEO) && !n ? (0, i.jsx)(l.sLh, {
      id: "disable-video",
      label: p.intl.string(p.t["4MMsWF"]),
      action: () => {
        if (j) return void a.A.show({
          title: p.intl.string(p.t.m2Hyj0),
          body: p.intl.string(p.t.EhaK6B),
          confirmText: p.intl.string(p.t.ND1my3),
          cancelText: p.intl.string(p.t.jEqEhy),
          onConfirm: () => s.A.setDisableLocalVideo(e, g.bb8.MANUAL_ENABLED)
        });
        let n = y ? g.bb8.MANUAL_ENABLED : g.bb8.DISABLED;
        s.A.setDisableLocalVideo(e, n, t)
      },
      checked: y,
      subtext: j ? (0, i.jsxs)("div", {
        className: v.Y,
        children: [(0, i.jsx)(l.EpV, {
          size: "custom",
          color: "currentColor",
          width: 12,
          className: v.p
        }), p.intl.string(p.t.m2Hyj0)]
      }) : null
    }, "disable-video") : null,
    D = n ? null : (0, i.jsx)(l.sLh, {
      id: "soundboard-sound-mute",
      label: p.intl.string(p.t.LxhEuG),
      action: () => {
        let n = u.A.getRTCConnection();
        f.default.track(g.HAw.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.A.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? true : n.getMediaSessionId(),
          parent_media_session_id: null == n ? true : n.parentMediaSessionId,
          mute_soundboard: !_
        }), s.A.toggleLocalSoundboardMute(e, t)
      },
      checked: _
    }, "soundboard-sound-mute");
  return n ? [(0, i.jsx)(l.sLh, {
    id: "mute",
    label: p.intl.string(p.t.sWmtI6),
    action: () => s.A.toggleSelfMute({
      context: t,
      location: "User Context Menu"
    }),
    checked: m
  }, "self-mute"), (0, i.jsx)(l.sLh, {
    id: "deafen",
    label: p.intl.string(p.t.wjcRFX),
    action: () => s.A.toggleSelfDeaf({
      context: t,
      location: "User Context Menu"
    }),
    checked: h
  }, "self-deafen"), E] : [(0, i.jsx)(l.sLh, {
    id: "mute",
    label: p.intl.string(p.t.sWmtI6),
    action: () => s.A.toggleLocalMute(e, t),
    checked: m
  }, "self-mute"), D, E]
}