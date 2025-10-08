/** Chunk was on 46746 **/
/** chunk id: 812652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => Z
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk650958 = require("./650958.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk580991 = require("./580991.js"),
  Chunk992817 = require("./992817.js"),
  Chunk451467 = require("./451467.js"),
  Chunk672811 = require("./672811.js"),
  Chunk891180 = require("./891180.js"),
  Chunk544753 = require("./544753.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk156582 = require("./156582.jsx"),
  Chunk396678 = require("./396678.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js"),
  Chunk637824 = require("./637824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk355669 = require("./355669.js");
let C = [{
    value: Chunk37113.tI.PRESET_AUTO,
    canUse: e => e !== i.vA.CAMERA && (0, c.I)({
      location: "StreamOptionsMenu"
    }).allowAutoQuality
  }, {
    value: Chunk37113.tI.PRESET_VIDEO,
    canUse: e => true
  }, {
    value: Chunk37113.tI.PRESET_DOCUMENTS,
    canUse: e => e !== i.vA.CAMERA
  }, {
    value: Chunk37113.tI.PRESET_CUSTOM,
    canUse: e => true
  }],
  y = [{
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
  O = [Chunk37113.ws.FPS_15, Chunk37113.ws.FPS_30, Chunk37113.ws.FPS_60];

function w(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: S.premiumOptionContainer,
    children: [t, (0, r.jsx)(l.SrA, {
      size: "xs",
      color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
    })]
  })
}

function Z(e) {
  var t, n;
  let {
    onClose: c,
    onSelect: S
  } = e, [{
    audioSourceId: Z,
    notifyFriends: I,
    hidePreview: P,
    muteStreamAudio: N,
    preset: T,
    resolution: E,
    fps: R,
    sourceType: A,
    selectedChannel: k
  }, M] = (0, p.E_)(), D = !(0, d.$s)(k, "StreamOptionsMenu"), L = (0, h.Z)(), [B, G] = null != (t = (0, x.Z)(_.tI.PRESET_VIDEO)) ? t : [_.LY.RESOLUTION_720, _.ws.FPS_30], [U, W] = null != (n = (0, x.Z)(_.tI.PRESET_DOCUMENTS)) ? n : [_.LY.RESOLUTION_SOURCE, _.ws.FPS_15], z = (0, o.M)({
    deviceType: v.h7.AUDIO_INPUT,
    selectedDeviceId: Z,
    analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
    asSubmenu: true,
    onDeviceSelect: e => (M({
      type: "set_audio_source",
      audioSourceId: e
    }), false),
    menuItemOverrideProps: {
      id: "device-audio-input",
      label: b.intl.string(j.default.YSdHV1),
      subtextLineClamp: 1
    },
    computeMenuRadioItemOverrideProps: e => ({
      group: "device-audio-input-group",
      id: "device-audio-input-".concat(e)
    })
  });
  return (0, r.jsxs)(l.v2r, {
    "aria-label": b.intl.string(b.t["+1H47u"]),
    navId: "stream-options",
    onClose: c,
    onSelect: S,
    children: [(0, r.jsx)(l.kSQ, {
      label: b.intl.string(j.default.P2pjm5),
      children: C.filter(e => {
        let {
          canUse: t
        } = e;
        return t(A)
      }).map(e => {
        let {
          value: t
        } = e;
        return (0, r.jsx)(l.k5B, {
          group: "preset",
          id: "stream-preset-".concat(t),
          checked: T === t,
          label: (0, f.L)(t),
          subtext: function(e) {
            switch (e) {
              case _.tI.PRESET_VIDEO:
                return b.intl.format(j.default.G5O1Mz, {
                  resolution: (0, m.M)(B),
                  frameRate: G
                });
              case _.tI.PRESET_DOCUMENTS:
                return b.intl.format(j.default["8tcFLy"], {
                  resolution: (0, m.M)(U),
                  frameRate: W
                });
              case _.tI.PRESET_AUTO:
                return b.intl.string(j.default.m4jtlZ);
              case _.tI.PRESET_CUSTOM:
                return;
              default:
                throw Error("No case implemented for ".concat(e))
            }
          }(t),
          action: () => M({
            type: "set_preset",
            preset: t
          })
        }, t)
      })
    }), T === _.tI.PRESET_CUSTOM && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Clw, {}), (0, r.jsx)(l.sNh, {
        id: "resolution",
        label: b.intl.string(j.default.IG5n0d),
        children: y.filter(e => {
          let {
            canUse: t
          } = e;
          return t(A)
        }).map(e => {
          let {
            value: t
          } = e;
          return (0, r.jsx)(l.k5B, {
            group: "resolution",
            id: "stream-option-resolution-".concat(t),
            checked: E === t,
            label: t !== _.LY.RESOLUTION_720 ? (0, r.jsx)(w, {
              label: (0, m.M)(t)
            }) : (0, m.M)(t),
            action: () => (function(e) {
              if (!(0, u.Z)(T, e, R, a.default.getCurrentUser(), L)) return c(), (0, g.E)({
                analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
              });
              M({
                type: "set_resolution",
                resolution: e
              })
            })(t)
          }, t)
        })
      }), (0, r.jsx)(l.sNh, {
        id: "frame-rate",
        label: b.intl.string(b.t.SkkeIi),
        children: O.map(e => (0, r.jsx)(l.k5B, {
          group: "frame-rate",
          id: "stream-option-frame-rate-".concat(e),
          checked: R === e,
          label: e === _.ws.FPS_60 ? (0, r.jsx)(w, {
            label: "".concat(e, "fps")
          }) : "".concat(e, "fps"),
          action: () => (function(e) {
            if (!(0, u.Z)(T, E, e, a.default.getCurrentUser(), L)) return c(), (0, g.E)({
              analyticsLocation: s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
            });
            M({
              type: "set_fps",
              fps: e
            })
          })(e)
        }, e))
      })]
    }), (0, r.jsx)(l.Clw, {}), (0, r.jsx)(l.S89, {
      id: "stream-option-mute",
      checked: N,
      label: b.intl.string(j.default["b0+Ira"]),
      action: () => M({
        type: "set_mute_audio",
        value: !N
      })
    }), A === i.vA.CAMERA && z, (0, r.jsxs)(l.sNh, {
      id: "advanced-items",
      label: b.intl.string(j.default.eYyK1t),
      children: [(0, r.jsx)(l.S89, {
        id: "stream-option-share-preview",
        checked: P,
        label: b.intl.string(j.default.H3Qjqa),
        action: () => M({
          type: "set_hide_preview",
          hidePreview: !P
        })
      }), D && (0, r.jsx)(l.S89, {
        id: "stream-option-notify",
        checked: I,
        label: b.intl.string(j.default.SiHtX1),
        action: () => M({
          type: "set_notify_friends",
          value: !I
        })
      })]
    })]
  })
}