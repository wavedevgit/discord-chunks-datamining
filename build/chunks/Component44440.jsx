/** Chunk was on 21738 **/
/** chunk id: 44440, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m,
  j: () => g
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

function g(e) {
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

function f(e) {
  let {
    loadId: t,
    categoryId: n,
    count: l
  } = e, c = i.useCallback(() => {
    g({
      categoryId: n,
      loadId: t
    })
  }, [n, t]), p = u.A.useField("categoryId") === n, f = l.toLocaleString(o.default.locale), m = (0, d.r)({
    categoryId: n
  });
  return (0, r.jsxs)(s.DUT, {
    onClick: c,
    className: a()(h.L1, {
      [h.wH]: p
    }),
    children: [(0, r.jsx)(s.Text, {
      className: h.UU,
      variant: "text-sm/medium",
      color: "text-strong",
      children: m
    }), (0, r.jsx)(s.Text, {
      className: h.U9,
      variant: "text-sm/normal",
      color: "text-muted",
      children: f
    })]
  })
}
let m = function(e) {
  let {
    loadId: t
  } = e, n = (0, p.L)();
  return null == n ? null : (0, r.jsx)("div", {
    className: h.LZ,
    children: n.map(e => {
      let [n, i] = e;
      return (0, r.jsx)(f, {
        loadId: t,
        categoryId: n,
        count: i
      }, n)
    })
  })
}