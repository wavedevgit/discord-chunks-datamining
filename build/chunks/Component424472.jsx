/** Chunk was on 69844 **/
/** chunk id: 424472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881294 = require("./881294.js"),
  Chunk258971 = require("./258971.js"),
  Chunk133743 = require("./133743.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk161562 = require("./161562.js");

function p(e) {
  let {
    application: t,
    className: n
  } = e, p = a.useCallback(e => {
    (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: s.m_.APPLICATION
    }), (0, o.pR)({
      categoryId: e.id
    })
  }, []);
  return null == t.categories || 0 === t.categories.length ? null : (0, r.jsxs)("div", {
    className: n,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-sm/semibold",
      color: "header-primary",
      children: d.intl.string(d.t.s7iald)
    }), (0, r.jsx)("div", {
      className: u.categories,
      children: t.categories.map(e => (0, r.jsx)(i.P3F, {
        className: u.category,
        onClick: () => p(e),
        children: (0, r.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "redesign-button-tertiary-text",
          children: e.name
        })
      }, e.id))
    })]
  })
}