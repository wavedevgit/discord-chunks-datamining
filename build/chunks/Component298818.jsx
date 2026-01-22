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
    topGames: f,
    tryFetchTopGames: g
  } = (0, s.f)(), b = f.get(t), [m, p] = i.useState(false);
  i.useEffect(() => {
    p(true), g(t).finally(() => {
      p(false)
    })
  }, [t, g]);
  let x = i.useMemo(() => null == b ? [] : Object.keys(b).filter(e => !n.includes(e)).sort((e, t) => b[t].score - b[e].score), [b, n]),
    h = i.useCallback(e => {
      n.includes(e) ? d(n.filter(t => t !== e)) : d([...n, e])
    }, [d, n]);
  return m && null == b ? (0, r.jsx)(l.y$y, {}) : null == x || 0 === x.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: o.me
    }), (0, r.jsxs)("div", {
      className: o.rS,
      children: [(0, r.jsx)(l.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: c.intl.string(c.t.bFGpua)
      }), (0, r.jsx)("div", {
        className: o.CW,
        children: x.map(e => (0, r.jsx)(a.A, {
          applicationId: e,
          selected: false,
          onClick: h,
          disabled: u
        }, e))
      })]
    })]
  })
}