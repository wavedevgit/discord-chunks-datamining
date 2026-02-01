/** Chunk was on 7602 **/
/** chunk id: 710948, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk338717 = require("./338717.js"),
  Chunk116806 = require("./116806.js");
let d = e => {
  let {
    obscureReason: t,
    iconClassname: s
  } = e;
  switch (t) {
    case a.Oc.EXPLICIT_CONTENT:
    case a.Oc.GORE_CONTENT:
    case a.Oc.SELF_HARM_CONTENT:
      return (0, i.jsx)(l.DAq, {
        className: r()(s, o.x),
        color: "white"
      });
    case a.Oc.SPOILER:
      return (0, i.jsx)(l.bMW, {
        size: "md",
        color: "currentColor",
        className: s
      });
    default:
      return null
  }
}