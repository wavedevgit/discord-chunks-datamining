/** Chunk was on 86863 **/
/** chunk id: 659580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk371882 = require("./371882.js");

function _(e) {
  let {
    onClose: t,
    renderOutputDevices: n = false,
    renderInputDevices: _ = false,
    renderInputProfiles: w = false,
    renderInputModes: C = false,
    renderInputVolume: S = false,
    renderOutputVolume: I = false,
    renderDeafen: N = false,
    minimal: T = false,
    onSelect: D,
    appContext: Z,
    onInteraction: k
  } = e, {
    analyticsLocations: M
  } = (0, u.ZP)();
  (0, d.Z)({
    type: i.ImpressionTypes.MENU,
    name: i.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: M
    }
  });
  let A = (0, j.Z)(Z),
    L = (0, p.M)({
      deviceType: x.h7.AUDIO_INPUT,
      analyticsLocations: M,
      asSubmenu: T
    }),
    R = (0, p.M)({
      deviceType: x.h7.AUDIO_OUTPUT,
      analyticsLocations: M,
      asSubmenu: T
    }),
    V = (0, o.e7)([g.Z], () => g.Z.getActiveInputProfile()),
    F = (0, b.Z)(M),
    U = (0, m.Z)(M),
    Y = (0, f.Z)(M),
    H = (0, v.Z)(M),
    z = l.Yn.DEFAULT,
    B = g.Z.isSelfDeaf(z),
    G = (0, o.e7)([g.Z], () => g.Z.getMode()),
    W = G === O.pM4.VOICE_ACTIVITY ? O.pM4.PUSH_TO_TALK : O.pM4.VOICE_ACTIVITY;
  return (0, r.jsx)(c.Z, {
    object: O.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(a.v2r, {
      onSelect: D,
      onInteraction: k,
      className: P.menu,
      onClose: t,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": E.intl.string(E.t.ZR1Ss6),
      children: [_ && L, n && R, w && F, !T && C && V !== h._.STUDIO ? (0, r.jsx)(a.kSQ, {
        label: E.intl.string(E.t["pS+K2L"]),
        children: U
      }) : null, (0, r.jsxs)(a.kSQ, {
        children: [S ? Y : null, I ? H : null, T ? (0, r.jsx)(a.Clw, {}) : null, T && N ? (0, r.jsx)(a.S89, {
          id: "deafen",
          label: E.intl.string(E.t.wjcRFX),
          action: () => s.Z.toggleSelfDeaf({
            context: z,
            location: "AudioDeviceMenu"
          }),
          checked: B
        }, "self-deafen") : null, T && _ && y.isPlatformEmbedded ? (0, r.jsx)(a.S89, {
          checked: G === O.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: E.intl.string(E.t.Q8gkVL),
          action: () => s.Z.setMode(W, true, true, {
            analyticsLocations: M
          }),
          disabled: V === h._.STUDIO
        }) : null, A]
      })]
    })
  })
}