/** Chunk was on web.js **/
/** chunk id: 979038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk834353 = require("./834353.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk206074 = require("./206074.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk584057 = require("./584057.js"),
  Chunk750154 = require("./750154.js"),
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

function C(e) {
  var t;
  let {
    user: n,
    activity: C,
    onAction: N,
    onClose: P,
    application: R
  } = e, {
    themeType: D
  } = (0, h.z)(), w = (0, c.q)(R), x = (0, f.L)(null != (t = null == C ? true : C.application_id) ? t : null == R ? true : R.id), {
    analyticsLocations: L
  } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS), j = D === A.l.MODAL || D === A.l.MODAL_V2;
  return x || !w || null == R || j ? (0, s.Z)(C) ? (0, r.jsx)(O.Z, {
    platformType: T.ABu.XBOX,
    icon: () => (0, r.jsx)(m.Z, {}),
    onAction: N
  }) : (0, o.Z)(C) ? (0, r.jsx)(O.Z, {
    platformType: T.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(_.Z, {}),
    onAction: N
  }) : (0, l.Z)(C) ? (0, r.jsx)(S.Z, {
    activity: C,
    onAction: N
  }) : (0, i.Z)(C, T.xjy.JOIN) || (0, a.Z)(C) ? (0, r.jsx)(b.Z, {
    user: n,
    activity: C,
    onAction: N,
    onClose: P
  }) : (null == C ? true : C.type) === T.IIU.HANG_STATUS ? (0, r.jsx)(E.Z, {
    user: n,
    activity: C,
    onAction: N,
    onClose: P
  }) : (null == C ? true : C.buttons) != null && (null == C ? true : C.buttons.length) >= 1 ? (0, r.jsx)(g.Z, {
    user: n,
    activity: C,
    onAction: N
  }) : (0, i.Z)(C, T.xjy.INSTANCE) ? (0, r.jsx)(y.Z, {
    user: n,
    activity: C,
    onAction: N
  }) : (0, p.dS)(C) ? (0, r.jsx)(v.Z, {
    activity: C,
    onAction: N,
    onClose: P
  }) : null : (0, r.jsx)(I.Z, {
    application: R,
    onAction: N,
    onClose: P,
    analyticsLocations: L
  })
}