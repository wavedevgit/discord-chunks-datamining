/** Chunk was on web.js **/
/** chunk id: 624951, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk554146 = require("./554146.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk359549 = require("./359549.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk627363 = require("./627363.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk308335 = require("./308335.js"),
  Chunk21241 = require("./21241.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk985629 = require("./985629.jsx"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk468115 = require("./468115.js");

function y(e) {
  var t;
  let {
    applicationId: n,
    onAction: y,
    onClose: b,
    activity: O
  } = e, {
    analyticsLocations: v
  } = (0, c.Ay)(l.A.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION), {
    data: A
  } = (0, u.YY)(n), I = (0, o.J)(A), {
    themeType: S
  } = (0, _.E)(), T = S === m.d.MODAL || S === m.d.MODAL_V2, C = (0, f.o)(null != (t = null == O ? true : O.application_id) ? t : n), N = I && T && null != A && !C, w = N ? [i.M.CLOUD_PLAY_NEW_BADGE] : [], [R] = (0, d.kn)(w);
  return N ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.A, {
      className: E.Xl
    }), (0, r.jsxs)("div", {
      className: E.DK,
      children: [(0, r.jsxs)("div", {
        className: E.tJ,
        children: [R === i.M.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(s.LpS, {
          text: g.intl.string(g.t.y2b7CA),
          color: a.A.colors.BACKGROUND_BRAND.css
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: g.intl.string(g.t.IQjdmV)
        })]
      }), (0, r.jsx)(h.A, {
        application: A,
        onAction: y,
        onClose: b,
        analyticsLocations: v
      })]
    })]
  }) : null
}