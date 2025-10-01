/** Chunk was on web.js **/
/** chunk id: 744048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk921944 = require("./921944.js"),
  Chunk537272 = require("./537272.js");
let I = function(e) {
  let {
    mobile: t
  } = e, n = (0, i.e7)([m.Z], () => m.Z.getLayers().includes(y.S9g.USER_SETTINGS)), I = (0, i.e7)([g.default], () => E.ZP.canUseClientThemes(g.default.getCurrentUser())), T = (0, i.e7)([s.Z], () => s.Z.isCoachmark), S = (0, c.g)(), {
    v2EditorEnabled: A
  } = l.Mc.useExperiment({
    location: "AppRightSidePanel"
  }), {
    activePanel: C,
    metadata: N
  } = (0, b.oq)(), R = [];
  !n && null == C && (T && !I && R.push(a.z.CLIENT_THEMES_COACHMARK), S && R.push(a.z.CUSTOM_THEME_COACHMARK));
  let [P, w] = (0, h.US)(R, O.R.SIDEBAR, true), D = P === a.z.CLIENT_THEMES_COACHMARK, L = P === a.z.CUSTOM_THEME_COACHMARK;
  if ((0, d.HA)(S, P), n) return null;
  let x = A ? _.Z : f.Z,
    j = C === b.wh.CLIENT_THEMES || D,
    M = C === b.wh.APP_ICON,
    k = C === b.wh.CUSTOM_THEME || L;
  if (!(j || M || k)) return null;
  let U = () => (0, r.jsxs)(r.Fragment, {
    children: [j && (0, r.jsx)(u.Z, {
      markAsDismissed: D ? w : () => {
        (0, p.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
          dismissAction: O.L.INDIRECT_ACTION,
          forceTrack: true
        })
      },
      showClientThemesCoachmark: D
    }), M && (0, r.jsx)(o.Z, {
      isCoachmark: false,
      markAsDismissed: w
    }), k && (0, r.jsx)(x, {
      metadata: null != N ? N : {},
      markAsDismissed: w,
      isCoachmark: L,
      isMobile: t
    })]
  });
  return t ? (0, r.jsx)("div", {
    className: v.mobileContainer,
    children: U()
  }) : U()
}