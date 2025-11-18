/** Chunk was on 1272 **/
/** chunk id: 710914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk828700 = require("./828700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk701913 = require("./701913.js");

function g(e) {
  let {
    quests: t,
    excludedQuests: n,
    isFetching: l,
    hasFetched: g,
    hasFiltersApplied: m = false,
    onClearFilters: _
  } = e, b = i.useRef(false), E = (0, o.TH)(), O = i.useMemo(() => {
    if (E.hash.length > 0) {
      let e = E.hash.slice(1),
        r = (0, u._x)(e, t, n);
      if (null != r) return r.id
    }
    return null
  }, [t, n, E.hash]);
  i.useEffect(() => {
    b.current = false
  }, [E.hash]), i.useEffect(() => {
    if (null == O || b.current || l || !g) return;
    let e = document.getElementById("quest-tile-".concat(O));
    null == e || e.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }), b.current = true
  }, [t, O, E, l, g]);
  let y = null != O,
    [v, I] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = (0, s.debounce)(() => {
      I(window.innerWidth)
    }, 250);
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let C = v >= 1610 ? 3 : v >= 1340 ? 2 : 1;
  return l && 0 === t.length ? (0, r.jsx)(c.$jN, {
    className: h.spinner
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: h.emptyStateContainer,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      children: f.intl.string(m ? f.t.PBfFnx : f.t.NqFP6z)
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: m ? f.intl.format(f.t.LdYS1H, {
        onClick: _
      }) : f.intl.string(f.t.LhD4yH)
    })]
  }) : (0, r.jsx)("div", {
    className: h.container,
    children: t.map((e, t) => {
      let n = Math.floor(t / C);
      return (0, r.jsx)(p.Z, {
        quest: e,
        questContent: d.jn.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: a()(h.questTile, {
          [h.selected]: y && e.id === O,
          [h.unselected]: y && e.id !== O
        }),
        sourceQuestContent: d.jn.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, O)
}