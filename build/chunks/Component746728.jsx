/** Chunk was on 1272 **/
/** chunk id: 746728, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => h,
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk706454 = require("./706454.js"),
  Chunk959165 = require("./959165.js"),
  Chunk164991 = require("./164991.js"),
  Chunk783393 = require("./783393.js"),
  Chunk112471 = require("./112471.js"),
  Chunk803638 = require("./803638.js");

function h(e) {
  let {
    categoryId: t,
    loadId: n
  } = e;
  u.Z.setState({
    categoryId: t
  }), c.Z.loadCategoryResults({
    loadId: n,
    categoryId: t,
    query: u.Z.getField("fetchedQuery"),
    languageCode: u.Z.getField("languageCode")
  })
}

function m(e) {
  let {
    loadId: t,
    categoryId: n,
    count: l
  } = e, c = i.useCallback(() => {
    h({
      categoryId: n,
      loadId: t
    })
  }, [n, t]), p = u.Z.useField("categoryId") === n, m = l.toLocaleString(o.default.locale), g = (0, d.E)({
    categoryId: n
  });
  return (0, r.jsxs)(s.P3F, {
    onClick: c,
    className: a()(f.category, {
      [f.selected]: p
    }),
    children: [(0, r.jsx)(s.Text, {
      className: f.name,
      variant: "text-sm/medium",
      color: "header-primary",
      children: g
    }), (0, r.jsx)(s.Text, {
      className: f.count,
      variant: "text-sm/normal",
      color: "text-muted",
      children: m
    })]
  })
}
let g = function(e) {
  let {
    loadId: t
  } = e, n = (0, p.q)();
  return null == n ? null : (0, r.jsx)("div", {
    className: f.categories,
    children: n.map(e => {
      let [n, i] = e;
      return (0, r.jsx)(m, {
        loadId: t,
        categoryId: n,
        count: i
      }, n)
    })
  })
}