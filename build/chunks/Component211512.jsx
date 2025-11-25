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
    useSubtitle: s,
    useVariant: c,
    useDisabled: u,
    onClick: d
  } = t, [f, p] = l.useState(false), b = l.useCallback(() => {
    let e = d();
    e instanceof Promise && (p(true), e.finally(() => p(false)))
  }, [d]), y = a(), g = null == s ? true : s(), v = n(), h = null == c ? true : c(), m = null == u ? true : u();
  return (0, r.jsx)(o.X, {
    children: (0, r.jsx)(i.gNt, {
      label: y,
      description: g,
      disabled: m,
      layout: "horizontal",
      children: (0, r.jsx)(i.Button, {
        onClick: b,
        text: v,
        variant: h,
        disabled: m,
        loading: f
      })
    })
  })
}