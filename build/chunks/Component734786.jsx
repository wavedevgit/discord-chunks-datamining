/** Chunk was on 28636 **/
/** chunk id: 734786, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk38181 = require("./38181.js"),
  Chunk767599 = require("./767599.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk471100 = require("./471100.js"),
  Chunk842503 = require("./842503.js");
let p = function(e) {
  let {
    selectedCategoryId: t,
    searchAllCategories: n
  } = e, p = (0, r.bG)([s.A], () => s.A.getCategories()), h = a.useMemo(() => {
    var e;
    return null == (e = p.find(e => e.id === t)) ? true : e.name
  }, [p, t]), m = t === c.lj || null == h ? o.intl.string(o.t["FVJt+8"]) : o.intl.formatToPlainString(o.t.FjCaNB, {
    categoryName: h
  }), b = t === c.lj ? o.intl.string(o.t.GXiMta) : o.intl.format(o.t.JaLoFF, {
    onClick: n
  });
  return (0, l.jsxs)("div", {
    className: d.kL,
    children: [(0, l.jsx)("img", {
      alt: "",
      src: u,
      className: d.Sl
    }), (0, l.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: d.wx,
      children: m
    }), (0, l.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: b
    })]
  })
}