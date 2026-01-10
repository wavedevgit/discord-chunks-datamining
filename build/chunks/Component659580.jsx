/** Chunk was on 13478 **/
/** chunk id: 659580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
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
  Chunk898742 = require("./898742.js");

function C(e) {
  let {
    onClose: t,
    renderOutputDevices: n = false,
    renderInputDevices: C = false,
    renderInputProfiles: E = false,
    renderInputModes: w = false,
    renderInputVolume: I = false,
    renderOutputVolume: T = false,
    renderDeafen: S = false,
    minimal: N = false,
    onSelect: Z,
    appContext: k,
    onInteraction: D
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
  let A = (0, O.Z)(k),
    R = (0, p.M)({
      deviceType: x.h7.AUDIO_INPUT,
      analyticsLocations: M,
      asSubmenu: N
    }),
    V = (0, p.M)({
      deviceType: x.h7.AUDIO_OUTPUT,
      analyticsLocations: M,
      asSubmenu: N
    }),
    L = (0, o.e7)([v.Z], () => v.Z.getActiveInputProfile()),
    F = (0, b.Z)(M),
    U = (0, m.Z)(M),
    Y = (0, f.Z)(M),
    H = (0, g.Z)(M),
    z = l.Yn.DEFAULT,
    B = v.Z.isSelfDeaf(z),
    q = (0, o.e7)([v.Z], () => v.Z.getMode()),
    W = q === j.pM4.VOICE_ACTIVITY ? j.pM4.PUSH_TO_TALK : j.pM4.VOICE_ACTIVITY;
  return (0, r.jsx)(c.Z, {
    object: j.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(a.v2r, {
      onSelect: Z,
      onInteraction: D,
      className: P.menu,
      onClose: t,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": _.intl.string(_.t.ZR1Ss6),
      children: [C && R, n && V, E && F, !N && w && L !== h._.STUDIO ? (0, r.jsx)(a.kSQ, {
        label: _.intl.string(_.t["pS+K2L"]),
        children: U
      }) : null, (0, r.jsxs)(a.kSQ, {
        children: [I ? Y : null, T ? H : null, N ? (0, r.jsx)(a.Clw, {}) : null, N && S ? (0, r.jsx)(a.S89, {
          id: "deafen",
          label: _.intl.string(_.t.wjcRFX),
          action: () => s.Z.toggleSelfDeaf({
            context: z,
            location: "AudioDeviceMenu"
          }),
          checked: B
        }, "self-deafen") : null, N && C && y.isPlatformEmbedded ? (0, r.jsx)(a.S89, {
          checked: q === j.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: _.intl.string(_.t.Q8gkVL),
          action: () => s.Z.setMode(W, true, true, {
            analyticsLocations: M
          }),
          disabled: L === h._.STUDIO
        }) : null, A]
      })]
    })
  })
}