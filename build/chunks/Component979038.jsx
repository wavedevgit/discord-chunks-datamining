/** Chunk was on web.js **/
/** chunk id: 979038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk834353 = require("./834353.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk206074 = require("./206074.js"),
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

function P(e) {
  let {
    user: t,
    activity: n,
    onAction: P,
    onClose: w,
    application: D
  } = e, {
    themeType: x
  } = (0, m.z)(), L = (0, c.q)(D, "UserProfileActivityButtons"), j = (0, u.L)(null != n ? n : true, true), {
    showPlayButton: k
  } = d.m.useConfig({
    location: "UserProfileActivityButtons"
  });
  if (k && null != D && (0, f.bP)(D)) return (0, r.jsx)(v.Z, {
    user: t,
    application: D,
    onAction: P,
    onClose: w
  });
  if ((0, s.Z)(n)) return (0, r.jsx)(O.Z, {
    platformType: C.ABu.XBOX,
    icon: () => (0, r.jsx)(h.Z, {}),
    onAction: P
  });
  if ((0, a.Z)(n)) return (0, r.jsx)(O.Z, {
    platformType: C.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(p.Z, {}),
    onAction: P
  });
  if ((0, l.Z)(n)) return (0, r.jsx)(S.Z, {
    activity: n,
    onAction: P
  });
  let M = x === N.l.MODAL || x === N.l.MODAL_V2;
  if (!j && L && null != D && !M) return (0, r.jsx)(A.Z, {
    application: D,
    onAction: P,
    onClose: w
  });
  let U = (0, i.Z)(n, C.xjy.JOIN) || (0, o.Z)(n),
    G = (null == n ? true : n.application_id) != null;
  return U && G ? (0, r.jsxs)("div", {
    className: R.buttonContainer,
    children: [(0, r.jsx)(b.Z, {
      user: t,
      activity: n,
      onAction: P,
      onClose: w
    }), (0, r.jsx)(T.Z, {
      activity: n,
      onAction: P
    })]
  }) : U ? (0, r.jsx)(b.Z, {
    user: t,
    activity: n,
    onAction: P,
    onClose: w
  }) : (null == n ? true : n.type) === C.IIU.HANG_STATUS ? (0, r.jsx)(E.Z, {
    user: t,
    activity: n,
    onAction: P,
    onClose: w
  }) : (null == n ? true : n.buttons) != null && (null == n ? true : n.buttons.length) >= 1 ? (0, r.jsx)(g.Z, {
    user: t,
    activity: n,
    onAction: P
  }) : G ? (0, r.jsx)(T.Z, {
    activity: n,
    onAction: P
  }) : (0, i.Z)(n, C.xjy.INSTANCE) ? (0, r.jsx)(y.Z, {
    user: t,
    activity: n,
    onAction: P
  }) : (0, _.dS)(n) ? (0, r.jsx)(I.Z, {
    activity: n,
    onAction: P,
    onClose: w
  }) : null
}