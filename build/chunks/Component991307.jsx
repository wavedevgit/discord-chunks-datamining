/** Chunk was on 92524 **/
/** chunk id: 991307, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk890460 = require("./890460.js");

function p(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : b.Yn.DEFAULT,
    n = (0, i.e7)([g.default], () => {
      var t;
      return (null == (t = g.default.getCurrentUser()) ? true : t.id) === e
    }),
    p = (0, i.e7)([u.Z], () => u.Z.isLocalSoundboardMuted(e)),
    {
      muted: E,
      deafened: O = false,
      localVideoDisabled: h = false,
      localVideoAutoDisabled: S = false
    } = (0, i.cj)([s.Z], () => n ? {
      muted: s.Z.isSelfMute(t),
      deafened: s.Z.isSelfDeaf(t)
    } : {
      muted: s.Z.isLocalMute(e, t),
      localVideoDisabled: s.Z.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: s.Z.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    P = s.Z.supports(b.AN.DISABLE_VIDEO) && !n ? (0, l.jsx)(r.S89, {
      id: "disable-video",
      label: Z.intl.string(Z.t["4MMsWF"]),
      action: () => {
        if (S) return void a.Z.show({
          title: Z.intl.string(Z.t.m2Hyj0),
          body: Z.intl.string(Z.t.EhaK6B),
          confirmText: Z.intl.string(Z.t.ND1my3),
          cancelText: Z.intl.string(Z.t.jEqEhy),
          onConfirm: () => o.Z.setDisableLocalVideo(e, m.ZUi.MANUAL_ENABLED)
        });
        let n = h ? m.ZUi.MANUAL_ENABLED : m.ZUi.DISABLED;
        o.Z.setDisableLocalVideo(e, n, t)
      },
      checked: h,
      subtext: S ? (0, l.jsxs)("div", {
        className: v.videoPaused,
        children: [(0, l.jsx)(r.Mgn, {
          size: "custom",
          color: "currentColor",
          width: 12,
          className: v.warningCircle
        }), Z.intl.string(Z.t.m2Hyj0)]
      }) : null
    }, "disable-video") : null,
    y = n ? null : (0, l.jsx)(r.S89, {
      id: "soundboard-sound-mute",
      label: Z.intl.string(Z.t.LxhEuG),
      action: () => {
        let n = d.Z.getRTCConnection();
        f.default.track(m.rMx.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.Z.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? true : n.getMediaSessionId(),
          parent_media_session_id: null == n ? true : n.parentMediaSessionId,
          mute_soundboard: !p
        }), o.Z.toggleLocalSoundboardMute(e, t)
      },
      checked: p
    }, "soundboard-sound-mute");
  return n ? [(0, l.jsx)(r.S89, {
    id: "mute",
    label: Z.intl.string(Z.t.sWmtI6),
    action: () => o.Z.toggleSelfMute({
      context: t,
      location: "User Context Menu"
    }),
    checked: E
  }, "self-mute"), (0, l.jsx)(r.S89, {
    id: "deafen",
    label: Z.intl.string(Z.t.wjcRFX),
    action: () => o.Z.toggleSelfDeaf({
      context: t,
      location: "User Context Menu"
    }),
    checked: O
  }, "self-deafen"), P] : [(0, l.jsx)(r.S89, {
    id: "mute",
    label: Z.intl.string(Z.t.sWmtI6),
    action: () => o.Z.toggleLocalMute(e, t),
    checked: E
  }, "self-mute"), y, P]
}