/** Chunk was on web.js **/
/** chunk id: 576759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
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
  Chunk483517 = require("./483517.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk114004 = require("./114004.js");

function b(e) {
  let {
    applicationId: t,
    onAction: n,
    onClose: b
  } = e, {
    analyticsLocations: y
  } = (0, c.ZP)(l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION), {
    data: O
  } = (0, u.IX)(t), v = (0, s.q)(O, l.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION), {
    themeType: I
  } = (0, p.z)(), S = I === m.l.MODAL || I === m.l.MODAL_V2, T = v && S && null != O, A = T ? [i.z.CLOUD_PLAY_NEW_BADGE] : [], [C] = (0, f.US)(A);
  return T ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.Z, {
      className: E.cloudPlayDivider
    }), (0, r.jsxs)("div", {
      className: E.cloudPlaySection,
      children: [(0, r.jsxs)("div", {
        className: E.cloudPlaySectionTextContainer,
        children: [C === i.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.IGR, {
          text: g.intl.string(g.t.y2b7CA),
          color: d.Z.BG_BRAND
        }), (0, r.jsx)(o.Text, {
          variant: "text-xs/medium",
          children: g.intl.string(g.t.IQjdmZ)
        })]
      }), (0, r.jsx)(h.Z, {
        application: O,
        onAction: n,
        onClose: b,
        size: a.Ph.SMALL,
        analyticsLocations: y
      })]
    })]
  }) : null
}