/** Chunk was on web.js **/
/** chunk id: 979038, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk834353 = require("./834353.js"),
  Chunk802856 = require("./802856.js"),
  Chunk420660 = require("./420660.js"),
  Chunk206074 = require("./206074.js"),
  Chunk584057 = require("./584057.js"),
  Chunk750154 = require("./750154.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk103479 = require("./103479.jsx"),
  Chunk191764 = require("./191764.jsx"),
  Chunk238607 = require("./238607.jsx"),
  Chunk414402 = require("./414402.jsx"),
  Chunk934393 = require("./934393.jsx"),
  Chunk803663 = require("./803663.jsx"),
  Chunk585253 = require("./585253.jsx"),
  Chunk715547 = require("./715547.jsx"),
  Chunk994102 = require("./994102.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk874375 = require("./874375.js");

function S(e) {
  let {
    user: t,
    activity: n,
    onAction: S,
    onClose: A,
    application: N
  } = e, C = (0, c.q)(N, "UserProfileActivityButtons"), R = (0, u.L)(null != n ? n : true, true);
  if ((0, s.Z)(n)) return (0, r.jsx)(E.Z, {
    platformType: I.ABu.XBOX,
    icon: () => (0, r.jsx)(_.Z, {}),
    onAction: S
  });
  if ((0, a.Z)(n)) return (0, r.jsx)(E.Z, {
    platformType: I.ABu.PLAYSTATION,
    icon: () => (0, r.jsx)(f.Z, {}),
    onAction: S
  });
  if ((0, l.Z)(n)) return (0, r.jsx)(O.Z, {
    activity: n,
    onAction: S
  });
  let P = (0, i.Z)(n, I.xjy.JOIN) || (0, o.Z)(n),
    w = (null == n ? true : n.application_id) != null;
  return !R && C && null != N ? (0, r.jsx)(v.Z, {
    application: N,
    onAction: S,
    onClose: A
  }) : P && w ? (0, r.jsxs)("div", {
    className: T.buttonContainer,
    children: [(0, r.jsx)(m.Z, {
      user: t,
      activity: n,
      onAction: S,
      onClose: A
    }), (0, r.jsx)(y.Z, {
      activity: n,
      onAction: S
    })]
  }) : P ? (0, r.jsx)(m.Z, {
    user: t,
    activity: n,
    onAction: S,
    onClose: A
  }) : (null == n ? true : n.type) === I.IIU.HANG_STATUS ? (0, r.jsx)(h.Z, {
    user: t,
    activity: n,
    onAction: S,
    onClose: A
  }) : (null == n ? true : n.buttons) != null && (null == n ? true : n.buttons.length) >= 1 ? (0, r.jsx)(p.Z, {
    user: t,
    activity: n,
    onAction: S
  }) : w ? (0, r.jsx)(y.Z, {
    activity: n,
    onAction: S
  }) : (0, i.Z)(n, I.xjy.INSTANCE) ? (0, r.jsx)(g.Z, {
    user: t,
    activity: n,
    onAction: S
  }) : (0, d.dS)(n) ? (0, r.jsx)(b.Z, {
    activity: n,
    onAction: S,
    onClose: A
  }) : null
}