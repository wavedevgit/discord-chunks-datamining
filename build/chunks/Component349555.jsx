/** Chunk was on 21738 **/
/** chunk id: 349555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk960488 = require("./960488.js"),
  Chunk397927 = require("./397927.js"),
  Chunk341915 = require("./341915.js"),
  Chunk710969 = require("./710969.js"),
  Chunk439075 = require("./439075.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk142011 = require("./142011.js");

function m(e) {
  let {
    quests: t,
    excludedQuests: n,
    isFetching: l,
    hasFetched: m,
    hasFiltersApplied: f = false,
    onClearFilters: A
  } = e, _ = i.useRef(false), b = (0, o.zy)(), E = i.useMemo(() => {
    if (b.hash.length > 0) {
      let e = b.hash.slice(1),
        r = (0, d.vc)(e, t, n);
      if (null != r) return r.id
    }
    return null
  }, [t, n, b.hash]);
  i.useEffect(() => {
    _.current = false
  }, [b.hash]), i.useEffect(() => {
    if (null == E || _.current || l || !m) return;
    let e = document.getElementById("quest-tile-".concat(E));
    null == e || e.scrollIntoView({
      behavior: "smooth",
      block: "center"
    }), _.current = true
  }, [t, E, b, l, m]);
  let O = null != E,
    [y, I] = i.useState(window.innerWidth);
  i.useEffect(() => {
    let e = (0, s.debounce)(() => {
      I(window.innerWidth)
    }, 250);
    return window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e)
    }
  }, []);
  let v = y >= 1610 ? 3 : y >= 1340 ? 2 : 1;
  return l && 0 === t.length ? (0, r.jsx)(c.y$y, {
    className: g.u1
  }) : 0 === t.length ? (0, r.jsxs)("div", {
    className: g.y7,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-xl/semibold",
      children: h.intl.string(f ? h.t.PBfFnx : h.t.NqFP6z)
    }), (0, r.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "text-subtle",
      children: f ? h.intl.format(h.t.LdYS1H, {
        onClick: A
      }) : h.intl.string(h.t.LhD4yH)
    })]
  }) : (0, r.jsx)("div", {
    className: g.kL,
    children: t.map((e, t) => {
      let n = Math.floor(t / v);
      return (0, r.jsx)(p.A, {
        quest: e,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        contentPosition: t,
        rowIndex: n,
        className: a()(g.d, {
          [g.wH]: O && e.id === E,
          [g.tP]: O && e.id !== E
        }),
        sourceQuestContent: u.uF.QUEST_HOME_DESKTOP
      }, e.id)
    })
  }, E)
}