/** Chunk was on 1272 **/
/** chunk id: 665807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk959165 = require("./959165.js"),
  Chunk164991 = require("./164991.js"),
  Chunk526429 = require("./526429.js"),
  Chunk128449 = require("./128449.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831686 = require("./831686.js"),
  Chunk882008 = require("./882008.js");
let g = function(e) {
  let {
    loadId: t
  } = e, n = s.Z.useField("categoryId"), g = (0, l.e7)([c.Z], () => c.Z.getCategoryName(n)), m = i.useCallback(() => {
    s.Z.setState({
      categoryId: u.Hk
    }), o.Z.loadCategoryResults({
      loadId: t,
      categoryId: u.Hk,
      query: s.Z.getField("fetchedQuery"),
      languageCode: s.Z.getField("languageCode")
    })
  }, [t]), h = n === u.Hk ? d.intl.string(d.t.Ivw1Is) : d.intl.formatToPlainString(d.t["+1WAFb"], {
    categoryName: g
  }), b = n === u.Hk ? d.intl.string(d.t.aXvEjd) : d.intl.format(d.t.XLioqn, {
    onClick: m
  });
  return (0, r.jsxs)("div", {
    className: p.container,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: f,
      className: p.image
    }), (0, r.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      className: p.header,
      children: h
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: b
    })]
  })
}