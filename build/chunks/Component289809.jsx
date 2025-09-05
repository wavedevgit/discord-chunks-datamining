/** Chunk was on 64003 **/
/** chunk id: 289809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk141199 = require("./141199.js");

function s(e) {
  let {
    element: {
      data: {
        header: t,
        body: n,
        is_localized: s
      }
    }
  } = e, c = i.useRef(l.Z.reactParserFor(l.Z.defaultRules));
  return s && (null != t || null != n) ? (0, r.jsxs)("div", {
    className: o.container,
    children: [null != t && (0, r.jsx)(a.X6q, {
      variant: "heading-sm/semibold",
      color: "header-secondary",
      className: o.header,
      children: t
    }), null != n && (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      className: o.bodyText,
      children: c.current(n)
    })]
  }) : null
}