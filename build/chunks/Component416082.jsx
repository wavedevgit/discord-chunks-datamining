/** Chunk was on 21738 **/
/** chunk id: 416082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk747550 = require("./747550.js"),
  Chunk282026 = require("./282026.js"),
  Chunk997590 = require("./997590.js"),
  Chunk324580 = require("./324580.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk516616 = require("./516616.js"),
  Chunk842503 = require("./842503.js");
let h = function(e) {
  let {
    loadId: t
  } = e, n = o.A.useField("categoryId"), h = (0, l.bG)([c.A], () => c.A.getCategoryName(n)), A = i.useCallback(() => {
    o.A.setState({
      categoryId: u.Iq
    }), s.A.loadCategoryResults({
      loadId: t,
      categoryId: u.Iq,
      query: o.A.getField("fetchedQuery"),
      languageCode: o.A.getField("languageCode")
    })
  }, [t]), g = n === u.Iq ? d.intl.string(d.t.Ivw1Is) : d.intl.formatToPlainString(d.t["+1WAFb"], {
    categoryName: h
  }), m = n === u.Iq ? d.intl.string(d.t.aXvEjd) : d.intl.format(d.t.XLioqn, {
    onClick: A
  });
  return (0, r.jsxs)("div", {
    className: p.kL,
    children: [(0, r.jsx)("img", {
      alt: "",
      src: f,
      className: p.Sl
    }), (0, r.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      className: p.wx,
      children: g
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: m
    })]
  })
}