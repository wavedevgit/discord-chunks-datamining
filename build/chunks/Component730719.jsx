/** Chunk was on 59727 **/
/** chunk id: 730719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107461 = require("./107461.js");
let o = e => {
  let {
    errorMessage: t,
    onClose: n
  } = e;
  return null == t || "" === t ? null : (0, r.jsxs)("div", {
    className: l.errorContainer,
    children: [(0, r.jsx)(a.Mgn, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: l.errorIcon
    }), (0, r.jsx)(a.Text, {
      className: l.errorText,
      variant: "text-sm/normal",
      children: t
    }), (0, r.jsx)(a.P3F, {
      onClick: () => {
        n()
      },
      "aria-label": i.intl.string(i.t.WAI6xs),
      className: l.closeIcon
    })]
  })
}