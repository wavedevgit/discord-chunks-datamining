/** Chunk was on 45620 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(388685);
var r = n(255367),
  l = n(73800),
  i = n(481060),
  a = n(501431),
  o = n(215023),
  s = n(388032),
  c = n(234209);

function u(e) {
  let {
    handleTransition: t,
    selectedTab: n
  } = e, {
    searchQuery: u,
    onSetSearchQuery: d
  } = (0, a.S)(), [p, g] = l.useState("");
  return l.useEffect(() => {
    let e = setTimeout(() => {
      d(p)
    }, 250);
    return () => clearTimeout(e)
  }, [p, d]), l.useEffect(() => {
    g(u)
  }, [u]), (0, r.jsx)(i.E1j, {
    onFocus: () => {
      n !== o.AW.CATALOG && t(o.AW.CATALOG)
    },
    className: c.searchBar,
    onKeyDown: e => {
      "Enter" === e.key && d(p)
    },
    query: p,
    onChange: g,
    onClear: () => g(""),
    placeholder: s.intl.string(s.t["hIt/Nj"])
  })
}