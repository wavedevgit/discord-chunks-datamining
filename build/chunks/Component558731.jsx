/** Chunk was on web.js **/
/** chunk id: 558731, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => s
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550964 = require("./550964.jsx");

function s(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: s,
    useSubtitle: l,
    useVariant: c,
    useDisabled: u,
    onClick: d
  } = t, [f, p] = i.useState(false), _ = i.useCallback(() => {
    let e = d();
    e instanceof Promise && (p(true), e.finally(() => p(false)))
  }, [d]), m = s(), h = null == l ? true : l(), g = n(), E = null == c ? true : c(), b = null == u ? true : u();
  return (0, r.jsx)(a.X, {
    children: (0, r.jsx)(o.gNt, {
      label: m,
      description: h,
      disabled: b,
      layout: "horizontal",
      children: (0, r.jsx)(o.Button, {
        onClick: _,
        text: g,
        variant: E,
        disabled: b,
        loading: f
      })
    })
  })
}