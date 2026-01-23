/** Chunk was on web.js **/
/** chunk id: 47199, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk964486 = require("./964486.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk429913 = require("./429913.js"),
  Chunk524799 = require("./524799.js"),
  Chunk409626 = require("./409626.js"),
  Chunk265565 = require("./265565.jsx"),
  Chunk796812 = require("./796812.jsx"),
  Chunk379979 = require("./379979.js");

function y(e) {
  let {
    applicationId: t,
    name: n,
    setPopoutRef: a,
    onClose: y,
    source: b
  } = e, O = (0, p.h)(t), v = (0, o.bG)([_.A], () => _.A.getGame(t)), {
    isFetching: A,
    fetchFailed: I,
    isFetchingDetectable: S,
    detectableFetchFailed: T
  } = (0, o.cf)([f.A, _.A], () => ({
    isFetching: f.A.isFetchingApplication(t),
    fetchFailed: f.A.didFetchingApplicationFail(t),
    isFetchingDetectable: _.A.isFetching(t),
    detectableFetchFailed: _.A.didFetchingFail(t)
  })), C = i.useRef(null), N = i.useMemo(() => (0, h.u9)(), []);
  i.useEffect(() => {
    c.A.getDetectableGamesSupplemental([t])
  }, [t]);
  let w = i.useCallback(() => {
    d.Ay.fetchApplication(t), c.A.getDetectableGamesSupplemental([t])
  }, [t]);
  i.useEffect(() => {
    null == a || a(null == C ? true : C.current)
  }, [C, a]), (0, u.Ay)(() => {
    var e;
    (0, h.rw)({
      source: b,
      viewId: N,
      applicationId: t,
      gameName: null != (e = null == v ? true : v.name) ? e : "",
      profileType: h.HV.MiniProfile
    })
  });
  let R = i.useMemo(() => A || S ? (0, r.jsx)("div", {
    className: s()(E.k, E.d),
    children: (0, r.jsx)(l.y$y, {})
  }) : I || T || null == O || null == v ? (0, r.jsx)("div", {
    className: E.k,
    children: (0, r.jsx)(m.A, {
      name: n,
      onRetry: w
    })
  }) : (0, r.jsx)("div", {
    className: E.k,
    children: (0, r.jsx)(g.Ay, {
      application: O,
      detectedGame: v,
      onClose: y
    })
  }), [A, S, I, T, O, v, n, w, y]);
  return (0, r.jsx)(l.lGe, {
    ref: C,
    "aria-label": null == O ? true : O.name,
    children: R
  })
}