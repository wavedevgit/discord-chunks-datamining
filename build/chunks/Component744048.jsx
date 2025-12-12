/** Chunk was on web.js **/
/** chunk id: 744048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907459 = require("./907459.jsx"),
  Chunk90110 = require("./90110.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk662975 = require("./662975.js"),
  Chunk724145 = require("./724145.jsx"),
  Chunk884134 = require("./884134.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk550385 = require("./550385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk852750 = require("./852750.js");
let O = function(e) {
  let {
    mobile: t
  } = e, n = (0, i.e7)([_.Z], () => _.Z.getLayers().includes(E.S9g.USER_SETTINGS)), O = (0, i.e7)([m.default], () => h.ZP.canUseClientThemes(m.default.getCurrentUser())), v = (0, i.e7)([l.Z], () => l.Z.isCoachmark), S = (0, c.g)(), {
    activePanel: I,
    metadata: T
  } = (0, g.oq)(), C = [];
  !n && null == I && (v && !O && C.push(a.z.CLIENT_THEMES_COACHMARK), S && O && C.push(a.z.CUSTOM_THEME_COACHMARK));
  let [A, N] = (0, p.US)(C, b.R.SIDEBAR, true), P = A === a.z.CLIENT_THEMES_COACHMARK, R = A === a.z.CUSTOM_THEME_COACHMARK;
  if (n) return null;
  let w = I === g.wh.CLIENT_THEMES || P,
    D = I === g.wh.APP_ICON,
    x = I === g.wh.CUSTOM_THEME || R,
    L = I === g.wh.APPLICATION_TEST_MODE_DEBUG;
  if (!(w || D || x || L)) return null;
  let j = () => (0, r.jsxs)(r.Fragment, {
    children: [w && (0, r.jsx)(u.Z, {
      markAsDismissed: P ? N : () => {
        (0, f.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
          dismissAction: b.L.INDIRECT_ACTION,
          forceTrack: true
        })
      },
      showClientThemesCoachmark: P
    }), D && (0, r.jsx)(o.Z, {
      isCoachmark: false,
      markAsDismissed: N
    }), x && (0, r.jsx)(d.Z, {
      metadata: null != T ? T : {},
      markAsDismissed: N,
      isCoachmark: R,
      isMobile: t
    }), L && (0, r.jsx)(s.Z, {})]
  });
  return t ? (0, r.jsx)("div", {
    className: y.mobileContainer,
    children: j()
  }) : j()
}