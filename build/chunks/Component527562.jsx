/** Chunk was on web.js **/
/** chunk id: 527562, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk699553 = require("./699553.js"),
  Chunk314852 = require("./314852.js"),
  Chunk65361 = require("./65361.js"),
  Chunk878184 = require("./878184.jsx"),
  Chunk798476 = require("./798476.jsx"),
  Chunk423252 = require("./423252.jsx"),
  Chunk626807 = require("./626807.js");
let E = 50001;

function b(e) {
  let {
    guildId: t,
    name: n,
    setPopoutRef: a,
    onClose: b
  } = e, {
    analyticsLocations: y
  } = (0, u.ZP)(c.Z.GUILD_PROFILE), {
    guildProfile: O,
    fetchGuildProfile: v,
    fetchStatus: I
  } = (0, _.u)(t), T = (0, s.e7)([f.Z], () => f.Z.getErrorCode(t)), S = i.useRef(null), A = i.useCallback(() => {
    v(true)
  }, [v]);
  i.useEffect(() => {
    v()
  }, [v]), i.useEffect(() => {
    (0, d.vb)(t, y)
  }, [t, y]), i.useEffect(() => {
    null == a || a(null == S ? true : S.current)
  }, [S, a]);
  let C = i.useMemo(() => I === f.a.NOT_FETCHED || I === f.a.FETCHING ? (0, r.jsx)("div", {
    className: o()(g.container, g.spinnerContainer),
    children: (0, r.jsx)(l.$jN, {})
  }) : null == O && T === E ? (0, r.jsx)("div", {
    className: g.container,
    children: (0, r.jsx)(m.Z, {
      guildId: t,
      name: n
    })
  }) : null == O ? (0, r.jsx)("div", {
    className: g.container,
    children: (0, r.jsx)(p.Z, {
      name: n,
      onRetry: A
    })
  }) : (0, r.jsx)("div", {
    className: g.container,
    children: (0, r.jsx)(h.ZP, {
      profile: O,
      onClose: b
    })
  }), [I, O, T, t, n, A, b]);
  return (0, r.jsx)(l.VqE, {
    ref: S,
    "aria-label": null == O ? true : O.name,
    children: C
  })
}