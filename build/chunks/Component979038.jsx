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
  Chunk584057 = require("./584057.js"),
  Chunk355281 = require("./355281.js"),
  Chunk509003 = require("./509003.js"),
  Chunk750154 = require("./750154.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
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
  Chunk723701 = require("./723701.js");

function C(e) {
  let {
    user: t,
    activity: n,
    onAction: C,
    onClose: R,
    application: P
  } = e, w = (0, c.q)(P, "UserProfileActivityButtons"), D = (0, u.L)(null != n ? n : true, true), {
    showPlayButton: L
  } = d.m.useConfig({
    location: "UserProfileActivityButtons"
  });
  if (L && null != P && (0, f.bP)(P)) return (0, r.jsx)(O.Z, {
    user: t,
    application: P,
    onAction: C,
    onClose: R
  });
  if ((0, s.Z)(n)) return (0, r.jsx)(y.Z, {
    platformType: A.ABu.XBOX,
    icon: () => (0, r.jsx)(h.Z, {}),
    onAction: C
  });
  if ((0, o.Z)(n)) return (0, r.jsx)(y.Z, {
    platformType: A.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(p.Z, {}),
    onAction: C
  });
  if ((0, l.Z)(n)) return (0, r.jsx)(T.Z, {
    activity: n,
    onAction: C
  });
  let x = (0, i.Z)(n, A.xjy.JOIN) || (0, a.Z)(n),
    M = (null == n ? true : n.application_id) != null;
  return !D && w && null != P ? (0, r.jsx)(S.Z, {
    application: P,
    onAction: C,
    onClose: R
  }) : x && M ? (0, r.jsxs)("div", {
    className: N.buttonContainer,
    children: [(0, r.jsx)(E.Z, {
      user: t,
      activity: n,
      onAction: C,
      onClose: R
    }), (0, r.jsx)(I.Z, {
      activity: n,
      onAction: C
    })]
  }) : x ? (0, r.jsx)(E.Z, {
    user: t,
    activity: n,
    onAction: C,
    onClose: R
  }) : (null == n ? true : n.type) === A.IIU.HANG_STATUS ? (0, r.jsx)(g.Z, {
    user: t,
    activity: n,
    onAction: C,
    onClose: R
  }) : (null == n ? true : n.buttons) != null && (null == n ? true : n.buttons.length) >= 1 ? (0, r.jsx)(m.Z, {
    user: t,
    activity: n,
    onAction: C
  }) : M ? (0, r.jsx)(I.Z, {
    activity: n,
    onAction: C
  }) : (0, i.Z)(n, A.xjy.INSTANCE) ? (0, r.jsx)(b.Z, {
    user: t,
    activity: n,
    onAction: C
  }) : (0, _.dS)(n) ? (0, r.jsx)(v.Z, {
    activity: n,
    onAction: C,
    onClose: R
  }) : null
}