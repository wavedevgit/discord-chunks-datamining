/** Chunk was on web.js **/
/** chunk id: 744048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907459 = require("./907459.jsx"),
  Chunk90110 = require("./90110.jsx"),
  Chunk514361 = require("./514361.js"),
  Chunk662975 = require("./662975.js"),
  Chunk724145 = require("./724145.jsx"),
  Chunk771934 = require("./771934.js"),
  Chunk884134 = require("./884134.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk550385 = require("./550385.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk223399 = require("./223399.js");
let v = function(e) {
  let {
    mobile: t
  } = e, n = (0, i.e7)([h.Z], () => h.Z.getLayers().includes(b.S9g.USER_SETTINGS)), v = (0, i.e7)([m.default], () => g.ZP.canUseClientThemes(m.default.getCurrentUser())), I = (0, i.e7)([l.Z], () => l.Z.isCoachmark), T = (0, c.g)(), {
    activePanel: S,
    metadata: A
  } = (0, E.oq)(), C = [];
  !n && null == S && (I && !v && C.push(a.z.CLIENT_THEMES_COACHMARK), T && C.push(a.z.CUSTOM_THEME_COACHMARK));
  let [N, R] = (0, p.US)(C, y.R.SIDEBAR, true), P = N === a.z.CLIENT_THEMES_COACHMARK, D = N === a.z.CUSTOM_THEME_COACHMARK;
  if ((0, d.HA)(T, N), n) return null;
  let w = S === E.wh.CLIENT_THEMES || P,
    L = S === E.wh.APP_ICON,
    x = S === E.wh.CUSTOM_THEME || D,
    M = S === E.wh.APPLICATION_TEST_MODE_DEBUG;
  if (!(w || L || x || M)) return null;
  let k = () => (0, r.jsxs)(r.Fragment, {
    children: [w && (0, r.jsx)(u.Z, {
      markAsDismissed: P ? R : () => {
        (0, _.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
          dismissAction: y.L.INDIRECT_ACTION,
          forceTrack: true
        })
      },
      showClientThemesCoachmark: P
    }), L && (0, r.jsx)(o.Z, {
      isCoachmark: false,
      markAsDismissed: R
    }), x && (0, r.jsx)(f.Z, {
      metadata: null != A ? A : {},
      markAsDismissed: R,
      isCoachmark: D,
      isMobile: t
    }), M && (0, r.jsx)(s.Z, {})]
  });
  return t ? (0, r.jsx)("div", {
    className: O.mobileContainer,
    children: k()
  }) : k()
}