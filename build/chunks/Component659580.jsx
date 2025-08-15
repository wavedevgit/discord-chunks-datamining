/** Chunk was on 96750 **/
/** chunk id: 659580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk650958 = require("./650958.jsx"),
  Chunk821564 = require("./821564.jsx"),
  Chunk453925 = require("./453925.jsx"),
  Chunk967003 = require("./967003.jsx"),
  Chunk632304 = require("./632304.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk822556 = require("./822556.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk895634 = require("./895634.js");

function x(e) {
  let {
    onClose: t,
    renderOutputDevices: n = false,
    renderInputDevices: x = false,
    renderInputProfiles: E = false,
    renderInputModes: P = false,
    renderInputVolume: C = false,
    renderOutputVolume: T = false,
    renderDeafen: N = false,
    minimal: A = false,
    onSelect: w,
    appContext: D,
    onInteraction: Z
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
  let M = (0, _.Z)(D),
    k = (0, f.M)({
      deviceType: S.h7.AUDIO_INPUT,
      analyticsLocations: L,
      asSubmenu: A
    }),
    U = (0, f.M)({
      deviceType: S.h7.AUDIO_OUTPUT,
      analyticsLocations: L,
      asSubmenu: A
    }),
    R = (0, l.e7)([b.Z], () => b.Z.getActiveInputProfile()),
    V = (0, g.Z)(L),
    F = (0, p.Z)(L),
    G = (0, m.Z)(L),
    B = (0, h.Z)(L),
    W = a.Yn.DEFAULT,
    H = b.Z.isSelfDeaf(W),
    Y = (0, l.e7)([b.Z], () => b.Z.getMode()),
    z = Y === y.pM4.VOICE_ACTIVITY ? y.pM4.PUSH_TO_TALK : y.pM4.VOICE_ACTIVITY;
  return (0, r.jsx)(c.Z, {
    object: y.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(o.v2r, {
      onSelect: w,
      onInteraction: Z,
      className: j.menu,
      onClose: t,
      navId: "audio-device-context",
      "aria-label": I.intl.string(I.t.ZR1Ss7),
      children: [x && k, n && U, E && V, !A && P && R !== O._.STUDIO ? (0, r.jsx)(o.kSQ, {
        label: I.intl.string(I.t["pS+K2N"]),
        children: F
      }) : null, (0, r.jsxs)(o.kSQ, {
        children: [C ? G : null, T ? B : null, A ? (0, r.jsx)(o.Clw, {}) : null, A && N ? (0, r.jsx)(o.S89, {
          id: "deafen",
          label: I.intl.string(I.t.wjcRFR),
          action: () => s.Z.toggleSelfDeaf({
            context: W,
            location: "AudioDeviceMenu"
          }),
          checked: H
        }, "self-deafen") : null, A && x && v.isPlatformEmbedded ? (0, r.jsx)(o.S89, {
          checked: Y === y.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: I.intl.string(I.t.Q8gkVF),
          action: () => s.Z.setMode(z, true, true, {
            analyticsLocations: L
          }),
          disabled: R === O._.STUDIO
        }) : null, M]
      })]
    })
  })
}