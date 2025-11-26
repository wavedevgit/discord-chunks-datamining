/** Chunk was on 22173 **/
/** chunk id: 73315, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk936141 = require("./936141.js"),
  Chunk836956 = require("./836956.js");
let c = e => {
  let {
    obscureReason: n,
    iconClassname: t
  } = e;
  switch (n) {
    case i.wk.EXPLICIT_CONTENT:
    case i.wk.GORE_CONTENT:
    case i.wk.SELF_HARM_CONTENT:
      return (0, s.jsx)(r.fFY, {
        className: a()(t, o.obscuredIcon),
        color: "white"
      });
    case i.wk.SPOILER:
      return (0, s.jsx)(r.tEF, {
        size: "md",
        color: "currentColor",
        className: t
      });
    default:
      return null
  }
}