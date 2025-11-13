/** Chunk was on 18729 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => a
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function a(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: a,
    useSubtitle: c,
    useVariant: s,
    useDisabled: u,
    onClick: d
  } = t, [f, b] = l.useState(false), p = l.useCallback(() => {
    let e = d();
    e instanceof Promise && (b(true), e.finally(() => b(false)))
  }, [d]), y = a(), j = null == c ? true : c(), m = n(), v = null == s ? true : s(), x = null == u ? true : u();
  return (0, r.jsx)(i.X, {
    children: (0, r.jsx)(o.gNt, {
      label: y,
      description: j,
      disabled: x,
      layout: "horizontal",
      children: (0, r.jsx)(o.Button, {
        onClick: p,
        text: m,
        variant: v,
        disabled: x,
        loading: f
      })
    })
  })
}