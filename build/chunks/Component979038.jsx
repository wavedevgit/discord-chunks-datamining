/** Chunk was on web.js **/
/** chunk id: 979038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
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
  Chunk355281 = require("./355281.js"),
  Chunk509003 = require("./509003.js"),
  Chunk750154 = require("./750154.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk652853 = require("./652853.jsx"),
  Chunk103479 = require("./103479.jsx"),
  Chunk191764 = require("./191764.jsx"),
  Chunk238607 = require("./238607.jsx"),
  Chunk414402 = require("./414402.jsx"),
  Chunk934393 = require("./934393.jsx"),
  Chunk195990 = require("./195990.jsx"),
  Chunk803663 = require("./803663.jsx"),
  Chunk585253 = require("./585253.jsx"),
  Chunk715547 = require("./715547.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk723701 = require("./723701.js");

function D(e) {
  let {
    user: t,
    activity: n,
    onAction: D,
    onClose: x,
    application: L
  } = e, {
    themeType: j
  } = (0, E.z)(), M = (0, c.q)(L, "UserProfileActivityButtons"), k = (0, f.L)(null != n ? n : true, true), {
    showPlayButton: U
  } = _.m.useConfig({
    location: "UserProfileActivityButtons"
  }), {
    analyticsLocations: G
  } = (0, d.ZP)(u.Z.USER_PROFILE_ACTIVITY_BUTTONS);
  if (U && null != L && (0, p.bP)(L)) return (0, r.jsx)(T.Z, {
    user: t,
    application: L,
    onAction: D,
    onClose: x
  });
  if ((0, s.Z)(n)) return (0, r.jsx)(I.Z, {
    platformType: R.ABu.XBOX,
    icon: () => (0, r.jsx)(g.Z, {}),
    onAction: D
  });
  if ((0, o.Z)(n)) return (0, r.jsx)(I.Z, {
    platformType: R.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(m.Z, {}),
    onAction: D
  });
  if ((0, l.Z)(n)) return (0, r.jsx)(C.Z, {
    activity: n,
    onAction: D
  });
  let B = j === P.l.MODAL || j === P.l.MODAL_V2;
  if (!k && M && null != L && !B) return (0, r.jsx)(N.Z, {
    application: L,
    onAction: D,
    onClose: x,
    analyticsLocations: G
  });
  let Z = (0, i.Z)(n, R.xjy.JOIN) || (0, a.Z)(n),
    F = (null == n ? true : n.application_id) != null;
  return Z && F ? (0, r.jsxs)("div", {
    className: w.buttonContainer,
    children: [(0, r.jsx)(O.Z, {
      user: t,
      activity: n,
      onAction: D,
      onClose: x
    }), (0, r.jsx)(A.Z, {
      activity: n,
      onAction: D
    })]
  }) : Z ? (0, r.jsx)(O.Z, {
    user: t,
    activity: n,
    onAction: D,
    onClose: x
  }) : (null == n ? true : n.type) === R.IIU.HANG_STATUS ? (0, r.jsx)(y.Z, {
    user: t,
    activity: n,
    onAction: D,
    onClose: x
  }) : (null == n ? true : n.buttons) != null && (null == n ? true : n.buttons.length) >= 1 ? (0, r.jsx)(b.Z, {
    user: t,
    activity: n,
    onAction: D
  }) : F ? (0, r.jsx)(A.Z, {
    activity: n,
    onAction: D
  }) : (0, i.Z)(n, R.xjy.INSTANCE) ? (0, r.jsx)(v.Z, {
    user: t,
    activity: n,
    onAction: D
  }) : (0, h.dS)(n) ? (0, r.jsx)(S.Z, {
    activity: n,
    onAction: D,
    onClose: x
  }) : null
}