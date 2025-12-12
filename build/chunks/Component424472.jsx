/** Chunk was on 92504 **/
/** chunk id: 424472, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk881294 = require("./881294.js"),
  Chunk258971 = require("./258971.js"),
  Chunk133743 = require("./133743.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk596206 = require("./596206.js");

function p(e) {
  let {
    application: t,
    className: n
  } = e, p = r.useCallback(e => {
    (0, l.zZ)(c.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: s.m_.APPLICATION
    }), (0, o.pR)({
      categoryId: e.id
    })
  }, []);
  return null == t.categories || 0 === t.categories.length ? null : (0, a.jsxs)("div", {
    className: n,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-sm/semibold",
      color: "text-strong",
      children: d.intl.string(d.t.s7iald)
    }), (0, a.jsx)("div", {
      className: u.categories,
      children: t.categories.map(e => (0, a.jsx)(i.P3F, {
        className: u.category,
        onClick: () => p(e),
        children: (0, a.jsx)(i.Text, {
          variant: "text-sm/semibold",
          color: "redesign-button-tertiary-text",
          children: e.name
        })
      }, e.id))
    })]
  })
}