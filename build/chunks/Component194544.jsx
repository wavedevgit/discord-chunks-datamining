/** Chunk was on web.js **/
/** chunk id: 194544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk836197 = require("./836197.js"),
  Chunk86419 = require("./86419.js"),
  Chunk687158 = require("./687158.js"),
  Chunk892001 = require("./892001.js"),
  Chunk732380 = require("./732380.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk77498 = require("./77498.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let {
    applicationId: t,
    onAction: n,
    onClose: h
  } = e, g = (0, o.e7)([f.default], () => f.default.getId()), E = (0, c.ZP)(g, null), b = (0, o.e7)([p.Z], () => p.Z.getDetectableGame(t)), y = i.useMemo(() => {
    var e;
    return !(null == b || (null == E || null == (e = E.widgets) ? true : e.some(e => {
      var n;
      return e instanceof s.zy && e.type === a.l.CURRENT_GAMES && (null == (n = e.games) ? true : n.some(e => e.applicationId === t))
    }))) && (0, l.pZ)(b)
  }, [t, null == E ? true : E.widgets, b]), O = i.useCallback(e => {
    e.stopPropagation(), null == n || n({
      action: "PRESS_ADD_TO_CURRENT_GAMES_WIDGET"
    }), (0, l.ES)({
      widgetType: a.l.CURRENT_GAMES,
      game: {
        applicationId: t
      },
      ignoreMaxGames: true
    }), (0, u.openUserProfileModal)({
      userId: g,
      section: _.oh.WIDGETS
    }), null == h || h()
  }, [t, g, n, h]);
  return y ? (0, r.jsx)(d.O1, {
    text: m.intl.string(m.t.BjYzmC),
    onClick: O,
    fullWidth: true
  }) : null
}