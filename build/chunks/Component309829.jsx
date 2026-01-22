/** Chunk was on 86142 **/
/** chunk id: 309829, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk17372 = require("./17372.js"),
  Chunk843376 = require("./843376.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk101865 = require("./101865.js");
let c = e => {
  let {
    showBackButton: t,
    onBack: n,
    renderFooter: c,
    onReopen: u
  } = e, d = (0, l.i)(s.tY.MEDIA_TAKEDOWN, u), h = (0, r.jsxs)(i.ButtonGroup, {
    fullWidth: true,
    children: [t && null != n && (0, r.jsx)(i.Button, {
      variant: "secondary",
      text: a.intl.string(a.t["13/7kX"]),
      onClick: n
    }), (0, r.jsx)(i.Button, {
      text: a.intl.string(a.t.D5Czbu),
      variant: "primary",
      onClick: d
    })]
  });
  return (0, r.jsxs)(i.BJc, {
    gap: 8,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      children: a.intl.string(a.t.jMSjZL)
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      className: o.D,
      children: a.intl.format(a.t.SenKQA, {})
    }), null == c ? true : c(h)]
  })
}