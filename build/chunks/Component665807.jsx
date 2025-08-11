/** Chunk was on 1272 **/
/** chunk id: 665807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk959165 = require("./959165.js"),
  Chunk164991 = require("./164991.js"),
  Chunk526429 = require("./526429.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk30754 = require("./30754.js"),
  Chunk882008 = require("./882008.js");
let f = function(e) {
  let {
    loadId: t
  } = e, n = s.Z.useField("categoryId"), f = (0, l.e7)([c.Z], () => c.Z.getCategoryName(n)), g = i.useCallback(() => {
    s.Z.setState({
      categoryId: u.Hk
    }), o.Z.loadCategoryResults({
      loadId: t,
      categoryId: u.Hk,
      query: s.Z.getField("fetchedQuery"),
      languageCode: s.Z.getField("languageCode")
    })
  }, [t]), m = n === u.Hk ? d.intl.string(d.t.Ivw1Ii) : d.intl.formatToPlainString(d.t["+1WAFR"], {
    categoryName: f
  }), b = n === u.Hk ? d.intl.string(d.t.aXvEjY) : d.intl.format(d.t.XLioqq, {
    onClick: g
  });
  return (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: h,
      className: p.image
    }), (0, r.jsx)(a.X6q, {
      variant: "heading-xl/semibold",
      className: p.header,
      children: m
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: b
    })]
  })
}