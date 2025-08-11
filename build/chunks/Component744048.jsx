/** Chunk was on web.js **/
/** chunk id: 744048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907459 = require("./907459.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk803038 = require("./803038.js"),
  Chunk662975 = require("./662975.js"),
  Chunk724145 = require("./724145.jsx"),
  Chunk771934 = require("./771934.js"),
  Chunk726034 = require("./726034.jsx"),
  Chunk884134 = require("./884134.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk550385 = require("./550385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js");
let v = function() {
  let e = (0, Chunk442837.e7)([Chunk819640.Z], () => Chunk819640.Z.getLayers().includes(Chunk981631.S9g.USER_SETTINGS)),
    t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk74538.ZP.canUseClientThemes(Chunk594174.default.getCurrentUser())),
    n = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.isCoachmark),
    v = (0, Chunk662975.g)(),
    {
      v2EditorEnabled: I
    } = Chunk803038.Mc.useExperiment({
      location: "AppRightSidePanel"
    }),
    {
      activePanel: T,
      metadata: S
    } = (0, Chunk550385.oq)(),
    A = [];
  !module && null == T && (require && !exports && A.push(Chunk704215.z.CLIENT_THEMES_COACHMARK), v && A.push(Chunk704215.z.CUSTOM_THEME_COACHMARK));
  let [N, C] = (0, Chunk243778.US)(A, Chunk921944.R.SIDEBAR, true), R = N === Chunk704215.z.CLIENT_THEMES_COACHMARK, P = N === Chunk704215.z.CUSTOM_THEME_COACHMARK;
  if ((0, Chunk771934.HA)(v, N), module) return null;
  let w = I ? Chunk884134.Z : Chunk726034.Z;
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(T === Chunk550385.wh.CLIENT_THEMES || R) && (0, Chunk255367.jsx)(Chunk724145.Z, {
      markAsDismissed: R ? C : () => {
        (0, Chunk266454.Q3)(Chunk704215.z.CLIENT_THEMES_COACHMARK, {
          dismissAction: Chunk921944.L.INDIRECT_ACTION,
          forceTrack: true
        })
      },
      showClientThemesCoachmark: R
    }), T === Chunk550385.wh.APP_ICON && (0, Chunk255367.jsx)(Chunk907459.Z, {
      isCoachmark: false,
      markAsDismissed: C
    }), (T === Chunk550385.wh.CUSTOM_THEME || P) && (0, Chunk255367.jsx)(w, {
      metadata: null != S ? S : {},
      markAsDismissed: C,
      isCoachmark: P
    })]
  })
}