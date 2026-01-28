/** Chunk was on 96811 **/
/** chunk id: 744086, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => T
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk141931 = require("./141931.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk48435 = require("./48435.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk498642 = require("./498642.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk258585 = require("./258585.js"),
  Chunk874124 = require("./874124.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk461430 = require("./461430.js"),
  Chunk56439 = require("./56439.js"),
  Chunk997248 = require("./997248.js"),
  Chunk213279 = require("./213279.jsx"),
  Chunk420659 = require("./420659.js"),
  Chunk502075 = require("./502075.js"),
  Chunk753070 = require("./753070.js"),
  Chunk731854 = require("./731854.js"),
  Chunk191850 = require("./191850.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk269608 = require("./269608.js");
let C = [{
    value: Chunk753070.jQ.PRESET_AUTO,
    canUse: e => e !== i.fS.CAMERA && (0, h.eO)({
      location: "StreamOptionsMenu"
    }).allowAutoQuality
  }, {
    value: Chunk753070.jQ.PRESET_VIDEO,
    canUse: e => true
  }, {
    value: Chunk753070.jQ.PRESET_DOCUMENTS,
    canUse: e => e !== i.fS.CAMERA
  }, {
    value: Chunk753070.jQ.PRESET_CUSTOM,
    canUse: e => true
  }],
  E = [{
    value: Chunk753070.on.RESOLUTION_720,
    canUse: e => true
  }, {
    value: Chunk753070.on.RESOLUTION_1080,
    canUse: e => true
  }, {
    value: Chunk753070.on.RESOLUTION_1440,
    canUse: e => true
  }, {
    value: Chunk753070.on.RESOLUTION_SOURCE,
    canUse: e => e !== i.fS.CAMERA
  }],
  I = [Chunk753070.kn.FPS_15, Chunk753070.kn.FPS_30, Chunk753070.kn.FPS_60];

function N(e) {
  let {
    label: t
  } = e;
  return (0, n.jsxs)("div", {
    className: w.g,
    children: [t, (0, n.jsx)(s.tvc, {
      size: "xs",
      color: s.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK
    })]
  })
}

function T(e) {
  var t, r;
  let {
    onClose: h,
    onSelect: w
  } = e, [{
    audioSourceId: T,
    notifyFriends: R,
    hidePreview: P,
    muteStreamAudio: M,
    preset: D,
    resolution: U,
    fps: G,
    sourceType: L
  }, k] = (0, x.tS)(), F = (0, l.bG)([u.A], () => u.A.getVoiceChannelId()), H = (0, l.bG)([c.A, d.A], () => {
    if (null == F) returntrue;
    let e = c.A.getChannel(F),
      t = null == e ? true : e.guild_id;
    if (null == t) returntrue;
    let r = d.A.getMemberCount(t);
    return null == r || r > b.oe && r <= b.G1
  }, [F]), B = (0, g.A)(), [W, Z] = null != (t = (0, v.A)(y.jQ.PRESET_VIDEO)) ? t : [y.on.RESOLUTION_720, y.kn.FPS_30], [V, z] = null != (r = (0, v.A)(y.jQ.PRESET_DOCUMENTS)) ? r : [y.on.RESOLUTION_SOURCE, y.kn.FPS_15], Q = (0, o.H)({
    deviceType: S.oh.AUDIO_INPUT,
    selectedDeviceId: T,
    analyticsLocations: [a.A.GO_LIVE_MODAL_SETTINGS_SELECTION],
    asSubmenu: true,
    onDeviceSelect: e => (k({
      type: "set_audio_source",
      audioSourceId: e
    }), false),
    menuItemOverrideProps: {
      id: "device-audio-input",
      label: O.intl.string(A.default.YSdHVw),
      subtextLineClamp: 1
    },
    computeMenuRadioItemOverrideProps: e => ({
      group: "device-audio-input-group",
      id: "device-audio-input-".concat(e)
    })
  });
  return (0, n.jsxs)(s.W1t, {
    "data-menu-needs-migration": true,
    "aria-label": O.intl.string(O.t["+1H47t"]),
    navId: "stream-options",
    onClose: h,
    onSelect: w,
    children: [(0, n.jsx)(s.rXV, {
      label: O.intl.string(A.default.P2pjmy),
      children: C.filter(e => {
        let {
          canUse: t
        } = e;
        return t(L)
      }).map(e => {
        let {
          value: t
        } = e;
        return (0, n.jsx)(s.iDA, {
          group: "preset",
          id: "stream-preset-".concat(t),
          checked: D === t,
          label: (0, m.K)(t),
          subtext: function(e) {
            switch (e) {
              case y.jQ.PRESET_VIDEO:
                return O.intl.format(A.default.G5O1Mz, {
                  resolution: (0, j.b)(W),
                  frameRate: Z
                });
              case y.jQ.PRESET_DOCUMENTS:
                return O.intl.format(A.default["8tcFL5"], {
                  resolution: (0, j.b)(V),
                  frameRate: z
                });
              case y.jQ.PRESET_AUTO:
                return O.intl.string(A.default.m4jtlc);
              case y.jQ.PRESET_CUSTOM:
                return;
              default:
                throw Error("No case implemented for ".concat(e))
            }
          }(t),
          action: () => k({
            type: "set_preset",
            preset: t
          })
        }, t)
      })
    }), D === y.jQ.PRESET_CUSTOM && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(s.bXX, {}), (0, n.jsx)(s.Drp, {
        id: "resolution",
        label: O.intl.string(A.default.IG5n0X),
        children: E.filter(e => {
          let {
            canUse: t
          } = e;
          return t(L)
        }).map(e => {
          let {
            value: t
          } = e;
          return (0, n.jsx)(s.iDA, {
            group: "resolution",
            id: "stream-option-resolution-".concat(t),
            checked: U === t,
            void_label: t !== y.on.RESOLUTION_720 ? (0, n.jsx)(N, {
              label: (0, j.b)(t)
            }) : (0, j.b)(t),
            action: () => (function(e) {
              if (!(0, p.A)(D, e, G, f.default.getCurrentUser(), B)) return h(), (0, _.p)({
                analyticsLocation: a.A.GO_LIVE_MODAL_SETTINGS_SELECTION
              });
              k({
                type: "set_resolution",
                resolution: e
              })
            })(t)
          }, t)
        })
      }), (0, n.jsx)(s.Drp, {
        id: "frame-rate",
        label: O.intl.string(O.t.SkkeIt),
        children: I.map(e => (0, n.jsx)(s.iDA, {
          group: "frame-rate",
          id: "stream-option-frame-rate-".concat(e),
          checked: G === e,
          void_label: e === y.kn.FPS_60 ? (0, n.jsx)(N, {
            label: "".concat(e, "fps")
          }) : "".concat(e, "fps"),
          action: () => (function(e) {
            if (!(0, p.A)(D, U, e, f.default.getCurrentUser(), B)) return h(), (0, _.p)({
              analyticsLocation: a.A.GO_LIVE_MODAL_SETTINGS_SELECTION
            });
            k({
              type: "set_fps",
              fps: e
            })
          })(e)
        }, e))
      })]
    }), (0, n.jsx)(s.bXX, {}), (0, n.jsx)(s.sLh, {
      id: "stream-option-mute",
      checked: M,
      label: O.intl.string(A.default["b0+Irf"]),
      action: () => k({
        type: "set_mute_audio",
        value: !M
      })
    }), L === i.fS.CAMERA && Q, (0, n.jsxs)(s.Drp, {
      id: "advanced-items",
      label: O.intl.string(A.default.eYyK1v),
      children: [(0, n.jsx)(s.sLh, {
        id: "stream-option-share-preview",
        checked: P,
        label: O.intl.string(A.default.H3QjqX),
        action: () => k({
          type: "set_hide_preview",
          hidePreview: !P
        })
      }), H && (0, n.jsx)(s.sLh, {
        id: "stream-option-notify",
        checked: R,
        label: O.intl.string(A.default.SiHtXy),
        action: () => k({
          type: "set_notify_friends",
          value: !R
        })
      })]
    })]
  })
}