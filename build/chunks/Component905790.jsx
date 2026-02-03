/** Chunk was on web.js **/
/** chunk id: 905790, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
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
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk793943 = require("./793943.js"),
  Chunk49999 = require("./49999.js"),
  Chunk907896 = require("./907896.js");
let y = function(e) {
  let {
    mobile: t
  } = e, n = (0, i.bG)([_.default], () => h.Ay.canUseClientThemes(_.default.getCurrentUser())), y = (0, i.bG)([l.A], () => l.A.isCoachmark), b = (0, c.a)(), {
    activePanel: O,
    metadata: v
  } = (0, m.fy)(), A = [];
  null == O && (y && !n && A.push(a.M.CLIENT_THEMES_COACHMARK), b && n && A.push(a.M.CUSTOM_THEME_COACHMARK));
  let [I, S] = (0, p.kn)(A, g.m.SIDEBAR, true), T = I === a.M.CLIENT_THEMES_COACHMARK, C = I === a.M.CUSTOM_THEME_COACHMARK, N = O === m.HP.CLIENT_THEMES || T, w = O === m.HP.APP_ICON, R = O === m.HP.CUSTOM_THEME || C, P = O === m.HP.APPLICATION_TEST_MODE_DEBUG;
  if (!(N || w || R || P)) return null;
  let D = () => (0, r.jsxs)(r.Fragment, {
    children: [N && (0, r.jsx)(u.A, {
      markAsDismissed: T ? S : () => {
        (0, f.Dr)(a.M.CLIENT_THEMES_COACHMARK, {
          dismissAction: g.i.INDIRECT_ACTION,
          forceTrack: true
        })
      },
      showClientThemesCoachmark: T
    }), w && (0, r.jsx)(o.A, {
      isCoachmark: false,
      markAsDismissed: S
    }), R && (0, r.jsx)(d.A, {
      metadata: null != v ? v : {},
      markAsDismissed: S,
      isCoachmark: C,
      isMobile: t
    }), P && (0, r.jsx)(s.A, {})]
  });
  return t ? (0, r.jsx)("div", {
    className: E.A,
    children: D()
  }) : D()
}