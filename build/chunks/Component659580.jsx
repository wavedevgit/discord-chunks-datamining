/** Chunk was on web.js **/
/** chunk id: 659580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => S
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

function S(e) {
  let {
    onClose: t,
    renderOutputDevices: n = false,
    renderInputDevices: S = false,
    renderInputProfiles: A = false,
    renderInputModes: C = false,
    renderInputVolume: N = false,
    renderOutputVolume: R = false,
    renderDeafen: P = false,
    minimal: w = false,
    onSelect: D,
    appContext: x,
    onInteraction: L
  } = e, {
    analyticsLocations: j
  } = (0, u.ZP)();
  (0, d.Z)({
    type: i.ImpressionTypes.MENU,
    name: i.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: j
    }
  });
  let k = (0, b.Z)(x),
    M = (0, f.M)({
      deviceType: v.h7.AUDIO_INPUT,
      analyticsLocations: j,
      asSubmenu: w
    }),
    U = (0, f.M)({
      deviceType: v.h7.AUDIO_OUTPUT,
      analyticsLocations: j,
      asSubmenu: w
    }),
    G = (0, a.e7)([g.Z], () => g.Z.getActiveInputProfile()),
    B = (0, h.Z)(j),
    Z = (0, _.Z)(j),
    F = (0, p.Z)(j),
    V = (0, m.Z)(j),
    H = o.Yn.DEFAULT,
    Y = g.Z.isSelfDeaf(H),
    W = (0, a.e7)([g.Z], () => g.Z.getMode()),
    K = W === y.pM4.VOICE_ACTIVITY ? y.pM4.PUSH_TO_TALK : y.pM4.VOICE_ACTIVITY;
  return (0, r.jsx)(c.Z, {
    object: y.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(s.v2r, {
      onSelect: D,
      onInteraction: L,
      className: T.menu,
      onClose: t,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": I.intl.string(I.t.ZR1Ss7),
      children: [S && M, n && U, A && B, !w && C && G !== O._.STUDIO ? (0, r.jsx)(s.kSQ, {
        label: I.intl.string(I.t["pS+K2N"]),
        children: Z
      }) : null, (0, r.jsxs)(s.kSQ, {
        children: [N ? F : null, R ? V : null, w ? (0, r.jsx)(s.Clw, {}) : null, w && P ? (0, r.jsx)(s.S89, {
          id: "deafen",
          label: I.intl.string(I.t.wjcRFR),
          action: () => l.Z.toggleSelfDeaf({
            context: H,
            location: "AudioDeviceMenu"
          }),
          checked: Y
        }, "self-deafen") : null, w && S && E.isPlatformEmbedded ? (0, r.jsx)(s.S89, {
          checked: W === y.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: I.intl.string(I.t.Q8gkVF),
          action: () => l.Z.setMode(K, true, true, {
            analyticsLocations: j
          }),
          disabled: G === O._.STUDIO
        }) : null, k]
      })]
    })
  })
}