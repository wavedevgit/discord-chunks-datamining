/** Chunk was on web.js **/
/** chunk id: 979038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk172416 = require("./172416.js"),
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

function R(e) {
  var t;
  let {
    user: n,
    activity: R,
    onAction: D,
    onClose: x,
    application: L,
    containerClassName: j
  } = e, {
    themeType: M
  } = (0, y.z)(), k = (0, i.e7)([m.default], () => m.default.getId() === n.id), U = (0, u.q)(L), G = (0, _.L)(null != (t = null == R ? true : R.application_id) ? t : null == L ? true : L.id), {
    analyticsLocations: Z
  } = (0, p.ZP)(f.Z.USER_PROFILE_ACTIVITY_BUTTONS), F = (0, b.U)({
    location: "UserProfileActivityButtons"
  }), B = M === w.l.MODAL || M === w.l.MODAL_V2, V = M === w.l.POPOUT, H = (() => k ? V && (null == R ? true : R.type) === P.IIU.PLAYING && (null == L ? true : L.id) != null && F ? (0, r.jsx)(d.Z, {
    applicationId: L.id,
    onAction: D,
    onClose: x
  }) : null : G || !U || null == L || B ? (0, l.Z)(R) ? (0, r.jsx)(T.Z, {
    platformType: P.ABu.XBOX,
    icon: () => (0, r.jsx)(E.Z, {}),
    onAction: D
  }) : (0, s.Z)(R) ? (0, r.jsx)(T.Z, {
    platformType: P.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(g.Z, {}),
    onAction: D
  }) : (0, c.Z)(R) ? (0, r.jsx)(A.Z, {
    activity: R,
    onAction: D
  }) : (0, a.Z)(R, P.xjy.JOIN) || (0, o.Z)(R) ? (0, r.jsx)(S.Z, {
    user: n,
    activity: R,
    onAction: D,
    onClose: x
  }) : (null == R ? true : R.type) === P.IIU.HANG_STATUS ? (0, r.jsx)(v.Z, {
    user: n,
    activity: R,
    onAction: D,
    onClose: x
  }) : (null == R ? true : R.buttons) != null && (null == R ? true : R.buttons.length) >= 1 ? (0, r.jsx)(O.Z, {
    user: n,
    activity: R,
    onAction: D
  }) : (0, a.Z)(R, P.xjy.INSTANCE) ? (0, r.jsx)(I.Z, {
    user: n,
    activity: R,
    onAction: D
  }) : (0, h.dS)(R) ? (0, r.jsx)(C.Z, {
    activity: R,
    onAction: D,
    onClose: x
  }) : null : (0, r.jsx)(N.Z, {
    application: L,
    onAction: D,
    onClose: x,
    analyticsLocations: Z
  }))();
  return null == H ? null : (0, r.jsx)("div", {
    className: j,
    children: H
  })
}