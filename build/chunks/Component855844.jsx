/** Chunk was on web.js **/
/** chunk id: 855844, original params: e,t,n (module,exports,re quire) **/
"use strict";
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

function C(e) {
  let {
    appContext: t,
    onInteraction: n,
    onSelect: C,
    onClose: N,
    maybeRenderPTTCheckbox: R = false,
    renderDeafenCheckbox: P = false,
    renderInputProfiles: w = false,
    renderOutputDevices: D = false,
    renderOutputVolume: x = false,
    renderInputDevices: L = false,
    renderInputVolume: j = false,
    maybeRenderInputMeter: k = false,
    renderSettingsButton: M = false
  } = e, {
    analyticsLocations: U
  } = (0, d.ZP)();
  (0, f.Z)({
    type: i.ImpressionTypes.MENU,
    name: i.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: U
    }
  });
  let G = (0, O.Z)(t),
    B = (0, _.M)({
      deviceType: T.h7.AUDIO_INPUT,
      analyticsLocations: U,
      asSubmenu: true
    }),
    Z = (0, _.M)({
      deviceType: T.h7.AUDIO_OUTPUT,
      analyticsLocations: U,
      asSubmenu: true
    }),
    F = (0, a.e7)([g.Z], () => g.Z.getActiveInputProfile()),
    V = (0, h.Z)(U),
    H = (0, p.Z)(U),
    Y = (0, m.Z)(U),
    W = o.Yn.DEFAULT,
    K = g.Z.isSelfDeaf(W),
    z = (0, a.e7)([g.Z], () => g.Z.getMode()),
    q = z === v.pM4.VOICE_ACTIVITY ? v.pM4.PUSH_TO_TALK : v.pM4.VOICE_ACTIVITY,
    X = (0, a.e7)([g.Z, b.ZP], () => {
      var e;
      let t = (null == (e = g.Z.getModeOptions().shortcut) ? true : e.length) > 0,
        n = null != b.ZP.getKeybindForAction(v.kg4.PUSH_TO_TALK, false, true),
        r = null != b.ZP.getKeybindForAction(v.kg4.PUSH_TO_TALK_PRIORITY, false, true);
      return t || n || r
    }),
    Q = (0, a.e7)([E.Z], () => null != E.Z.getChannelId());
  return (0, r.jsx)(u.Z, {
    object: v.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(s.v2r, {
      onSelect: C,
      onInteraction: n,
      onClose: N,
      navId: "audio-device-context",
      "aria-label": S.intl.string(S.t.ZR1Ss7),
      className: A.menu,
      children: [(0, r.jsxs)(s.kSQ, {
        children: [L && B, w && V, D && Z]
      }), (0, r.jsxs)(s.kSQ, {
        children: [j && H, k && Q && (0, r.jsx)(s.II_, {
          id: "input-device-meter",
          control: () => (0, r.jsx)(c.Z, {
            notchBackground: c._.BLACK,
            location: {
              section: v.jXE.CONTEXT_MENU
            },
            meterOnly: true,
            containerClassName: A.customMenuItem
          })
        }), x && Y]
      }), (0, r.jsxs)(s.kSQ, {
        children: [R && y.isPlatformEmbedded && X ? (0, r.jsx)(s.S89, {
          checked: z === v.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: S.intl.string(S.t.Q8gkVF),
          action: () => l.Z.setMode(q, true, true, {
            analyticsLocations: U
          }),
          disabled: F === I._.STUDIO
        }) : null, P && (0, r.jsx)(s.S89, {
          id: "deafen",
          label: S.intl.string(S.t.wjcRFR),
          action: () => l.Z.toggleSelfDeaf({
            context: W,
            location: "AudioDeviceMenu"
          }),
          checked: K
        }, "self-deafen"), M && G]
      })]
    })
  })
}