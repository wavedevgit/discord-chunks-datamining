/** Chunk was on 1272 **/
/** chunk id: 140700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk89182 = require("./89182.jsx"),
  Chunk164991 = require("./164991.js"),
  Chunk783393 = require("./783393.js"),
  Chunk112471 = require("./112471.js"),
  Chunk746728 = require("./746728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk656535 = require("./656535.js");

function f(e) {
  let {
    count: t,
    categoryId: n
  } = e, i = (0, o.E)({
    categoryId: n
  });
  return (0, r.jsx)(a.iG, {
    count: t,
    name: i
  })
}

function h(e) {
  let {
    loadId: t
  } = e, n = s.Z.useField("categoryId"), h = (0, c.q)(), g = (0, o.E)({
    categoryId: n
  }), m = i.useCallback(e => {
    (0, u.I)({
      loadId: t,
      categoryId: Number(e)
    })
  }, [t]), _ = i.useMemo(() => null == h ? [] : h.map(e => {
    let [t, n] = e;
    return {
      id: "".concat(t),
      label: (0, r.jsx)(f, {
        categoryId: t,
        count: n
      })
    }
  }), [h]);
  return null == h ? null : (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: d.intl.string(d.t.f09BQJ)
    }), (0, r.jsx)(a.ZP, {
      items: _,
      title: g,
      onSelect: m,
      selected: "".concat(n),
      "aria-label": d.intl.string(d.t.Ng5cTK),
      variant: a.PA.FILLED
    })]
  })
}