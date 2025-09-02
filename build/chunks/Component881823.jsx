/** Chunk was on web.js **/
/** chunk id: 881823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk493773 = require("./493773.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk669764 = require("./669764.js"),
  Chunk810568 = require("./810568.js"),
  Chunk89285 = require("./89285.jsx"),
  Chunk307741 = require("./307741.jsx"),
  Chunk726332 = require("./726332.js");

function b(e) {
  let {
    applicationId: t,
    name: n,
    setPopoutRef: a,
    onClose: b,
    source: y
  } = e, O = (0, _.q)(t), v = (0, s.e7)([p.Z], () => p.Z.getGame(t)), {
    isFetching: I,
    fetchFailed: S,
    isFetchingDetectable: T,
    detectableFetchFailed: A
  } = (0, s.cj)([f.Z, p.Z], () => ({
    isFetching: f.Z.isFetchingApplication(t),
    fetchFailed: f.Z.didFetchingApplicationFail(t),
    isFetchingDetectable: p.Z.isFetching(t),
    detectableFetchFailed: p.Z.didFetchingFail(t)
  })), C = i.useRef(null), N = i.useMemo(() => (0, h.fP)(), []);
  i.useEffect(() => {
    c.Z.getDetectableGamesSupplemental([t])
  }, [t]);
  let R = i.useCallback(() => {
    d.ZP.fetchApplication(t), c.Z.getDetectableGamesSupplemental([t])
  }, [t]);
  i.useEffect(() => {
    null == a || a(null == C ? true : C.current)
  }, [C, a]), (0, u.ZP)(() => {
    var e;
    (0, h.IS)({
      source: y,
      viewId: N,
      applicationId: t,
      gameName: null != (e = null == v ? true : v.name) ? e : "",
      profileType: h.j7.MiniProfile
    })
  });
  let P = i.useMemo(() => I || T ? (0, r.jsx)("div", {
    className: o()(E.container, E.spinnerContainer),
    children: (0, r.jsx)(l.$jN, {})
  }) : S || A || null == O || null == v ? (0, r.jsx)("div", {
    className: E.container,
    children: (0, r.jsx)(m.Z, {
      name: n,
      onRetry: R
    })
  }) : (0, r.jsx)("div", {
    className: E.container,
    children: (0, r.jsx)(g.ZP, {
      application: O,
      detectedGame: v,
      onClose: b
    })
  }), [I, T, S, A, O, v, n, R, b]);
  return (0, r.jsx)(l.VqE, {
    ref: C,
    "aria-label": null == O ? true : O.name,
    children: P
  })
}