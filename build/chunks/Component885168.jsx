/** Chunk was on 54160 **/
/** chunk id: 885168, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./801541.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk889137 = require("./889137.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk820193 = require("./820193.jsx"),
  Chunk299043 = require("./299043.js");
let d = () => (0, n.jsx)(c.A, {
    width: 13,
    height: 13,
    backgroundColor: o.A.colors.TEXT_FEEDBACK_POSITIVE.css
  }),
  m = () => (0, n.jsx)(l.aXh, {
    size: "custom",
    width: 13,
    height: 13,
    color: o.A.colors.TEXT_FEEDBACK_CRITICAL.css
  }),
  g = () => (0, n.jsx)(l.aXh, {
    size: "custom",
    width: 13,
    height: 13,
    color: o.A.colors.TEXT_FEEDBACK_WARNING.css
  });

function f(e) {
  let t = (0, s.YW)(e.type).with("info", () => (0, n.jsx)(g, {})).with("error", () => (0, n.jsx)(m, {})).with("success", () => (0, n.jsx)(d, {})).otherwise(() => null);
  return (0, n.jsxs)(n.Fragment, {
    children: [t, (0, n.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: a()(u.u1, {
        [u.JK]: "error" === e.type,
        [u.jn]: "success" === e.type
      }),
      children: e.children
    })]
  })
}