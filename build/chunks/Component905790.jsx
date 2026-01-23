/** Chunk was on web.js **/
/** chunk id: 905790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk102119 = require("./102119.jsx"),
  Chunk563380 = require("./563380.jsx"),
  Chunk47671 = require("./47671.js"),
  Chunk346734 = require("./346734.js"),
  Chunk332408 = require("./332408.jsx"),
  Chunk233380 = require("./233380.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk793943 = require("./793943.js"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk907896 = require("./907896.js");
let O = function(e) {
  let {
    mobile: t
  } = e, n = (0, i.bG)([_.A], () => _.A.getLayers().includes(E.zgK.USER_SETTINGS)), O = (0, i.bG)([h.default], () => m.Ay.canUseClientThemes(h.default.getCurrentUser())), v = (0, i.bG)([l.A], () => l.A.isCoachmark), A = (0, c.a)(), {
    activePanel: I,
    metadata: S
  } = (0, g.fy)(), T = [];
  !n && null == I && (v && !O && T.push(a.M.CLIENT_THEMES_COACHMARK), A && O && T.push(a.M.CUSTOM_THEME_COACHMARK));
  let [C, N] = (0, p.kn)(T, y.m.SIDEBAR, true), R = C === a.M.CLIENT_THEMES_COACHMARK, w = C === a.M.CUSTOM_THEME_COACHMARK;
  if (n) return null;
  let P = I === g.HP.CLIENT_THEMES || R,
    D = I === g.HP.APP_ICON,
    x = I === g.HP.CUSTOM_THEME || w,
    L = I === g.HP.APPLICATION_TEST_MODE_DEBUG;
  if (!(P || D || x || L)) return null;
  let j = () => (0, r.jsxs)(r.Fragment, {
    children: [P && (0, r.jsx)(u.A, {
      markAsDismissed: R ? N : () => {
        (0, f.Dr)(a.M.CLIENT_THEMES_COACHMARK, {
          dismissAction: y.i.INDIRECT_ACTION,
          forceTrack: true
        })
      },
      showClientThemesCoachmark: R
    }), D && (0, r.jsx)(s.A, {
      isCoachmark: false,
      markAsDismissed: N
    }), x && (0, r.jsx)(d.A, {
      metadata: null != S ? S : {},
      markAsDismissed: N,
      isCoachmark: w,
      isMobile: t
    }), L && (0, r.jsx)(o.A, {})]
  });
  return t ? (0, r.jsx)("div", {
    className: b.A,
    children: j()
  }) : j()
}