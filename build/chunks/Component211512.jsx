/** Chunk was on 46984 **/
/** chunk id: 211512, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => a
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = t, [f, b] = l.useState(false), y = l.useCallback(() => {
    let e = d();
    e instanceof Promise && (b(true), e.finally(() => b(false)))
  }, [d]), p = a(), v = null == c ? true : c(), j = n(), g = null == s ? true : s(), m = null == u ? true : u();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(i.gNt, {
      label: p,
      description: v,
      disabled: m,
      layout: "horizontal",
      children: (0, r.jsx)(i.Button, {
        onClick: y,
        text: j,
        variant: g,
        disabled: m,
        loading: f
      })
    })
  })
}