/** Chunk was on 384 **/
/** chunk id: 795691, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./457542.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk279881 = require("./279881.js"),
  Chunk383124 = require("./383124.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk661656 = require("./661656.js");

function u(e) {
  let {
    guildId: t,
    selectedGameApplicationIds: n,
    onUpdateGames: u,
    disabled: d
  } = e, {
    topGames: g,
    tryFetchTopGames: m
  } = (0, s.I)(), p = g.get(t), [f, h] = i.useState(false);
  i.useEffect(() => {
    h(true), m(t).finally(() => {
      h(false)
    })
  }, [t, m]);
  let x = i.useMemo(() => null == p ? [] : Object.keys(p).filter(e => !n.includes(e)).sort((e, t) => p[t].score - p[e].score), [p, n]),
    b = i.useCallback(e => {
      n.includes(e) ? u(n.filter(t => t !== e)) : u([...n, e])
    }, [u, n]);
  return f && null == p ? (0, r.jsx)(l.$jN, {}) : null == x || 0 === x.length ? null : (0, r.jsxs)(r.Fragment, {
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
        children: x.map(e => (0, r.jsx)(a.Z, {
          applicationId: e,
          selected: false,
          onClick: b,
          disabled: d
        }, e))
      })]
    })]
  })
}