/** Chunk was on web.js **/
/** chunk id: 373966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk540185 = require("./540185.js"),
  Chunk311907 = require("./311907.js"),
  Chunk289173 = require("./289173.js"),
  Chunk735321 = require("./735321.js"),
  Chunk950191 = require("./950191.js"),
  Chunk657331 = require("./657331.js"),
  Chunk993401 = require("./993401.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk760751 = require("./760751.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    applicationId: t,
    onAction: n,
    onClose: m
  } = e, g = (0, s.bG)([f.default], () => f.default.getId()), E = (0, c.Ay)(g, null), y = (0, s.bG)([p.A], () => p.A.getDetectableGame(t)), b = i.useMemo(() => {
    var e;
    return !(null == y || (null == E || null == (e = E.widgets) ? true : e.some(e => {
      var n;
      return e instanceof o.Yy && e.type === a.x.CURRENT_GAMES && (null == (n = e.games) ? true : n.some(e => e.applicationId === t))
    }))) && (0, l.XX)(y)
  }, [t, null == E ? true : E.widgets, y]), O = i.useCallback(e => {
    e.stopPropagation(), null == n || n({
      action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET"
    }), (0, l.ew)({
      widgetType: a.x.CURRENT_GAMES,
      game: {
        applicationId: t
      },
      ignoreMaxGames: true
    }), (0, u.openUserProfileModal)({
      userId: g,
      tabSection: _.RP.WIDGETS,
      scrollTarget: a.x.CURRENT_GAMES
    }), null == m || m()
  }, [t, g, n, m]);
  return b ? (0, r.jsx)(d.FD, {
    text: h.intl.string(h.t.BjYzmC),
    onClick: O,
    fullWidth: true
  }) : null
}