/** Chunk was on 84007 **/
/** chunk id: 659580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
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

function A(e) {
  let {
    onClose: t,
    renderOutputDevices: n = false,
    renderInputDevices: A = false,
    renderInputProfiles: O = false,
    renderInputModes: b = false,
    renderInputVolume: k = false,
    renderOutputVolume: C = false,
    renderDeafen: E = false,
    minimal: x = false,
    onSelect: j,
    appContext: D,
    onInteraction: P
  } = e, {
    analyticsLocations: V
  } = (0, r.ZP)();
  (0, u.Z)({
    type: l.ImpressionTypes.MENU,
    name: l.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: V
    }
  });
  let N = (0, M.Z)(D),
    L = (0, p.M)({
      deviceType: U.h7.AUDIO_INPUT,
      analyticsLocations: V,
      asSubmenu: x
    }),
    y = (0, p.M)({
      deviceType: U.h7.AUDIO_OUTPUT,
      analyticsLocations: V,
      asSubmenu: x
    }),
    w = (0, s.e7)([f.Z], () => f.Z.getActiveInputProfile()),
    H = (0, Z.Z)(V),
    K = (0, T.Z)(V),
    Q = (0, I.Z)(V),
    Y = (0, _.Z)(V),
    B = d.Yn.DEFAULT,
    F = f.Z.isSelfDeaf(B),
    R = (0, s.e7)([f.Z], () => f.Z.getMode()),
    X = R === S.pM4.VOICE_ACTIVITY ? S.pM4.PUSH_TO_TALK : S.pM4.VOICE_ACTIVITY;
  return (0, i.jsx)(c.Z, {
    object: S.qAy.CONTEXT_MENU,
    children: (0, i.jsxs)(o.v2r, {
      onSelect: j,
      onInteraction: P,
      className: m.menu,
      onClose: t,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": h.intl.string(h.t.ZR1Ss6),
      children: [A && L, n && y, O && H, !x && b && w !== g._.STUDIO ? (0, i.jsx)(o.kSQ, {
        label: h.intl.string(h.t["pS+K2L"]),
        children: K
      }) : null, (0, i.jsxs)(o.kSQ, {
        children: [k ? Q : null, C ? Y : null, x ? (0, i.jsx)(o.Clw, {}) : null, x && E ? (0, i.jsx)(o.S89, {
          id: "deafen",
          label: h.intl.string(h.t.wjcRFX),
          action: () => a.Z.toggleSelfDeaf({
            context: B,
            location: "AudioDeviceMenu"
          }),
          checked: F
        }, "self-deafen") : null, x && A && v.isPlatformEmbedded ? (0, i.jsx)(o.S89, {
          checked: R === S.pM4.PUSH_TO_TALK,
          id: "input-mode",
          label: h.intl.string(h.t.Q8gkVL),
          action: () => a.Z.setMode(X, true, true, {
            analyticsLocations: V
          }),
          disabled: w === g._.STUDIO
        }) : null, N]
      })]
    })
  })
}