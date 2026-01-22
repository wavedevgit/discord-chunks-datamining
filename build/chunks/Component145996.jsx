/** Chunk was on 58652 **/
/** chunk id: 145996, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk463259 = require("./463259.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk395618 = require("./395618.js");
let d = e => {
  let {
    widget: t,
    userId: n
  } = e, d = (0, r.bG)([s.default], () => s.default.getUser(n));
  return null == d ? null : (0, l.jsxs)("div", {
    className: c.k,
    children: [(0, l.jsx)(a.Heading, {
      className: c.w,
      variant: "heading-sm/semibold",
      children: o.intl.string(o.t.SpsnDY)
    }), (0, l.jsx)(i.u, {
      widget: t,
      user: d,
      disableInteraction: true
    })]
  })
}