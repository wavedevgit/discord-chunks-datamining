/** Chunk was on web.js **/
/** chunk id: 283823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk250527 = require("./250527.js"),
  Chunk837011 = require("./837011.js"),
  Chunk90084 = require("./90084.js"),
  Chunk635853 = require("./635853.jsx"),
  Chunk42780 = require("./42780.jsx"),
  Chunk576055 = require("./576055.jsx"),
  Chunk363551 = require("./363551.js");
let E = 50001;

function y(e) {
  let {
    guildId: t,
    name: n,
    setPopoutRef: a,
    onClose: y
  } = e, {
    analyticsLocations: b
  } = (0, u.Ay)(c.A.GUILD_PROFILE), {
    guildProfile: O,
    fetchGuildProfile: v,
    fetchStatus: A
  } = (0, p.u)(t), I = (0, s.bG)([f.A], () => f.A.getErrorCode(t)), S = i.useRef(null), T = i.useCallback(() => {
    v(true)
  }, [v]);
  i.useEffect(() => {
    v()
  }, [v]), i.useEffect(() => {
    (0, d.sf)(t, b)
  }, [t, b]), i.useEffect(() => {
    null == a || a(null == S ? true : S.current)
  }, [S, a]);
  let C = i.useMemo(() => A === f.X.NOT_FETCHED || A === f.X.FETCHING ? (0, r.jsx)("div", {
    className: o()(g.k, g.d),
    children: (0, r.jsx)(l.y$y, {})
  }) : null == O && I === E ? (0, r.jsx)("div", {
    className: g.k,
    children: (0, r.jsx)(m.A, {
      guildId: t,
      name: n
    })
  }) : null == O ? (0, r.jsx)("div", {
    className: g.k,
    children: (0, r.jsx)(_.A, {
      name: n,
      onRetry: T
    })
  }) : (0, r.jsx)("div", {
    className: g.k,
    children: (0, r.jsx)(h.Ay, {
      profile: O,
      onClose: y
    })
  }), [A, O, I, t, n, T, y]);
  return (0, r.jsx)(l.lGe, {
    ref: S,
    "aria-label": null == O ? true : O.name,
    children: C
  })
}