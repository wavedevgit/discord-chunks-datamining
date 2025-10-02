/** Chunk was on web.js **/
/** chunk id: 947707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk249996 = require("./249996.jsx"),
  Chunk467887 = require("./467887.js");

function s(e) {
  let {
    title: t,
    value: n,
    onChange: s,
    options: l,
    isDisabled: c
  } = e;
  return (0, r.jsxs)("div", {
    className: o.selectItemRow,
    children: [(0, r.jsx)(i.Text, {
      variant: "text-md/medium",
      color: c ? "text-muted" : "text-primary",
      children: t
    }), (0, r.jsx)(i.q4e, {
      variant: "text-only",
      className: o.select,
      options: l,
      value: n,
      onChange: e => s(e),
      renderOptionValue: e => {
        let [t] = e;
        return (0, r.jsx)(a.Z, {
          option: t
        })
      },
      renderOptionLabel: e => (0, r.jsx)(a.Z, {
        option: e
      }),
      isDisabled: c
    })]
  })
}