/** Chunk was on 26475 **/
/** chunk id: 289809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, c = a.useRef(o.Z.reactParserFor(o.Z.defaultRules));
  return s && (null != t || null != n) ? (0, r.jsxs)("div", {
    className: l.container,
    children: [null != t && (0, r.jsx)(i.X6q, {
      variant: "heading-sm/semibold",
      color: "header-secondary",
      className: l.header,
      children: t
    }), null != n && (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      className: l.bodyText,
      children: c.current(n)
    })]
  }) : null
}