/** Chunk was on web.js **/
/** chunk id: 659580, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  default: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk46973 = require("./46973.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk906732 = require("./906732.js"),
  Chunk213609 = require("./213609.js"),
  Chunk650958 = require("./650958.jsx"),
  Chunk821564 = require("./821564.js"),
  Chunk453925 = require("./453925.jsx"),
  Chunk967003 = require("./967003.js"),
  Chunk632304 = require("./632304.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk822556 = require("./822556.js"),
  Chunk981631 = require("./981631.js"),
  Chunk345655 = require("./345655.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk292538 = require("./292538.js");

function S(e) {
  let {
    onClose: t,
    renderOutputDevices: n = false,
    renderInputDevices: S = false,
    renderInputProfiles: A = false,
    renderInputModes: N = false,
    renderInputVolume: C = false,
    renderOutputVolume: R = false,
    renderDeafen: P = false,
    minimal: w = false,
    onSelect: D,
    appContext: L,
    onInteraction: x
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
  let k = (0, b.Z)(L),
    j = (0, f.M)({
      deviceType: v.h7.AUDIO_INPUT,
      analyticsLocations: M,
      asSubmenu: w
    }),
    U = (0, f.M)({
      deviceType: v.h7.AUDIO_OUTPUT,
      analyticsLocations: M,
      asSubmenu: w
    }),
    G = (0, o.e7)([g.Z], () => g.Z.getActiveInputProfile()),
    B = (0, h.Z)(M),
    Z = (0, _.Z)(M),
    F = (0, p.Z)(M),
    V = (0, m.Z)(M),
    H = a.Yn.DEFAULT,
    Y = g.Z.isSelfDeaf(H),
    W = (0, o.e7)([g.Z], () => g.Z.getMode()),
    K = W === y.pM4.VOICE_ACTIVITY ? y.pM4.PUSH_TO_TALK : y.pM4.VOICE_ACTIVITY;
  return <c.Z object={y.qAy.CONTEXT_MENU}><s.v2r onSelect={D} onInteraction={x} className={T.menu} onClose={t} navId={"audio-device-context"} aria-label={I.intl.string(I.t.ZR1Ss7)}>{S && j}{n && U}{A && B}{!w && N && G !== O._.STUDIO ? <s.kSQ label={I.intl.string(I.t["pS+K2N"])}>{Z}</s.kSQ> : null}{<s.kSQ>{C ? F : null}{R ? V : null}{w ? <s.Clw /> : null}{w && P ? <s.S89 id={"deafen"} label={I.intl.string(I.t.wjcRFR)} action={() => l.Z.toggleSelfDeaf({
            context: H,
            location: "AudioDeviceMenu"
          })} checked={Y} /> : null}{w && S && E.isPlatformEmbedded ? <s.S89 checked={W === y.pM4.PUSH_TO_TALK} id={"input-mode"} label={I.intl.string(I.t.Q8gkVF)} action={() => l.Z.setMode(K, true, true, {
            analyticsLocations: M
          })} disabled={G === O._.STUDIO} /> : null}{k}</s.kSQ>}</s.v2r></c.Z>
}