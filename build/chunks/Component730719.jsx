/** Chunk was on 54844 **/
/** chunk id: 730719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk106924 = require("./106924.js");
let s = e => {
  let {
    errorMessage: t,
    onClose: n
  } = e;
  return null == t || "" === t ? null : (0, r.jsxs)("div", {
    className: a.errorContainer,
    children: [(0, r.jsx)(i.Mgn, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: a.errorIcon
    }), (0, r.jsx)(i.Text, {
      className: a.errorText,
      variant: "text-sm/normal",
      children: t
    }), (0, r.jsx)(i.P3F, {
      onClick: () => {
        n()
      },
      "aria-label": l.intl.string(l.t.WAI6xu),
      className: a.closeIcon
    })]
  })
}