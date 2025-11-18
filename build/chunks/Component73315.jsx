/** Chunk was on 22173 **/
/** chunk id: 73315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk936141 = require("./936141.js"),
  Chunk818794 = require("./818794.js");
let c = e => {
  let {
    obscureReason: t,
    iconClassname: n
  } = e;
  switch (t) {
    case i.wk.EXPLICIT_CONTENT:
    case i.wk.GORE_CONTENT:
    case i.wk.SELF_HARM_CONTENT:
      return (0, a.jsx)(r.fFY, {
        className: s()(n, o.obscuredIcon),
        color: "white"
      });
    case i.wk.SPOILER:
      return (0, a.jsx)(r.tEF, {
        size: "md",
        color: "currentColor",
        className: n
      });
    default:
      return null
  }
}