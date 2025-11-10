/** Chunk was on 80125 **/
/** chunk id: 991307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk846027 = require("./846027.js"),
  Chunk763296 = require("./763296.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk914010 = require("./914010.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk663213 = require("./663213.js");

function v(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : j.Yn.DEFAULT,
    n = (0, r.e7)([f.default], () => {
      var t;
      return (null == (t = f.default.getCurrentUser()) ? true : t.id) === e
    }),
    v = (0, r.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
    {
      muted: O,
      deafened: Z = false,
      localVideoDisabled: y = false,
      localVideoAutoDisabled: h = false
    } = (0, r.cj)([a.Z], () => n ? {
      muted: a.Z.isSelfMute(t),
      deafened: a.Z.isSelfDeaf(t)
    } : {
      muted: a.Z.isLocalMute(e, t),
      localVideoDisabled: a.Z.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: a.Z.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    x = a.Z.supports(j.AN.DISABLE_VIDEO) && !n ? (0, i.jsx)(l.S89, {
      id: "disable-video",
      label: m.intl.string(m.t["4MMsWF"]),
      action: () => {
        if (h) return void o.Z.show({
          title: m.intl.string(m.t.m2Hyj0),
          body: m.intl.string(m.t.EhaK6B),
          confirmText: m.intl.string(m.t.ND1my3),
          cancelText: m.intl.string(m.t.jEqEhy),
          onConfirm: () => c.Z.setDisableLocalVideo(e, g.ZUi.MANUAL_ENABLED)
        });
        let n = y ? g.ZUi.MANUAL_ENABLED : g.ZUi.DISABLED;
        c.Z.setDisableLocalVideo(e, n, t)
      },
      checked: y,
      subtext: h ? (0, i.jsxs)("div", {
        className: p.videoPaused,
        children: [(0, i.jsx)(l.Mgn, {
          size: "custom",
          color: "currentColor",
          width: 12,
          className: p.warningCircle
        }), m.intl.string(m.t.m2Hyj0)]
      }) : null
    }, "disable-video") : null,
    S = n ? null : (0, i.jsx)(l.S89, {
      id: "soundboard-sound-mute",
      label: m.intl.string(m.t.LxhEuG),
      action: () => {
        let n = u.Z.getRTCConnection();
        b.default.track(g.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: d.Z.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? true : n.getMediaSessionId(),
          parent_media_session_id: null == n ? true : n.parentMediaSessionId,
          mute_soundboard: !v
        }), c.Z.toggleLocalSoundboardMute(e, t)
      },
      checked: v
    }, "soundboard-sound-mute");
  return n ? [(0, i.jsx)(l.S89, {
    id: "mute",
    label: m.intl.string(m.t.sWmtI6),
    action: () => c.Z.toggleSelfMute({
      context: t,
      location: "User Context Menu"
    }),
    checked: O
  }, "self-mute"), (0, i.jsx)(l.S89, {
    id: "deafen",
    label: m.intl.string(m.t.wjcRFX),
    action: () => c.Z.toggleSelfDeaf({
      context: t,
      location: "User Context Menu"
    }),
    checked: Z
  }, "self-deafen"), x] : [(0, i.jsx)(l.S89, {
    id: "mute",
    label: m.intl.string(m.t.sWmtI6),
    action: () => c.Z.toggleLocalMute(e, t),
    checked: O
  }, "self-mute"), S, x]
}