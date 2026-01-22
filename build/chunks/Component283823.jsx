/** Chunk was on web.js **/
/** chunk id: 283823, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function b(e) {
  let {
    guildId: t,
    name: n,
    setPopoutRef: a,
    onClose: b
  } = e, {
    analyticsLocations: y
  } = (0, u.Ay)(c.A.GUILD_PROFILE), {
    guildProfile: O,
    fetchGuildProfile: A,
    fetchStatus: v
  } = (0, p.u)(t), S = (0, o.bG)([f.A], () => f.A.getErrorCode(t)), I = i.useRef(null), T = i.useCallback(() => {
    A(true)
  }, [A]);
  i.useEffect(() => {
    A()
  }, [A]), i.useEffect(() => {
    (0, d.sf)(t, y)
  }, [t, y]), i.useEffect(() => {
    null == a || a(null == I ? true : I.current)
  }, [I, a]);
  let C = i.useMemo(() => v === f.X.NOT_FETCHED || v === f.X.FETCHING ? (0, r.jsx)("div", {
    className: s()(g.k, g.d),
    children: (0, r.jsx)(l.y$y, {})
  }) : null == O && S === E ? (0, r.jsx)("div", {
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
      onClose: b
    })
  }), [v, O, S, t, n, T, b]);
  return (0, r.jsx)(l.lGe, {
    ref: I,
    "aria-label": null == O ? true : O.name,
    children: C
  })
}