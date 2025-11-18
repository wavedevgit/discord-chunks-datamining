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
  } = e, m = i.useRef(false), _ = (0, o.TH)(), b = i.useMemo(() => {
    if (_.hash.length > 0) {
      let e = _.hash.slice(1);
      for (let n of t)
        if (n.id === e) return e
    }
    return null
  }, [t, _.hash]);
  i.useEffect(() => {
    m.current = false
  }, [_.hash]), i.useEffect(() => {
    if (null == b || m.current || n || !l) return;
    let e = document.getElementById("quest-tile-".concat(b));
    null == e || e.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }), m.current = true
  }, [t, b, _, n, l]);
  let E = null != b,
    [O, y] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = (0, s.debounce)(() => {
      y(window.innerWidth)
    }, 250);
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let v = O >= 1610 ? 3 : O >= 1340 ? 2 : 1;
  return n && 0 === t.length ? (0, r.jsx)(c.$jN, {
    className: f.spinner
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: f.emptyStateContainer,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      children: p.intl.string(h ? p.t.PBfFnx : p.t.NqFP6z)
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: h ? p.intl.format(p.t.LdYS1H, {
        onClick: g
      }) : p.intl.string(p.t.LhD4yH)
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
          [f.selected]: E && e.id === b,
          [f.unselected]: E && e.id !== b
        }),
        sourceQuestContent: u.jn.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, b)
}