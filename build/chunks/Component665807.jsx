/** Chunk was on 1272 **/
/** chunk id: 665807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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
  Chunk415427 = require("./415427.js"),
  Chunk825317 = require("./825317.js");
let h = function(e) {
  let {
    loadId: t
  } = e, n = o.Z.useField("categoryId"), h = (0, l.e7)([c.Z], () => c.Z.getCategoryName(n)), g = i.useCallback(() => {
    o.Z.setState({
      categoryId: u.Hk
    }), s.Z.loadCategoryResults({
      loadId: t,
      categoryId: u.Hk,
      query: o.Z.getField("fetchedQuery"),
      languageCode: o.Z.getField("languageCode")
    })
  }, [t]), m = n === u.Hk ? d.intl.string(d.t.Ivw1Is) : d.intl.formatToPlainString(d.t["+1WAFb"], {
    categoryName: h
  }), _ = n === u.Hk ? d.intl.string(d.t.aXvEjd) : d.intl.format(d.t.XLioqn, {
    onClick: g
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
      children: m
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: _
    })]
  })
}