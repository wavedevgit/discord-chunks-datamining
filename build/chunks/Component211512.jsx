/** Chunk was on 75685 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function i(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: i,
    useSubtitle: a,
    useVariant: c,
    useDisabled: s,
    onClick: u
  } = t, d = i(), f = null == a ? true : a(), b = n(), p = null == c ? true : c(), y = null == s ? true : s();
  return (0, r.jsx)(l.X, {
    children: (0, r.jsx)(o.gNt, {
      label: d,
      description: f,
      disabled: y,
      layout: "horizontal",
      children: (0, r.jsx)(o.Button, {
        onClick: u,
        text: b,
        variant: p,
        disabled: y
      })
    })
  })
}