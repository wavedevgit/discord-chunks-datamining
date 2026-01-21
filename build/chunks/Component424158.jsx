/** Chunk was on web.js **/
/** chunk id: 424158, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk911969 = require("./911969.js"),
  Chunk970184 = require("./970184.jsx"),
  Chunk609275 = require("./609275.js");

function l(e) {
  let {
    label: t,
    description: n,
    component: l,
    renderComponent: c
  } = e, u = (0, o.h4)(l);
  return l.type === a.re.CHECKBOX ? c(l, "label-child") : (0, r.jsxs)(i.xJW, {
    title: t,
    required: l.required,
    error: u,
    children: [null != n && (0, r.jsx)(i.R94, {
      type: i.geA.DESCRIPTION,
      className: s.description,
      children: n
    }), c(l, "label-child")]
  })
}