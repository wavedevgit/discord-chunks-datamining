/** Chunk was on 43342 **/
/** chunk id: 855844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk284056 = require("./284056.jsx"),
  Chunk410575 = require("./410575.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk650958 = require("./650958.jsx"),
  Chunk453925 = require("./453925.jsx"),
  Chunk967003 = require("./967003.jsx"),
  Chunk632304 = require("./632304.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk556296 = require("./556296.js"),
  Chunk358085 = require("./358085.js"),
  Chunk822556 = require("./822556.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895634 = require("./895634.js");

function E(e) {
  let {
    appContext: t,
    onInteraction: n,
    onSelect: E,
    onClose: I,
    maybeRenderPTTCheckbox: T = false,
    renderDeafenCheckbox: S = false,
    renderInputProfiles: N = false,
    renderOutputDevices: D = false,
    renderOutputVolume: Z = false,
    renderInputDevices: k = false,
    renderInputVolume: M = false,
    maybeRenderInputMeter: A = false,
    renderSettingsButton: R = false
  } = e, {
    analyticsLocations: V
  } = (0, d.ZP)();
  (0, p.Z)({
    type: i.ImpressionTypes.MENU,
    name: i.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: V
    }
  });
  let F = (0, h.Z)(t),
    L = (0, m.M)({
      deviceType: _.h7.AUDIO_INPUT,
      analyticsLocations: V,
      asSubmenu: true
    }),
    U = (0, m.M)({
      deviceType: _.h7.AUDIO_OUTPUT,
      analyticsLocations: V,
      asSubmenu: true
    }),
    Y = (0, o.e7)([v.Z], () => v.Z.getActiveInputProfile()),
    H = (0, b.Z)(V),
    z = (0, f.Z)(V),
    q = (0, g.Z)(V),
    B = l.Yn.DEFAULT,
    W = v.Z.isSelfDeaf(B),
    X = (0, o.e7)([v.Z], () => v.Z.getMode()),
    K = X === x.pM4.VOICE_ACTIVITY ? x.pM4.PUSH_TO_TALK : x.pM4.VOICE_ACTIVITY,
    G = (0, o.e7)([v.Z, j.ZP], () => {
      var e;
      let t = (null == (e = v.Z.getModeOptions().shortcut) ? true : e.length) > 0,
        n = null != j.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK, false, true),
        r = null != j.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK_PRIORITY, false, true);
      return t || n || r
    }),
    Q = (0, o.e7)([y.Z], () => null != y.Z.getChannelId());
  return (0, r.jsx)(u.Z, {
    object: x.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(a.v2r, {
      onSelect: E,
      onInteraction: n,
      onClose: I,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": w.intl.string(w.t.ZR1Ss7),
      className: C.menu,
      children: [(0, r.jsxs)(a.kSQ, {
        children: [k && L, N && H, D && U]
      }), (0, r.jsxs)(a.kSQ, {
        children: [M && z, A && Q && (0, r.jsx)(a.II_, {
          id: "input-device-meter",
          control: () => (0, r.jsx)(c.Z, {
            notchBackground: c._.BLACK,
            location: {
              section: x.jXE.CONTEXT_MENU
            },
            meterOnly: true,
            containerClassName: C.customMenuItem,
            notchClassName: C.customNotches
          })
        }), Z && q]
      }), (0, r.jsxs)(a.kSQ, {
        children: [T && O.isPlatformEmbedded && G ? (0, r.jsx)(a.S89, {
          checked: X === x.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: w.intl.string(w.t.Q8gkVF),
          action: () => s.Z.setMode(K, true, true, {
            analyticsLocations: V
          }),
          disabled: Y === P._.STUDIO
        }) : null, S && (0, r.jsx)(a.S89, {
          id: "deafen",
          label: w.intl.string(w.t.wjcRFR),
          action: () => s.Z.toggleSelfDeaf({
            context: B,
            location: "AudioDeviceMenu"
          }),
          checked: W
        }, "self-deafen"), R && F]
      })]
    })
  })
}