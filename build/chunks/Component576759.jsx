/** Chunk was on web.js **/
/** chunk id: 576759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk377171 = require("./377171.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk584057 = require("./584057.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk230759 = require("./230759.js");

function y(e) {
  let {
    applicationId: t,
    onAction: n,
    onClose: y,
    activity: O
  } = e, {
    analyticsLocations: v
  } = (0, c.ZP)(l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION), {
    data: I
  } = (0, u.IX)(t), T = (0, s.q)(I, l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION), {
    themeType: S
  } = (0, h.z)(), A = S === g.l.MODAL || S === g.l.MODAL_V2, C = (0, _.L)(O), N = T && A && null != I && !C, R = N ? [i.z.CLOUD_PLAY_NEW_BADGE] : [], [P] = (0, f.US)(R);
  return N ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.Z, {
      className: b.cloudPlayDivider
    }), (0, r.jsxs)("div", {
      className: b.cloudPlaySection,
      children: [(0, r.jsxs)("div", {
        className: b.cloudPlaySectionTextContainer,
        children: [P === i.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.IGR, {
          text: E.intl.string(E.t.y2b7CA),
          color: d.Z.BG_BRAND
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: E.intl.string(E.t.IQjdmZ)
        })]
      }), (0, r.jsx)(m.Z, {
        application: I,
        onAction: n,
        onClose: y,
        size: a.Ph.SMALL,
        analyticsLocations: v
      })]
    })]
  }) : null
}