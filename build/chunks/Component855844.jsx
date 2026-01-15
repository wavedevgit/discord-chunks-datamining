/** Chunk was on 13478 **/
/** chunk id: 855844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
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

function w(e) {
  let {
    appContext: t,
    onInteraction: n,
    onSelect: w,
    onClose: I,
    maybeRenderPTTCheckbox: T = false,
    renderDeafenCheckbox: S = false,
    renderInputProfiles: N = false,
    renderOutputDevices: Z = false,
    renderOutputVolume: k = false,
    renderInputDevices: D = false,
    renderInputVolume: M = false,
    maybeRenderInputMeter: A = false,
    renderSettingsButton: R = false
  } = e, {
    analyticsLocations: L
  } = (0, u.ZP)();
  (0, d.Z)({
    type: i.ImpressionTypes.MENU,
    name: i.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: L
    }
  });
  let V = (0, h.Z)(t),
    F = (0, p.M)({
      deviceType: P.h7.AUDIO_INPUT,
      analyticsLocations: L,
      asSubmenu: true
    }),
    U = (0, p.M)({
      deviceType: P.h7.AUDIO_OUTPUT,
      analyticsLocations: L,
      asSubmenu: true
    }),
    Y = (0, o.e7)([g.Z], () => g.Z.getActiveInputProfile()),
    H = (0, f.Z)(L),
    z = (0, m.Z)(L),
    B = (0, b.Z)(L),
    q = l.Yn.DEFAULT,
    W = g.Z.isSelfDeaf(q),
    X = (0, o.e7)([g.Z], () => g.Z.getMode()),
    G = X === x.pM4.VOICE_ACTIVITY ? x.pM4.PUSH_TO_TALK : x.pM4.VOICE_ACTIVITY,
    K = (0, o.e7)([g.Z, y.ZP], () => {
      var e;
      let t = (null == (e = g.Z.getModeOptions().shortcut) ? true : e.length) > 0,
        n = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK, false, true),
        r = null != y.ZP.getKeybindForAction(x.kg4.PUSH_TO_TALK_PRIORITY, false, true);
      return t || n || r
    }),
    Q = (0, o.e7)([v.Z], () => null != v.Z.getChannelId());
  return (0, r.jsx)(c.Z, {
    object: x.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(a.v2r, {
      onSelect: w,
      onInteraction: n,
      onClose: I,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": C.intl.string(C.t.ZR1Ss6),
      className: E.menu,
      children: [(0, r.jsxs)(a.kSQ, {
        children: [D && F, N && H, Z && U]
      }), (0, r.jsxs)(a.kSQ, {
        children: [M && z, A && Q && (0, r.jsx)(a.II_, {
          id: "input-device-meter",
          control: () => (0, r.jsx)(j.Z, {
            notchBackground: j._.BLACK,
            location: {
              section: x.jXE.CONTEXT_MENU
            },
            meterOnly: true,
            containerClassName: E.customMenuItem,
            notchClassName: E.customNotches
          })
        }), k && B]
      }), (0, r.jsxs)(a.kSQ, {
        children: [T && O.isPlatformEmbedded && K ? (0, r.jsx)(a.S89, {
          checked: X === x.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: C.intl.string(C.t.Q8gkVL),
          action: () => s.Z.setMode(G, true, true, {
            analyticsLocations: L
          }),
          disabled: Y === _._.STUDIO
        }) : null, S && (0, r.jsx)(a.S89, {
          id: "deafen",
          label: C.intl.string(C.t.wjcRFX),
          action: () => s.Z.toggleSelfDeaf({
            context: q,
            location: "AudioDeviceMenu"
          }),
          checked: W
        }, "self-deafen"), R && V]
      })]
    })
  })
}