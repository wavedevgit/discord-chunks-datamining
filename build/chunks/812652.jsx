/** Chunk was on 46746 **/
/** chunk id: 812652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PG: () => b,
  Vf: () => S,
  YX: () => C,
  ZP: () => O,
  l9: () => I
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk650958 = require("./650958.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk451467 = require("./451467.js"),
  Chunk672811 = require("./672811.js"),
  Chunk891180 = require("./891180.js"),
  Chunk544753 = require("./544753.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk156582 = require("./156582.jsx"),
  Chunk396678 = require("./396678.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js"),
  Chunk676462 = require("./676462.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk864443 = require("./864443.js");
let b = [{
    value: Chunk37113.tI.PRESET_VIDEO,
    canUse: e => true
  }, {
    value: Chunk37113.tI.PRESET_DOCUMENTS,
    canUse: e => e !== i.vA.CAMERA
  }, {
    value: Chunk37113.tI.PRESET_CUSTOM,
    canUse: e => true
  }],
  S = [{
    value: Chunk37113.LY.RESOLUTION_720,
    canUse: e => true
  }, {
    value: Chunk37113.LY.RESOLUTION_1080,
    canUse: e => true
  }, {
    value: Chunk37113.LY.RESOLUTION_1440,
    canUse: e => true
  }, {
    value: Chunk37113.LY.RESOLUTION_SOURCE,
    canUse: e => e !== i.vA.CAMERA
  }],
  C = [Chunk37113.ws.FPS_15, Chunk37113.ws.FPS_30, Chunk37113.ws.FPS_60];

function y(e) {
  let {
    label: t
  } = e;
  return <div className={j.premiumOptionContainer}>{t}{<l.SrA size={"xs"} color={l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK} />}</div>
}

function O(e) {
  var t, n;
  let {
    onClose: j,
    onSelect: O
  } = e, [{
    audioSourceId: I,
    notifyFriends: Z,
    hidePreview: w,
    muteStreamAudio: N,
    preset: T,
    resolution: E,
    fps: P,
    sourceType: R
  }, A] = (0, m.E_)(), M = (0, f.Z)(), [k, L] = null != (t = (0, p.Z)(x.tI.PRESET_VIDEO)) ? t : [x.LY.RESOLUTION_720, x.ws.FPS_30], [D, B] = null != (n = (0, p.Z)(x.tI.PRESET_DOCUMENTS)) ? n : [x.LY.RESOLUTION_SOURCE, x.ws.FPS_15], U = (0, o.M)({
    deviceType: g.h7.AUDIO_INPUT,
    selectedDeviceId: I,
    analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
    asSubmenu: true,
    onDeviceSelect: e => (A({
      type: "set_audio_source",
      audioSourceId: e
    }), false),
    menuItemOverrideProps: {
      id: "device-audio-input",
      label: v.intl.string(_.default.YSdHV1),
      subtextLineClamp: 1
    },
    computeMenuRadioItemOverrideProps: e => ({
      group: "device-audio-input-group",
      id: "device-audio-input-".concat(e)
    })
  });
  return <l.v2r aria-label={v.intl.string(v.t["+1H47u"])} navId={"stream-options"} onClose={j} onSelect={O}>{<l.kSQ label={v.intl.string(_.default.P2pjm5)}>{b.filter(e => {
        let {
          canUse: t
        } = e;
        return t(R)
      }).map(e => {
        let {
          value: t
        } = e;
        return (0, r.jsx)(l.k5B, {
          group: "preset",
          id: "stream-preset-".concat(t),
          checked: T === t,
          label: (0, d.L)(t),
          subtext: function(e) {
            switch (e) {
              case x.tI.PRESET_VIDEO:
                return v.intl.format(_.default.G5O1Mz, {
                  resolution: (0, u.M)(k),
                  frameRate: L
                });
              case x.tI.PRESET_DOCUMENTS:
                return v.intl.format(_.default["8tcFLy"], {
                  resolution: (0, u.M)(D),
                  frameRate: B
                });
              case x.tI.PRESET_CUSTOM:
                return;
              default:
                throw Error("No case implemented for ".concat(e))
            }
          }(t),
          action: () => A({
            type: "set_preset",
            preset: t
          })
        }, t)
      })}</l.kSQ>}{T === x.tI.PRESET_CUSTOM && <r.Fragment>{<l.Clw />}{<l.sNh id={"resolution"} label={v.intl.string(_.default.IG5n0d)}>{S.filter(e => {
          let {
            canUse: t
          } = e;
          return t(R)
        }).map(e => {
          let {
            value: t
          } = e;
          return (0, r.jsx)(l.k5B, {
            group: "resolution",
            id: "stream-option-resolution-".concat(t),
            checked: E === t,
            label: t !== x.LY.RESOLUTION_720 ? (0, r.jsx)(y, {
              label: (0, u.M)(t)
            }) : (0, u.M)(t),
            action: () => (function(e) {
              if (!(0, c.Z)(T, e, P, a.default.getCurrentUser(), M)) return j(), (0, h.E)({
                analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
              });
              A({
                type: "set_resolution",
                resolution: e
              })
            })(t)
          }, t)
        })}</l.sNh>}{<l.sNh id={"frame-rate"} label={v.intl.string(v.t.SkkeIi)}>{C.map(e => (0, r.jsx)(l.k5B, {
          group: "frame-rate",
          id: "stream-option-frame-rate-".concat(e),
          checked: P === e,
          label: e === x.ws.FPS_60 ? (0, r.jsx)(y, {
            label: "".concat(e, "fps")
          }) : "".concat(e, "fps"),
          action: () => (function(e) {
            if (!(0, c.Z)(T, E, e, a.default.getCurrentUser(), M)) return j(), (0, h.E)({
              analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
            });
            A({
              type: "set_fps",
              fps: e
            })
          })(e)
        }, e))}</l.sNh>}</r.Fragment>}{<l.Clw />}{<l.S89 id={"stream-option-mute"} checked={N} label={v.intl.string(_.default["b0+Ira"])} action={() => A({
        type: "set_mute_audio",
        value: !N
      })} />}{R === i.vA.CAMERA && U}{<l.sNh id={"advanced-items"} label={v.intl.string(_.default.eYyK1t)}>{<l.S89 id={"stream-option-share-preview"} checked={w} label={v.intl.string(_.default.H3Qjqa)} action={() => A({
          type: "set_hide_preview",
          hidePreview: !w
        })} />}{<l.S89 id={"stream-option-notify"} checked={Z} label={v.intl.string(_.default.SiHtX1)} action={() => A({
          type: "set_notify_friends",
          value: !Z
        })} />}</l.sNh>}</l.v2r>
}

function I(e) {
  let {
    onClose: t,
    onSelect: n
  } = e, [{
    audioSourceId: a,
    notifyFriends: c,
    hidePreview: d,
    muteStreamAudio: u,
    sourceType: f
  }, h] = (0, m.E_)(), p = (0, o.M)({
    deviceType: g.h7.AUDIO_INPUT,
    selectedDeviceId: a,
    analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
    asSubmenu: true,
    onDeviceSelect: e => (h({
      type: "set_audio_source",
      audioSourceId: e
    }), false),
    menuItemOverrideProps: {
      id: "device-audio-input",
      label: v.intl.string(_.default.YSdHV1),
      subtextLineClamp: 1
    },
    computeMenuRadioItemOverrideProps: e => ({
      group: "device-audio-input-group",
      id: "device-audio-input-".concat(e)
    })
  });
  return <l.v2r aria-label={v.intl.string(v.t["+1H47u"])} navId={"stream-options"} onClose={t} onSelect={n}>{<l.S89 id={"stream-option-mute"} checked={u} label={v.intl.string(_.default["b0+Ira"])} action={() => h({
        type: "set_mute_audio",
        value: !u
      })} />}{<l.S89 id={"stream-option-share-preview"} checked={d} label={v.intl.string(_.default.H3Qjqa)} action={() => h({
        type: "set_hide_preview",
        hidePreview: !d
      })} />}{<l.S89 id={"stream-option-notify"} checked={c} label={v.intl.string(_.default.SiHtX1)} action={() => h({
        type: "set_notify_friends",
        value: !c
      })} />}{f === i.vA.CAMERA && p}</l.v2r>
}