/** Chunk was on web.js **/
/** chunk id: 576759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk728345 = require("./728345.js"),
  Chunk377171 = require("./377171.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk483517 = require("./483517.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk114004 = require("./114004.js");

function g(e) {
  let {
    applicationId: t,
    onAction: n,
    onClose: g
  } = e, {
    data: E
  } = (0, l.IX)(t), b = (0, s.q)(E, "UserProfileActivityCard"), {
    themeType: y
  } = (0, f.z)(), O = y === p.l.MODAL || y === p.l.MODAL_V2, v = b && O && null != E, I = v ? [i.z.CLOUD_PLAY_NEW_BADGE] : [], [T] = (0, u.US)(I);
  return v ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      className: m.cloudPlayDivider
    }), (0, r.jsxs)("div", {
      className: m.cloudPlaySection,
      children: [(0, r.jsxs)("div", {
        className: m.cloudPlaySectionTextContainer,
        children: [T === i.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(a.IGR, {
          text: h.intl.string(h.t.y2b7CA),
          color: c.Z.BG_BRAND
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/medium",
          children: h.intl.string(h.t.IQjdmZ)
        })]
      }), (0, r.jsx)(_.Z, {
        application: E,
        onAction: n,
        onClose: g,
        size: o.Ph.SMALL
      })]
    })]
  }) : null
}