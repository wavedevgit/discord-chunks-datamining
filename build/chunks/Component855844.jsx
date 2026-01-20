/** Chunk was on 6164 **/
/** chunk id: 855844, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => k
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  Chunk898742 = require("./898742.js");

function k(e) {
  let {
    appContext: t,
    onInteraction: r,
    onSelect: k,
    onClose: C,
    maybeRenderPTTCheckbox: I = false,
    renderDeafenCheckbox: D = false,
    renderInputProfiles: T = false,
    renderOutputDevices: E = false,
    renderOutputVolume: A = false,
    renderInputDevices: M = false,
    renderInputVolume: x = false,
    maybeRenderInputMeter: N = false,
    renderSettingsButton: U = false
  } = e, {
    analyticsLocations: V
  } = (0, s.ZP)();
  (0, b.Z)({
    type: o.ImpressionTypes.MENU,
    name: o.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: V
    }
  });
  let L = (0, P.Z)(t),
    R = (0, p.M)({
      deviceType: w.h7.AUDIO_INPUT,
      analyticsLocations: V,
      asSubmenu: true
    }),
    F = (0, p.M)({
      deviceType: w.h7.AUDIO_OUTPUT,
      analyticsLocations: V,
      asSubmenu: true
    }),
    B = (0, u.e7)([m.Z], () => m.Z.getActiveInputProfile()),
    Y = (0, f.Z)(V),
    H = (0, O.Z)(V),
    K = (0, d.Z)(V),
    Q = i.Yn.DEFAULT,
    X = m.Z.isSelfDeaf(Q),
    J = (0, u.e7)([m.Z], () => m.Z.getMode()),
    q = J === h.pM4.VOICE_ACTIVITY ? h.pM4.PUSH_TO_TALK : h.pM4.VOICE_ACTIVITY,
    G = (0, u.e7)([m.Z, g.ZP], () => {
      var e;
      let t = (null == (e = m.Z.getModeOptions().shortcut) ? true : e.length) > 0,
        r = null != g.ZP.getKeybindForAction(h.kg4.PUSH_TO_TALK, false, true),
        n = null != g.ZP.getKeybindForAction(h.kg4.PUSH_TO_TALK_PRIORITY, false, true);
      return t || r || n
    }),
    W = (0, u.e7)([y.Z], () => null != y.Z.getChannelId());
  return (0, n.jsx)(a.Z, {
    object: h.qAy.CONTEXT_MENU,
    children: (0, n.jsxs)(l.v2r, {
      onSelect: k,
      onInteraction: r,
      onClose: C,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": S.intl.string(S.t.ZR1Ss6),
      className: Z.menu,
      children: [(0, n.jsxs)(l.kSQ, {
        children: [M && R, T && Y, E && F]
      }), (0, n.jsxs)(l.kSQ, {
        children: [x && H, N && W && (0, n.jsx)(l.II_, {
          id: "input-device-meter",
          control: () => (0, n.jsx)(j.Z, {
            notchBackground: j._.BLACK,
            location: {
              section: h.jXE.CONTEXT_MENU
            },
            meterOnly: true,
            containerClassName: Z.customMenuItem,
            notchClassName: Z.customNotches
          })
        }), A && K]
      }), (0, n.jsxs)(l.kSQ, {
        children: [I && v.isPlatformEmbedded && G ? (0, n.jsx)(l.S89, {
          checked: J === h.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: S.intl.string(S.t.Q8gkVL),
          action: () => c.Z.setMode(q, true, true, {
            analyticsLocations: V
          }),
          disabled: B === _._.STUDIO
        }) : null, D && (0, n.jsx)(l.S89, {
          id: "deafen",
          label: S.intl.string(S.t.wjcRFX),
          action: () => c.Z.toggleSelfDeaf({
            context: Q,
            location: "AudioDeviceMenu"
          }),
          checked: X
        }, "self-deafen"), U && L]
      })]
    })
  })
}