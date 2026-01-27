/** Chunk was on 60667 **/
/** chunk id: 578598, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => a
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk244242 = require("./244242.jsx");

function a(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: a,
    useSubtitle: o,
    useVariant: c,
    useDisabled: d,
    onClick: u
  } = t, [_, p] = i.useState(false), m = i.useCallback(() => {
    let e = u();
    e instanceof Promise && (p(true), e.finally(() => p(false)))
  }, [u]), g = a(), A = null == o ? true : o(), f = n(), h = null == c ? true : c(), b = null == d ? true : d();
  return (0, r.jsx)(s.L, {
    children: (0, r.jsx)(l.D0$, {
      label: g,
      description: A,
      disabled: b,
      layout: "horizontal",
      children: (0, r.jsx)(l.Button, {
        onClick: m,
        text: f,
        variant: h,
        disabled: b,
        loading: _
      })
    })
  })
}