/** Chunk was on web.js **/
/** chunk id: 979038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk834353 = require("./834353.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk206074 = require("./206074.js"),
  Chunk194544 = require("./194544.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk584057 = require("./584057.js"),
  Chunk750154 = require("./750154.js"),
  Chunk314897 = require("./314897.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk103479 = require("./103479.jsx"),
  Chunk191764 = require("./191764.jsx"),
  Chunk238607 = require("./238607.jsx"),
  Chunk414402 = require("./414402.jsx"),
  Chunk934393 = require("./934393.jsx"),
  Chunk803663 = require("./803663.jsx"),
  Chunk715547 = require("./715547.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js");

function w(e) {
  var t;
  let {
    user: n,
    activity: w,
    onAction: R,
    onClose: D,
    application: x,
    containerClassName: L
  } = e, {
    themeType: j
  } = (0, b.z)(), M = (0, i.e7)([m.default], () => m.default.getId() === n.id), k = (0, u.q)(x), U = (0, _.L)(null != (t = null == w ? true : w.application_id) ? t : null == x ? true : x.id), {
    analyticsLocations: G
  } = (0, p.ZP)(f.Z.USER_PROFILE_ACTIVITY_BUTTONS), Z = j === P.l.MODAL || j === P.l.MODAL_V2, F = j === P.l.POPOUT, B = (() => M ? F && (null == w ? true : w.type) === N.IIU.PLAYING && (null == x ? true : x.id) != null ? (0, r.jsx)(d.Z, {
    applicationId: x.id,
    onAction: R,
    onClose: D
  }) : null : U || !k || null == x || Z ? (0, l.Z)(w) ? (0, r.jsx)(I.Z, {
    platformType: N.ABu.XBOX,
    icon: () => (0, r.jsx)(E.Z, {}),
    onAction: R
  }) : (0, s.Z)(w) ? (0, r.jsx)(I.Z, {
    platformType: N.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(g.Z, {}),
    onAction: R
  }) : (0, c.Z)(w) ? (0, r.jsx)(C.Z, {
    activity: w,
    onAction: R
  }) : (0, a.Z)(w, N.xjy.JOIN) || (0, o.Z)(w) ? (0, r.jsx)(v.Z, {
    user: n,
    activity: w,
    onAction: R,
    onClose: D
  }) : (null == w ? true : w.type) === N.IIU.HANG_STATUS ? (0, r.jsx)(O.Z, {
    user: n,
    activity: w,
    onAction: R,
    onClose: D
  }) : (null == w ? true : w.buttons) != null && (null == w ? true : w.buttons.length) >= 1 ? (0, r.jsx)(y.Z, {
    user: n,
    activity: w,
    onAction: R
  }) : (0, a.Z)(w, N.xjy.INSTANCE) ? (0, r.jsx)(S.Z, {
    user: n,
    activity: w,
    onAction: R
  }) : (0, h.dS)(w) ? (0, r.jsx)(T.Z, {
    activity: w,
    onAction: R,
    onClose: D
  }) : null : (0, r.jsx)(A.Z, {
    application: x,
    onAction: R,
    onClose: D,
    analyticsLocations: G
  }))();
  return null == B ? null : (0, r.jsx)("div", {
    className: L,
    children: B
  })
}