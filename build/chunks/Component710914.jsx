/** Chunk was on 1272 **/
/** chunk id: 710914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk843611 = require("./843611.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701913 = require("./701913.js");

function h(e) {
  let {
    quests: t,
    isFetching: n,
    hasFetched: l,
    hasFiltersApplied: h = false,
    onClearFilters: g
  } = e, m = i.useRef(false), b = (0, s.TH)(), _ = i.useMemo(() => {
    if (b.hash.length > 0) {
      let e = b.hash.slice(1);
      for (let n of t)
        if (n.id === e) return e
    }
    return null
  }, [t, b.hash]);
  i.useEffect(() => {
    m.current = false
  }, [b.hash]), i.useEffect(() => {
    if (null == _ || m.current || n || !l) return;
    let e = document.getElementById("quest-tile-".concat(_));
    null == e || e.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }), m.current = true
  }, [t, _, b, n, l]);
  let O = null != _,
    [E, y] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = (0, o.debounce)(() => {
      y(window.innerWidth)
    }, 250);
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let v = E >= 1610 ? 3 : E >= 1340 ? 2 : 1;
  return n && 0 === t.length ? (0, r.jsx)(c.$jN, {
    className: f.spinner
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: f.emptyStateContainer,
    children: [(0, r.jsx)(c.X6q, {
      variant: "heading-xl/semibold",
      children: p.intl.string(h ? p.t.PBfFn5 : p.t["NqFP6+"])
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: h ? p.intl.format(p.t.LdYS1N, {
        onClick: g
      }) : p.intl.string(p.t.LhD4yM)
    })]
  }) : (0, r.jsx)("div", {
    className: f.container,
    children: t.map((e, t) => {
      let n = Math.floor(t / v);
      return (0, r.jsx)(d.Z, {
        quest: e,
        questContent: u.jn.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: a()(f.questTile, {
          [f.selected]: O && e.id === _,
          [f.unselected]: O && e.id !== _
        }),
        sourceQuestContent: u.jn.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, _)
}