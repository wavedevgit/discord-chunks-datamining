/** Chunk was on 85342 **/
/** chunk id: 81259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./314940.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk551556 = require("./551556.jsx"),
  Chunk991119 = require("./991119.js");
let d = () => (0, Chunk54381.jsx)(Chunk551556.Z, {
    width: 13,
    height: 13,
    backgroundColor: Chunk692547.Z.colors.TEXT_FEEDBACK_POSITIVE.css
  }),
  f = () => (0, Chunk54381.jsx)(Chunk481060.k$p, {
    size: "custom",
    width: 13,
    height: 13,
    color: Chunk692547.Z.colors.TEXT_FEEDBACK_CRITICAL.css
  }),
  m = () => (0, Chunk54381.jsx)(Chunk481060.k$p, {
    size: "custom",
    width: 13,
    height: 13,
    color: Chunk692547.Z.colors.TEXT_FEEDBACK_WARNING.css
  });

function g(e) {
  let t = (0, o.EQ)(e.type).with("info", () => (0, r.jsx)(m, {})).with("error", () => (0, r.jsx)(f, {})).with("success", () => (0, r.jsx)(d, {})).otherwise(() => null);
  return (0, r.jsxs)(r.Fragment, {
    children: [t, (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      className: a()(u.formMessage, {
        [u.formMessageNegative]: "error" === e.type,
        [u.formMessagePositive]: "success" === e.type
      }),
      children: e.children
    })]
  })
}