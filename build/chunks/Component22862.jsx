/** Chunk was on 21738 **/
/** chunk id: 22862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk191711 = require("./191711.jsx"),
  Chunk282026 = require("./282026.js"),
  Chunk926277 = require("./926277.js"),
  Chunk931222 = require("./931222.js"),
  Chunk44440 = require("./44440.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk430556 = require("./430556.js");

function f(e) {
  let {
    count: t,
    categoryId: n
  } = e, i = (0, o.r)({
    categoryId: n
  });
  return (0, r.jsx)(a.kR, {
    count: t,
    name: i
  })
}

function h(e) {
  let {
    loadId: t
  } = e, n = s.A.useField("categoryId"), h = (0, c.L)(), A = (0, o.r)({
    categoryId: n
  }), g = i.useCallback(e => {
    (0, u.j)({
      loadId: t,
      categoryId: Number(e)
    })
  }, [t]), m = i.useMemo(() => null == h ? [] : h.map(e => {
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
    className: p.k,
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      children: d.intl.string(d.t.f09BQJ)
    }), (0, r.jsx)(a.Ay, {
      items: m,
      title: A,
      onSelect: g,
      selected: "".concat(n),
      "aria-label": d.intl.string(d.t.Ng5cTK),
      variant: a.Hb.FILLED
    })]
  })
}