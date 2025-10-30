/** Chunk was on 86863 **/
/** chunk id: 855844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
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
  Chunk130067 = require("./130067.jsx"),
  Chunk822556 = require("./822556.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk371882 = require("./371882.js");

function C(e) {
  let {
    appContext: t,
    onInteraction: n,
    onSelect: C,
    onClose: S,
    maybeRenderPTTCheckbox: I = false,
    renderDeafenCheckbox: N = false,
    renderInputProfiles: T = false,
    renderOutputDevices: D = false,
    renderOutputVolume: Z = false,
    renderInputDevices: k = false,
    renderInputVolume: M = false,
    maybeRenderInputMeter: A = false,
    renderSettingsButton: L = false
  } = e, {
    analyticsLocations: R
  } = (0, u.ZP)();
  (0, d.Z)({
    type: i.ImpressionTypes.MENU,
    name: i.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: R
    }
  });
  let V = (0, h.Z)(t),
    F = (0, p.M)({
      deviceType: P.h7.AUDIO_INPUT,
      analyticsLocations: R,
      asSubmenu: true
    }),
    U = (0, p.M)({
      deviceType: P.h7.AUDIO_OUTPUT,
      analyticsLocations: R,
      asSubmenu: true
    }),
    Y = (0, o.e7)([v.Z], () => v.Z.getActiveInputProfile()),
    H = (0, f.Z)(R),
    z = (0, m.Z)(R),
    B = (0, b.Z)(R),
    G = l.Yn.DEFAULT,
    W = v.Z.isSelfDeaf(G),
    q = (0, o.e7)([v.Z], () => v.Z.getMode()),
    K = q === x.pM4.VOICE_ACTIVITY ? x.pM4.PUSH_TO_TALK : x.pM4.VOICE_ACTIVITY,
    X = (0, o.e7)([v.Z, y.ZP], () => {
      var e;
      let t = (null == (e = v.Z.getModeOptions().shortcut) ? true : e.length) > 0,
        n = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK, false, true),
        r = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK_PRIORITY, false, true);
      return t || n || r
    }),
    Q = (0, o.e7)([g.Z], () => null != g.Z.getChannelId());
  return (0, r.jsx)(c.Z, {
    object: x.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(a.v2r, {
      onSelect: C,
      onInteraction: n,
      onClose: S,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": _.intl.string(_.t.ZR1Ss6),
      className: w.menu,
      children: [(0, r.jsxs)(a.kSQ, {
        children: [k && F, T && H, D && U]
      }), (0, r.jsxs)(a.kSQ, {
        children: [M && z, A && Q && (0, r.jsx)(a.II_, {
          id: "input-device-meter",
          control: () => (0, r.jsx)(O.Z, {
            notchBackground: O._.BLACK,
            location: {
              section: x.jXE.CONTEXT_MENU
            },
            meterOnly: true,
            containerClassName: w.customMenuItem,
            notchClassName: w.customNotches
          })
        }), Z && B]
      }), (0, r.jsxs)(a.kSQ, {
        children: [I && j.isPlatformEmbedded && X ? (0, r.jsx)(a.S89, {
          checked: q === x.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: _.intl.string(_.t.Q8gkVL),
          action: () => s.Z.setMode(K, true, true, {
            analyticsLocations: R
          }),
          disabled: Y === E._.STUDIO
        }) : null, N && (0, r.jsx)(a.S89, {
          id: "deafen",
          label: _.intl.string(_.t.wjcRFX),
          action: () => s.Z.toggleSelfDeaf({
            context: G,
            location: "AudioDeviceMenu"
          }),
          checked: W
        }, "self-deafen"), L && V]
      })]
    })
  })
}