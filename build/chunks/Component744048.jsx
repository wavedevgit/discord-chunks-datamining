/** Chunk was on web.js **/
/** chunk id: 744048, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907459 = require("./907459.jsx"),
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
let O = function(e) {
  let {
    mobile: t
  } = e, n = (0, i.e7)([p.Z], () => p.Z.getLayers().includes(E.S9g.USER_SETTINGS)), O = (0, i.e7)([h.default], () => m.ZP.canUseClientThemes(h.default.getCurrentUser())), v = (0, i.e7)([s.Z], () => s.Z.isCoachmark), I = (0, l.g)(), {
    activePanel: S,
    metadata: T
  } = (0, g.oq)(), A = [];
  !n && null == S && (v && !O && A.push(a.z.CLIENT_THEMES_COACHMARK), I && A.push(a.z.CUSTOM_THEME_COACHMARK));
  let [C, N] = (0, _.US)(A, b.R.SIDEBAR, true), R = C === a.z.CLIENT_THEMES_COACHMARK, P = C === a.z.CUSTOM_THEME_COACHMARK;
  if ((0, u.HA)(I, C), n) return null;
  let w = S === g.wh.CLIENT_THEMES || R,
    D = S === g.wh.APP_ICON,
    L = S === g.wh.CUSTOM_THEME || P;
  if (!(w || D || L)) return null;
  let x = () => (0, r.jsxs)(r.Fragment, {
    children: [w && (0, r.jsx)(c.Z, {
      markAsDismissed: R ? N : () => {
        (0, f.Q3)(a.z.CLIENT_THEMES_COACHMARK, {
          dismissAction: b.L.INDIRECT_ACTION,
          forceTrack: true
        })
      },
      showClientThemesCoachmark: R
    }), D && (0, r.jsx)(o.Z, {
      isCoachmark: false,
      markAsDismissed: N
    }), L && (0, r.jsx)(d.Z, {
      metadata: null != T ? T : {},
      markAsDismissed: N,
      isCoachmark: P,
      isMobile: t
    })]
  });
  return t ? (0, r.jsx)("div", {
    className: y.mobileContainer,
    children: x()
  }) : x()
}