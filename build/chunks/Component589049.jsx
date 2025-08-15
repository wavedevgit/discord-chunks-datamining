/** Chunk was on 80125 **/
/** chunk id: 589049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk174609 = require("./174609.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e = (0, Chunk40851.bp)(),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)();
  return module === Chunk981631.IlC.APP || Chunk358085.isPlatformEmbedded ? (0, Chunk255367.jsx)(Chunk481060.sNh, {
    id: "voice-and-video-settings",
    label: Chunk388032.intl.string(Chunk388032.t.dsXapK),
    action: () => {
      (0, Chunk174609.Z)(), Chunk230711.Z.open(Chunk981631.oAB.VOICE, null, {
        analyticsLocations: exports
      })
    },
    icon: Chunk481060.ewm
  }) : null
}