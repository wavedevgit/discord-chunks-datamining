/** Chunk was on 1272 **/
/** chunk id: 710914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk334525 = require("./334525.js");

function p(e) {
  let {
    quests: t,
    isFetching: n
  } = e, l = null;
  if (window.location.hash.length > 0) {
    let e = window.location.hash.slice(1);
    for (let n of t)
      if (n.id === e) {
        l = e;
        break
      }
  }
  i.useEffect(() => {
    for (let e of t)
      if (e.id === l) {
        let e = document.getElementById("quest-tile-".concat(l));
        null == e || e.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
        break
      }
  }, [t, l]);
  let p = null != l,
    [f, h] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = () => {
      h(window.innerWidth)
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let g = f >= 1610 ? 3 : f >= 1340 ? 2 : 1;
  return n && 0 === t.length ? (0, r.jsx)(o.$jN, {
    className: d.spinner
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: d.emptyStateContainer,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xl/semibold",
      children: u.intl.string(u.t["NqFP6+"])
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: u.intl.string(u.t.LhD4yM)
    })]
  }) : (0, r.jsx)("div", {
    className: d.container,
    children: t.map((e, t) => {
      let n = Math.floor(t / g);
      return (0, r.jsx)(c.Z, {
        quest: e,
        questContent: s.jn.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: a()(d.questTile, {
          [d.selected]: p && e.id === l,
          [d.unselected]: p && e.id !== l
        }),
        sourceQuestContent: s.jn.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, l)
}