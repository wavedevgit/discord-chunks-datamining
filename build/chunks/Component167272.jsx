/** Chunk was on web.js **/
/** chunk id: 167272, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk833349 = require("./833349.js"),
  Chunk765379 = require("./765379.js"),
  Chunk141639 = require("./141639.js"),
  Chunk61330 = require("./61330.js"),
  Chunk960076 = require("./960076.js"),
  Chunk359549 = require("./359549.js"),
  Chunk373966 = require("./373966.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk308335 = require("./308335.js"),
  Chunk82149 = require("./82149.js"),
  Chunk961350 = require("./961350.js"),
  Chunk790381 = require("./790381.jsx"),
  Chunk266080 = require("./266080.jsx"),
  Chunk939496 = require("./939496.jsx"),
  Chunk934173 = require("./934173.jsx"),
  Chunk502695 = require("./502695.jsx"),
  Chunk691041 = require("./691041.jsx"),
  Chunk793838 = require("./793838.jsx"),
  Chunk668880 = require("./668880.jsx"),
  Chunk72742 = require("./72742.jsx"),
  Chunk312784 = require("./312784.jsx"),
  Chunk985629 = require("./985629.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js");

function R(e) {
  var t;
  let {
    user: n,
    activity: R,
    onAction: P,
    onClose: D,
    application: L,
    containerClassName: x
  } = e, {
    themeType: M
  } = (0, y.E)(), j = (0, i.bG)([m.default], () => m.default.getId() === n.id), k = (0, u.J)(L), U = (0, _.o)(null != (t = null == R ? true : R.application_id) ? t : null == L ? true : L.id), {
    analyticsLocations: G
  } = (0, p.Ay)(f.A.USER_PROFILE_ACTIVITY_BUTTONS), V = M === w.d.MODAL || M === w.d.MODAL_V2, F = M === w.d.POPOUT, B = (() => j ? F && (null == R ? true : R.type) === N.$pd.PLAYING && (null == L ? true : L.id) != null ? (0, r.jsx)(d.A, {
    applicationId: L.id,
    onAction: P,
    onClose: D
  }) : null : U || !k || null == L || V ? (0, l.A)(R) ? (0, r.jsx)(I.A, {
    platformType: N.fg2.XBOX,
    icon: () => (0, r.jsx)(E.A, {}),
    onAction: P
  }) : (0, s.A)(R) ? (0, r.jsx)(I.A, {
    platformType: N.fg2.PLAYSTATION,
    icon: () => (0, r.jsx)(g.A, {}),
    onAction: P
  }) : (0, c.A)(R) ? (0, r.jsx)(T.A, {
    activity: R,
    onAction: P
  }) : (0, a.A)(R, N.jUm.JOIN) || (0, o.A)(R) ? (0, r.jsx)(v.A, {
    user: n,
    activity: R,
    onAction: P,
    onClose: D
  }) : (null == R ? true : R.type) === N.$pd.HANG_STATUS ? (0, r.jsx)(O.A, {
    user: n,
    activity: R,
    onAction: P,
    onClose: D
  }) : (null == R ? true : R.buttons) != null && (null == R ? true : R.buttons.length) >= 1 ? (0, r.jsx)(b.A, {
    user: n,
    activity: R,
    onAction: P
  }) : (0, a.A)(R, N.jUm.INSTANCE) ? (0, r.jsx)(A.A, {
    user: n,
    activity: R,
    onAction: P
  }) : (0, h.Cy)(R) ? (0, r.jsx)(S.A, {
    activity: R,
    onAction: P,
    onClose: D
  }) : null : (0, r.jsx)(C.A, {
    application: L,
    onAction: P,
    onClose: D,
    analyticsLocations: G
  }))();
  return null == B ? null : (0, r.jsx)("div", {
    className: x,
    children: B
  })
}