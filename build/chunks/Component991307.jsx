/** Chunk was on 98783 **/
/** chunk id: 991307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
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

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : Z.Yn.DEFAULT,
    n = (0, l.e7)([g.default], () => {
      var t;
      return (null == (t = g.default.getCurrentUser()) ? true : t.id) === e
    }),
    p = (0, l.e7)([s.Z], () => s.Z.isLocalSoundboardMuted(e)),
    {
      muted: O,
      deafened: h = false,
      localVideoDisabled: _ = false,
      localVideoAutoDisabled: j = false
    } = (0, l.cj)([u.Z], () => n ? {
      muted: u.Z.isSelfMute(t),
      deafened: u.Z.isSelfDeaf(t)
    } : {
      muted: u.Z.isLocalMute(e, t),
      localVideoDisabled: u.Z.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: u.Z.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    x = u.Z.supports(Z.AN.DISABLE_VIDEO) && !n ? (0, i.jsx)(r.S89, {
      id: "disable-video",
      label: m.intl.string(m.t["4MMsWF"]),
      action: () => {
        if (j) return void a.Z.show({
          title: m.intl.string(m.t.m2Hyj0),
          body: m.intl.string(m.t.EhaK6B),
          confirmText: m.intl.string(m.t.ND1my3),
          cancelText: m.intl.string(m.t.jEqEhy),
          onConfirm: () => o.Z.setDisableLocalVideo(e, b.ZUi.MANUAL_ENABLED)
        });
        let n = _ ? b.ZUi.MANUAL_ENABLED : b.ZUi.DISABLED;
        o.Z.setDisableLocalVideo(e, n, t)
      },
      checked: _,
      subtext: j ? (0, i.jsxs)("div", {
        className: v.videoPaused,
        children: [(0, i.jsx)(r.Mgn, {
          size: "custom",
          color: "currentColor",
          width: 12,
          className: v.warningCircle
        }), m.intl.string(m.t.m2Hyj0)]
      }) : null
    }, "disable-video") : null,
    N = n ? null : (0, i.jsx)(r.S89, {
      id: "soundboard-sound-mute",
      label: m.intl.string(m.t.LxhEuG),
      action: () => {
        let n = d.Z.getRTCConnection();
        f.default.track(b.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.Z.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? true : n.getMediaSessionId(),
          parent_media_session_id: null == n ? true : n.parentMediaSessionId,
          mute_soundboard: !p
        }), o.Z.toggleLocalSoundboardMute(e, t)
      },
      checked: p
    }, "soundboard-sound-mute");
  return n ? [(0, i.jsx)(r.S89, {
    id: "mute",
    label: m.intl.string(m.t.sWmtI6),
    action: () => o.Z.toggleSelfMute({
      context: t,
      location: "User Context Menu"
    }),
    checked: O
  }, "self-mute"), (0, i.jsx)(r.S89, {
    id: "deafen",
    label: m.intl.string(m.t.wjcRFX),
    action: () => o.Z.toggleSelfDeaf({
      context: t,
      location: "User Context Menu"
    }),
    checked: h
  }, "self-deafen"), x] : [(0, i.jsx)(r.S89, {
    id: "mute",
    label: m.intl.string(m.t.sWmtI6),
    action: () => o.Z.toggleLocalMute(e, t),
    checked: O
  }, "self-mute"), N, x]
}