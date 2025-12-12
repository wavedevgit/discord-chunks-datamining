/** Chunk was on web.js **/
/** chunk id: 881823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    setPopoutRef: o,
    onClose: b,
    source: y
  } = e, O = (0, p.q)(t), v = (0, s.e7)([_.Z], () => _.Z.getGame(t)), {
    isFetching: S,
    fetchFailed: I,
    isFetchingDetectable: T,
    detectableFetchFailed: C
  } = (0, s.cj)([f.Z, _.Z], () => ({
    isFetching: f.Z.isFetchingApplication(t),
    fetchFailed: f.Z.didFetchingApplicationFail(t),
    isFetchingDetectable: _.Z.isFetching(t),
    detectableFetchFailed: _.Z.didFetchingFail(t)
  })), A = i.useRef(null), N = i.useMemo(() => (0, m.fP)(), []);
  i.useEffect(() => {
    c.Z.getDetectableGamesSupplemental([t])
  }, [t]);
  let P = i.useCallback(() => {
    d.ZP.fetchApplication(t), c.Z.getDetectableGamesSupplemental([t])
  }, [t]);
  i.useEffect(() => {
    null == o || o(null == A ? true : A.current)
  }, [A, o]), (0, u.ZP)(() => {
    var e;
    (0, m.IS)({
      source: y,
      viewId: N,
      applicationId: t,
      gameName: null != (e = null == v ? true : v.name) ? e : "",
      profileType: m.j7.MiniProfile
    })
  });
  let R = i.useMemo(() => S || T ? (0, r.jsx)("div", {
    className: a()(E.container, E.spinnerContainer),
    children: (0, r.jsx)(l.$jN, {})
  }) : I || C || null == O || null == v ? (0, r.jsx)("div", {
    className: E.container,
    children: (0, r.jsx)(h.Z, {
      name: n,
      onRetry: P
    })
  }) : (0, r.jsx)("div", {
    className: E.container,
    children: (0, r.jsx)(g.ZP, {
      application: O,
      detectedGame: v,
      onClose: b
    })
  }), [S, T, I, C, O, v, n, P, b]);
  return (0, r.jsx)(l.VqE, {
    ref: A,
    "aria-label": null == O ? true : O.name,
    children: R
  })
}