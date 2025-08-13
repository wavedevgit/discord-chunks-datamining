/** Chunk was on 1272 **/
/** chunk id: 710914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./290780.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk415104 = require("./415104.jsx"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk196180 = require("./196180.js");

function f(e) {
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
  let f = null != l,
    [h, g] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = () => {
      g(window.innerWidth)
    };
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let m = h >= 1610 ? 3 : h >= 1340 ? 2 : 1,
    b = i.useMemo(() => {
      let e = [];
      for (let r of t) {
        var n;
        r.id === u.V6 && (null == (n = r.userStatus) ? true : n.claimedAt) == null ? e.unshift(r) : e.push(r)
      }
      return e
    }, [t]);
  return n && 0 === t.length ? (0, r.jsx)(o.$jN, {
    className: p.spinner
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: p.emptyStateContainer,
    children: [(0, r.jsx)(o.X6q, {
      variant: "heading-xl/semibold",
      children: d.intl.string(d.t["NqFP6+"])
    }), (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-secondary",
      children: d.intl.string(d.t.LhD4yM)
    })]
  }) : (0, r.jsx)("div", {
    className: p.container,
    children: b.map((e, t) => {
      let n = Math.floor(t / m);
      return (0, r.jsx)(c.Z, {
        quest: e,
        questContent: s.jn.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: a()(p.questTile, {
          [p.selected]: f && e.id === l,
          [p.unselected]: f && e.id !== l
        }),
        sourceQuestContent: s.jn.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, l)
}