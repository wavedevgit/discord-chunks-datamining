/** Chunk was on 46746 **/
/** chunk id: 812652, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => w
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk650958 = require("./650958.jsx"),
  Chunk594174 = require("./594174.js"),
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
  Chunk137349 = require("./137349.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk246238 = require("./246238.js");
let y = [{
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

function O(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: b.premiumOptionContainer,
    children: [t, (0, r.jsx)(l.SrA, {
      size: "xs",
      color: l.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
    })]
  })
}

function w(e) {
  var t, n;
  let {
    onClose: b,
    onSelect: w
  } = e, [{
    audioSourceId: Z,
    notifyFriends: I,
    hidePreview: N,
    muteStreamAudio: P,
    preset: T,
    resolution: E,
    fps: R,
    sourceType: A,
    selectedChannel: k
  }, M] = (0, h.E_)(), D = !(0, c.$s)(k, "StreamOptionsMenu"), L = (0, m.Z)(), [B, G] = null != (t = (0, x.Z)(g.tI.PRESET_VIDEO)) ? t : [g.LY.RESOLUTION_720, g.ws.FPS_30], [U, W] = null != (n = (0, x.Z)(g.tI.PRESET_DOCUMENTS)) ? n : [g.LY.RESOLUTION_SOURCE, g.ws.FPS_15], z = (0, o.M)({
    deviceType: _.h7.AUDIO_INPUT,
    selectedDeviceId: Z,
    analyticsLocations: [s.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
    asSubmenu: true,
    onDeviceSelect: e => (M({
      type: "set_audio_source",
      audioSourceId: e
    }), false),
    menuItemOverrideProps: {
      id: "device-audio-input",
      label: j.intl.string(v.default.YSdHV1),
      subtextLineClamp: 1
    },
    computeMenuRadioItemOverrideProps: e => ({
      group: "device-audio-input-group",
      id: "device-audio-input-".concat(e)
    })
  });
  return (0, r.jsxs)(l.v2r, {
    "aria-label": j.intl.string(j.t["+1H47u"]),
    navId: "stream-options",
    onClose: b,
    onSelect: w,
    children: [(0, r.jsx)(l.kSQ, {
      label: j.intl.string(v.default.P2pjm5),
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
          group: "preset",
          id: "stream-preset-".concat(t),
          checked: T === t,
          label: (0, u.L)(t),
          subtext: function(e) {
            switch (e) {
              case g.tI.PRESET_VIDEO:
                return j.intl.format(v.default.G5O1Mz, {
                  resolution: (0, f.M)(B),
                  frameRate: G
                });
              case g.tI.PRESET_DOCUMENTS:
                return j.intl.format(v.default["8tcFLy"], {
                  resolution: (0, f.M)(U),
                  frameRate: W
                });
              case g.tI.PRESET_CUSTOM:
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
    }), T === g.tI.PRESET_CUSTOM && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Clw, {}), (0, r.jsx)(l.sNh, {
        id: "resolution",
        label: j.intl.string(v.default.IG5n0d),
        children: S.filter(e => {
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
            label: t !== g.LY.RESOLUTION_720 ? (0, r.jsx)(O, {
              label: (0, f.M)(t)
            }) : (0, f.M)(t),
            action: () => (function(e) {
              if (!(0, d.Z)(T, e, R, a.default.getCurrentUser(), L)) return b(), (0, p.E)({
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
        label: j.intl.string(j.t.SkkeIi),
        children: C.map(e => (0, r.jsx)(l.k5B, {
          group: "frame-rate",
          id: "stream-option-frame-rate-".concat(e),
          checked: R === e,
          label: e === g.ws.FPS_60 ? (0, r.jsx)(O, {
            label: "".concat(e, "fps")
          }) : "".concat(e, "fps"),
          action: () => (function(e) {
            if (!(0, d.Z)(T, E, e, a.default.getCurrentUser(), L)) return b(), (0, p.E)({
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
      checked: P,
      label: j.intl.string(v.default["b0+Ira"]),
      action: () => M({
        type: "set_mute_audio",
        value: !P
      })
    }), A === i.vA.CAMERA && z, (0, r.jsxs)(l.sNh, {
      id: "advanced-items",
      label: j.intl.string(v.default.eYyK1t),
      children: [(0, r.jsx)(l.S89, {
        id: "stream-option-share-preview",
        checked: N,
        label: j.intl.string(v.default.H3Qjqa),
        action: () => M({
          type: "set_hide_preview",
          hidePreview: !N
        })
      }), D && (0, r.jsx)(l.S89, {
        id: "stream-option-notify",
        checked: I,
        label: j.intl.string(v.default.SiHtX1),
        action: () => M({
          type: "set_notify_friends",
          value: !I
        })
      })]
    })]
  })
}