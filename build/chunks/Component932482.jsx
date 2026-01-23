/** Chunk was on 58652 **/
/** chunk id: 932482, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk645720 = require("./645720.js");
let s = e => {
  let {
    errorMessage: t,
    onClose: n
  } = e;
  return null == t || "" === t ? null : (0, l.jsxs)("div", {
    className: a.Un,
    children: [(0, l.jsx)(r.EpV, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: a.ik
    }), (0, l.jsx)(r.Text, {
      className: a.kc,
      variant: "text-sm/normal",
      children: t
    }), (0, l.jsx)(r.DUT, {
      onClick: () => {
        n()
      },
      "aria-label": i.intl.string(i.t.WAI6xu),
      className: a.ut
    })]
  })
}