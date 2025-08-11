/** Chunk was on 1272 **/
/** chunk id: 140700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk89182 = require("./89182.jsx"),
  Chunk164991 = require("./164991.js"),
  Chunk783393 = require("./783393.js"),
  Chunk112471 = require("./112471.js"),
  Chunk746728 = require("./746728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk882375 = require("./882375.js");

function h(e) {
  let {
    count: t,
    categoryId: n
  } = e, i = (0, s.E)({
    categoryId: n
  });
  return (0, r.jsx)(a.iG, {
    count: t,
    name: i
  })
}

function f(e) {
  let {
    loadId: t
  } = e, n = o.Z.useField("categoryId"), f = (0, c.q)(), g = (0, s.E)({
    categoryId: n
  }), m = i.useCallback(e => {
    (0, u.I)({
      loadId: t,
      categoryId: Number(e)
    })
  }, [t]), b = i.useMemo(() => null == f ? [] : f.map(e => {
    let [t, n] = e;
    return {
      id: "".concat(t),
      label: (0, r.jsx)(h, {
        categoryId: t,
        count: n
      })
    }
  }), [f]);
  return null == f ? null : (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      children: d.intl.string(d.t.f09BQE)
    }), (0, r.jsx)(a.ZP, {
      items: b,
      title: g,
      onSelect: m,
      selected: "".concat(n),
      "aria-label": d.intl.string(d.t.Ng5cTE),
      variant: a.PA.FILLED
    })]
  })
}