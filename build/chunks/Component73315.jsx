/** Chunk was on 22173 **/
/** chunk id: 73315, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk936141 = require("./936141.js"),
  Chunk470438 = require("./470438.js");
let c = e => {
  let {
    obscureReason: t,
    iconClassname: n
  } = e;
  switch (t) {
    case i.wk.EXPLICIT_CONTENT:
    case i.wk.GORE_CONTENT:
      return (0, r.jsx)(l.fFY, {
        className: s()(n, o.obscuredIcon),
        color: "white"
      });
    case i.wk.SPOILER:
      return (0, r.jsx)(l.tEF, {
        size: "md",
        color: "currentColor",
        className: n
      });
    default:
      return null
  }
}