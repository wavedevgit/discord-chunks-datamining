/** Chunk was on 75685 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js");

function o(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: o,
    useSubtitle: i,
    useVariant: a,
    useDisabled: s,
    onClick: c
  } = t, u = o(), d = null == i ? true : i(), f = n(), b = null == a ? true : a(), m = null == s ? true : s();
  return (0, r.jsx)(l.gNt, {
    label: u,
    description: d,
    disabled: m,
    children: (0, r.jsx)(l.Button, {
      onClick: c,
      text: f,
      variant: b,
      disabled: m
    })
  })
}