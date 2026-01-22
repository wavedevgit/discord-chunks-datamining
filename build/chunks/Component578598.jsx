/** Chunk was on web.js **/
/** chunk id: 578598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  D: () => o
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk244242 = require("./244242.jsx");

function o(e) {
  let {
    node: t
  } = e, {
    useLabel: n,
    useTitle: o,
    useSubtitle: l,
    useVariant: c,
    useDisabled: u,
    onClick: d
  } = t, [f, p] = i.useState(false), _ = i.useCallback(() => {
    let e = d();
    e instanceof Promise && (p(true), e.finally(() => p(false)))
  }, [d]), h = o(), m = null == l ? true : l(), g = n(), E = null == c ? true : c(), b = null == u ? true : u();
  return (0, r.jsx)(s.L, {
    children: (0, r.jsx)(a.D0$, {
      label: h,
      description: m,
      disabled: b,
      layout: "horizontal",
      children: (0, r.jsx)(a.Button, {
        onClick: _,
        text: g,
        variant: E,
        disabled: b,
        loading: f
      })
    })
  })
}