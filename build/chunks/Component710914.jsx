/** Chunk was on 1272 **/
/** chunk id: 710914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk334525 = require("./334525.js");

function f(e) {
  let {
    quests: t,
    isFetching: n,
    hasFiltersApplied: l = false,
    onClearFilters: f
  } = e, h = null;
  if (window.location.hash.length > 0) {
    let e = window.location.hash.slice(1);
    for (let n of t)
      if (n.id === e) {
        h = e;
        break
      }
  }
  i.useEffect(() => {
    for (let e of t)
      if (e.id === h) {
        let e = document.getElementById("quest-tile-".concat(h));
        null == e || e.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break
      }
  }, [t, h]);
  let g = null != h,
    [m, b] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = (0, o.debounce)(() => {
      b(window.innerWidth)
    }, 250);
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let _ = m >= 1610 ? 3 : m >= 1340 ? 2 : 1;
  return n && 0 === t.length ? (0, r.jsx)(s.$jN, {
    className: p.spinner
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: p.emptyStateContainer,
    children: [(0, r.jsx)(s.X6q, {
      variant: "heading-xl/semibold",
      children: d.intl.string(l ? d.t.PBfFn5 : d.t["NqFP6+"])
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: l ? d.intl.format(d.t.LdYS1N, {
        onClick: f
      }) : d.intl.string(d.t.LhD4yM)
    })]
  }) : (0, r.jsx)("div", {
    className: p.container,
    children: t.map((e, t) => {
      let n = Math.floor(t / _);
      return (0, r.jsx)(u.Z, {
        quest: e,
        questContent: c.jn.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: a()(p.questTile, {
          [p.selected]: g && e.id === h,
          [p.unselected]: g && e.id !== h
        }),
        sourceQuestContent: c.jn.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, h)
}