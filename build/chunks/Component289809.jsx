/** Chunk was on 59727 **/
/** chunk id: 289809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk196209 = require("./196209.js");

function s(e) {
  let {
    element: {
      data: {
        header: t,
        body: n,
        is_localized: s
      }
    }
  } = e, c = a.useRef(l.Z.reactParserFor(l.Z.defaultRules));
  return s && (null != t || null != n) ? (0, r.jsxs)("div", {
    className: o.container,
    children: [null != t && (0, r.jsx)(i.X6q, {
      variant: "heading-sm/semibold",
      color: "header-secondary",
      className: o.header,
      children: t
    }), null != n && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: o.bodyText,
      children: c.current(n)
    })]
  }) : null
}