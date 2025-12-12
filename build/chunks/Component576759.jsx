/** Chunk was on web.js **/
/** chunk id: 576759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk584057 = require("./584057.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk693155 = require("./693155.js");

function b(e) {
  var t;
  let {
    applicationId: n,
    onAction: b,
    onClose: y,
    activity: O
  } = e, {
    analyticsLocations: v
  } = (0, c.ZP)(l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION), {
    data: S
  } = (0, u.IX)(n), I = (0, s.q)(S), {
    themeType: T
  } = (0, _.z)(), C = T === h.l.MODAL || T === h.l.MODAL_V2, A = (0, f.L)(null != (t = null == O ? true : O.application_id) ? t : n), N = I && C && null != S && !A, P = N ? [i.z.CLOUD_PLAY_NEW_BADGE] : [], [R] = (0, d.US)(P);
  return N ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.Z, {
      className: E.cloudPlayDivider
    }), (0, r.jsxs)("div", {
      className: E.cloudPlaySection,
      children: [(0, r.jsxs)("div", {
        className: E.cloudPlaySectionTextContainer,
        children: [R === i.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.IGR, {
          text: g.intl.string(g.t.y2b7CA),
          color: a.Z.colors.BACKGROUND_BRAND.css
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: g.intl.string(g.t.IQjdmV)
        })]
      }), (0, r.jsx)(m.Z, {
        application: S,
        onAction: b,
        onClose: y,
        analyticsLocations: v
      })]
    })]
  }) : null
}