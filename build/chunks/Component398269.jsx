/** Chunk was on web.js **/
/** chunk id: 398269, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => f
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk608787 = require("./608787.jsx"),
  Chunk765250 = require("./765250.js"),
  Chunk788983 = require("./788983.js"),
  Chunk355863 = require("./355863.js"),
  Chunk837268 = require("./837268.js"),
  Chunk32300 = require("./32300.js"),
  Chunk757744 = require("./757744.js"),
  Chunk501787 = require("./501787.js");
async function f() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk837268.R5.UNSET,
    t = {
      outOfProcessOverlay: true,
      focusable: false
    },
    f = (0, Chunk32300.Rb)("openOverlayPopout").overlayV3UI;
  if (!f && module === Chunk837268.R5.UNSET) return;
  let _ = module === Chunk837268.R5.OUT_OF_PROCESS_V3 || module === Chunk837268.R5.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
    p = e => null;
  if (f || _) {
    let e = (0, Chunk608787.Un)({
      createPromise: () => Promise.all([require.e("14006"), require.e("35535"), require.e("25292"), require.e("80417"), require.e("90508"), require.e("96750"), require.e("70205"), require.e("88712"), require.e("16766"), require.e("24255"), require.e("82096"), require.e("92922"), require.e("46290"), require.e("29709"), require.e("47218"), require.e("13368")]).then(require.bind(require, 989373)),
      webpackId: 989373,
      name: "AppOverlay"
    });
    p = t => (0, r.jsx)(e, {
      withTitleBar: false,
      windowKey: t
    }), (0, Chunk765250.te)(Chunk757744.$S, Chunk355863.Z.getDefaultLayout(Chunk757744.$S, Chunk757744.HN), Chunk757744.HN)
  } else throw Error("OverlayV3Utils: No overlay rendering mode found");
  await Chunk788983.bA(Chunk501787.$J, p, exports)
}