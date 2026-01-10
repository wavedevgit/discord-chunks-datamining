/** Chunk was on 87646 **/
/** chunk id: 73315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk936141 = require("./936141.js"),
  Chunk440521 = require("./440521.js");
let c = e => {
  let {
    obscureReason: t,
    iconClassname: n
  } = e;
  switch (t) {
    case a.wk.EXPLICIT_CONTENT:
    case a.wk.GORE_CONTENT:
    case a.wk.SELF_HARM_CONTENT:
      return (0, i.jsx)(l.fFY, {
        className: r()(n, o.obscuredIcon),
        color: "white"
      });
    case a.wk.SPOILER:
      return (0, i.jsx)(l.tEF, {
        size: "md",
        color: "currentColor",
        className: n
      });
    default:
      return null
  }
}