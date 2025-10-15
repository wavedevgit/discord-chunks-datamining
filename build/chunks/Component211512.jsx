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
    useVariant: s,
    useDisabled: c,
    onClick: u
  } = t, d = i(), f = null == a ? true : a(), b = n(), m = null == s ? true : s(), v = null == c ? true : c();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(l.gNt, {
      label: d,
      description: f,
      disabled: v,
      layout: "horizontal",
      children: (0, r.jsx)(l.Button, {
        onClick: u,
        text: b,
        variant: m,
        disabled: v
      })
    })
  })
}