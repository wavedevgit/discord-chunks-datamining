/** Chunk was on 54844 **/
/** chunk id: 730719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk570467 = require("./570467.js");
let s = e => {
  let {
    errorMessage: t,
    onClose: n
  } = e;
  return null == t || "" === t ? null : (0, r.jsxs)("div", {
    className: a.errorContainer,
    children: [(0, r.jsx)(l.Mgn, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: a.errorIcon
    }), (0, r.jsx)(l.Text, {
      className: a.errorText,
      variant: "text-sm/normal",
      children: t
    }), (0, r.jsx)(l.P3F, {
      onClick: () => {
        n()
      },
      "aria-label": i.intl.string(i.t.WAI6xs),
      className: a.closeIcon
    })]
  })
}