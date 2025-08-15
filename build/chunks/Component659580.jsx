/** Chunk was on 96750 **/
/** chunk id: 659580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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

function I(e) {
  let {
    onClose: t,
    renderOutputDevices: n = false,
    renderInputDevices: I = false,
    renderInputProfiles: P = false,
    renderInputModes: C = false,
    renderInputVolume: E = false,
    renderOutputVolume: w = false,
    renderDeafen: T = false,
    minimal: N = false,
    onSelect: Z,
    appContext: A,
    onInteraction: D
  } = e, {
    analyticsLocations: k
  } = (0, u.ZP)();
  (0, d.Z)({
    type: i.ImpressionTypes.MENU,
    name: i.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: k
    }
  });
  let L = (0, h.Z)(A),
    M = (0, p.M)({
      deviceType: j.h7.AUDIO_INPUT,
      analyticsLocations: k,
      asSubmenu: N
    }),
    U = (0, p.M)({
      deviceType: j.h7.AUDIO_OUTPUT,
      analyticsLocations: k,
      asSubmenu: N
    }),
    R = (0, l.e7)([_.Z], () => _.Z.getActiveInputProfile()),
    V = (0, g.Z)(k),
    F = (0, f.Z)(k),
    B = (0, m.Z)(k),
    W = (0, v.Z)(k),
    Y = a.Yn.DEFAULT,
    H = _.Z.isSelfDeaf(Y),
    G = (0, l.e7)([_.Z], () => _.Z.getMode()),
    z = G === y.pM4.VOICE_ACTIVITY ? y.pM4.PUSH_TO_TALK : y.pM4.VOICE_ACTIVITY;
  return (0, r.jsx)(c.Z, {
    object: y.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(o.v2r, {
      onSelect: Z,
      onInteraction: D,
      className: x.menu,
      onClose: t,
      navId: "audio-device-context",
      "aria-label": S.intl.string(S.t.ZR1Ss7),
      children: [I && M, n && U, P && V, !N && C && R !== O._.STUDIO ? (0, r.jsx)(o.kSQ, {
        label: S.intl.string(S.t["pS+K2N"]),
        children: F
      }) : null, (0, r.jsxs)(o.kSQ, {
        children: [E ? B : null, w ? W : null, N ? (0, r.jsx)(o.Clw, {}) : null, N && T ? (0, r.jsx)(o.S89, {
          id: "deafen",
          label: S.intl.string(S.t.wjcRFR),
          action: () => s.Z.toggleSelfDeaf({
            context: Y,
            location: "AudioDeviceMenu"
          }),
          checked: H
        }, "self-deafen") : null, N && I && b.isPlatformEmbedded ? (0, r.jsx)(o.S89, {
          checked: G === y.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: S.intl.string(S.t.Q8gkVF),
          action: () => s.Z.setMode(z, true, true, {
            analyticsLocations: k
          }),
          disabled: R === O._.STUDIO
        }) : null, L]
      })]
    })
  })
}