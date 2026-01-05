/** Chunk was on web.js **/
/** chunk id: 576759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk636977 = require("./636977.js"),
  Chunk704215 = require("./704215.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk633181 = require("./633181.jsx"),
  Chunk584057 = require("./584057.js"),
  Chunk483517 = require("./483517.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk693155 = require("./693155.js");

function O(e) {
  var t;
  let {
    applicationId: n,
    onAction: O,
    onClose: v,
    activity: S
  } = e, {
    analyticsLocations: I
  } = (0, u.ZP)(c.Z.USER_PROFILE_ACTIVITY_CLOUD_PLAY_SECTION), {
    data: T
  } = (0, d.IX)(n), C = (0, l.q)(T), {
    themeType: A
  } = (0, h.z)(), N = A === E.l.MODAL || A === E.l.MODAL_V2, P = (0, _.L)(null != (t = null == S ? true : S.application_id) ? t : n), R = C && N && null != T && !P, w = R ? [a.z.CLOUD_PLAY_NEW_BADGE] : [], [D] = (0, f.US)(w);
  if (!R) return null;
  let x = e => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Z, {
      className: y.cloudPlayDivider
    }), (0, r.jsxs)("div", {
      ref: t => {
        e.current = t
      },
      className: y.cloudPlaySection,
      children: [(0, r.jsxs)("div", {
        className: y.cloudPlaySectionTextContainer,
        children: [D === a.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(s.IGR, {
          text: b.intl.string(b.t.y2b7CA),
          color: o.Z.colors.BACKGROUND_BRAND.css
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: b.intl.string(b.t.IQjdmV)
        })]
      }), (0, r.jsx)(g.Z, {
        application: T,
        onAction: O,
        onClose: v,
        analyticsLocations: I
      })]
    })]
  });
  return (0, r.jsx)(p.Z, {
    applicationId: n,
    questContent: i.j.USER_PROFILE_ACTIVITY,
    children: x
  })
}