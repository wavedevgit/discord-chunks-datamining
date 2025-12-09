/** Chunk was on 69844 **/
/** chunk id: 188607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk678694 = require("./678694.js"),
  Chunk216780 = require("./216780.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk188399 = require("./188399.js"),
  Chunk882008 = require("./882008.js");
let p = function(e) {
  let {
    selectedCategoryId: t,
    searchAllCategories: n
  } = e, p = (0, i.e7)([s.Z], () => s.Z.getCategories()), m = a.useMemo(() => {
    var e;
    return null == (e = p.find(e => e.id === t)) ? true : e.name
  }, [p, t]), h = t === o.MU || null == m ? c.intl.string(c.t["FVJt+8"]) : c.intl.formatToPlainString(c.t.FjCaNB, {
    categoryName: m
  }), g = t === o.MU ? c.intl.string(c.t.GXiMta) : c.intl.format(c.t.JaLoFF, {
    onClick: n
  });
  return (0, r.jsxs)("div", {
    className: d.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: u,
      className: d.image
    }), (0, r.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      className: d.header,
      children: h
    }), (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: g
    })]
  })
}