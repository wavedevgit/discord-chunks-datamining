/** Chunk was on 1272 **/
/** chunk id: 710914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk828700 = require("./828700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk49436 = require("./49436.js"),
  Chunk862657 = require("./862657.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk784241 = require("./784241.js");

function h(e) {
  let {
    quests: t,
    excludedQuests: n,
    isFetching: l,
    hasFetched: h,
    hasFiltersApplied: m = false,
    onClearFilters: b
  } = e, E = i.useRef(false), _ = (0, o.TH)(), O = i.useMemo(() => {
    if (_.hash.length > 0) {
      let e = _.hash.slice(1),
        r = (0, d._x)(e, t, n);
      if (null != r) return r.id
    }
    return null
  }, [t, n, _.hash]);
  i.useEffect(() => {
    E.current = false
  }, [_.hash]), i.useEffect(() => {
    if (null == O || E.current || l || !h) return;
    let e = document.getElementById("quest-tile-".concat(O));
    null == e || e.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }), E.current = true
  }, [t, O, _, l, h]);
  let v = null != O,
    [y, I] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = (0, s.debounce)(() => {
      I(window.innerWidth)
    }, 250);
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let C = y >= 1610 ? 3 : y >= 1340 ? 2 : 1;
  return l && 0 === t.length ? (0, r.jsx)(c.$jN, {
    className: g.spinner
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: g.emptyStateContainer,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      children: f.intl.string(m ? f.t.PBfFnx : f.t.NqFP6z)
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      children: m ? f.intl.format(f.t.LdYS1H, {
        onClick: b
      }) : f.intl.string(f.t.LhD4yH)
    })]
  }) : (0, r.jsx)("div", {
    className: g.container,
    children: t.map((e, t) => {
      let n = Math.floor(t / C);
      return (0, r.jsx)(p.Z, {
        quest: e,
        questContent: u.jn.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: a()(g.questTile, {
          [g.selected]: v && e.id === O,
          [g.unselected]: v && e.id !== O
        }),
        sourceQuestContent: u.jn.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, O)
}