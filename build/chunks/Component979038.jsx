/** Chunk was on web.js **/
/** chunk id: 979038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  let {
    user: t,
    activity: n,
    onAction: C,
    onClose: N,
    application: R
  } = e, {
    themeType: P
  } = (0, m.z)(), w = (0, c.q)(R, "UserProfileActivityButtons"), D = (0, f.L)(null != n ? n : true, true), {
    analyticsLocations: x
  } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS);
  if ((0, s.Z)(n)) return (0, r.jsx)(O.Z, {
    platformType: S.ABu.XBOX,
    icon: () => (0, r.jsx)(h.Z, {}),
    onAction: C
  });
  if ((0, o.Z)(n)) return (0, r.jsx)(O.Z, {
    platformType: S.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(p.Z, {}),
    onAction: C
  });
  if ((0, l.Z)(n)) return (0, r.jsx)(I.Z, {
    activity: n,
    onAction: C
  });
  let L = P === A.l.MODAL || P === A.l.MODAL_V2;
  return D || !w || null == R || L ? (0, i.Z)(n, S.xjy.JOIN) || (0, a.Z)(n) ? (0, r.jsx)(b.Z, {
    user: t,
    activity: n,
    onAction: C,
    onClose: N
  }) : (null == n ? true : n.type) === S.IIU.HANG_STATUS ? (0, r.jsx)(E.Z, {
    user: t,
    activity: n,
    onAction: C,
    onClose: N
  }) : (null == n ? true : n.buttons) != null && (null == n ? true : n.buttons.length) >= 1 ? (0, r.jsx)(g.Z, {
    user: t,
    activity: n,
    onAction: C
  }) : (0, i.Z)(n, S.xjy.INSTANCE) ? (0, r.jsx)(y.Z, {
    user: t,
    activity: n,
    onAction: C
  }) : (0, _.dS)(n) ? (0, r.jsx)(v.Z, {
    activity: n,
    onAction: C,
    onClose: N
  }) : null : (0, r.jsx)(T.Z, {
    application: R,
    onAction: C,
    onClose: N,
    analyticsLocations: x
  })
}