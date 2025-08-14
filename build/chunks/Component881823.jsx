/** Chunk was on web.js **/
/** chunk id: 881823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk835473 = require("./835473.js"),
  Chunk669764 = require("./669764.js"),
  Chunk89285 = require("./89285.jsx"),
  Chunk307741 = require("./307741.jsx"),
  Chunk726332 = require("./726332.js");

function g(e) {
  let {
    applicationId: t,
    name: n,
    setPopoutRef: o,
    onClose: g
  } = e, E = (0, f.q)(t), b = (0, s.e7)([_.Z], () => _.Z.getGame(t)), {
    isFetching: y,
    fetchFailed: O,
    isFetchingDetectable: v,
    detectableFetchFailed: I
  } = (0, s.cj)([d.Z, _.Z], () => ({
    isFetching: d.Z.isFetchingApplication(t),
    fetchFailed: d.Z.didFetchingApplicationFail(t),
    isFetchingDetectable: _.Z.isFetching(t),
    detectableFetchFailed: _.Z.didFetchingFail(t)
  })), T = i.useRef(null);
  i.useEffect(() => {
    c.Z.getDetectableGamesSupplemental([t])
  }, [t]);
  let S = i.useCallback(() => {
    u.ZP.fetchApplication(t), c.Z.getDetectableGamesSupplemental([t])
  }, [t]);
  i.useEffect(() => {
    null == o || o(null == T ? true : T.current)
  }, [T, o]);
  let A = i.useMemo(() => y || v ? (0, r.jsx)("div", {
    className: a()(m.container, m.spinnerContainer),
    children: (0, r.jsx)(l.$jN, {})
  }) : O || I || null == E || null == b ? (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(p.Z, {
      name: n,
      onRetry: S
    })
  }) : (0, r.jsx)("div", {
    className: m.container,
    children: (0, r.jsx)(h.ZP, {
      application: E,
      detectedGame: b,
      onClose: g
    })
  }), [y, v, O, I, E, b, n, S, g]);
  return (0, r.jsx)(l.VqE, {
    ref: T,
    "aria-label": null == E ? true : E.name,
    children: A
  })
}