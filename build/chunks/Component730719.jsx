/** Chunk was on 1056 **/
/** chunk id: 730719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107461 = require("./107461.js");
let l = e => {
  let {
    errorMessage: t,
    onClose: n
  } = e;
  return null == t || "" === t ? null : (0, r.jsxs)("div", {
    className: o.errorContainer,
    children: [(0, r.jsx)(a.Mgn, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: o.errorIcon
    }), (0, r.jsx)(a.Text, {
      className: o.errorText,
      variant: "text-sm/normal",
      children: t
    }), (0, r.jsx)(a.P3F, {
      onClick: () => {
        n()
      },
      "aria-label": i.intl.string(i.t.WAI6xs),
      className: o.closeIcon
    })]
  })
}