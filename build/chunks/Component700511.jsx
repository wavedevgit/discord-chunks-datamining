/** Chunk was on 27978 **/
/** chunk id: 700511, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk82554 = require("./82554.js"),
  Chunk432510 = require("./432510.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk597604 = require("./597604.js");
let c = e => {
  let {
    showBackButton: t,
    onBack: n,
    renderFooter: c,
    onReopen: u
  } = e, d = (0, a.l)(s.BM.MEDIA_TAKEDOWN, u), h = (0, r.jsxs)(i.ButtonGroup, {
    fullWidth: true,
    children: [t && null != n && (0, r.jsx)(i.Button, {
      variant: "secondary",
      text: l.intl.string(l.t["13/7kX"]),
      onClick: n
    }), (0, r.jsx)(i.Button, {
      text: l.intl.string(l.t.D5Czbu),
      variant: "primary",
      onClick: d
    })]
  });
  return (0, r.jsxs)(i.Kqy, {
    gap: 8,
    children: [(0, r.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      children: l.intl.string(l.t.jMSjZL)
    }), (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      className: o.tidaDescription,
      children: l.intl.format(l.t.SenKQA, {})
    }), null == c ? true : c(h)]
  })
}