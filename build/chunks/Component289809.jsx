/** Chunk was on 54844 **/
/** chunk id: 289809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk454585 = require("./454585.js"),
  Chunk141199 = require("./141199.js");

function o(e) {
  let {
    element: {
      data: {
        header: t,
        body: n,
        is_localized: o
      }
    }
  } = e, c = i.useRef(a.Z.reactParserFor(a.Z.defaultRules));
  return o && (null != t || null != n) ? (0, r.jsxs)("div", {
    className: s.container,
    children: [null != t && (0, r.jsx)(l.Heading, {
      variant: "heading-sm/semibold",
      color: "header-secondary",
      className: s.header,
      children: t
    }), null != n && (0, r.jsx)(l.Text, {
      variant: "text-sm/normal",
      className: s.bodyText,
      children: c.current(n)
    })]
  }) : null
}