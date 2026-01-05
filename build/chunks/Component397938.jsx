/** Chunk was on 46746 **/
/** chunk id: 397938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => I
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk268146 = require("./268146.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk650958 = require("./650958.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk580991 = require("./580991.js"),
  Chunk992817 = require("./992817.js"),
  Chunk451467 = require("./451467.js"),
  Chunk443762 = require("./443762.jsx"),
  Chunk672811 = require("./672811.js"),
  Chunk891180 = require("./891180.js"),
  Chunk544753 = require("./544753.js"),
  Chunk504710 = require("./504710.jsx"),
  Chunk226372 = require("./226372.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js"),
  Chunk715689 = require("./715689.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk979713 = require("./979713.js");
let w = [{
    value: Chunk37113.tI.PRESET_AUTO,
    canUse: e => e !== i.vA.CAMERA && (0, a.IK)({
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
  O = [{
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

function S(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: y.premiumOptionContainer,
    children: [t, (0, r.jsx)(s.SrA, {
      size: "xs",
      color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
    })]
  })
}

function I(e) {
  var t, n;
  let {
    onClose: a,
    onSelect: y
  } = e, [{
    audioSourceId: I,
    notifyFriends: Z,
    hidePreview: E,
    muteStreamAudio: P,
    preset: N,
    resolution: T,
    fps: R,
    sourceType: M,
    selectedChannel: A
  }, L] = (0, f.E_)(), U = !(0, d.$s)(A, "StreamOptionsMenu"), D = (0, x.Z)(), [G, H] = null != (t = (0, g.Z)(v.tI.PRESET_VIDEO)) ? t : [v.LY.RESOLUTION_720, v.ws.FPS_30], [B, k] = null != (n = (0, g.Z)(v.tI.PRESET_DOCUMENTS)) ? n : [v.LY.RESOLUTION_SOURCE, v.ws.FPS_15], F = (0, o.M)({
    deviceType: j.h7.AUDIO_INPUT,
    selectedDeviceId: I,
    analyticsLocations: [l.Z.GO_LIVE_MODAL_SETTINGS_SELECTION],
    asSubmenu: true,
    onDeviceSelect: e => (L({
      type: "set_audio_source",
      audioSourceId: e
    }), false),
    menuItemOverrideProps: {
      id: "device-audio-input",
      label: b.intl.string(_.default.YSdHVw),
      subtextLineClamp: 1
    },
    computeMenuRadioItemOverrideProps: e => ({
      group: "device-audio-input-group",
      id: "device-audio-input-".concat(e)
    })
  });
  return (0, r.jsxs)(s.v2r, {
    "aria-label": b.intl.string(b.t["+1H47t"]),
    navId: "stream-options",
    onClose: a,
    onSelect: y,
    children: [(0, r.jsx)(s.kSQ, {
      label: b.intl.string(_.default.P2pjmy),
      children: w.filter(e => {
        let {
          canUse: t
        } = e;
        return t(M)
      }).map(e => {
        let {
          value: t
        } = e;
        return (0, r.jsx)(s.k5B, {
          group: "preset",
          id: "stream-preset-".concat(t),
          checked: N === t,
          label: (0, h.L)(t),
          subtext: function(e) {
            switch (e) {
              case v.tI.PRESET_VIDEO:
                return b.intl.format(_.default.G5O1Mz, {
                  resolution: (0, p.M)(G),
                  frameRate: H
                });
              case v.tI.PRESET_DOCUMENTS:
                return b.intl.format(_.default["8tcFL5"], {
                  resolution: (0, p.M)(B),
                  frameRate: k
                });
              case v.tI.PRESET_AUTO:
                return b.intl.string(_.default.m4jtlc);
              case v.tI.PRESET_CUSTOM:
                return;
              default:
                throw Error("No case implemented for ".concat(e))
            }
          }(t),
          action: () => L({
            type: "set_preset",
            preset: t
          })
        }, t)
      })
    }), N === v.tI.PRESET_CUSTOM && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Clw, {}), (0, r.jsx)(s.sNh, {
        id: "resolution",
        label: b.intl.string(_.default.IG5n0X),
        children: O.filter(e => {
          let {
            canUse: t
          } = e;
          return t(M)
        }).map(e => {
          let {
            value: t
          } = e;
          return (0, r.jsx)(s.k5B, {
            group: "resolution",
            id: "stream-option-resolution-".concat(t),
            checked: T === t,
            label: t !== v.LY.RESOLUTION_720 ? (0, r.jsx)(S, {
              label: (0, p.M)(t)
            }) : (0, p.M)(t),
            action: () => (function(e) {
              if (!(0, u.Z)(N, e, R, c.default.getCurrentUser(), D)) return a(), (0, m.E)({
                analyticsLocation: l.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
              });
              L({
                type: "set_resolution",
                resolution: e
              })
            })(t)
          }, t)
        })
      }), (0, r.jsx)(s.sNh, {
        id: "frame-rate",
        label: b.intl.string(b.t.SkkeIt),
        children: C.map(e => (0, r.jsx)(s.k5B, {
          group: "frame-rate",
          id: "stream-option-frame-rate-".concat(e),
          checked: R === e,
          label: e === v.ws.FPS_60 ? (0, r.jsx)(S, {
            label: "".concat(e, "fps")
          }) : "".concat(e, "fps"),
          action: () => (function(e) {
            if (!(0, u.Z)(N, T, e, c.default.getCurrentUser(), D)) return a(), (0, m.E)({
              analyticsLocation: l.Z.GO_LIVE_MODAL_SETTINGS_SELECTION
            });
            L({
              type: "set_fps",
              fps: e
            })
          })(e)
        }, e))
      })]
    }), (0, r.jsx)(s.Clw, {}), (0, r.jsx)(s.S89, {
      id: "stream-option-mute",
      checked: P,
      label: b.intl.string(_.default["b0+Irf"]),
      action: () => L({
        type: "set_mute_audio",
        value: !P
      })
    }), M === i.vA.CAMERA && F, (0, r.jsxs)(s.sNh, {
      id: "advanced-items",
      label: b.intl.string(_.default.eYyK1v),
      children: [(0, r.jsx)(s.S89, {
        id: "stream-option-share-preview",
        checked: E,
        label: b.intl.string(_.default.H3QjqX),
        action: () => L({
          type: "set_hide_preview",
          hidePreview: !E
        })
      }), U && (0, r.jsx)(s.S89, {
        id: "stream-option-notify",
        checked: Z,
        label: b.intl.string(_.default.SiHtXy),
        action: () => L({
          type: "set_notify_friends",
          value: !Z
        })
      })]
    })]
  })
}