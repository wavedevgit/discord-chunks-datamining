/** Chunk was on 384 **/
/** chunk id: 795691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk279881 = require("./279881.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk661656 = require("./661656.js");

function d(e) {
  let {
    guildId: t,
    selectedGameApplicationIds: n,
    onUpdateGames: d,
    disabled: u
  } = e, {
    topGames: g,
    tryFetchTopGames: m
  } = (0, a.I)(), p = g.get(t), [f, h] = i.useState(false);
  i.useEffect(() => {
    h(true), m(t).finally(() => {
      h(false)
    })
  }, [t, m]);
  let b = i.useMemo(() => null == p ? [] : Object.keys(p).filter(e => !n.includes(e)).sort((e, t) => p[t].score - p[e].score), [p, n]),
    x = i.useCallback(e => {
      n.includes(e) ? d(n.filter(t => t !== e)) : d([...n, e])
    }, [d, n]);
  return f && null == p ? (0, r.jsx)(l.$jN, {}) : null == b || 0 === b.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: c.separator
    }), (0, r.jsxs)("div", {
      className: c.gamesContainer,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: o.intl.string(o.t.bFGpua)
      }), (0, r.jsx)("div", {
        className: c.gamesList,
        children: b.map(e => (0, r.jsx)(s.Z, {
          applicationId: e,
          selected: false,
          onClick: x,
          disabled: u
        }, e))
      })]
    })]
  })
}