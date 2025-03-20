/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => c
}), n(47120), n(773603), n(230036);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(279881),
  l = n(383124),
  o = n(388032),
  A = n(160499);

function c(e) {
  let {
    guildId: t,
    selectedGameApplicationIds: n,
    onUpdateGames: c,
    disabled: d
  } = e, {
    topGames: u,
    tryFetchTopGames: g
  } = (0, a.I)(), f = u.get(t), [m, p] = i.useState(!1);
  i.useEffect(() => {
    p(!0), g(t).finally(() => {
      p(!1)
    })
  }, [t, g]);
  let h = i.useMemo(() => null == f ? [] : Object.keys(f).filter(e => !n.includes(e)).sort((e, t) => f[t].score - f[e].score), [f, n]),
    C = i.useCallback(e => {
      n.includes(e) ? c(n.filter(t => t !== e)) : c([...n, e])
    }, [c, n]);
  return m && null == f ? (0, r.jsx)(s.$jN, {}) : null == h || 0 === h.length ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: A.separator
    }), (0, r.jsxs)("div", {
      className: A.gamesContainer,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: o.NW.string(o.t.bFGpub)
      }), (0, r.jsx)("div", {
        className: A.gamesList,
        children: h.map(e => (0, r.jsx)(l.Z, {
          applicationId: e,
          selected: !1,
          onClick: C,
          disabled: d
        }, e))
      })]
    })]
  })
}