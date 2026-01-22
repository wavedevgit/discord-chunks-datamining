/** Chunk was on 21738 **/
/** chunk id: 44440, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g,
  j: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk773669 = require("./773669.js"),
  Chunk747550 = require("./747550.js"),
  Chunk282026 = require("./282026.js"),
  Chunk926277 = require("./926277.js"),
  Chunk931222 = require("./931222.js"),
  Chunk503330 = require("./503330.js");

function h(e) {
  let {
    categoryId: t,
    loadId: n
  } = e;
  u.A.setState({
    categoryId: t
  }), c.A.loadCategoryResults({
    loadId: n,
    categoryId: t,
    query: u.A.getField("fetchedQuery"),
    languageCode: u.A.getField("languageCode")
  })
}

function A(e) {
  let {
    loadId: t,
    categoryId: n,
    count: l
  } = e, c = i.useCallback(() => {
    h({
      categoryId: n,
      loadId: t
    })
  }, [n, t]), p = u.A.useField("categoryId") === n, A = l.toLocaleString(o.default.locale), g = (0, d.r)({
    categoryId: n
  });
  return (0, r.jsxs)(s.DUT, {
    onClick: c,
    className: a()(f.L1, {
      [f.wH]: p
    }),
    children: [(0, r.jsx)(s.Text, {
      className: f.UU,
      variant: "text-sm/medium",
      color: "text-strong",
      children: g
    }), (0, r.jsx)(s.Text, {
      className: f.U9,
      variant: "text-sm/normal",
      color: "text-muted",
      children: A
    })]
  })
}
let g = function(e) {
  let {
    loadId: t
  } = e, n = (0, p.L)();
  return null == n ? null : (0, r.jsx)("div", {
    className: f.LZ,
    children: n.map(e => {
      let [n, i] = e;
      return (0, r.jsx)(A, {
        loadId: t,
        categoryId: n,
        count: i
      }, n)
    })
  })
}