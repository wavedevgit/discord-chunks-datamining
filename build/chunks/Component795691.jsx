/** Chunk was on 9536 **/
/** chunk id: 795691, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk279881 = require("./279881.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk772201 = require("./772201.js");

function d(e) {
  let {
    guildId: t,
    selectedGameApplicationIds: n,
    onUpdateGames: d,
    disabled: u
  } = e, {
    topGames: g,
    tryFetchTopGames: f
  } = (0, a.I)(), m = g.get(t), [b, p] = i.useState(false);
  i.useEffect(() => {
    p(true), f(t).finally(() => {
      p(false)
    })
  }, [t, f]);
  let h = i.useMemo(() => null == m ? [] : Object.keys(m).filter(e => !n.includes(e)).sort((e, t) => m[t].score - m[e].score), [m, n]),
    x = i.useCallback(e => {
      n.includes(e) ? d(n.filter(t => t !== e)) : d([...n, e])
    }, [d, n]);
  return b && null == m ? (0, r.jsx)(l.$jN, {}) : null == h || 0 === h.length ? null : (0, r.jsxs)(r.Fragment, {
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
        children: h.map(e => (0, r.jsx)(s.Z, {
          applicationId: e,
          selected: false,
          onClick: x,
          disabled: u
        }, e))
      })]
    })]
  })
}