/** Chunk was on 97492 **/
/** chunk id: 770904, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk652793 = require("./652793.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk186111 = require("./186111.js"),
  Chunk249584 = require("./249584.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk49999 = require("./49999.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk838554 = require("./838554.js");
let O = Chunk64700.memo(function(e) {
  let {
    guildId: t,
    selected: n
  } = e, O = (0, s.useHasAnyModalOpen)(), j = (0, i.bG)([f.A], () => f.A.hasLayers()), [v, x] = (0, c.ww)([a.M.GAME_SERVER_HOSTING_NEW_BADGE], t), E = v === a.M.GAME_SERVER_HOSTING_NEW_BADGE, [_, C] = (0, c.ww)(O || j || !E ? [] : [a.M.GAME_SERVER_HOSTING_NEW_COACHMARK], t), S = l.useCallback(e => {
    x(e), C(e)
  }, [x, C]), I = l.useCallback(() => {
    S(g.i.USER_DISMISS), (0, d.pX)(h.BVt.CHANNEL(t, b.VV.GAME_SERVERS))
  }, [t, S]), N = l.useRef(null), T = _ === a.M.GAME_SERVER_HOSTING_NEW_COACHMARK, P = l.useCallback(() => (0, r.jsx)(p.mn, {
    channelRowRef: N,
    guildId: t,
    markAsDismissed: S
  }), [t, S]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.G, {
      ref: N,
      id: "game-server-".concat(t),
      renderIcon: e => (0, r.jsx)(o._xR, {
        size: "md",
        className: e,
        color: "currentColor"
      }),
      text: A.intl.string(m.default.vCzwM7),
      selected: n,
      onClick: I,
      trailing: E ? (0, r.jsx)(o.LpS, {
        disableColor: true,
        text: A.intl.string(A.t.y2b7CA),
        className: y.q
      }) : null
    }), T && P()]
  })
})