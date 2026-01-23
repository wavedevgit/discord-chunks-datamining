/** Chunk was on 47841 **/
/** chunk id: 298818, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./896048.js"), require("./492834.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk493581 = require("./493581.js"),
  Chunk308072 = require("./308072.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk194976 = require("./194976.js");

function d(e) {
  let {
    guildId: t,
    selectedGameApplicationIds: n,
    onUpdateGames: d,
    disabled: u
  } = e, {
    topGames: g,
    tryFetchTopGames: m
  } = (0, s.f)(), p = g.get(t), [f, b] = i.useState(false);
  i.useEffect(() => {
    b(true), m(t).finally(() => {
      b(false)
    })
  }, [t, m]);
  let h = i.useMemo(() => null == p ? [] : Object.keys(p).filter(e => !n.includes(e)).sort((e, t) => p[t].score - p[e].score), [p, n]),
    x = i.useCallback(e => {
      n.includes(e) ? d(n.filter(t => t !== e)) : d([...n, e])
    }, [d, n]);
  return f && null == p ? (0, r.jsx)(l.y$y, {}) : null == h || 0 === h.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: c.me
    }), (0, r.jsxs)("div", {
      className: c.rS,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: o.intl.string(o.t.bFGpua)
      }), (0, r.jsx)("div", {
        className: c.CW,
        children: h.map(e => (0, r.jsx)(a.A, {
          applicationId: e,
          selected: false,
          onClick: x,
          disabled: u
        }, e))
      })]
    })]
  })
}