/** Chunk was on 78827 **/
/** chunk id: 385318, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk205693 = require("./205693.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk48435 = require("./48435.jsx"),
  Chunk813977 = require("./813977.jsx"),
  Chunk485873 = require("./485873.jsx"),
  Chunk24933 = require("./24933.jsx"),
  Chunk964592 = require("./964592.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk819027 = require("./819027.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk509381 = require("./509381.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk220636 = require("./220636.js");

function E(e) {
  let {
    onClose: t,
    renderOutputDevices: i = false,
    renderInputDevices: E = false,
    renderInputProfiles: S = false,
    renderInputModes: x = false,
    renderInputVolume: C = false,
    renderOutputVolume: D = false,
    renderDeafen: V = false,
    minimal: j = false,
    onSelect: k,
    appContext: L,
    onInteraction: M
  } = e, {
    analyticsLocations: N
  } = (0, r.Ay)();
  (0, A.A)({
    type: l.ImpressionTypes.MENU,
    name: l.ImpressionNames.AUDIO_DEVICE_MENU,
    properties: {
      location_stack: N
    }
  });
  let P = (0, U.A)(L),
    y = (0, T.H)({
      deviceType: v.oh.AUDIO_INPUT,
      analyticsLocations: N,
      asSubmenu: j
    }),
    B = (0, T.H)({
      deviceType: v.oh.AUDIO_OUTPUT,
      analyticsLocations: N,
      asSubmenu: j
    }),
    H = (0, s.bG)([_.A], () => _.A.getActiveInputProfile()),
    X = (0, p.A)(N),
    K = (0, I.A)(N),
    w = (0, u.A)(N),
    G = (0, b.A)(N),
    Y = d.x.DEFAULT,
    F = _.A.isSelfDeaf(Y),
    Q = (0, s.bG)([_.A], () => _.A.getMode()),
    R = Q === g.TBI.VOICE_ACTIVITY ? g.TBI.PUSH_TO_TALK : g.TBI.VOICE_ACTIVITY;
  return (0, n.jsx)(c.A, {
    object: g.ZSU.CONTEXT_MENU,
    children: (0, n.jsxs)(o.W1t, {
      onSelect: k,
      onInteraction: M,
      className: O.MK,
      onClose: t,
      navId: "audio-device-context",
      variant: "fixed",
      "aria-label": f.intl.string(f.t.ZR1Ss6),
      children: [E && y, i && B, S && X, !j && x && H !== m.my.STUDIO ? (0, n.jsx)(o.rXV, {
        label: f.intl.string(f.t["pS+K2L"]),
        children: K
      }) : null, (0, n.jsxs)(o.rXV, {
        children: [C ? w : null, D ? G : null, j ? (0, n.jsx)(o.bXX, {}) : null, j && V ? (0, n.jsx)(o.sLh, {
          id: "deafen",
          label: f.intl.string(f.t.wjcRFX),
          action: () => a.A.toggleSelfDeaf({
            context: Y,
            location: "AudioDeviceMenu"
          }),
          checked: F
        }, "self-deafen") : null, j && E && h.isPlatformEmbedded ? (0, n.jsx)(o.sLh, {
          checked: Q === g.TBI.PUSH_TO_TALK,
          id: "input-mode",
          label: f.intl.string(f.t.Q8gkVL),
          action: () => a.A.setMode(R, true, true, {
            analyticsLocations: N
          }),
          disabled: H === m.my.STUDIO
        }) : null, P]
      })]
    })
  })
}