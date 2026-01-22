/** Chunk was on 28636 **/
/** chunk id: 854788, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk412461 = require("./412461.js"),
  Chunk310419 = require("./310419.js"),
  Chunk656106 = require("./656106.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk101386 = require("./101386.js");

function p(e) {
  let {
    application: t,
    className: n
  } = e, p = a.useCallback(e => {
    (0, i.TR)(o.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
      category: e.name,
      category_id: e.id,
      current_page: s.ev.APPLICATION
    }), (0, c.JX)({
      categoryId: e.id
    })
  }, []);
  return null == t.categories || 0 === t.categories.length ? null : (0, l.jsxs)("div", {
    className: n,
    children: [(0, l.jsx)(r.Heading, {
      variant: "heading-sm/semibold",
      color: "text-strong",
      children: d.intl.string(d.t.s7iald)
    }), (0, l.jsx)("div", {
      className: u.L,
      children: t.categories.map(e => (0, l.jsx)(r.DUT, {
        className: u.c,
        onClick: () => p(e),
        children: (0, l.jsx)(r.Text, {
          variant: "text-sm/semibold",
          color: "redesign-button-tertiary-text",
          children: e.name
        })
      }, e.id))
    })]
  })
}